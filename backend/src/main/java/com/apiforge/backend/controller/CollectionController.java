package com.apiforge.backend.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.apiforge.backend.entity.Collection;
import com.apiforge.backend.entity.User;
import com.apiforge.backend.repository.UserRepository;
import com.apiforge.backend.service.CollectionService;

@RestController
@RequestMapping("/api/collections")
@CrossOrigin(origins = "http://localhost:5173")
public class CollectionController {

    private final CollectionService collectionService;
    private final UserRepository userRepository;

    public CollectionController(
            CollectionService collectionService,
            UserRepository userRepository
    ) {
        this.collectionService = collectionService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Collection> getUserCollections(
            Authentication authentication
    ) {

        String email = authentication.getName();

        User user = userRepository
                .findByEmail(email)
                .orElseThrow();

        return collectionService.getCollectionsByUser(user);
    }

    @PostMapping
    public Collection createCollection(
            @RequestBody Collection collection,
            Authentication authentication
    ) {

        String email = authentication.getName();

        User user = userRepository
                .findByEmail(email)
                .orElseThrow();

        collection.setUser(user);

        return collectionService.saveCollection(collection);
    }
}