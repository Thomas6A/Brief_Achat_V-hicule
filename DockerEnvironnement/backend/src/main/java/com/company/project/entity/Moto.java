package com.company.project.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "moto")
public class Moto {
	
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
	
	@ManyToMany(mappedBy = "motos")
	private Set<Panier> paniers;
	
	@ManyToMany(mappedBy = "motos")
	private Set<Commande> commandes;

	@ManyToMany(mappedBy = "motos")
	private Set<Option> options;
	
	public Set<Panier> getPaniers() {
		return paniers;
	}

	public void setPaniers(Set<Panier> paniers) {
		this.paniers = paniers;
	}

	public Set<Commande> getCommandes() {
		return commandes;
	}

	public void setCommandes(Set<Commande> commandes) {
		this.commandes = commandes;
	}

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

	public Set<Option> getOptions() {
		return options;
	}

	public void setOptions(Set<Option> options) {
		this.options = options;
	}
	
	

}
