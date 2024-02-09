package com.company.project.service;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.company.project.repository.MotoRepository;
import com.company.project.repository.VoitureRepository;

@ExtendWith(MockitoExtension.class)
public class VehiculeServiceTest {
	
	@Mock
	VoitureRepository voiture;
	
	@Mock
	MotoRepository moto;
	
	@InjectMocks
	VehiculeService service;
	
	@Test
	public void getAllVehiculeTest() {
		service.getAllVehicule();
		verify(voiture, times(1)).findAll();
		verify(moto, times(1)).findAll();
	}

}
