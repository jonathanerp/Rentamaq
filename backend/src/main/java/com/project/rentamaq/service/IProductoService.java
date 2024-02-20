package com.project.rentamaq.service;

import com.project.rentamaq.dto.entrada.ProductoEntradaDto;
import com.project.rentamaq.dto.salida.ProductoSalidaDto;

public interface IProductoService {

    ProductoSalidaDto guardarProducto(ProductoEntradaDto productoEntradaDto);
}
