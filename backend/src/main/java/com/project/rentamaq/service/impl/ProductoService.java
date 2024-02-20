package com.project.rentamaq.service.impl;

import com.project.rentamaq.dto.entrada.ProductoEntradaDto;
import com.project.rentamaq.dto.salida.ProductoSalidaDto;
import com.project.rentamaq.entity.Producto;
import com.project.rentamaq.repository.ProductoRepository;
import com.project.rentamaq.service.IProductoService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ProductoService implements IProductoService {

    private final Logger LOGGER = LoggerFactory.getLogger(ProductoService.class);
    private final ProductoRepository productoRepository;
    private final ModelMapper modelMapper;

    public ProductoService(ProductoRepository productoRepository, ModelMapper modelMapper) {
        this.productoRepository = productoRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public ProductoSalidaDto guardarProducto(ProductoEntradaDto producto) {
        Producto prodGuardado = productoRepository.save(dtoEntradaAEntidad(producto));
        ProductoSalidaDto productoSalidaDto = entidadADtoSalida(prodGuardado);
        LOGGER.info("Producto guardado: {}", productoSalidaDto);
        return productoSalidaDto;
    }

    private Producto dtoEntradaAEntidad(ProductoEntradaDto productoEntradaDto) {
        return modelMapper.map(productoEntradaDto, Producto.class);
    }

    private ProductoSalidaDto entidadADtoSalida(Producto producto) {
        return modelMapper.map(producto, ProductoSalidaDto.class);
    }
}
