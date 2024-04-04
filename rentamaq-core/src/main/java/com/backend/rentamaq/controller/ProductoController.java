package com.backend.rentamaq.controller;

import com.backend.rentamaq.dto.entrada.ProductoEntradaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;
import com.backend.rentamaq.entity.Producto;
import com.backend.rentamaq.service.IProductoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/productos")
public class ProductoController {

    private final IProductoService productoService;

    public ProductoController(IProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping("guardar")
    public ResponseEntity<ProductoSalidaDto> guardarProducto(@Valid @ModelAttribute ProductoEntradaDto productoEntradaDto) {
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

    @PostMapping("/{productoId}/categoria/{categoriaId}")
    public ResponseEntity<ProductoSalidaDto> asignarCategoriaAProducto(@PathVariable Long productoId, @PathVariable Long categoriaId) {
        ProductoSalidaDto producto = productoService.asignarCategoriaAProducto(productoId, categoriaId);
        return ResponseEntity.ok().body(producto);
    }

    @GetMapping("categoria/{categoriaId}")
    public List<Producto> obtenerProductosPorCategoriaId(@PathVariable Long categoriaId) {
        return productoService.obtenerProductosPorCategoriaId(categoriaId);
    }

    @GetMapping("producto/{nombre}")
    public List<Producto> obtenerProductosPorNombre(@PathVariable String nombre) {
        return productoService.obtenerProductosPorNombre(nombre);
    }

    @GetMapping("fecha")
    public ResponseEntity<List<Producto>> obtenerProductosPorFecha( LocalDate fechaInicio, LocalDate fechaFin) {
        List<Producto> productos = productoService.obtenerProductosPorFecha(fechaInicio, fechaFin);
        return ResponseEntity.ok(productos);
    }

    @GetMapping("nombreyfecha")
    public ResponseEntity<List<Producto>> obtenerProductosPorNombreYFecha( String nombre, LocalDate fechaInicio, LocalDate fechaFin) {

        List<Producto> productos = productoService.obtenerProductosPorNombreYFecha(nombre, fechaInicio, fechaFin);
        return ResponseEntity.ok(productos);
    }
}


