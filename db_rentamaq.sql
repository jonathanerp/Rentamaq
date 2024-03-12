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
-- Table structure for table `caracteristica`
--

DROP TABLE IF EXISTS `caracteristica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristica` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `url_imagen` varchar(255) DEFAULT NULL,
  `producto_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbop4wacyp9expfxjdt0iohkvo` (`producto_id`),
  CONSTRAINT `FKbop4wacyp9expfxjdt0iohkvo` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristica`
--

LOCK TABLES `caracteristica` WRITE;
/*!40000 ALTER TABLE `caracteristica` DISABLE KEYS */;
INSERT INTO `caracteristica` VALUES (1,'Altura de 32 cm','http://localhost:8080/imagenes/caracteristicas/altura.png',1),(2,'Ancho de 8.6 cm','http://localhost:8080/imagenes/caracteristicas/ancho.png',1),(3,'Largo de 21.8 cm','http://localhost:8080/imagenes/caracteristicas/largo.png',1),(4,'Peso de 1.95 kg','http://localhost:8080/imagenes/caracteristicas/peso.png',1),(5,'Incluye bateria de 18 v','http://localhost:8080/imagenes/caracteristicas/bateria.png',1),(6,'Incluye cargador','http://localhost:8080/imagenes/caracteristicas/cargador.png',1),(7,'Altura de 16.3 cm','http://localhost:8080/imagenes/caracteristicas/altura.png',2),(8,'Ancho de 6.7 cm','http://localhost:8080/imagenes/caracteristicas/ancho.png',2),(9,'Largo de 10.7 cm','http://localhost:8080/imagenes/caracteristicas/largo.png',2),(10,'Peso de 0.4 kg','http://localhost:8080/imagenes/caracteristicas/peso.png',2),(11,'Cabeza de acero','http://localhost:8080/imagenes/caracteristicas/acero.png',2),(12,'Mango de polipropileno','http://localhost:8080/imagenes/caracteristicas/polipropileno.png',2),(13,'Talla ajustable','http://localhost:8080/imagenes/caracteristicas/tallaajustable.png',3),(14,'Peso de 0.3 kg','http://localhost:8080/imagenes/caracteristicas/peso.png',3),(15,'Casco de polipropileno','http://localhost:8080/imagenes/caracteristicas/polipropileno.png',3),(16,'Aislamiento electrico','http://localhost:8080/imagenes/caracteristicas/aislamientoelectrico.png',3),(17,'Aguanta temperatura de hasta 50°C','http://localhost:8080/imagenes/caracteristicas/temperatura.png',3),(18,'Tiene certificado EN3972012 + A12012','http://localhost:8080/imagenes/caracteristicas/certificado.png',3),(19,'Patilla ajustable','http://localhost:8080/imagenes/caracteristicas/tallaajustable.png',4),(20,'Peso de 0.029 kg','http://localhost:8080/imagenes/caracteristicas/peso.png',4),(21,'Marco de PVC','http://localhost:8080/imagenes/caracteristicas/marco.png',4),(22,'Lente de policarbonato','http://localhost:8080/imagenes/caracteristicas/policarbonato.png',4),(23,'Tiene proteccion UV','http://localhost:8080/imagenes/caracteristicas/proteccionuv.png',4),(24,'Tiene certificado ANSI Z87.1','http://localhost:8080/imagenes/caracteristicas/certificado.png',4),(25,'Peso de 37500 kg','http://localhost:8080/imagenes/caracteristicas/peso.png',5),(26,'Potencia neta del motor 223 kw','http://localhost:8080/imagenes/caracteristicas/motor.png',5),(27,'Cilindrada del motor 7.01 L','http://localhost:8080/imagenes/caracteristicas/cilindrada.png',5),(28,'Capacidad de tanque de combustible 600 L','http://localhost:8080/imagenes/caracteristicas/tanquedecombustible.png',5),(29,'Fuerza de excavacion del cucharon 210 kn','http://localhost:8080/imagenes/caracteristicas/cucharon.png',5),(30,'Profundidad maxima de excavacion 5690 mm','http://localhost:8080/imagenes/caracteristicas/profundidad.png',5),(31,'Peso de 15615 kg','http://localhost:8080/imagenes/caracteristicas/peso.png',6),(32,'Potencia neta del motor 106 kw','http://localhost:8080/imagenes/caracteristicas/motor.png',6),(33,'Cilindrada del motor 6.8 L','http://localhost:8080/imagenes/caracteristicas/cilindrada.png',6),(34,'Capacidad de tanque de combustible 220 L','http://localhost:8080/imagenes/caracteristicas/tanquedecombustible.png',6),(35,'Frenos (según ISO 3450)','http://localhost:8080/imagenes/caracteristicas/frenos.png',6),(36,'Incluye 2  baterias de 12 v','http://localhost:8080/imagenes/caracteristicas/bateria.png',6),(37,'Peso de 82 kg','http://localhost:8080/imagenes/caracteristicas/peso.png',7),(38,'Altura del tambor 70cm','http://localhost:8080/imagenes/caracteristicas/altura.png',7),(39,'Diametro del tambor 65.5cm','http://localhost:8080/imagenes/caracteristicas/diametro.png',7),(40,'Capacidad de la tolva 250 litros','http://localhost:8080/imagenes/caracteristicas/tolva.png',7),(41,'Incluye motor electrico de 1050 w','http://localhost:8080/imagenes/caracteristicas/motorelectrico.png',7),(42,'Incluye ruedas rigidas','http://localhost:8080/imagenes/caracteristicas/ruedasrigidas.png',7);
/*!40000 ALTER TABLE `caracteristica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` text,
  `titulo` varchar(255) DEFAULT NULL,
  `url_imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,' Son un grupo de máquinas utilizadas en actividades de construcción con la finalidad de:​retirar parte de la capa del suelo, de forma de modificar el perfil de la tierra según los requerimientos del proyecto de ingeniería específico.','MAQUINARIA PESADA','http://localhost:8080/imagenes/categorias/maquinariapesada.png'),(2,'Son herramientas pequeñas de albañilería que facilitan las tareas y los procesos que forman parte del trabajo propio del obrero constructor o albañil.','HERRAMIENTAS PEQUEÑAS','http://localhost:8080/imagenes/categorias/herramientapequeña.png'),(3,'Son ropa y equipos de seguridad para evitar accidentes y lesiones en el trabajo que estén realizando.','INDUMENTARIA','http://localhost:8080/imagenes/categorias/indumentaria.png'),(4,'Son las herramientas y materiales utilizados para llevar a cabo los proyectos.','EQUIPOS PARA CONSTRUCCION','http://localhost:8080/imagenes/categorias/equipoconstruccion.png');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

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
  `categoria_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKmlgw7js72hh2xtd4mvpdqfsbe` (`nombre`),
  KEY `FKpg3xiei77fmdbpx20n8i9txs6` (`categoria_id`),
  CONSTRAINT `FKpg3xiei77fmdbpx20n8i9txs6` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Se denomina taladradora o taladro a la máquina o herramienta con la que se mecanizan la mayoría de los agujeros que se hacen a las piezas en los talleres mecánicos.','Taladro','http://localhost:8080/imagenes/taladro.jpg',2),(2,'Herramienta de percusión utilizada para golpear directa o indirectamente​ una pieza, causando su desplazamiento.','Martillo','http://localhost:8080/imagenes/martillo.jpg',2),(3,'Se usa predominantemente en entornos de trabajo, como sitios industriales o de construcción, para proteger la cabeza de lesiones debido a la caída de objetos, impacto con otros objetos, escombros, lluvia y descargas eléctricas.','Casco de seguridad','http://localhost:8080/imagenes/cascodeseguridad.jpg',3),(4,'Anteojos protectores que normalmente se usan para evitar la entrada de materiales, como por ejemplo la madera, trozos de metales, agua o productos químicos en los ojos.','Gafas de seguridad','http://localhost:8080/imagenes/gafasdeseguridad.jpg',3),(5,' Se trata de equipo cuyo principal propósito consiste en desplazar tierra y otros materiales. Son fácilmente reconocibles, ya que cuentan con un brazo móvil, un cucharón o balde y una cabina rotatoria.','Excavadora','http://localhost:8080/imagenes/excavadora.jpg',1),(6,'Máquina pesada de construcción que se utiliza para cargar materiales en camiones, tolvas o contenedores.','Cargador frontal','http://localhost:8080/imagenes/cargadorfrontal.jpg',1),(7,'Aparato o máquina empleada para mezclar los componentes del concreto, tales como el cemento, la arena, la piedra y el agua.','Mezcladora de concreto','http://localhost:8080/imagenes/mezcladoradeconcreto.jpg',4);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_CLIENT');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKt7e7djp752sqn6w22i6ocqy6q` (`role_id`),
  CONSTRAINT `FKj345gk1bovqvfame88rcx7yyx` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKt7e7djp752sqn6w22i6ocqy6q` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-12 14:52:04
