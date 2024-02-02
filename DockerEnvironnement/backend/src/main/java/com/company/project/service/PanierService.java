package com.company.project.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.project.entity.Panier;
import com.company.project.repository.PanierRepository;

@Service
public class PanierService {

    private final PanierRepository panierRepository;

    @Autowired
    public PanierService(PanierRepository panierRepository) {
        this.panierRepository = panierRepository;
    }

    public List<Panier> getPanier(final int id) {
        List<Panier> paniers = new ArrayList<>();
        paniers.addAll((Collection<? extends Panier>) panierRepository.findAllByUserId(id));
        return paniers;
    }

}
