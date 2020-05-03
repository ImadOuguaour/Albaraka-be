package com.albaraka.barakabe.application.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.albaraka.barakabe.application.model.HistoriqueVenteAccessoire;

@Repository
public interface HistoriqueVenteAccessoireRepository extends JpaRepository<HistoriqueVenteAccessoire, Integer> {

	@Query("select hva FROM HistoriqueVenteAccessoire hva WHERE hva.dateVente = :today")
	List<HistoriqueVenteAccessoire> venteOfDay(@Param("today") Date today);
	
	@Query("select COALESCE(SUM(hva.prixVente),0) FROM HistoriqueVenteAccessoire hva WHERE (hva.dateVente between DATE_FORMAT(NOW() ,'%Y-%m-01') AND NOW() )")
	int venteOfMonth();
	
	@Query("select COALESCE(SUM(hva.prixVente),0) FROM HistoriqueVenteAccessoire hva WHERE hva.dateVente = subdate(current_date, 1)")
	int venteOfYesterday();
}
