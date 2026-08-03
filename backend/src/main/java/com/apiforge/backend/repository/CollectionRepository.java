package com.apiforge.backend.repository;

import com.apiforge.backend.entity.Collection;
import com.apiforge.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CollectionRepository
        extends JpaRepository<Collection, Long> {

    List<Collection> findByUser(User user);
}