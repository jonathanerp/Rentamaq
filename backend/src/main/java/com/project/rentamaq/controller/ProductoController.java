package com.project.rentamaq.controller;

import com.project.rentamaq.dto.entrada.ProductoEntradaDto;
import com.project.rentamaq.dto.salida.ProductoSalidaDto;
import com.project.rentamaq.service.IProductoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    private final IProductoService productoService;

    public ProductoController(IProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping("guardar")
    public ResponseEntity<ProductoSalidaDto> guardarProducto(@Valid @RequestBody ProductoEntradaDto producto) {
        return new ResponseEntity<>(productoService.guardarProducto(producto), HttpStatus.CREATED);
    }
}
