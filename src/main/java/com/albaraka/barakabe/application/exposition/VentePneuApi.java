package com.albaraka.barakabe.application.exposition;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.albaraka.barakabe.application.dto.VentePneuRequest;
import com.albaraka.barakabe.application.model.HistoriquePneuVendu;
import com.albaraka.barakabe.application.service.HistoriquePneuVenduService;
import com.albaraka.barakabe.application.service.PneuService;

@Controller
@RequestMapping(path = "/api/vente/pneu")
public class VentePneuApi {

	@Autowired
	PneuService pneuService;

	@Autowired
	HistoriquePneuVenduService historiquePneuVenduService;

	@PostMapping
	public @ResponseBody void addVente(@RequestBody VentePneuRequest ventePneuRequest) {
		pneuService.updateQuantitePneu(ventePneuRequest.getPneu(), ventePneuRequest.getQuantiteVendu(),
				ventePneuRequest.getPrixVenteReel());
	}

	@GetMapping(path = "/today")
	public @ResponseBody List<HistoriquePneuVendu> venteAujourdHui() {
		return historiquePneuVenduService.getVenteAujourdHui();
	}
}
