
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Products from "./components/Products";
import WellnessPrograms from "./components/WellnessPrograms";
import Business from "./components/Business";
import Contact from "./components/Contact";

// URL hash change ayinappudu respective section ki scroll avuthundhi
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

// All sections in one page
const HomePage = () => {
  return (
    <main className="scroll-smooth">

      <div id="home" className="scroll-mt-20">
        <HeroBanner />
      </div>

      <div id="about" className="scroll-mt-20">
        <About />
      </div>

      <div id="products" className="scroll-mt-20">
        <Products />
      </div>

      <div id="wellness-programs" className="scroll-mt-20">
        <WellnessPrograms />
      </div>

      <div id="business-opportunity" className="scroll-mt-20">
        <Business />
      </div>

      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>

    </main>
  );
};

const App = () => {
  return (
    <div>
      <Nav />
      <ScrollToHash />

      <Routes>
        {/* Main single-page website */}
        <Route path="/" element={<HomePage />} />

        {/* Old routes redirect to their sections */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/products" element={<Navigate to="/#products" replace />} />
        <Route
          path="/wellness-programs"
          element={<Navigate to="/#wellness-programs" replace />}
        />
        <Route
          path="/business-opportunity"
          element={<Navigate to="/#business-opportunity" replace />}
        />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />

        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/#home" replace />} />
      </Routes>
    </div>
  );
};

export default App;
