package com.albaraka.barakabe.application.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "historique_accessoire_vendu")
@Getter
@Setter
@ToString
public class HistoriqueVenteAccessoire {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "accessoire")
	private String accessoire;

	@Column(name = "quantite")
	private int quantite;

	@Column(name = "prix_vente")
	private int prixVente;

	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern = "dd/MM/yyyy", timezone = "Europe/Paris")
	@Column(name = "date_vente")
	Date dateVente;

	public HistoriqueVenteAccessoire() {
		this.dateVente = new Date();
	}
}
