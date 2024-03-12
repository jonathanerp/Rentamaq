package com.backend.rentamaq.service;

import com.backend.rentamaq.dto.salida.CategoriaSalidaDto;

import java.util.List;

public interface ICategoriaService {
    List<CategoriaSalidaDto> listarCategorias();
}
