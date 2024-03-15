package com.backend.rentamaq.controller;

import com.backend.rentamaq.dto.salida.CategoriaSalidaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;
import com.backend.rentamaq.service.ICategoriaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/categorias")
public class CategoriaController {
    private final ICategoriaService categoriaService;

    public CategoriaController(ICategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping()
    public ResponseEntity<List<CategoriaSalidaDto>> listarCategorias() {
        return new ResponseEntity<>(categoriaService.listarCategorias(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<CategoriaSalidaDto> obtenerCategoriaPorId(@PathVariable Long id) {
        return new ResponseEntity<>(categoriaService.buscarCategoriaPorId(id), HttpStatus.OK);
    }
}
