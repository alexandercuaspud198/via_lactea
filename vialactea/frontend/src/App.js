import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";

function App() {
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
        }, 300);
      }
    };

    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    
    return () => {
      window.removeEventListener('hashchange', handleInitialHash);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/">  {/* CAMBIADO AQUÍ */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;