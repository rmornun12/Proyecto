-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2025 a las 21:54:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `manogear2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquileres`
--

CREATE TABLE `alquileres` (
  `ID_ALQUILER` int(11) NOT NULL,
  `ID_USUARIO` int(11) NOT NULL,
  `ID_HERRAMIENTA` int(11) DEFAULT NULL,
  `ID_SERVICIO` int(11) DEFAULT NULL,
  `FECHA_ALQUILER` datetime DEFAULT current_timestamp(),
  `FECHA_INICIO` date NOT NULL,
  `FECHA_FIN` date NOT NULL,
  `ESTADO` enum('ACTIVO','FINALIZADO','CANCELADO') NOT NULL,
  `APROBADO` enum('PENDIENTE','APROBADO','RECHAZADO') NOT NULL DEFAULT 'PENDIENTE',
  `CANTIDAD` int(11) NOT NULL,
  `PRECIO_DIARIO` decimal(10,2) NOT NULL,
  `DESCUENTO` decimal(10,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `ID_USUARIO` int(11) NOT NULL,
  `ID_HERRAMIENTA` int(11) NOT NULL,
  `ID_SERVICIO` int(11) NOT NULL,
  `CALIFICACION` int(11) NOT NULL CHECK (`CALIFICACION` between 1 and 5),
  `COMENTARIO` text DEFAULT NULL,
  `FECHA_CALIFICACION` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuracion_global`
--

CREATE TABLE `configuracion_global` (
  `ID_CONFIGURACION` int(11) NOT NULL,
  `CLAVE` varchar(50) NOT NULL,
  `VALOR` varchar(255) NOT NULL,
  `DESCRIPCION` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `herramientas`
--

CREATE TABLE `herramientas` (
  `ID_HERRAMIENTA` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `DESCRIPCION` text NOT NULL,
  `ESTADO` enum('EXCELENTE','BUENO','ACEPTABLE','MEDIOCRE') NOT NULL,
  `STOCK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `ID_NOTIFICACION` int(11) NOT NULL,
  `ID_USUARIO` int(11) NOT NULL,
  `MENSAJE` varchar(200) NOT NULL,
  `TIPO` enum('ALQUILER','PAGO','CALIFICACION','RECORDATORIO','SISTEMA') NOT NULL,
  `REVISADA` tinyint(1) DEFAULT 0,
  `FECHA_CREACION` datetime DEFAULT current_timestamp(),
  `FECHA_LECTURA` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `ID_PAGO` int(11) NOT NULL,
  `ID_USUARIO` int(11) NOT NULL,
  `ID_ALQUILER` int(11) NOT NULL,
  `PRECIO_FINAL` decimal(10,2) NOT NULL,
  `METODO_PAGO` enum('TARJETA','EFECTIVO','PAYPAL','TRANSFERENCIA') NOT NULL,
  `ESTADO_PAGO` enum('PENDIENTE','COMPLETADO','FALLIDO') NOT NULL,
  `FECHA_PAGO` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `ID_SERVICIO` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `DESCRIPCION` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID_USUARIO` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `CORREO` varchar(50) NOT NULL,
  `CONTRASEÑA` varchar(50) NOT NULL,
  `ROL` enum('ADMIN','GESTOR','USUARIO','INVIADO') NOT NULL,
  `FECHA_REGISTRO` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquileres`
--
ALTER TABLE `alquileres`
  ADD PRIMARY KEY (`ID_ALQUILER`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`),
  ADD KEY `ID_HERRAMIENTA` (`ID_HERRAMIENTA`),
  ADD KEY `ID_SERVICIO` (`ID_SERVICIO`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`ID_USUARIO`,`ID_HERRAMIENTA`,`ID_SERVICIO`),
  ADD KEY `ID_HERRAMIENTA` (`ID_HERRAMIENTA`),
  ADD KEY `ID_SERVICIO` (`ID_SERVICIO`);

--
-- Indices de la tabla `configuracion_global`
--
ALTER TABLE `configuracion_global`
  ADD PRIMARY KEY (`ID_CONFIGURACION`);

--
-- Indices de la tabla `herramientas`
--
ALTER TABLE `herramientas`
  ADD PRIMARY KEY (`ID_HERRAMIENTA`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`ID_NOTIFICACION`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`ID_PAGO`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`),
  ADD KEY `ID_ALQUILER` (`ID_ALQUILER`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`ID_SERVICIO`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID_USUARIO`),
  ADD UNIQUE KEY `CORREO` (`CORREO`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alquileres`
--
ALTER TABLE `alquileres`
  MODIFY `ID_ALQUILER` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `configuracion_global`
--
ALTER TABLE `configuracion_global`
  MODIFY `ID_CONFIGURACION` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `herramientas`
--
ALTER TABLE `herramientas`
  MODIFY `ID_HERRAMIENTA` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `ID_NOTIFICACION` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `ID_PAGO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `ID_SERVICIO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID_USUARIO` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alquileres`
--
ALTER TABLE `alquileres`
  ADD CONSTRAINT `alquileres_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuarios` (`ID_USUARIO`),
  ADD CONSTRAINT `alquileres_ibfk_2` FOREIGN KEY (`ID_HERRAMIENTA`) REFERENCES `herramientas` (`ID_HERRAMIENTA`),
  ADD CONSTRAINT `alquileres_ibfk_3` FOREIGN KEY (`ID_SERVICIO`) REFERENCES `servicios` (`ID_SERVICIO`);

--
-- Filtros para la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuarios` (`ID_USUARIO`),
  ADD CONSTRAINT `calificaciones_ibfk_2` FOREIGN KEY (`ID_HERRAMIENTA`) REFERENCES `herramientas` (`ID_HERRAMIENTA`),
  ADD CONSTRAINT `calificaciones_ibfk_3` FOREIGN KEY (`ID_SERVICIO`) REFERENCES `servicios` (`ID_SERVICIO`);

--
-- Filtros para la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD CONSTRAINT `notificaciones_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuarios` (`ID_USUARIO`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuarios` (`ID_USUARIO`),
  ADD CONSTRAINT `pagos_ibfk_2` FOREIGN KEY (`ID_ALQUILER`) REFERENCES `alquileres` (`ID_ALQUILER`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
