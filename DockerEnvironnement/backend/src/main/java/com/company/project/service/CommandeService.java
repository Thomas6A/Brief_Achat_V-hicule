package com.company.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.project.entity.Commande;
import com.company.project.repository.CommandeRepository;

@Service
public class CommandeService {
	
	private final CommandeRepository commandeRepository;
	
	 @Autowired
	 public CommandeService(CommandeRepository commandeRepository) {
		 this.commandeRepository = commandeRepository;
	 }
	 
	 public List<Commande> getCommandeUser(int id_user){
			List<Commande> commandes = new ArrayList<>();
			commandes.addAll(commandeRepository.findByUser(id_user));
			return commandes;
	 }

}
