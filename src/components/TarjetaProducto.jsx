import Star from "../imagenes/svg_6.png";
import StarEmpty from "../imagenes/svg_16.png";
import Cart from "../imagenes/svg_11.png";

export default function TarjetaProducto({ producto = {}, tipo, onAction }) {
  const {
    titulo = "",
    descripcion = "",
    imagen = "",
    estrellas = 0,
    precio = 0,
    disponible = null, 
    stock = null,      
    precioAntes = null,
    descuento = null,
    etiqueta = null,
    colorEtiqueta = null,
  } = producto || {};

  return (
    <section className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow flex flex-col mb-8">
      <article className="relative h-48">
        <img src={imagen} alt={titulo} className="w-full h-full object-cover" />
        {descuento && (
          <span className="absolute top-2 right-2 bg-[var(--manogear-orange)] text-white text-xs px-2 py-0.5 rounded-md">
            -{descuento}%
          </span>
        )}
        {etiqueta && (
          <span
            className="absolute top-2 left-2 text-white text-xs px-2 py-0.5 rounded-md"
            style={{ backgroundColor: colorEtiqueta }}
          >
            {etiqueta}
          </span>
        )}
      </article>

      <article className="p-4 space-y-2 flex-1">
        <h3>{titulo}</h3>
        <p className="text-muted-foreground line-clamp-2">{descripcion}</p>

        <section className="flex items-center gap-1">
          {[...Array(5)].map((_, i) =>
            i < estrellas ? (
              <figure key={i} className="icon-orange">
                <img src={Star} alt="Estrella" />
              </figure>
            ) : (
              <figure key={i}>
                <img src={StarEmpty} alt="Estrella vacía" />
              </figure>
            )
          )}
          <span className="text-sm text-muted-foreground ml-1">({estrellas}.0)</span>
        </section>

        <section className="flex items-baseline gap-2">
          <span className="text-2xl">${precio.toFixed(2)}</span>
          {precioAntes && (
            <span className="line-through text-sm text-muted-foreground">${precioAntes.toFixed(2)}</span>
          )}
          <span className="text-sm text-muted-foreground">/día</span>
        </section>

        {tipo === "servicio" && disponible !== null && (
          <p
            className="text-sm font-semibold"
            style={{ color: disponible ? "var(--manogear-green)" : "var(--manogear-red)" }}
          >
            {disponible ? "✓ Disponible" : "✗ No disponible"}
          </p>
        )}

        {tipo !== "servicio" && stock !== null && (
          <p className="text-sm text-muted-foreground">
            Stock disponible: <span className={stock > 5 ? "green" : "red"}>{stock}</span>
          </p>
        )}
      </article>

      <article className="p-4 pt-0">
        <button
          style={{
            backgroundColor: tipo === "servicio" ? "#16a34a" : "#3b82f6",
            color: "white",
          }}
          className="h-9 px-4 py-2 rounded-md w-full flex items-center justify-center gap-2"
          onClick={onAction}
        >
          <figure className="icon-white">
            <img src={tipo === "servicio" ? "/src/imagenes/calendar.png" : Cart} alt="Acción" />
          </figure>
          {tipo === "servicio" ? "Contratar" : "Alquilar"}
        </button>
      </article>
    </section>
  );
}
