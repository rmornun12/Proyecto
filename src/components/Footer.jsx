import Logo from "../imagenes/svg_1.png";
import Facebook from "../imagenes/svg_29.png";
import Twitter from "../imagenes/svg_30.png";
import Instagram from "../imagenes/svg_31.png";
import LinkedIn from "../imagenes/svg_32.png";
import Location from "../imagenes/svg_33.png";
import Phone from "../imagenes/svg_34.png";
import Mail from "../imagenes/svg_35.png";

export default function Footer() {
    return (
        <footer className="bg-[var(--manogear-black)] text-white">
            <section className="container mx-auto px-4 py-12">
                <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <section className="space-y-4">
                        <article className="flex items-center gap-2">
                            <figure>
                                <img
                                    src={Logo}
                                    alt="Img llave Inglesa"
                                    className="icon-blue"
                                />
                            </figure>
                            <span className="font-bold text-xl text-white">Manogear</span>
                        </article>

                        <p className="text-gray-300">
                            Tu plataforma de confianza para alquiler de herramientas y contratación de servicios profesionales.
                        </p>

                        <article className="flex gap-3">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <figure className="icon-dark-blue">
                                    <img src={Facebook} alt="Foto Facebook" />
                                </figure>
                            </a>

                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <figure className="icon-dark-blue">
                                    <img src={Twitter} alt="Foto Twitter" />
                                </figure>
                            </a>

                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <figure className="icon-orange">
                                    <img src={Instagram} alt="Foto Instagram" />
                                </figure>
                            </a>

                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <figure className="icon-dark-blue">
                                    <img src={LinkedIn} alt="Foto LinkedIn" />
                                </figure>
                            </a>
                        </article>
                    </section>

                    <section className="space-y-4">
                        <h4 className="text-lg">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#herramientas" className="hover:text-[var(--manogear-orange)] transition-colors">Herramientas</a></li>
                            <li><a href="#servicios" className="hover:text-[var(--manogear-orange)] transition-colors">Servicios</a></li>
                            <li><a href="#nosotros" className="hover:text-[var(--manogear-orange)] transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Cómo Funciona</a></li>
                            <li><a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Preguntas Frecuentes</a></li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h4 className="text-lg">Legal</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Política de Cookies</a></li>
                            <li><a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Política de Devoluciones</a></li>
                            <li><a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Aviso Legal</a></li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h4 className="text-lg">Contacto</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-2">
                                <figure className="icon-green">
                                    <img src={Location} alt="Foto Ubicación" />
                                </figure>
                                <span>Calle Principal 123, Madrid, España 28001</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <figure className="icon-green">
                                    <img src={Phone} alt="Foto Teléfono" />
                                </figure>
                                <a href="tel:+34900123456" className="hover:text-[var(--manogear-orange)] transition-colors">
                                    +34 900 123 456
                                </a>
                            </li>

                            <li className="flex items-center gap-2">
                                <figure className="icon-green">
                                    <img src={Mail} alt="Foto Correo" />
                                </figure>
                                <a href="mailto:info@manogear.com" className="hover:text-[var(--manogear-orange)] transition-colors">
                                    info@manogear.com
                                </a>
                            </li>
                        </ul>

                        <article className="pt-4">
                            <p className="text-sm text-gray-400">Horario de atención:</p>
                            <p className="text-sm text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                            <p className="text-sm text-gray-300">Sábados: 10:00 - 14:00</p>
                        </article>
                    </section>

                </article>

                <article className="h-px w-full my-8 bg-gray-700"></article>

                <article className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>© 2025 Manogear. Todos los derechos reservados.</p>
                    <section className="flex gap-4">
                        <a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Mapa del Sitio</a>
                        <span>|</span>
                        <a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Accesibilidad</a>
                        <span>|</span>
                        <a href="#" className="hover:text-[var(--manogear-orange)] transition-colors">Centro de Ayuda</a>
                    </section>
                </article>
            </section>
        </footer>
    );
}
