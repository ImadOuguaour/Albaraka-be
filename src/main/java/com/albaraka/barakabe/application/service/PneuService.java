package com.albaraka.barakabe.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.albaraka.barakabe.application.model.Pneu;
import com.albaraka.barakabe.application.repository.PneuRepository;

@Service
public class PneuService {

	@Autowired
	PneuRepository pneuRepository;

	public List<Pneu> getAllPneus() {
		return pneuRepository.findAll();
	}

	public Pneu addPneu(Pneu pneu) {
		return pneuRepository.save(pneu);
	}

	public void deleteById(Integer id) {
		// TODO Auto-generated method stub
		pneuRepository.deleteById(id);
	}
}
