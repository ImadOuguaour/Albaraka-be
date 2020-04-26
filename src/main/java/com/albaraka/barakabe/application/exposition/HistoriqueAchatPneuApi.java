package com.albaraka.barakabe.application.exposition;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.albaraka.barakabe.application.model.HistoriqueAchatPneu;
import com.albaraka.barakabe.application.service.HistoriqueAchatPneuService;

@Controller
@RequestMapping(path = "/api/historiqueAchatPneu")
public class HistoriqueAchatPneuApi {

	@Autowired
	HistoriqueAchatPneuService historiqueAchatPneuService;

	@GetMapping
	public @ResponseBody List<HistoriqueAchatPneu> getAllPneus() {
		return historiqueAchatPneuService.getAll();
	}
}
