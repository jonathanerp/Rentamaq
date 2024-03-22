package com.backend.rentamaq.repository;

import com.backend.rentamaq.entity.Reservacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservacionRepository extends JpaRepository<Reservacion, Long> {
    Reservacion findByProductoId(long productoId);

    List<Reservacion> findAllByProductoId(long productoId);

    List<Reservacion> findAllByUserId(long userId);
}
