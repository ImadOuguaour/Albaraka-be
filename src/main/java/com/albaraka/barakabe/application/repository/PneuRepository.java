package com.albaraka.barakabe.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.albaraka.barakabe.application.dto.statistique.PourcentageStockByMarqueProjection;
import com.albaraka.barakabe.application.model.Marque;
import com.albaraka.barakabe.application.model.Pneu;

@Repository
public interface PneuRepository extends JpaRepository<Pneu, Integer> {

	Pneu findFirstByNumeroAndMarqueAndType(String numero, Marque marque, String type);

	@Query("SELECT p FROM Pneu p WHERE p.id <> ?1 AND p.numero = ?2 AND p.marque.id = ?3 AND p.type = ?4")
	List<Pneu> trouverAllSameMarqueAndNumero(Integer idPneu, String numero, Integer idMarque, String type);
	
//	SELECT marque_id , ROUND((sum(quantite)/(SELECT sum(quantite) from `pneu`))*100,2) FROM `pneu` GROUP BY marque_id
	@Query("select new com.albaraka.barakabe.application.dto.statistique.PourcentageStockByMarqueProjection("
			+ "ROUND((SUM(p.quantite)/(select SUM(p2.quantite) from Pneu p2))*100,2), p.marque) "
			+ "FROM Pneu p "
			+ "GROUP BY p.marque ")
	List<PourcentageStockByMarqueProjection> pourcentageStockByMarque();

}
