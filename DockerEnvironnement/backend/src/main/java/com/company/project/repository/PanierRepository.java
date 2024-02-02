package com.company.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.company.project.entity.Panier;

@Repository
public interface PanierRepository extends CrudRepository<Panier, Integer> {
    @Query(value = "SELECT p FROM Panier p INNER JOIN p.voiture v WHERE p.id_utilisateur = :userId")
    List<Panier> findAllByUserId(@Param("userId") int userId);
}
