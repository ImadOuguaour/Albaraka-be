package com.albaraka.barakabe.application.exposition;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.albaraka.barakabe.application.model.Marque;
import com.albaraka.barakabe.application.service.MarqueService;

@Controller
@RequestMapping(path = "/api/marque")
public class MarqueApi {

	@Autowired
	MarqueService marqueService;

	@GetMapping
	public @ResponseBody List<Marque> getAllMarques() {
		return marqueService.getAllMarques();
	}
}
