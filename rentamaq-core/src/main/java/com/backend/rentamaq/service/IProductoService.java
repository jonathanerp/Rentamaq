package com.backend.rentamaq.service;

import com.backend.rentamaq.dto.entrada.ProductoEntradaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;
import com.backend.rentamaq.entity.Producto;

import java.time.LocalDate;
import java.util.List;

public interface IProductoService {

    ProductoSalidaDto guardarProducto(ProductoEntradaDto producto);

    List<ProductoSalidaDto> listarProductos();

    ProductoSalidaDto buscarProductoPorId(Long id);

    void eliminarPaciente(Long id);

    ProductoSalidaDto asignarCategoriaAProducto(Long productoId, Long categoriaId);

    List<Producto> obtenerProductosPorCategoriaId(Long categoriaId);

    List<Producto> obtenerProductosPorNombre(String nombre);

    List<Producto> obtenerProductosPorNombreYFecha(String nombre, LocalDate fechaInicio, LocalDate fechaFin);

    List<Producto> obtenerProductosPorFecha(LocalDate fechaInicio, LocalDate fechaFin);

}
