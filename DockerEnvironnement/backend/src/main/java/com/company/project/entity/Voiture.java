package com.company.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "voiture")
public class Voiture {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private float prix;
	
	@Column(nullable = false)
	private String nom_modele;
	
	@Column(nullable = false)
	private String couleur;
	
	@Column(nullable = false)
	private String motorisation;
	
	@Column(nullable = false)
	private String description;
	
	@Column(nullable = true)
	private int quantite;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public String getNom_modele() {
		return nom_modele;
	}

	public void setNom_modele(String nom_modele) {
		this.nom_modele = nom_modele;
	}

	public String getCouleur() {
		return couleur;
	}

	public void setCouleur(String couleur) {
		this.couleur = couleur;
	}

	public String getMotorisation() {
		return motorisation;
	}

	public void setMotorisation(String motorisation) {
		this.motorisation = motorisation;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	
	
}
