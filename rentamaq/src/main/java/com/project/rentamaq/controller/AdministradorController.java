package com.project.rentamaq.controller;

import com.project.rentamaq.dto.entrada.ProductoEntradaDto;
import com.project.rentamaq.entity.Producto;
import com.project.rentamaq.repository.ProductoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collections;
import java.util.List;

@Controller
@RequestMapping("administrador")
public class AdministradorController {

    private final ProductoRepository productoRepository;

    public AdministradorController(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    @GetMapping()
    public String listarProductos(Model model){
        List<Producto> productos = productoRepository.findAll();
        Collections.shuffle(productos);
        model.addAttribute("productos", productos);
        return "administrador";
    }

    @GetMapping("/guardar")
    public String guardarProducto(Model model){
        ProductoEntradaDto producto = new ProductoEntradaDto();
        model.addAttribute("producto", producto);
        return "guardarProducto";
    }
}


