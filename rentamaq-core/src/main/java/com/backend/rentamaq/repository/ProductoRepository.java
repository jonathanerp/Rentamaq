package com.backend.rentamaq.repository;

import com.backend.rentamaq.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoriaId(Long categoriaId);
    List<Producto> findByNombreStartingWith(String nombre);
    @Query("SELECT p FROM Producto p WHERE p.nombre LIKE CONCAT(:nombre, '%') AND p IN :productos")
    List<Producto> findByNombreStartingWithAndProductIn(String nombre, List<Producto> productos);

    @Query("SELECT p FROM Producto p WHERE p.id NOT IN (SELECT r.producto.id FROM Reservacion r WHERE r.inicioReservacion BETWEEN :inicio_reservacion AND :fin_reservacion)")
    List<Producto> findProductosFueraDeRangoDeFecha(LocalDate inicio_reservacion, LocalDate fin_reservacion);
}

