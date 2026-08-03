package com.apiforge.backend.service;

import com.apiforge.backend.entity.Collection;
import com.apiforge.backend.entity.User;
import com.apiforge.backend.repository.CollectionRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectionService {

    private final CollectionRepository collectionRepository;

    public CollectionService(
            CollectionRepository collectionRepository
    ) {
        this.collectionRepository = collectionRepository;
    }

    public List<Collection> getCollectionsByUser(User user) {
        return collectionRepository.findByUser(user);
    }

    public Collection saveCollection(Collection collection) {
        return collectionRepository.save(collection);
    }
}