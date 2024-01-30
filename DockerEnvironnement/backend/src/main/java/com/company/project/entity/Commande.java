package com.company.project.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "commande")
public class Commande {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private Date date_livraison;
	
	@Column(nullable = false)
	private String adresse;
	
	@Column(nullable = false)
	private String facture;
	
	@Column(nullable = false)
	private String statut;
	
	@ManyToOne
	private Utilisateur utilisateur;
	
	@ManyToMany
	@JoinTable(
		name = "contientVoiture", 
		joinColumns = @JoinColumn(name = "id_commande"), 
		inverseJoinColumns = @JoinColumn(name = "id_voiture"))
    private Set<Voiture> voitures;
	
	@ManyToMany
	@JoinTable(
		name = "contientMoto", 
		joinColumns = @JoinColumn(name = "id_commande"), 
		inverseJoinColumns = @JoinColumn(name = "id_moto"))
    private Set<Moto> motos;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate_livraison() {
		return date_livraison;
	}

	public void setDate_livraison(Date date_livraison) {
		this.date_livraison = date_livraison;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getFacture() {
		return facture;
	}

	public void setFacture(String facture) {
		this.facture = facture;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
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
