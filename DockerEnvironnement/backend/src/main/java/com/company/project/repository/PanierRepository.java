package com.company.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.company.project.entity.Panier;

@Repository
public interface PanierRepository extends CrudRepository<Panier, Integer> {
}
