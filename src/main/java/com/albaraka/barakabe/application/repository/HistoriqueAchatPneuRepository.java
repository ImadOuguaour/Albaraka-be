package com.albaraka.barakabe.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.albaraka.barakabe.application.model.HistoriqueAchatPneu;

@Repository
public interface HistoriqueAchatPneuRepository extends JpaRepository<HistoriqueAchatPneu, Integer> {

}
