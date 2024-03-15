package com.backend.rentamaq.service.impl;

import com.backend.rentamaq.dto.salida.CategoriaSalidaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;
import com.backend.rentamaq.entity.Categoria;
import com.backend.rentamaq.entity.Producto;
import com.backend.rentamaq.repository.CategoriaRepository;
import com.backend.rentamaq.repository.ProductoRepository;
import com.backend.rentamaq.service.ICategoriaService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService implements ICategoriaService {
    private final Logger LOGGER = LoggerFactory.getLogger(CategoriaService.class);
    private final CategoriaRepository categoriaRepository;
    private final ProductoRepository productoRepository;
    private final ModelMapper modelMapper;

    public CategoriaService(CategoriaRepository categoriaRepository, ModelMapper modelMapper, ProductoRepository productoRepository) {
        this.categoriaRepository = categoriaRepository;
        this.productoRepository = productoRepository;
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

    public CategoriaSalidaDto buscarCategoriaPorId(Long id) {
        Optional<Categoria> categoria = categoriaRepository.findById(id);

        CategoriaSalidaDto categoriaSalidaDto = null;
        if (categoria.isPresent()) {
            List<Producto> productos = productoRepository.findByCategoriaId(categoria.get().getId());
            categoriaSalidaDto = entidadADtoSalida(categoria.get());
            categoriaSalidaDto.setProducts(productos);

            LOGGER.info("Categoria encontrado: {}", categoriaSalidaDto);
        } else LOGGER.error("El id no se encuentra registrado en la base de datos");

        return categoriaSalidaDto;
    }
}
