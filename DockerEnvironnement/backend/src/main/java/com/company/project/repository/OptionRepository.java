package com.company.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.company.project.entity.Option;

@Repository
public interface OptionRepository extends CrudRepository<Option, Integer> {
}
