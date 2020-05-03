package com.albaraka.barakabe.application.exposition;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.albaraka.barakabe.application.model.HistoriqueVenteAccessoire;
import com.albaraka.barakabe.application.service.HistoriqueVenteAccessoireService;

@Controller
@RequestMapping(path = "/api/vente/accessoire")
public class HistoriqueVenteAccessoireApi {

	@Autowired
	HistoriqueVenteAccessoireService historiqueVenteAccessoireService;

	@GetMapping(path = "/today")
	public @ResponseBody List<HistoriqueVenteAccessoire> venteAujourdHui() {
		return historiqueVenteAccessoireService.getVenteAujourdHui();
	}

	@PostMapping
	public @ResponseBody HistoriqueVenteAccessoire addVenteAccessoire(
			@RequestBody HistoriqueVenteAccessoire historiqueVenteAccessoire) {

		return historiqueVenteAccessoireService.addVenteAccessoire(historiqueVenteAccessoire);
	}
}
