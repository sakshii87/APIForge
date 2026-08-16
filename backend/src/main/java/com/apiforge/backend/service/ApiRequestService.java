package com.apiforge.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.apiforge.backend.entity.ApiRequest;
import com.apiforge.backend.entity.Collection;
import com.apiforge.backend.repository.ApiRequestRepository;

@Service
public class ApiRequestService {

    private final ApiRequestRepository apiRequestRepository;

    public ApiRequestService(
            ApiRequestRepository apiRequestRepository
    ) {
        this.apiRequestRepository = apiRequestRepository;
    }

    public ApiRequest saveRequest(
            ApiRequest request
    ) {
        return apiRequestRepository.save(request);
    }

    public List<ApiRequest> getRequestsByCollection(
            Collection collection
    ) {
        return apiRequestRepository.findByCollection(
                collection
        );
    }

    // Get one API request by its ID
    public ApiRequest getRequestById(Long id) {

        return apiRequestRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Request not found: " + id
                        )
                );
    }

    // Update an existing API request
    public ApiRequest updateRequest(
            Long id,
            ApiRequest updatedRequest
    ) {

        ApiRequest existingRequest =
                apiRequestRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Request not found: " + id
                                )
                        );

        existingRequest.setName(
                updatedRequest.getName()
        );

        existingRequest.setMethod(
                updatedRequest.getMethod()
        );

        existingRequest.setUrl(
                updatedRequest.getUrl()
        );

        existingRequest.setHeaders(
                updatedRequest.getHeaders()
        );

        existingRequest.setRequestBody(
                updatedRequest.getRequestBody()
        );

        return apiRequestRepository.save(
                existingRequest
        );
    }

    public void deleteRequest(Long id) {
        apiRequestRepository.deleteById(id);
    }
}