package com.albaraka.barakabe.application.dto.statistique;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class TopCinqMarqueVenduResponse {

	private long y;
	private String label;

	public TopCinqMarqueVenduResponse(long quantite, String libelle) {
		this.y = quantite;
		this.label = libelle;
	}
}
