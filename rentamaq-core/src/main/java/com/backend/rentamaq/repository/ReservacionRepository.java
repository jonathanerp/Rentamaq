package com.backend.rentamaq.repository;

import com.backend.rentamaq.entity.Reservacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservacionRepository extends JpaRepository<Reservacion, Long> {
    Reservacion findByProductoId(long productoId);

    List<Reservacion> findAllByProductoId(long productoId);

    List<Reservacion> findAllByUserId(long userId);
    @Query("SELECT r.producto.id FROM Reservacion r WHERE r.inicioReservacion NOT BETWEEN :inicio_reservacion AND :fin_reservacion")
    List<Long> findProductoIdsByInicioReservacionNotBetween(LocalDate inicio_reservacion, LocalDate fin_reservacion);
}
