import Star from "../imagenes/svg_6.png";
import StarEmpty from "../imagenes/svg_16.png";

export default function ServiciosEstaticos() {
    return (
        <>
            <section className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <article className="relative h-48 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1703130931611-8daf760576cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzY0NTIxNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Servicio de Plomería"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-[var(--manogear-orange)] text-white text-xs px-2 py-0.5 rounded-md">
                        -10%
                    </span>
                    <span className="absolute top-2 left-2 bg-[var(--manogear-green)] text-white text-xs px-2 py-0.5 rounded-md">
                        Excelente
                    </span>
                </article>

                <article className="p-4 space-y-2 flex-1">
                    <h3>Servicio de Plomería</h3>
                    <p className="text-muted-foreground line-clamp-2">
                        Instalación, reparación y mantenimiento de sistemas de plomería residencial y comercial.
                    </p>

                    <section className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <figure key={i} className="icon-orange">
                                <img src={Star} alt="Estrella" />
                            </figure>
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">(5.0)</span>
                    </section>

                    <section className="flex items-baseline gap-2">
                        <span className="text-2xl" style={{ color: "var(--manogear-blue)" }}>
                            $72.00
                        </span>
                        <span className="text-sm line-through text-muted-foreground">$80.00</span>
                        <span className="text-sm text-muted-foreground">/día</span>
                    </section>

                    <p className="text-sm" style={{ color: "var(--manogear-green)" }}>
                        ✓ Disponible
                    </p>
                </article>

                <article className="p-4 pt-0">
                    <button
                        className="bg-primary text-primary-foreground h-9 px-4 py-2 rounded-md w-full flex items-center justify-center gap-2"
                        style={{ backgroundColor: "var(--manogear-green)" }}
                    >
                        <figure className="icon-white">
                            <img alt="Carrito" src="/src/imagenes/calendar.png" />
                        </figure>
                        Contratar
                    </button>
                </article>
            </section>

            <section className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <article className="relative h-48 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1759542877886-39d81e8f2eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc2VydmljZSUyMHdvcmtlcnxlbnwxfHx8fDE3NjQ1MjE0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Servicio Eléctrico"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[var(--manogear-blue)] text-white text-xs px-2 py-0.5 rounded-md">
                        Bueno
                    </span>
                </article>

                <article className="p-4 space-y-2 flex-1">
                    <h3>Servicio Eléctrico</h3>
                    <p className="text-muted-foreground line-clamp-2">
                        Instalación eléctrica profesional, reparaciones y certificaciones para hogares y empresas.
                    </p>

                    <section className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                            <figure key={i} className="icon-orange">
                                <img src={Star} alt="Estrella" />
                            </figure>
                        ))}
                        <figure>
                            <img src={StarEmpty} alt="Estrella vacía" />
                        </figure>
                        <span className="text-sm text-muted-foreground ml-1">(4.0)</span>
                    </section>

                    <section className="flex items-baseline gap-2">
                        <span className="text-2xl" style={{ color: "var(--manogear-blue)" }}>
                            $90.00
                        </span>
                        <span className="text-sm text-muted-foreground">/día</span>
                    </section>

                    <p className="text-sm" style={{ color: "var(--manogear-green)" }}>
                        ✓ Disponible
                    </p>
                </article>

                <article className="p-4 pt-0">
                    <button
                        className="bg-primary text-primary-foreground h-9 px-4 py-2 rounded-md w-full flex items-center justify-center gap-2"
                        style={{ backgroundColor: "var(--manogear-green)" }}
                    >
                        <figure className="icon-white">
                            <img alt="Carrito" src="/src/imagenes/calendar.png" />
                        </figure>
                        Contratar
                    </button>
                </article>
            </section>

            <section className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <article className="relative h-48 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMHNlcnZpY2UlMjBob3VzZXxlbnwxfHx8fDE3NjQ1MjE0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Servicio de Pintura"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-[var(--manogear-orange)] text-white text-xs px-2 py-0.5 rounded-md">
                        -20%
                    </span>
                    <span className="absolute top-2 left-2 bg-[var(--manogear-green)] text-white text-xs px-2 py-0.5 rounded-md">
                        Excelente
                    </span>
                </article>

                <article className="p-4 space-y-2 flex-1">
                    <h3>Servicio de Pintura</h3>
                    <p className="text-muted-foreground line-clamp-2">
                        Pintura profesional de interiores y exteriores con acabados de alta calidad.
                    </p>

                    <section className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <figure key={i} className="icon-orange">
                                <img src={Star} alt="Estrella" />
                            </figure>
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">(5.0)</span>
                    </section>

                    <section className="flex items-baseline gap-2">
                        <span className="text-2xl" style={{ color: "var(--manogear-blue)" }}>
                            $60.00
                        </span>
                        <span className="text-sm line-through text-muted-foreground">$75.00</span>
                        <span className="text-sm text-muted-foreground">/día</span>
                    </section>

                    <p className="text-sm" style={{ color: "var(--manogear-green)" }}>
                        ✓ Disponible
                    </p>
                </article>

                <article className="p-4 pt-0">
                    <button
                        className="bg-primary text-primary-foreground h-9 px-4 py-2 rounded-md w-full flex items-center justify-center gap-2"
                        style={{ backgroundColor: "var(--manogear-green)" }}
                    >
                        <figure className="icon-white">
                            <img alt="Carrito" src="/src/imagenes/calendar.png" />
                        </figure>
                        Contratar
                    </button>
                </article>
            </section>
        </>
    );
}
