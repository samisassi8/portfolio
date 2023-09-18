// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Competences from "./pages/Competences";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default App;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
