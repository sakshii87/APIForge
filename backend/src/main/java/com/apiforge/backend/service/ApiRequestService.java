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

    public void deleteRequest(Long id) {
        apiRequestRepository.deleteById(id);
    }
}