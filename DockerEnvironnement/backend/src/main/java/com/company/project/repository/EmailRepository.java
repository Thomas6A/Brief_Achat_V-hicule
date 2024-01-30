package com.company.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.company.project.entity.decorateur.Email;

@Repository
public interface EmailRepository extends CrudRepository<Email, Integer> {
}
