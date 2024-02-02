package com.company.project.repository;

import com.company.project.entity.Commande;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandeRepository extends CrudRepository<Commande, Integer> {
	
	@Query(value="SELECT c FROM commande c WHERE c.id_utilisateur = :userValue", nativeQuery = false)
	List<Commande> findByUser(@Param("userValue") int userValue);
}