package com.backend.rentamaq.service;

import com.backend.rentamaq.dto.entrada.ProductoEntradaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;

import java.util.List;

public interface IProductoService {

    ProductoSalidaDto guardarProducto(ProductoEntradaDto producto);

    List<ProductoSalidaDto> listarProductos();

}
