package com.albaraka.barakabe.application.exposition;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.albaraka.barakabe.application.service.HistoriquePneuVenduService;
import com.albaraka.barakabe.application.service.HistoriqueVenteAccessoireService;

@Controller
@RequestMapping(path = "/api/gain")
public class GainApi {

	@Autowired
	HistoriqueVenteAccessoireService historiqueVenteAccessoireService;

	@Autowired
	HistoriquePneuVenduService historiquePneuVenduService;

	@GetMapping(path = "/month")
	public @ResponseBody int getGainOfMonth() {
		return historiqueVenteAccessoireService.getGainOfMonth() + historiquePneuVenduService.getGainOfMonth();
	}
	
	@GetMapping(path = "/yesterday")
	public @ResponseBody int getGainOfYesterday() {
		return historiqueVenteAccessoireService.getGainOfYesterday() + historiquePneuVenduService.getGainOfYesterday();
	}
}
