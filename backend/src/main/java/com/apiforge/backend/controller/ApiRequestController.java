package com.apiforge.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiforge.backend.entity.ApiRequest;
import com.apiforge.backend.entity.Collection;
import com.apiforge.backend.repository.CollectionRepository;
import com.apiforge.backend.service.ApiExecutionResponse;
import com.apiforge.backend.service.ApiExecutionService;
import com.apiforge.backend.service.ApiRequestService;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "http://localhost:5173")
public class ApiRequestController {

    private final ApiRequestService apiRequestService;
    private final CollectionRepository collectionRepository;
    private final ApiExecutionService apiExecutionService;

    public ApiRequestController(
            ApiRequestService apiRequestService,
            CollectionRepository collectionRepository,
            ApiExecutionService apiExecutionService
    ) {
        this.apiRequestService = apiRequestService;
        this.collectionRepository = collectionRepository;
        this.apiExecutionService = apiExecutionService;
    }

    // Create a new API request inside a collection
    @PostMapping("/{collectionId}")
    public ApiRequest createRequest(
            @PathVariable Long collectionId,
            @RequestBody ApiRequest request
    ) {

        Collection collection =
                collectionRepository.findById(collectionId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Collection not found: "
                                                + collectionId
                                ));

        request.setCollection(collection);

        return apiRequestService.saveRequest(request);
    }

    // Get all API requests belonging to a collection
    @GetMapping("/collection/{collectionId}")
    public List<ApiRequest> getRequests(
            @PathVariable Long collectionId
    ) {

        Collection collection =
                collectionRepository.findById(collectionId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Collection not found: "
                                                + collectionId
                                ));

        return apiRequestService.getRequestsByCollection(
                collection
        );
    }

    // Get one API request by ID
    @GetMapping("/{id}")
    public ApiRequest getRequestById(
            @PathVariable Long id
    ) {

        return apiRequestService.getRequestById(id);
    }

    // Update an existing API request
    @PutMapping("/{id}")
    public ApiRequest updateRequest(
            @PathVariable Long id,
            @RequestBody ApiRequest updatedRequest
    ) {

        return apiRequestService.updateRequest(
                id,
                updatedRequest
        );
    }

    // Execute an API request
    @PostMapping("/{id}/execute")
    public ApiExecutionResponse executeRequest(
            @PathVariable Long id
    ) {

        ApiRequest apiRequest =
                apiRequestService.getRequestById(id);

        return apiExecutionService.execute(
                apiRequest
        );
    }

    // Delete an API request
    @DeleteMapping("/{id}")
    public void deleteRequest(
            @PathVariable Long id
    ) {

        apiRequestService.deleteRequest(id);
    }
}