import React, { useState } from "react";
import HerramientasEstaticas from "./HerramientasEstaticas";
import HerramientasAPI from "./HerramientasAPI";
import ServiciosEstaticos from "./ServiciosEstaticos";
import ServiciosAPI from "./ServiciosAPI"; 

export default function Catalogo() {
    const [activeTab, setActiveTab] = useState("herramientas");

    return (
        <section className="container mx-auto px-4 py-16">
            <article className="text-center mb-12">
                <h2 className="mb-4">Explora Nuestro Catálogo</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Descubre nuestra amplia selección de herramientas profesionales y servicios especializados para llevar tu proyecto al siguiente nivel.
                </p>
            </article>

            <article className="flex flex-col gap-2 w-full" data-slot="tabs">
                <section
                    role="tablist"
                    aria-orientation="horizontal"
                    tabIndex={0}
                    data-orientation="horizontal"
                    className="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full max-w-md mx-auto grid-cols-2 mb-8"
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "herramientas"}
                        aria-controls="content-herramientas"
                        id="trigger-herramientas"
                        tabIndex={-1}
                        onClick={() => setActiveTab("herramientas")}
                        className={`${activeTab === "herramientas"
                                ? "bg-card dark:text-foreground dark:border-input dark:bg-input/30 text-foreground border-transparent"
                                : "text-muted-foreground"
                            } inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1`}
                    >
                        Herramientas
                    </button>

                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "servicios"}
                        aria-controls="content-servicios"
                        id="trigger-servicios"
                        tabIndex={-1}
                        onClick={() => setActiveTab("servicios")}
                        className={`${activeTab === "servicios"
                                ? "bg-card dark:text-foreground dark:border-input dark:bg-input/30 text-foreground border-transparent"
                                : "text-muted-foreground"
                            } inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1`}
                    >
                        Servicios
                    </button>
                </section>
                
                <section data-slot="tabs-content">
                    {activeTab === "herramientas" ? (
                        <article
                            id="content-herramientas"
                            role="tabpanel"
                            aria-labelledby="trigger-herramientas"
                            tabIndex={0}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                        >
                            <HerramientasEstaticas />
                            <HerramientasAPI />
                        </article>
                    ) : (
                        <article
                            id="content-servicios"
                            role="tabpanel"
                            aria-labelledby="trigger-servicios"
                            tabIndex={0}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                        >
                            <ServiciosEstaticos />
                            <ServiciosAPI />
                        </article>
                    )}
                </section>
            </article>
        </section>
    );
}
