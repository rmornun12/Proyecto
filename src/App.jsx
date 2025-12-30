/*
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Herramientas from "./pages/Herramientas";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/herramientas" element={<Herramientas />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
*/

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Herramientas from "./pages/Herramientas";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

import "./index.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Navigate to="/#nosotros" replace />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
