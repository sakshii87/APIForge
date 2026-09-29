// package com.apiforge.backend.controller;

// import java.util.List;

// import org.springframework.data.domain.Sort;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.apiforge.backend.dto.ApiExecutionDTO;
// import com.apiforge.backend.entity.ApiExecution;
// import com.apiforge.backend.entity.ApiRequest;
// import com.apiforge.backend.repository.ApiExecutionRepository;
// import com.apiforge.backend.service.ApiRequestService;

// @RestController
// @RequestMapping("/api/executions")
// @CrossOrigin(origins = "http://localhost:5173")
// public class ApiExecutionController {

//     private final ApiExecutionRepository apiExecutionRepository;
//     private final ApiRequestService apiRequestService;

//     public ApiExecutionController(
//             ApiExecutionRepository apiExecutionRepository,
//             ApiRequestService apiRequestService
//     ) {
//         this.apiExecutionRepository =
//                 apiExecutionRepository;

//         this.apiRequestService =
//                 apiRequestService;
//     }

//     // Get all API execution history
//     @GetMapping
//     public List<ApiExecutionDTO> getAllExecutions() {

//         List<ApiExecution> executions =
//                 apiExecutionRepository.findAll();

//         return executions.stream()
//                 .sorted((a, b) ->
//                         b.getExecutedAt().compareTo(a.getExecutedAt()))
//                 .map(execution ->
//                         new ApiExecutionDTO(
//                                 execution.getId(),
//                                 execution.getMethod(),
//                                 execution.getUrl(),
//                                 execution.getStatusCode(),
//                                 execution.getResponseTime(),
//                                 execution.getResponseHeaders(),
//                                 execution.getResponseBody(),
//                                 execution.getExecutedAt()
//                         )
//                 )
//                 .toList();
//     }

//     // Get execution history for one specific API request
//     @GetMapping("/request/{requestId}")
//     public List<ApiExecutionDTO> getExecutionsByRequest(
//             @PathVariable Long requestId
//     ) {

//         ApiRequest request =
//                 apiRequestService.getRequestById(requestId);

//         List<ApiExecution> executions =
//                 apiExecutionRepository
//                         .findByRequestOrderByExecutedAtDesc(request);

//         return executions.stream()
//                 .map(execution ->
//                         new ApiExecutionDTO(
//                                 execution.getId(),
//                                 execution.getMethod(),
//                                 execution.getUrl(),
//                                 execution.getStatusCode(),
//                                 execution.getResponseTime(),
//                                 execution.getResponseHeaders(),
//                                 execution.getResponseBody(),
//                                 execution.getExecutedAt()
//                         )
//                 )
//                 .toList();
//     }
// }



package com.apiforge.backend.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiforge.backend.dto.ApiExecutionDTO;
import com.apiforge.backend.entity.ApiExecution;
import com.apiforge.backend.entity.ApiRequest;
import com.apiforge.backend.entity.User;
import com.apiforge.backend.repository.ApiExecutionRepository;
import com.apiforge.backend.repository.UserRepository;
import com.apiforge.backend.service.ApiRequestService;

@RestController
@RequestMapping("/api/executions")
@CrossOrigin(origins = "http://localhost:5173")
public class ApiExecutionController {

    private final ApiExecutionRepository apiExecutionRepository;
    private final ApiRequestService apiRequestService;
    private final UserRepository userRepository;

    public ApiExecutionController(
            ApiExecutionRepository apiExecutionRepository,
            ApiRequestService apiRequestService,
            UserRepository userRepository
    ) {
        this.apiExecutionRepository = apiExecutionRepository;
        this.apiRequestService = apiRequestService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<ApiExecutionDTO> getAllExecutions(
            Authentication authentication
    ) {

        String email = authentication.getName();

        User currentUser = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Authenticated user not found"));

        List<ApiExecution> executions =
                apiExecutionRepository
                        .findByRequestCollectionUserOrderByExecutedAtDesc(
                                currentUser
                        );

        return executions.stream()
                .map(execution ->
                        new ApiExecutionDTO(
                                execution.getId(),
                                execution.getMethod(),
                                execution.getUrl(),
                                execution.getStatusCode(),
                                execution.getResponseTime(),
                                execution.getResponseHeaders(),
                                execution.getResponseBody(),
                                execution.getExecutedAt()
                        )
                )
                .toList();
    }

    @GetMapping("/request/{requestId}")
    public List<ApiExecutionDTO> getExecutionsByRequest(
            @PathVariable Long requestId,
            Authentication authentication
    ) {

        String email = authentication.getName();

        User currentUser = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Authenticated user not found"));

        ApiRequest request =
                apiRequestService.getRequestById(requestId);

        if (request.getCollection() == null ||
                request.getCollection().getUser() == null ||
                !request.getCollection().getUser().getId()
                        .equals(currentUser.getId())) {

            throw new RuntimeException(
                    "You are not authorized to view this request history"
            );
        }

        List<ApiExecution> executions =
                apiExecutionRepository
                        .findByRequestOrderByExecutedAtDesc(request);

        return executions.stream()
                .map(execution ->
                        new ApiExecutionDTO(
                                execution.getId(),
                                execution.getMethod(),
                                execution.getUrl(),
                                execution.getStatusCode(),
                                execution.getResponseTime(),
                                execution.getResponseHeaders(),
                                execution.getResponseBody(),
                                execution.getExecutedAt()
                        )
                )
                .toList();
    }
}