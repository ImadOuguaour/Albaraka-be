package com.albaraka.barakabe.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.albaraka.barakabe.application.model.HistoriqueAchatPneu;
import com.albaraka.barakabe.application.repository.HistoriqueAchatPneuRepository;

@Service
public class HistoriqueAchatPneuService {

	@Autowired
	HistoriqueAchatPneuRepository achatPneuRepository;

	public HistoriqueAchatPneu addHistorique(HistoriqueAchatPneu historiqueAchatPneu) {
		return achatPneuRepository.save(historiqueAchatPneu);
	}
	
	public List<HistoriqueAchatPneu> getAll(){
		return achatPneuRepository.findAll();
	}
}
