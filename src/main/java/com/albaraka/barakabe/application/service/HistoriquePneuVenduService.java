package com.albaraka.barakabe.application.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.albaraka.barakabe.application.dto.statistique.TopCinqMarqueVenduProjection;
import com.albaraka.barakabe.application.dto.statistique.TopCinqMarqueVenduResponse;
import com.albaraka.barakabe.application.model.HistoriquePneuVendu;
import com.albaraka.barakabe.application.repository.HistoriquePneuVenduRepository;

@Service
public class HistoriquePneuVenduService {

	private static final Logger LOGGER = LoggerFactory.getLogger(HistoriquePneuVenduService.class);

	@Autowired
	HistoriquePneuVenduRepository historiquePneuVenduRepository;

	public HistoriquePneuVendu addVentePneu(HistoriquePneuVendu historiquePneuVendu) {
		return historiquePneuVenduRepository.save(historiquePneuVendu);
	}

	public List<HistoriquePneuVendu> getVenteAujourdHui() {
		Date currentDate = new Date();
		return historiquePneuVenduRepository.venteOfDay(currentDate);
	}

	public int getGainOfMonth() {
		int gainOfMonth = historiquePneuVenduRepository.venteOfMonth();
		LOGGER.info("le gain du mois des pneus est : {}",gainOfMonth);
		return gainOfMonth;
	}
	
	public int getGainOfYesterday() {
		int gainOfYesterday = historiquePneuVenduRepository.venteOfYesterday();
		return gainOfYesterday;
	}

	public List<TopCinqMarqueVenduResponse> getTopCinqMarqueVendu() {
		Date currentDate = new Date();
		Date date = new Date();
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.MONTH, -1);
		date = calendar.getTime();
		List<TopCinqMarqueVenduProjection> topCinqVendusProjections = historiquePneuVenduRepository
				.trouverCinqTopMarque(date, currentDate);
		List<TopCinqMarqueVenduResponse> topCinqVenduResponses = new ArrayList<TopCinqMarqueVenduResponse>();
		for (TopCinqMarqueVenduProjection topCinqMarqueVenduProjection : topCinqVendusProjections) {
			if (topCinqVenduResponses.size() < 5) {
				TopCinqMarqueVenduResponse topCinqMarqueVenduResponse = new TopCinqMarqueVenduResponse(
						topCinqMarqueVenduProjection.getQuantite(),
						topCinqMarqueVenduProjection.getMarque().getLibelle());
				topCinqVenduResponses.add(topCinqMarqueVenduResponse);
			}
		}
		return topCinqVenduResponses;
	}
}
