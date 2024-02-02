package com.company.project.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.project.entity.vehicule.Vehicule;
import com.company.project.repository.MotoRepository;
import com.company.project.repository.VoitureRepository;


@Service
public class VehiculeService {
	
	private final VoitureRepository voitureRepository;
	
	private final MotoRepository motoRepository;

    @Autowired
    public VehiculeService(VoitureRepository voitureRepository, MotoRepository motoRepository) {
        this.voitureRepository = voitureRepository;
        this.motoRepository = motoRepository;
    }
	
	public List<Vehicule> getAllVehicule(){
		List<Vehicule> vehicules = new ArrayList<>();
		vehicules.addAll((Collection<? extends Vehicule>) voitureRepository.findAll());
		vehicules.addAll((Collection<? extends Vehicule>) motoRepository.findAll());
		return vehicules;
	}

}
