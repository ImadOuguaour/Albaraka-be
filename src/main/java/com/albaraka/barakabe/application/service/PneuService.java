package com.albaraka.barakabe.application.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.albaraka.barakabe.application.dto.statistique.PourcentageStockByMarqueProjection;
import com.albaraka.barakabe.application.dto.statistique.PourcentageStockByMarqueResponse;
import com.albaraka.barakabe.application.model.HistoriqueAchatPneu;
import com.albaraka.barakabe.application.model.HistoriquePneuVendu;
import com.albaraka.barakabe.application.model.Pneu;
import com.albaraka.barakabe.application.repository.PneuRepository;

@Service
public class PneuService {

	private static final Logger LOGGER = LoggerFactory.getLogger(PneuService.class);

	@Autowired
	PneuRepository pneuRepository;

	@Autowired
	HistoriquePneuVenduService historiquePneuVenduService;

	@Autowired
	HistoriqueAchatPneuService historiqueAchatPneuService;

	public List<Pneu> getAllPneus() {
		return pneuRepository.findAll();
	}

	public void addPneu(Pneu pneu) {
		Pneu pneuExist = pneuRepository.findFirstByNumeroAndMarqueAndType(pneu.getNumero(), pneu.getMarque(),
				pneu.getType());
		if (pneuExist != null) {
			pneuExist.setQuantite(pneu.getQuantite() + pneuExist.getQuantite());
			pneuExist.setPrixAchat((pneu.getPrixAchat() + pneuExist.getPrixAchat()) / 2);
			pneuExist.setPrixVente((pneu.getPrixVente() + pneuExist.getPrixVente()) / 2);
			pneuRepository.save(pneuExist);
		} else {
			pneuRepository.save(pneu);
		}
		saveHistoriqueAchatPneu(pneu);
	}

	public void updateQuantitePneu(Pneu pneu, int quantiteVendu, int prixVente) {
		pneu.setQuantite(pneu.getQuantite() - quantiteVendu);
		pneuRepository.save(pneu);
		HistoriquePneuVendu historiquePneuVendu = new HistoriquePneuVendu();
		historiquePneuVendu.setMarque(pneu.getMarque());
		historiquePneuVendu.setNumero(pneu.getNumero());
		historiquePneuVendu.setQuantite(quantiteVendu);
		historiquePneuVendu.setPrixVente(prixVente);
		historiquePneuVendu.setType(pneu.getType());
		historiquePneuVendu.setBenifice((prixVente - pneu.getPrixAchat()) * quantiteVendu);
		historiquePneuVenduService.addVentePneu(historiquePneuVendu);
	}

	public void updatePneu(Pneu pneu) {
		List<Pneu> pneuExists = pneuRepository.trouverAllSameMarqueAndNumero(pneu.getId(), pneu.getNumero(),
				pneu.getMarque().getId(), pneu.getType());
		Pneu pneuTrouve = (pneuExists != null && !pneuExists.isEmpty() ? pneuExists.get(0) : null);
		if (pneuTrouve != null) {
			LOGGER.info("Pneu exists already : {}", pneu.toString());
			pneuTrouve.setQuantite(pneu.getQuantite() + pneuTrouve.getQuantite());
			pneuTrouve.setPrixAchat((pneu.getPrixAchat() + pneuTrouve.getPrixAchat()) / 2);
			pneuTrouve.setPrixVente((pneu.getPrixVente() + pneuTrouve.getPrixVente()) / 2);
			LOGGER.info("Pneu exists already new pneu to save : {}", pneuTrouve.toString());
			pneuRepository.delete(pneu);
			pneuRepository.save(pneuTrouve);
		} else {
			LOGGER.info("Pneu");
			pneuRepository.save(pneu);
		}
	}

	private void saveHistoriqueAchatPneu(Pneu pneu) {
		HistoriqueAchatPneu historiqueAchatPneu = new HistoriqueAchatPneu();
		historiqueAchatPneu.setMarque(pneu.getMarque());
		historiqueAchatPneu.setNumero(pneu.getNumero());
		historiqueAchatPneu.setPrixAchat(pneu.getPrixAchat());
		historiqueAchatPneu.setPrixVente(pneu.getPrixVente());
		historiqueAchatPneu.setQuantite(pneu.getQuantite());
		historiqueAchatPneu.setType(pneu.getType());
		historiqueAchatPneuService.addHistorique(historiqueAchatPneu);
	}

	public List<PourcentageStockByMarqueResponse> getPourcentageStockByMarque() {
		List<PourcentageStockByMarqueProjection> pourcentagesByMarques = pneuRepository.pourcentageStockByMarque();
		List<PourcentageStockByMarqueResponse> pourcentagesByMarquesResponse = new ArrayList<PourcentageStockByMarqueResponse>();
		for (PourcentageStockByMarqueProjection pourcentageByMarque : pourcentagesByMarques) {
			PourcentageStockByMarqueResponse pourcentageByMarqueResponse = new PourcentageStockByMarqueResponse(
					pourcentageByMarque.getPourcentage(), pourcentageByMarque.getMarque().getLibelle());
			pourcentagesByMarquesResponse.add(pourcentageByMarqueResponse);

		}
		return pourcentagesByMarquesResponse;
	}
}
