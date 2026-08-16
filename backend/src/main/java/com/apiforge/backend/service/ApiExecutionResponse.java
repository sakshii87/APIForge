package com.apiforge.backend.service;

import java.util.Map;

public class ApiExecutionResponse {

    private int statusCode;
    private Map<String, String> responseHeaders;
    private String responseBody;
    private long responseTime;

    public ApiExecutionResponse() {
    }

    public ApiExecutionResponse(
            int statusCode,
            Map<String, String> responseHeaders,
            String responseBody,
            long responseTime
    ) {
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.responseTime = responseTime;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public Map<String, String> getResponseHeaders() {
        return responseHeaders;
    }

    public void setResponseHeaders(
            Map<String, String> responseHeaders
    ) {
        this.responseHeaders = responseHeaders;
    }

    public String getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(String responseBody) {
        this.responseBody = responseBody;
    }

    public long getResponseTime() {
        return responseTime;
    }

    public void setResponseTime(long responseTime) {
        this.responseTime = responseTime;
    }
}