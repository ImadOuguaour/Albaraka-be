package com.albaraka.barakabe.application.exposition;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.albaraka.barakabe.application.model.Pneu;
import com.albaraka.barakabe.application.service.PneuService;

@Controller
@RequestMapping(path = "/api/pneu")
public class PneuApi {

	private static final Logger LOGGER = LoggerFactory.getLogger(PneuApi.class);

	@Autowired
	PneuService pneuService;

	@GetMapping
	public @ResponseBody List<Pneu> getAllPneus() {
		return pneuService.getAllPneus();
	}

	@PostMapping
	public @ResponseBody Pneu addPneu(@RequestBody Pneu pneu) {
		LOGGER.info("ajout du pneu en cours");
		return pneuService.addPneu(pneu);
	}

	@DeleteMapping("/{id}")
	public void deletePneu(@PathVariable String id) {
		LOGGER.info("suppression du pneu {} en cours",id);
		pneuService.deleteById(Integer.valueOf(id));
	}

}
