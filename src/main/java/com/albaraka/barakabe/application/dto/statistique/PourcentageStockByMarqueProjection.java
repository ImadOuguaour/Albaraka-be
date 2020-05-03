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
public class PourcentageStockByMarqueProjection {

	private Marque marque;
	private long pourcentage;

	public PourcentageStockByMarqueProjection(long pourcentage, Marque marque) {
		this.marque = marque;
		this.pourcentage = pourcentage;
	}
}
