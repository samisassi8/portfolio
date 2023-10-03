// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Competences from "./pages/Competences";
// import Card from "./pages/CardList";
import Contact from "./pages/Contact";

export default App;

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Profil id="profil" />
      <Competences id="Competences" />
      {/* <Card /> */}
      <Contact />
    </Router>
  );
}
