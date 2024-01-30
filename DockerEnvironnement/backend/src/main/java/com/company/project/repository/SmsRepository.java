package com.company.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.company.project.entity.decorateur.Sms;

@Repository
public interface SmsRepository extends CrudRepository<Sms, Integer> {
}
