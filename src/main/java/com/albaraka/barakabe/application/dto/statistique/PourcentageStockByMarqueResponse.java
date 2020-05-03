package com.albaraka.barakabe.application.dto.statistique;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class PourcentageStockByMarqueResponse {
	private long y;
	private String label;

	public PourcentageStockByMarqueResponse(long pourcentage, String libelle) {
		this.y = pourcentage;
		this.label = libelle;
	}
}
