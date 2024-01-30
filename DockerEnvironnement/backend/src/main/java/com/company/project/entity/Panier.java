package com.company.project.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.company.project.entity.vehicule.Moto;
import com.company.project.entity.vehicule.Voiture;

@Entity
@Table(name = "panier")
public class Panier {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private boolean validation;
	
	@OneToOne
	private Utilisateur utilisateur;
	
	@ManyToMany
	@JoinTable(
		name = "possedeVoiture", 
		joinColumns = @JoinColumn(name = "id_panier"), 
		inverseJoinColumns = @JoinColumn(name = "id_voiture"))
    private Set<Voiture> voitures;
	
	@ManyToMany
	@JoinTable(
		name = "possedeMoto", 
		joinColumns = @JoinColumn(name = "id_panier"), 
		inverseJoinColumns = @JoinColumn(name = "id_moto"))
    private Set<Moto> motos;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isValidation() {
		return validation;
	}

	public void setValidation(boolean validation) {
		this.validation = validation;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
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
