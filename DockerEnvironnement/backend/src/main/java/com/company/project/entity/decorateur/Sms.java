package com.company.project.entity.decorateur;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.company.project.entity.Commande;
import com.company.project.entity.Utilisateur;

@Entity
@Table(name = "sms")
public class Sms extends NotificationDecorator {
	
	@Id
	@GeneratedValue
	private int id_sms;
	
	@Column(nullable = false)
	private String message;
	
	@ManyToOne
	@JoinColumn(name = "id_commande")
	private Commande commande;
	
	@ManyToOne
	@JoinColumn(name = "id_utilisateur")
	private Utilisateur utilisateur;
	
	public Sms(Notification source) {
		super(source);
	}
	
	// A changer avec une vrai fonction
	private void sendSMS(String msg) {
		System.out.println(msg + ", message sent in SMS");
	}
	
	@Override
	public void send(String message) {
		super.send(message);
		sendSMS(message);
	}

	public int getId() {
		return id_sms;
	}

	public void setId(int id) {
		this.id_sms = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
	
	
	
}
