import React, { useEffect, useState } from "react";
import TarjetaProducto from "./TarjetaProducto";

export default function HerramientasAPI() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    console.log("Fetch ejecutado");
    fetch("https://raw.githubusercontent.com/rmornun12/Proyecto/refs/heads/main/api.json")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.herramientas);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar herramientas:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos dinámicos...</p>;

  return (
    <>
      {productos.map((item) => (
        <TarjetaProducto
          key={item.id}
          producto={{
            titulo: item.titulo,
            descripcion: item.descripcion,
            imagen: item.imagen,
            precio: item.precio,
            estrellas: item.estrellas,
            stock: item.stock, 
            precioAntes: item.precioAntes || null,
            descuento: item.descuento || null,
            etiqueta: item.etiqueta || null,
            colorEtiqueta: item.colorEtiqueta || null,
          }}
          tipo="herramienta"
          onAction={() =>
            alert(`Has solicitado el alquiler de: ${item.titulo}`)
          }
        />
      ))}
    </>
  );
}

