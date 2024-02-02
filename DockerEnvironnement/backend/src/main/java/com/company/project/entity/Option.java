package com.company.project.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.company.project.entity.vehicule.Moto;
import com.company.project.entity.vehicule.Voiture;

@Entity
@Table(name = "options")
public class Option {
	
	@Id
	@GeneratedValue
	private int id_option;
	
	@Column(nullable = false)
	private String type_option;
	
	@Column(nullable = false)
	private float supplement;
	
	@ManyToMany
	@JoinTable(
		name = "supplementvoiture", 
		joinColumns = @JoinColumn(name = "id_option"), 
		inverseJoinColumns = @JoinColumn(name = "id_voiture"))
    private Set<Voiture> voitures;
	
	@ManyToMany
	@JoinTable(
		name = "supplementmoto", 
		joinColumns = @JoinColumn(name = "id_option"), 
		inverseJoinColumns = @JoinColumn(name = "id_moto"))
    private Set<Moto> motos;

	public int getId() {
		return id_option;
	}

	public void setId(int id) {
		this.id_option = id;
	}

	public String getType_option() {
		return type_option;
	}

	public void setType_option(String type_option) {
		this.type_option = type_option;
	}

	public float getSupplement() {
		return supplement;
	}

	public void setSupplement(float supplement) {
		this.supplement = supplement;
	}

	public Set<Voiture> getVoitures() {
		return voitures;
	}

	public void setVoitures(Set<Voiture> voitures) {
		this.voitures = voitures;
	}

	public Set<Moto> getMotos() {
		return motos;
	}

	public void setMotos(Set<Moto> motos) {
		this.motos = motos;
	}
	
	

}
