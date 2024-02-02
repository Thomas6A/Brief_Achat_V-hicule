package com.company.project.controllers;

import com.company.project.entity.vehicule.Vehicule;
import com.company.project.service.VehiculeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VehiculeController {

	private final VehiculeService vehiculeService;

    @Autowired
    public VehiculeController(VehiculeService vehiculeService) {
        this.vehiculeService = vehiculeService;
    }

    @GetMapping("/vehicules")
    public List<Vehicule> getAllVehicules() {
        return vehiculeService.getAllVehicule();
    }

}
