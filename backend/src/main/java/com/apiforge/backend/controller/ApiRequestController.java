package com.apiforge.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiforge.backend.entity.ApiRequest;
import com.apiforge.backend.entity.Collection;
import com.apiforge.backend.repository.CollectionRepository;
import com.apiforge.backend.service.ApiRequestService;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "http://localhost:5173")
public class ApiRequestController {

    private final ApiRequestService apiRequestService;
    private final CollectionRepository collectionRepository;

    public ApiRequestController(
            ApiRequestService apiRequestService,
            CollectionRepository collectionRepository
    ) {
        this.apiRequestService = apiRequestService;
        this.collectionRepository = collectionRepository;
    }

    @PostMapping("/{collectionId}")
    public ApiRequest createRequest(
            @PathVariable Long collectionId,
            @RequestBody ApiRequest request
    ) {

        Collection collection =
            collectionRepository.findById(collectionId)
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "Collection not found: " + collectionId
                            ));

        request.setCollection(collection);

        return apiRequestService.saveRequest(request);
    }

    @GetMapping("/{collectionId}")
    public List<ApiRequest> getRequests(
            @PathVariable Long collectionId
    ) {

        Collection collection =
        collectionRepository.findById(collectionId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Collection not found: " + collectionId
                        ));

        return apiRequestService.getRequestsByCollection(
                collection
        );
    }
    @DeleteMapping("/{id}")
        public void deleteRequest(
                @PathVariable Long id
        ) {
        apiRequestService.deleteRequest(id);
    }
}