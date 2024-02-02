package com.company.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.company.project.entity.vehicule.Moto;

@Repository
public interface MotoRepository extends CrudRepository<Moto, Integer> {
	
	@Query(value="SELECT m FROM moto m INNER JOIN m.contientmoto cm WHERE cm.id_commande = :commandeValue", nativeQuery = true)
	List<Moto> findByCommande(@Param("commandeValue") int commandeValue);
}
