import Calidad from "../imagenes/svg_24.png";
import Precio from "../imagenes/svg_25.png";
import Disponibilidad from "../imagenes/svg_26.png";
import Soporte from "../imagenes/svg_27.png";

export default function Nosotros() {
  return (
    <section className="bg-gray-50 py-16" id="nosotros">
      <article className="container mx-auto px-4">

        <section className="text-center mb-12">
          <h2 className="mb-4">¿Por qué elegir Manogear?</h2>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <article className="text-center space-y-3">
            <section className="w-16 h-16 rounded-full bg-[var(--manogear-blue)] text-white flex items-center justify-center mx-auto">
              <figure className="w-8 h-8 icon-white">
                <img src={Calidad} alt="Foto Calidad" />
              </figure>
            </section>
            <h3>Calidad Garantizada</h3>
            <p className="text-muted-foreground">
              Herramientas y servicios de la más alta calidad verificados por nuestro equipo.
            </p>
          </article>

          <article className="text-center space-y-3">
            <section className="w-16 h-16 rounded-full bg-[var(--manogear-orange)] text-white flex items-center justify-center mx-auto">
              <figure className="w-8 h-8 icon-white">
                <img src={Precio} alt="Foto Precio" />
              </figure>
            </section>
            <h3>Mejores Precios</h3>
            <p className="text-muted-foreground">
              Tarifas competitivas y descuentos especiales para alquileres prolongados.
            </p>
          </article>

          <article className="text-center space-y-3">
            <section className="w-16 h-16 rounded-full bg-[var(--manogear-green)] text-white flex items-center justify-center mx-auto">
              <figure className="w-8 h-8 icon-white">
                <img src={Disponibilidad} alt="Foto Disponibilidad" />
              </figure>
            </section>
            <h3>Disponibilidad 24/7</h3>
            <p className="text-muted-foreground">
              Realiza tus reservas en cualquier momento del día, todos los días del año.
            </p>
          </article>

          <article className="text-center space-y-3">
            <section className="w-16 h-16 rounded-full bg-[var(--manogear-red)] text-white flex items-center justify-center mx-auto">
              <figure className="w-8 h-8 icon-white">
                <img src={Soporte} alt="Foto Soporte" />
              </figure>
            </section>
            <h3>Soporte Experto</h3>
            <p className="text-muted-foreground">
              Nuestro equipo de expertos está listo para ayudarte en cada paso del proceso.
            </p>
          </article>

        </section>
      </article>
    </section>
  );
}
