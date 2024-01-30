package com.company.project.entity.factory;

import com.company.project.entity.vehicule.Moto;
import com.company.project.entity.vehicule.Vehicule;

public class MotoFactory extends VehiculeFactory {
	
	private static MotoFactory instance;
	
	public static MotoFactory getInstance() {
		if (instance == null) {
			instance = new MotoFactory();
		}
		return instance;
	}
	
	@Override
	public Vehicule createVehicule() {
		return new Moto();
	}
}
