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
@Table(name = "email")
public class Email extends NotificationDecorator {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private String message;
	
	@ManyToOne
	@JoinColumn(name = "id_commande")
	private Commande commande;
	
	@ManyToOne
	@JoinColumn(name = "id_utilisateur")
	private Utilisateur utilisateur;
	
	public Email(Notification source) {
		super(source);
	}
	
	// A changer avec une vrai fonction
	private void sendEmail(String msg) {
		System.out.println(msg + ", message sent in Email");
	}
	
	@Override
	public void send(String message) {
		super.send(message);
		sendEmail(message);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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