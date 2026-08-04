package com.apiforge.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.apiforge.backend.entity.Collection;
import com.apiforge.backend.entity.User;
import com.apiforge.backend.repository.CollectionRepository;

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
    
    public void deleteCollection(Long id) {
    collectionRepository.deleteById(id);
    }
    
}