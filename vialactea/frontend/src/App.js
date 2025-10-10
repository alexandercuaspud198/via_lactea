import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom"; // Cambia BrowserRouter por HashRouter
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      <Toaster />
    </div>
  );
}

export default App;