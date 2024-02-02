package com.company.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.company.project.entity.vehicule.Voiture;

@Repository
public interface VoitureRepository extends CrudRepository<Voiture, Integer> {
	
	@Query(value="SELECT v FROM voiture v INNER JOIN v.contientvoiture cv WHERE cv.id_commande = :commandeValue", nativeQuery = true)
	List<Voiture> findByCommande(@Param("commandeValue") int commandeValue);
}
