package com.albaraka.barakabe.application.service;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.albaraka.barakabe.application.model.HistoriqueVenteAccessoire;
import com.albaraka.barakabe.application.repository.HistoriqueVenteAccessoireRepository;

@Service
public class HistoriqueVenteAccessoireService {

	private static final Logger LOGGER = LoggerFactory.getLogger(HistoriqueVenteAccessoireService.class);

	@Autowired
	HistoriqueVenteAccessoireRepository historiqueVenteAccessoireRepository;

	public HistoriqueVenteAccessoire addVenteAccessoire(HistoriqueVenteAccessoire venteAccessoire) {
		return historiqueVenteAccessoireRepository.save(venteAccessoire);
	}

	public List<HistoriqueVenteAccessoire> getAllVenteAccessoire() {
		return historiqueVenteAccessoireRepository.findAll();
	}

	public List<HistoriqueVenteAccessoire> getVenteAujourdHui() {
		Date currentDate = new Date();
		return historiqueVenteAccessoireRepository.venteOfDay(currentDate);
	}

	public int getGainOfMonth() {
		int gainOfMonth = historiqueVenteAccessoireRepository.venteOfMonth();
		LOGGER.info("le gain du mois des accessoires est : {}", gainOfMonth);
		return gainOfMonth;
	}

	public int getGainOfYesterday() {
		int gainOfYesterday = historiqueVenteAccessoireRepository.venteOfYesterday();
		return gainOfYesterday;
	}
}
