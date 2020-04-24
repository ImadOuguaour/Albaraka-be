package com.albaraka.barakabe.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.albaraka.barakabe.application.model.Marque;
import com.albaraka.barakabe.application.repository.MarqueRepository;

@Service
public class MarqueService {

	@Autowired
	MarqueRepository marqueRepository;
	
	public List<Marque> getAllMarques(){
		return marqueRepository.findAll();
	}
}
