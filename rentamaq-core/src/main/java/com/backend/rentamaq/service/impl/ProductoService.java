package com.backend.rentamaq.service.impl;

import com.backend.rentamaq.dto.entrada.ProductoEntradaDto;
import com.backend.rentamaq.dto.salida.ProductoSalidaDto;
import com.backend.rentamaq.entity.Categoria;
import com.backend.rentamaq.entity.Producto;
import com.backend.rentamaq.repository.CategoriaRepository;
import com.backend.rentamaq.repository.ProductoRepository;
import com.backend.rentamaq.service.IProductoService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Collections;
import java.util.List;

@Service
public class ProductoService implements IProductoService {

    private final Logger LOGGER = LoggerFactory.getLogger(ProductoService.class);
    private final ProductoRepository productoRepository;

    private final CategoriaRepository categoriaRepository;
    private final ModelMapper modelMapper;

    public ProductoService(ProductoRepository productoRepository, CategoriaRepository categoriaRepository, ModelMapper modelMapper) {
        this.productoRepository = productoRepository;
        this.categoriaRepository = categoriaRepository;
        this.modelMapper = modelMapper;
    }

    private ProductoSalidaDto entidadADtoSalida(Producto producto) {
        return modelMapper.map(producto, ProductoSalidaDto.class);
    }

    @Override
    public ProductoSalidaDto guardarProducto(ProductoEntradaDto productoEntradaDto) {

        MultipartFile imagen = productoEntradaDto.getImagen();
        String nombreImagen = imagen.getOriginalFilename();
        String urlImagen = "http://localhost:8080/imagenes/" + nombreImagen;

        try {
            String ruta = "public/imagenes/";
            Path subirRuta = Paths.get(ruta);

            if(!Files.exists(subirRuta)){
                Files.createDirectories(subirRuta);
            }

            try (InputStream inputStream = imagen.getInputStream()){
                Files.copy(inputStream, Paths.get(ruta + nombreImagen), StandardCopyOption.REPLACE_EXISTING);
            }
        }catch (Exception ex){
            LOGGER.error("Excepcion: {}", ex.getMessage());
        }

        Producto producto = new Producto();
        producto.setNombre(productoEntradaDto.getNombre());
        producto.setDescripcion(productoEntradaDto.getDescripcion());
        producto.setUrlImagen(urlImagen);

        Categoria categoria = categoriaRepository.findById(productoEntradaDto.getCategoriaId()).orElse(null);
        producto.setCategoria(categoria);

        productoRepository.save(producto);
        ProductoSalidaDto productoSalidaDto = entidadADtoSalida(producto);
        LOGGER.info("Paciente guardado: {}", productoSalidaDto);

        return productoSalidaDto;
    }

    @Override
    public List<ProductoSalidaDto> listarProductos() {
        List<ProductoSalidaDto> listaProductos = new java.util.ArrayList<>(productoRepository.findAll().stream()
                .map(this::entidadADtoSalida).toList());

        LOGGER.info("Listado de todos los productos: {}", listaProductos);
        Collections.shuffle(listaProductos);
        return listaProductos;
    }

    @Override
    public ProductoSalidaDto buscarProductoPorId(Long id) {
        Producto productoBuscado = productoRepository.findById(id).orElse(null);

        ProductoSalidaDto productoSalidaDto = null;
        if (productoBuscado != null) {
            productoSalidaDto = entidadADtoSalida(productoBuscado);
            LOGGER.info("Producto encontrado: {}", productoSalidaDto);
        } else LOGGER.error("El id no se encuentra registrado en la base de datos");

        return productoSalidaDto;
    }

    @Override
    public void eliminarPaciente(Long id){
        if (buscarProductoPorId(id) != null) {
            productoRepository.deleteById(id);
            LOGGER.warn("Se ha eliminado el producto con id: {}", id);
        } else {
            LOGGER.error("No se ha encontrado el producto con id {}", id);
        }
    }

    public List<ProductoSalidaDto> listarProductosSinCategoria() {
        List<ProductoSalidaDto> listaProductosSinCategoria = new java.util.ArrayList<>(productoRepository.listarProductosSinCategoria().stream()
                .map(this::entidadADtoSalida).toList());
        LOGGER.info("Listado de todos los productos Sin categoria: {}", listaProductosSinCategoria);
        return listaProductosSinCategoria;
    }

    @Override
    public ProductoSalidaDto asignarCategoriaAProducto(Long productoId, Long categoriaId) {
        Producto productoBuscado = productoRepository.findById(productoId).orElse(null);
        Categoria categoriaBuscada = categoriaRepository.findById(categoriaId).orElse(null);

        ProductoSalidaDto productoSalidaDto = null;
        if (productoBuscado != null && categoriaBuscada != null ) {
            productoBuscado.setCategoria(categoriaBuscada);
            productoRepository.save(productoBuscado);
            productoSalidaDto = entidadADtoSalida(productoBuscado);
            LOGGER.info("Categoria asignada al producto: {}", productoSalidaDto);
        } else LOGGER.error("Alguno de los id no se encuentra registrado en la base de datos");

        return productoSalidaDto;
    }
}
