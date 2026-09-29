// package com.apiforge.backend.entity;

// import jakarta.persistence.*;
// import java.time.LocalDateTime;
// import com.fasterxml.jackson.annotation.JsonIgnore;

// @Entity
// @Table(name = "api_requests")
// public class ApiRequest {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String name;

//     private String method;

//     private String url;

//     @Column(length = 5000)
//     private String headers;

//     @Lob
//     private String requestBody;

//     @Lob
//     private String responseExample;
//     private LocalDateTime createdAt;

//     private LocalDateTime updatedAt;

//     @ManyToOne
//     @JoinColumn(name = "collection_id")
//     @JsonIgnore
//     private Collection collection;
    
//     @PrePersist
//     public void onCreate() {
//         createdAt = LocalDateTime.now();
//         updatedAt = LocalDateTime.now();
//     }

//     @PreUpdate
//     public void onUpdate() {
//         updatedAt = LocalDateTime.now();
//     }

//     // Generate getters and setters
//     public Long getId() {
//     return id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getMethod() {
//         return method;
//     }

//     public void setMethod(String method) {
//         this.method = method;
//     }

//     public String getUrl() {
//         return url;
//     }

//     public void setUrl(String url) {
//         this.url = url;
//     }

//     public String getHeaders() {
//         return headers;
//     }

//     public void setHeaders(String headers) {
//         this.headers = headers;
//     }

//     public String getRequestBody() {
//         return requestBody;
//     }

//     public void setRequestBody(String requestBody) {
//         this.requestBody = requestBody;
//     }

//     public String getResponseExample() {
//         return responseExample;
//     }

//     public void setResponseExample(String responseExample) {
//         this.responseExample = responseExample;
//     }

//     public LocalDateTime getCreatedAt() {
//         return createdAt;
//     }

//     public LocalDateTime getUpdatedAt() {
//         return updatedAt;
//     }

//     public Collection getCollection() {
//         return collection;
//     }

//     public void setCollection(Collection collection) {
//         this.collection = collection;
//     }
// }



package com.apiforge.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "api_requests")
public class ApiRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String method;

    private String url;

    @Column(length = 5000)
    private String headers;

    @Column(length = 50)
    private String authorizationType;

    @Column(length = 2000)
    private String authorizationToken;

    @Lob
    private String requestBody;

    @Lob
    private String responseExample;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "collection_id")
    @JsonIgnore
    private Collection collection;

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getHeaders() {
        return headers;
    }

    public void setHeaders(String headers) {
        this.headers = headers;
    }

    public String getAuthorizationType() {
        return authorizationType;
    }

    public void setAuthorizationType(String authorizationType) {
        this.authorizationType = authorizationType;
    }

    public String getAuthorizationToken() {
        return authorizationToken;
    }

    public void setAuthorizationToken(String authorizationToken) {
        this.authorizationToken = authorizationToken;
    }

    public String getRequestBody() {
        return requestBody;
    }

    public void setRequestBody(String requestBody) {
        this.requestBody = requestBody;
    }

    public String getResponseExample() {
        return responseExample;
    }

    public void setResponseExample(String responseExample) {
        this.responseExample = responseExample;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }
}