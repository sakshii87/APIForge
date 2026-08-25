package com.apiforge.backend.dto;

import java.time.LocalDateTime;

public class ApiExecutionDTO {

    private Long id;
    private String method;
    private String url;
    private int statusCode;
    private long responseTime;
    private String responseHeaders;
    private String responseBody;
    private LocalDateTime executedAt;

    public ApiExecutionDTO() {
    }

    public ApiExecutionDTO(
            Long id,
            String method,
            String url,
            int statusCode,
            long responseTime,
            String responseHeaders,
            String responseBody,
            LocalDateTime executedAt
    ) {
        this.id = id;
        this.method = method;
        this.url = url;
        this.statusCode = statusCode;
        this.responseTime = responseTime;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.executedAt = executedAt;
    }

    public Long getId() {
        return id;
    }

    public String getMethod() {
        return method;
    }

    public String getUrl() {
        return url;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public long getResponseTime() {
        return responseTime;
    }

    public String getResponseHeaders() {
        return responseHeaders;
    }

    public String getResponseBody() {
        return responseBody;
    }

    public LocalDateTime getExecutedAt() {
        return executedAt;
    }
}