package com.backend.rentamaq.service;

import com.backend.rentamaq.dto.entrada.CategoriaEntradaDto;
import com.backend.rentamaq.dto.entrada.ProductoEntradaDto;
import com.backend.rentamaq.dto.salida.CategoriaSalidaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;

import java.util.List;

public interface ICategoriaService {
    List<CategoriaSalidaDto> listarCategorias();

    CategoriaSalidaDto buscarCategoriaPorId(Long id);

    CategoriaSalidaDto guardarCategoria(CategoriaEntradaDto categoria);
}
