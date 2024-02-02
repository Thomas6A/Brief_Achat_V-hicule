package com.company.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.company.project.entity.Panier;
import com.company.project.service.PanierService;

@RestController
public class PanierController {

    private final PanierService panierService;

    @Autowired
    public PanierController(PanierService panierService) {
        this.panierService = panierService;
    }

    @GetMapping("/panier/{id}")
    public List<Panier> getPaniers(@PathVariable int id) {
        return panierService.getPanier(id);
    }
}
