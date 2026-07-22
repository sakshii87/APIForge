package com.apiforge.backend.dto;

public class UserProfileResponse {

    private String name;
    private String username;
    private String email;

    public UserProfileResponse() {
    }

    public UserProfileResponse(String name, String username, String email) {
        this.name = name;
        this.username = username;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }
}