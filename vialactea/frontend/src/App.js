import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";

// Componente que maneja el scroll cuando cambia el hash
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remover el # del hash
      const id = location.hash.slice(1);
      
      // Esperar a que el DOM esté listo
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/via_lactea">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;