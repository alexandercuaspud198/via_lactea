import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";

function App() {
  // Manejar el scroll al cargar la página con hash
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 300); // Delay más largo para asegurar que todo esté renderizado
      }
    };

    // Ejecutar cuando el componente monte
    handleInitialHash();

    // También escuchar cambios de hash
    window.addEventListener('hashchange', handleInitialHash);
    
    return () => {
      window.removeEventListener('hashchange', handleInitialHash);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/via_lactea">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;