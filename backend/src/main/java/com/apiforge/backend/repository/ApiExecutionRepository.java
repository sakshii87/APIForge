package com.apiforge.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiforge.backend.entity.ApiExecution;
import com.apiforge.backend.entity.ApiRequest;

public interface ApiExecutionRepository
        extends JpaRepository<ApiExecution, Long> {

    List<ApiExecution> findByRequestOrderByExecutedAtDesc(
            ApiRequest request
    );
}