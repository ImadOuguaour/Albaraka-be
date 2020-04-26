package com.albaraka.barakabe.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.albaraka.barakabe.application.model.Marque;
import com.albaraka.barakabe.application.model.Pneu;

@Repository
public interface PneuRepository extends JpaRepository<Pneu, Integer> {

	Pneu findFirstByNumeroAndMarque(String numero, Marque marque);

	@Query("SELECT p FROM Pneu p WHERE p.id <> ?1 AND p.numero = ?2 AND p.marque.id = ?3")
	List<Pneu> trouverAllSameMarqueAndNumero(Integer idPneu, String numero, Integer idMarque);

}
