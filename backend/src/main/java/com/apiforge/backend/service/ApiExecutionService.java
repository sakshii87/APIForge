// package com.apiforge.backend.service;

// import java.net.URI;
// import java.net.http.HttpClient;
// import java.net.http.HttpRequest;
// import java.net.http.HttpResponse;
// import java.util.HashMap;
// import java.util.Map;

// import org.springframework.stereotype.Service;

// import com.apiforge.backend.entity.ApiExecution;
// import com.apiforge.backend.entity.ApiRequest;
// import com.apiforge.backend.repository.ApiExecutionRepository;
// import com.fasterxml.jackson.databind.ObjectMapper;

// @Service
// public class ApiExecutionService {

//     private final HttpClient httpClient;
//     private final ApiExecutionRepository apiExecutionRepository;
//     private final ObjectMapper objectMapper;

//     public ApiExecutionService(
//             ApiExecutionRepository apiExecutionRepository,
//             ObjectMapper objectMapper
//     ) {

//         this.apiExecutionRepository =
//                 apiExecutionRepository;

//         this.objectMapper =
//                 objectMapper;

//         this.httpClient = HttpClient.newBuilder()
//                 .followRedirects(
//                         HttpClient.Redirect.NORMAL
//                 )
//                 .build();
//     }

//     public ApiExecutionResponse execute(
//             ApiRequest apiRequest
//     ) {

//         try {

//             String method =
//                     apiRequest.getMethod().toUpperCase();

//             String url =
//                     apiRequest.getUrl();

//             String requestBody =
//                     apiRequest.getRequestBody();

//             if (url == null || url.isBlank()) {
//                 throw new RuntimeException(
//                         "Request URL cannot be empty"
//                 );
//             }

//             HttpRequest.Builder requestBuilder =
//                     HttpRequest.newBuilder()
//                             .uri(URI.create(url));

//             // Add headers
//             addHeaders(
//                     requestBuilder,
//                     apiRequest.getHeaders()
//             );

//             // Configure HTTP method
//             switch (method) {

//                 case "GET":

//                     requestBuilder.GET();

//                     break;

//                 case "POST":

//                     requestBuilder.POST(
//                             createBodyPublisher(requestBody)
//                     );

//                     break;

//                 case "PUT":

//                     requestBuilder.PUT(
//                             createBodyPublisher(requestBody)
//                     );

//                     break;

//                 case "PATCH":

//                     requestBuilder.method(
//                             "PATCH",
//                             createBodyPublisher(requestBody)
//                     );

//                     break;

//                 case "DELETE":

//                     if (requestBody != null
//                             && !requestBody.isBlank()) {

//                         requestBuilder.method(
//                                 "DELETE",
//                                 createBodyPublisher(requestBody)
//                         );

//                     } else {

//                         requestBuilder.DELETE();
//                     }

//                     break;

//                 default:

//                     throw new RuntimeException(
//                             "Unsupported HTTP method: "
//                                     + method
//                     );
//             }

//             HttpRequest httpRequest =
//                     requestBuilder.build();

//             long startTime =
//                     System.currentTimeMillis();

//             HttpResponse<String> response =
//                     httpClient.send(
//                             httpRequest,
//                             HttpResponse.BodyHandlers.ofString()
//                     );

//             long responseTime =
//                     System.currentTimeMillis()
//                             - startTime;

//             Map<String, String> responseHeaders =
//                     new HashMap<>();

//             response.headers()
//                     .map()
//                     .forEach((key, values) -> {

//                         responseHeaders.put(
//                                 key,
//                                 String.join(
//                                         ", ",
//                                         values
//                                 )
//                         );
//                     });

//             // Create execution history record
//             ApiExecution execution =
//                     new ApiExecution();

//             execution.setRequest(apiRequest);
//             execution.setMethod(method);
//             execution.setUrl(url);
//             execution.setStatusCode(response.statusCode());
//             execution.setResponseTime(responseTime);
//             execution.setResponseBody(response.body());

//             String responseHeadersJson =
//                     objectMapper.writeValueAsString(
//                             responseHeaders
//                     );

//             execution.setResponseHeaders(
//                     responseHeadersJson
//             );

//             // Save execution history
//             apiExecutionRepository.save(execution);

//             // Return response to frontend
//             return new ApiExecutionResponse(
//                     response.statusCode(),
//                     responseHeaders,
//                     response.body(),
//                     responseTime
//             );

//         } catch (Exception e) {

//             throw new RuntimeException(
//                     "API execution failed: "
//                             + e.getMessage(),
//                     e
//             );
//         }
//     }

//     private void addHeaders(
//             HttpRequest.Builder requestBuilder,
//             String headers
//     ) {

//         if (headers == null
//                 || headers.isBlank()
//                 || headers.equals("{}")) {

//             return;
//         }

//         try {

//             String cleanedHeaders =
//                     headers.trim();

//             if (cleanedHeaders.startsWith("{")
//                     && cleanedHeaders.endsWith("}")) {

//                 cleanedHeaders =
//                         cleanedHeaders.substring(
//                                 1,
//                                 cleanedHeaders.length() - 1
//                         );

//                 if (cleanedHeaders.isBlank()) {
//                     return;
//                 }

//                 String[] headerPairs =
//                         cleanedHeaders.split(
//                                 ",(?=\\s*\")"
//                         );

//                 for (String pair : headerPairs) {

//                     String[] keyValue =
//                             pair.split(
//                                     ":(?=\\s*\")",
//                                     2
//                             );

//                     if (keyValue.length == 2) {

//                         String key =
//                                 keyValue[0]
//                                         .trim()
//                                         .replace("\"", "");

//                         String value =
//                                 keyValue[1]
//                                         .trim()
//                                         .replace("\"", "");

//                         requestBuilder.header(
//                                 key,
//                                 value
//                         );
//                     }
//                 }
//             }

//         } catch (Exception e) {

//             throw new RuntimeException(
//                     "Invalid headers format. "
//                             + "Use JSON format.",
//                     e
//             );
//         }
//     }

//     private HttpRequest.BodyPublisher
//     createBodyPublisher(String requestBody) {

//         if (requestBody == null
//                 || requestBody.isBlank()) {

//             return HttpRequest.BodyPublishers.noBody();
//         }

//         return HttpRequest.BodyPublishers.ofString(
//                 requestBody
//         );
//     }
// }


package com.apiforge.backend.service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.apiforge.backend.entity.ApiExecution;
import com.apiforge.backend.entity.ApiRequest;
import com.apiforge.backend.repository.ApiExecutionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ApiExecutionService {

    private final HttpClient httpClient;
    private final ApiExecutionRepository apiExecutionRepository;
    private final ObjectMapper objectMapper;

    public ApiExecutionService(
            ApiExecutionRepository apiExecutionRepository,
            ObjectMapper objectMapper
    ) {

        this.apiExecutionRepository =
                apiExecutionRepository;

        this.objectMapper =
                objectMapper;

        this.httpClient = HttpClient.newBuilder()
                .followRedirects(
                        HttpClient.Redirect.NORMAL
                )
                .build();
    }

    public ApiExecutionResponse execute(
            ApiRequest apiRequest
    ) {

        try {

            String method =
                    apiRequest.getMethod().toUpperCase();

            String url =
                    apiRequest.getUrl();

            String requestBody =
                    apiRequest.getRequestBody();

            if (url == null || url.isBlank()) {
                throw new RuntimeException(
                        "Request URL cannot be empty"
                );
            }

            HttpRequest.Builder requestBuilder =
                    HttpRequest.newBuilder()
                            .uri(URI.create(url));

            // Add normal/custom headers
            addHeaders(
                    requestBuilder,
                    apiRequest.getHeaders()
            );

            // Add Authorization header
            addAuthorization(
                    requestBuilder,
                    apiRequest
            );

            // Configure HTTP method
            switch (method) {

                case "GET":

                    requestBuilder.GET();

                    break;

                case "POST":

                    requestBuilder.POST(
                            createBodyPublisher(requestBody)
                    );

                    break;

                case "PUT":

                    requestBuilder.PUT(
                            createBodyPublisher(requestBody)
                    );

                    break;

                case "PATCH":

                    requestBuilder.method(
                            "PATCH",
                            createBodyPublisher(requestBody)
                    );

                    break;

                case "DELETE":

                    if (requestBody != null
                            && !requestBody.isBlank()) {

                        requestBuilder.method(
                                "DELETE",
                                createBodyPublisher(requestBody)
                        );

                    } else {

                        requestBuilder.DELETE();
                    }

                    break;

                default:

                    throw new RuntimeException(
                            "Unsupported HTTP method: "
                                    + method
                    );
            }

            HttpRequest httpRequest =
                    requestBuilder.build();

            long startTime =
                    System.currentTimeMillis();

            HttpResponse<String> response =
                    httpClient.send(
                            httpRequest,
                            HttpResponse.BodyHandlers.ofString()
                    );

            long responseTime =
                    System.currentTimeMillis()
                            - startTime;

            Map<String, String> responseHeaders =
                    new HashMap<>();

            response.headers()
                    .map()
                    .forEach((key, values) -> {

                        responseHeaders.put(
                                key,
                                String.join(
                                        ", ",
                                        values
                                )
                        );
                    });

            // Create execution history record
            ApiExecution execution =
                    new ApiExecution();

            execution.setRequest(apiRequest);
            execution.setMethod(method);
            execution.setUrl(url);
            execution.setStatusCode(response.statusCode());
            execution.setResponseTime(responseTime);
            execution.setResponseBody(response.body());

            String responseHeadersJson =
                    objectMapper.writeValueAsString(
                            responseHeaders
                    );

            execution.setResponseHeaders(
                    responseHeadersJson
            );

            // Save execution history
            apiExecutionRepository.save(execution);

            // Return response to frontend
            return new ApiExecutionResponse(
                    response.statusCode(),
                    responseHeaders,
                    response.body(),
                    responseTime
            );

        } catch (Exception e) {

            throw new RuntimeException(
                    "API execution failed: "
                            + e.getMessage(),
                    e
            );
        }
    }

    private void addHeaders(
            HttpRequest.Builder requestBuilder,
            String headers
    ) {

        if (headers == null
                || headers.isBlank()
                || headers.equals("{}")) {

            return;
        }

        try {

            String cleanedHeaders =
                    headers.trim();

            if (cleanedHeaders.startsWith("{")
                    && cleanedHeaders.endsWith("}")) {

                cleanedHeaders =
                        cleanedHeaders.substring(
                                1,
                                cleanedHeaders.length() - 1
                        );

                if (cleanedHeaders.isBlank()) {
                    return;
                }

                String[] headerPairs =
                        cleanedHeaders.split(
                                ",(?=\\s*\")"
                        );

                for (String pair : headerPairs) {

                    String[] keyValue =
                            pair.split(
                                    ":(?=\\s*\")",
                                    2
                            );

                    if (keyValue.length == 2) {

                        String key =
                                keyValue[0]
                                        .trim()
                                        .replace("\"", "");

                        String value =
                                keyValue[1]
                                        .trim()
                                        .replace("\"", "");

                        requestBuilder.header(
                                key,
                                value
                        );
                    }
                }
            }

        } catch (Exception e) {

            throw new RuntimeException(
                    "Invalid headers format. "
                            + "Use JSON format.",
                    e
            );
        }
    }

    private void addAuthorization(
            HttpRequest.Builder requestBuilder,
            ApiRequest apiRequest
    ) {

        String authorizationType =
                apiRequest.getAuthorizationType();

        String authorizationToken =
                apiRequest.getAuthorizationToken();

        if (authorizationType == null
                || authorizationType.isBlank()
                || authorizationType.equalsIgnoreCase("NO_AUTH")) {

            return;
        }

        if (authorizationType.equalsIgnoreCase("BEARER_TOKEN")) {

            if (authorizationToken == null
                    || authorizationToken.isBlank()) {

                throw new RuntimeException(
                        "Bearer token cannot be empty"
                );
            }

            requestBuilder.setHeader(
                    "Authorization",
                    "Bearer " + authorizationToken.trim()
            );

            return;
        }

        throw new RuntimeException(
                "Unsupported authorization type: "
                        + authorizationType
        );
    }

    private HttpRequest.BodyPublisher
    createBodyPublisher(String requestBody) {

        if (requestBody == null
                || requestBody.isBlank()) {

            return HttpRequest.BodyPublishers.noBody();
        }

        return HttpRequest.BodyPublishers.ofString(
                requestBody
        );
    }
}