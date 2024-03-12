package com.backend.rentamaq.service.impl;

import com.backend.rentamaq.dto.salida.CategoriaSalidaDto;
import com.backend.rentamaq.entity.Categoria;
import com.backend.rentamaq.repository.CategoriaRepository;
import com.backend.rentamaq.service.ICategoriaService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService implements ICategoriaService {
    private final Logger LOGGER = LoggerFactory.getLogger(CategoriaService.class);
    private final CategoriaRepository categoriaRepository;

    private final ModelMapper modelMapper;

    public CategoriaService(CategoriaRepository categoriaRepository, ModelMapper modelMapper) {
        this.categoriaRepository = categoriaRepository;
        this.modelMapper = modelMapper;
    }

    private CategoriaSalidaDto entidadADtoSalida(Categoria categoria) {
        return modelMapper.map(categoria, CategoriaSalidaDto.class);
    }

    @Override
    public List<CategoriaSalidaDto> listarCategorias() {
        List<CategoriaSalidaDto> listaCategorias = new java.util.ArrayList<>(categoriaRepository.findAll().stream()
                .map(this::entidadADtoSalida).toList());

        LOGGER.info("Listado de todas las categorias: {}", listaCategorias);
        return listaCategorias;
    }
}
