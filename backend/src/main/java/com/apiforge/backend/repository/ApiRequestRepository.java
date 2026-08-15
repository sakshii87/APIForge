package com.apiforge.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiforge.backend.entity.ApiRequest;
import com.apiforge.backend.entity.Collection;

public interface ApiRequestRepository
        extends JpaRepository<ApiRequest, Long> {

    List<ApiRequest> findByCollection(
            Collection collection
    );
}