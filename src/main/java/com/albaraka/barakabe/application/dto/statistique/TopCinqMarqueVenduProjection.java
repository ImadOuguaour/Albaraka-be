package com.albaraka.barakabe.application.dto.statistique;

import com.albaraka.barakabe.application.model.Marque;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class TopCinqMarqueVenduProjection {

	private Marque marque;
	private long quantite;

	public TopCinqMarqueVenduProjection(long quantite, Marque marque) {
		this.marque = marque;
		this.quantite = quantite;
	}
}
