package com.albaraka.barakabe.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.albaraka.barakabe.application.model.Pneu;

@Repository
public interface PneuRepository extends JpaRepository<Pneu, Integer> {

}
