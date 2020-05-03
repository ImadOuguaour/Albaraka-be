package com.albaraka.barakabe.application.exposition;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.albaraka.barakabe.application.dto.statistique.PourcentageStockByMarqueResponse;
import com.albaraka.barakabe.application.dto.statistique.TopCinqMarqueVenduResponse;
import com.albaraka.barakabe.application.service.HistoriquePneuVenduService;
import com.albaraka.barakabe.application.service.PneuService;

@Controller
@RequestMapping(path = "/api/statistique")
public class StatisqueApi {

	@Autowired
	HistoriquePneuVenduService historiquePneuVenduService;

	@Autowired
	PneuService pneuService;

	@GetMapping(path = "/topCinqVendu")
	public @ResponseBody List<TopCinqMarqueVenduResponse> getTopCinqMarques() {
		return historiquePneuVenduService.getTopCinqMarqueVendu();
	}

	@GetMapping(path = "/pourcentageMarque")
	public @ResponseBody List<PourcentageStockByMarqueResponse> getPourcentageStockByMarque() {
		return pneuService.getPourcentageStockByMarque();
	}
}
