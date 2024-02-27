CREATE DATABASE  IF NOT EXISTS `db_rentamaq_backend` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_rentamaq_backend`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_rentamaq_backend
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text,
  `nombre` varchar(255) DEFAULT NULL,
  `url_imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Se denomina taladradora o taladro a la máquina o herramienta con la que se mecanizan la mayoría de los agujeros que se hacen a las piezas en los talleres mecánicos.','Taladro','http://localhost:8080/imagenes/taladro.jpg'),(2,'Herramienta de percusión utilizada para golpear directa o indirectamente​ una pieza, causando su desplazamiento.','Martillo','http://localhost:8080/imagenes/martillo.jpg'),(3,'Se usa predominantemente en entornos de trabajo, como sitios industriales o de construcción, para proteger la cabeza de lesiones debido a la caída de objetos, impacto con otros objetos, escombros, lluvia y descargas eléctricas.','Casco de seguridad','http://localhost:8080/imagenes/cascodeseguridad.jpg'),(4,'Anteojos protectores que normalmente se usan para evitar la entrada de materiales, como por ejemplo la madera, trozos de metales, agua o productos químicos en los ojos.','Gafas de seguridad','http://localhost:8080/imagenes/gafasdeseguridad.jpg'),(5,' Se trata de equipo cuyo principal propósito consiste en desplazar tierra y otros materiales. Son fácilmente reconocibles, ya que cuentan con un brazo móvil, un cucharón o balde y una cabina rotatoria.','Excavadora','http://localhost:8080/imagenes/excavadora.jpg'),(6,'Máquina pesada de construcción que se utiliza para cargar materiales en camiones, tolvas o contenedores.','Cargador frontal','http://localhost:8080/imagenes/cargadorfrontal.png'),(7,'Aparato o máquina empleada para mezclar los componentes del concreto, tales como el cemento, la arena, la piedra y el agua.','Mezcladora de concreto','http://localhost:8080/imagenes/mezcladoradeconcreto.jpg'),(8,'Aparato que trata el concreto en la etapa de acabado en los procesos de Flotación y Allanado, alisando detalladamente la superficie quemándola y nivelándola.','Allanadora de concreto','http://localhost:8080/imagenes/allanadoradeconcreto.png'),(9,'Dispositivo que sirve para el levantamiento y translación de diferentes tipos de cargas pesadas.','Polipasto de cadena','http://localhost:8080/imagenes/polipastomanual.jpg'),(10,'Instrumento de medición formado por una delgada cinta metálica flexible y auto enrollable para medir longitudes y distancias.','Cinta metrica','http://localhost:8080/imagenes/cintametrica.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-27  9:23:07
