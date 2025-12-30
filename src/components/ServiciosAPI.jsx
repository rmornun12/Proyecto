import React, { useEffect, useState } from "react";
import TarjetaProducto from "./TarjetaProducto";

export default function ServiciosAPI() {
    const [servicios, setServicios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/rmornun12/Proyecto/refs/heads/main/api.json")
            .then((res) => res.json())
            .then((data) => {
                setServicios(data.servicios);
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error cargando servicios:", error);
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando servicios dinámicos...</p>;

    return (
        <>
            {servicios.map((item) => (
                <TarjetaProducto
                    key={item.id}
                    producto={{
                        titulo: item.titulo,
                        descripcion: item.descripcion,
                        imagen: item.imagen,
                        precio: item.precio,
                        estrellas: item.estrellas,
                        disponible: item.disponible,
                    }}
                    tipo="servicio"
                    onAction={() => alert(`Has solicitado el servicio: ${item.titulo}`)}
                />
            ))}
        </>
    );
}
