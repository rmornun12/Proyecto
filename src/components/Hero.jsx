import ToolIcon from "../imagenes/svg_4.png";
import GearIcon from "../imagenes/svg_5.png";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-[var(--manogear-blue)] to-[var(--manogear-black)]">
            <article className="container mx-auto px-4 py-16 md:py-24">
                <section className="grid md:grid-cols-2 gap-8 items-center">

                    <article className="text-white space-y-6 z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl">
                            Alquila herramientas y servicios profesionales
                        </h1>

                        <p className="text-lg md:text-xl opacity-90">
                            La plataforma líder para alquiler de herramientas y contratación
                            de servicios. Encuentra todo lo que necesitas para tu proyecto,
                            con la mejor calidad y al mejor precio.
                        </p>

                        <section className="flex flex-wrap gap-4">
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md px-6 bg-[var(--manogear-orange)] text-white hover:bg-[var(--manogear-orange)]/90"
                            >
                                <figure className="icon-white">
                                    <img src={ToolIcon} alt="Foto Llave Inglesa" />
                                </figure>
                                Ver Herramientas
                            </button>

                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md px-6 bg-white text-[var(--manogear-black)] border border-white hover:bg-gray-100"
                            >
                                <figure>
                                    <img src={GearIcon} alt="Foto Engranaje" />
                                </figure>
                                Ver Servicios
                            </button>
                        </section>

                        <section className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                            <article>
                                <section className="text-3xl">500+</section>
                                <p className="text-sm opacity-75">Herramientas</p>
                            </article>

                            <article>
                                <section className="text-3xl">200+</section>
                                <p className="text-sm opacity-75">Servicios</p>
                            </article>

                            <article>
                                <section className="text-3xl">10k+</section>
                                <p className="text-sm opacity-75">Clientes</p>
                            </article>
                        </section>
                    </article>

                    <article className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1728362369426-1647a7fd09d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                            alt="Professional tools workshop"
                            className="w-full h-full object-cover"
                        />
                    </article>

                </section>
            </article>
        </section>
    );
}
