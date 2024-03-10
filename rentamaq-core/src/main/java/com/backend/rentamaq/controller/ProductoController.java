package com.backend.rentamaq.controller;

import com.backend.rentamaq.dto.entrada.ProductoEntradaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;
import com.backend.rentamaq.service.impl.ProductoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/productos")
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping("guardar")
    public ResponseEntity<ProductoSalidaDto> guardarProducto(@Valid @RequestBody @ModelAttribute ProductoEntradaDto productoEntradaDto) {
        System.out.println(productoEntradaDto);
        return new ResponseEntity<>(productoService.guardarProducto(productoEntradaDto), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<ProductoSalidaDto>> listarProductos() {
        return new ResponseEntity<>(productoService.listarProductos(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductoSalidaDto> obtenerProductoPorId(@PathVariable Long id) {
        return new ResponseEntity<>(productoService.buscarProductoPorId(id), HttpStatus.OK);
    }

    @DeleteMapping("eliminar/{id}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Long id) {
        productoService.eliminarPaciente(id);
        return new ResponseEntity<>("Producto eliminado correctamente", HttpStatus.OK);
    }

}
