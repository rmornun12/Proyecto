import { NavLink } from "react-router-dom";

import Logo from "../imagenes/svg_1.png";
import Cart from "../imagenes/svg_2.png";
import Menu from "../imagenes/svg_3.png";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <section className="container mx-auto px-4">
                <article className="flex h-16 items-center justify-between">

                    <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
                        <figure>
                            <img src={Logo} alt="Img llave Inglesa" className="icon-blue" />
                        </figure>
                        <span className="font-bold">Manogear</span>
                    </NavLink>

                    <nav
                        id="main-nav"
                        className="hidden md:flex items-center gap-6"
                    >
                        <NavLink to="/" className="hover:opacity-80 transition-opacity">
                            Inicio
                        </NavLink>

                        <NavLink to="/herramientas" className="hover:opacity-80 transition-opacity">
                            Herramientas
                        </NavLink>

                        <NavLink to="/servicios" className="hover:opacity-80 transition-opacity">
                            Servicios
                        </NavLink>

                        <NavLink to="/nosotros" className="hover:opacity-80 transition-opacity">
                            Nosotros
                        </NavLink>

                        <NavLink to="/contacto" className="hover:opacity-80 transition-opacity">
                            Contacto
                        </NavLink>
                    </nav>

                    <section className="flex items-center gap-3">
                        <button className="size-9 rounded-md">
                            <img src={Cart} alt="Carrito" />
                        </button>

                        <button className="hidden md:inline-flex h-9 px-4 rounded-md bg-primary text-white">
                            Iniciar sesión
                        </button>

                        <button className="md:hidden size-9 rounded-md">
                            <img src={Menu} alt="Menú" />
                        </button>
                    </section>

                </article>
            </section>
        </header>
    );
}
