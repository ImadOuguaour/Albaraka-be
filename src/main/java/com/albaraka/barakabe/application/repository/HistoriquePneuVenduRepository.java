package com.albaraka.barakabe.application.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.albaraka.barakabe.application.dto.statistique.TopCinqMarqueVenduProjection;
import com.albaraka.barakabe.application.model.HistoriquePneuVendu;

@Repository
public interface HistoriquePneuVenduRepository extends JpaRepository<HistoriquePneuVendu, Integer> {

	@Query("select new com.albaraka.barakabe.application.dto.statistique.TopCinqMarqueVenduProjection(SUM(hpv.quantite) as qt, hpv.marque) "
			+ "FROM HistoriquePneuVendu hpv " + "WHERE hpv.dateVente BETWEEN :dateDebut AND :dateFin "
			+ "GROUP BY hpv.marque " + "ORDER BY qt DESC ")
	List<TopCinqMarqueVenduProjection> trouverCinqTopMarque(@Param("dateDebut") Date dateDebut,
			@Param("dateFin") Date dateFin);
	
	@Query("select hpv FROM HistoriquePneuVendu hpv WHERE hpv.dateVente = :today")
	List<HistoriquePneuVendu> venteOfDay(@Param("today") Date today);
	
	@Query("select COALESCE(SUM(hpv.benifice),0) FROM HistoriquePneuVendu hpv WHERE (hpv.dateVente between DATE_FORMAT(NOW() ,'%Y-%m-01') AND NOW() )")
	int venteOfMonth();
	
	@Query("select COALESCE(SUM(hpv.benifice),0) FROM HistoriquePneuVendu hpv WHERE hpv.dateVente = subdate(current_date, 1)")
	int venteOfYesterday();
}
