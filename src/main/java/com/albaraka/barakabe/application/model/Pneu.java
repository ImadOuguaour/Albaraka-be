package com.albaraka.barakabe.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "pneu")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Pneu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "numero")
	private String numero;
	
	@Column(name = "quantite")
	private int quantite;
	
	@Column(name = "prix_achat")
	private int prixAchat;
	
	@Column(name = "prix_vente")
	private int prixVente;
	
	@Column(name = "type")
	private String type;
	
	@ManyToOne
	@JoinColumn(name = "marque_id", referencedColumnName = "ID")
	Marque marque;
}
