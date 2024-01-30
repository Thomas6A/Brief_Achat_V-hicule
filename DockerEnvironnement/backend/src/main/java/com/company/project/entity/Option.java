package com.company.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "option")
public class Option {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private String type_option;
	
	@Column(nullable = false)
	private float supplement;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
	
	

}
