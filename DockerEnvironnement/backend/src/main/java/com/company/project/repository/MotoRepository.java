package com.company.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.company.project.entity.vehicule.Moto;

@Repository
public interface MotoRepository extends CrudRepository<Moto, Integer> {
}
