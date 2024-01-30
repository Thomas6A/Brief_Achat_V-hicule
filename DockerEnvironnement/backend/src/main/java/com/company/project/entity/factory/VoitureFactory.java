package com.company.project.entity.factory;

import com.company.project.entity.vehicule.Vehicule;
import com.company.project.entity.vehicule.Voiture;

public class VoitureFactory extends VehiculeFactory {
	
private static VoitureFactory instance;
	
	public static VoitureFactory getInstance() {
		if (instance == null) {
			instance = new VoitureFactory();
		}
		return instance;
	}
	
	@Override
	public Vehicule createVehicule() {
		return new Voiture();
	}
}
