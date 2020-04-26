package com.albaraka.barakabe.application.dto;

import com.albaraka.barakabe.application.model.Pneu;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class VentePneuRequest {

	private Pneu pneu;
	private int quantiteVendu;
	private int prixVenteReel;
}
