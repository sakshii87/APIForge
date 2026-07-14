package com.apiforge.backend.service;

import org.springframework.stereotype.Service;

import com.apiforge.backend.entity.User;
import com.apiforge.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User saveUser(User user) {
        return userRepository.save(user);
    }


    public User getUserByEmail(String email) {

        return userRepository.findByEmail(email)
                .orElse(null);
    }


    public boolean emailExists(String email) {

        return userRepository.existsByEmail(email);
    }
}