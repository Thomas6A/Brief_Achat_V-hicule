package com.company.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.company.project.entity.Commande;
import com.company.project.service.CommandeService;

@RestController
public class CommandeController {
	
	private final CommandeService commandeService;

    @Autowired
    public CommandeController(CommandeService commandeService) {
        this.commandeService = commandeService;
    }

    @GetMapping("/commandes/{id}")
    public List<Commande> getCommandeUser(@PathVariable int id) {
        return commandeService.getCommandeUser(id);
    }

}
