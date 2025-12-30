import TarjetaProducto from "./TarjetaProducto";

export default function HerramientasEstaticas() {
    const herramientas = [
        {
            id: 1,
            titulo: "Taladro Profesional",
            descripcion: "Taladro de percusión de alta potencia, ideal para construcción.",
            imagen: "https://images.unsplash.com/photo-1755168648692-ef8937b7e63e",
            estrellas: 5,
            precio: 12.79,
            precioAntes: 15.99,
            stock: 12,
            descuento: 20,
            etiqueta: "Excelente",
            colorEtiqueta: "var(--manogear-green)",
        },
        {
            id: 2,
            titulo: "Martillo Demoledor",
            descripcion: "Martillo eléctrico de gran potencia para demoliciones.",
            imagen: "https://images.unsplash.com/photo-1742828721926-6010895aa72d",
            estrellas: 4,
            precio: 25.5,
            stock: 5,
            etiqueta: "Bueno",
            colorEtiqueta: "var(--manogear-blue)",
        },
        {
            id: 3,
            titulo: "Escalera Telescópica",
            descripcion: "Escalera extensible de aluminio, resistente y ligera hasta 5 m.",
            imagen: "https://images.unsplash.com/photo-1738348157125-339841af31fd",
            estrellas: 5,
            precio: 10.2,
            precioAntes: 12,
            stock: 8,
            descuento: 15,
            etiqueta: "Excelente",
            colorEtiqueta: "var(--manogear-green)",
        },
    ];

    return (
        <>
            {herramientas.map((h) => (
                <TarjetaProducto
                    key={h.id}
                    producto={h}
                    tipo="herramienta"
                    onAction={() => alert(`Has alquilado: ${h.titulo}`)}
                />
            ))}
        </>
    );
}
