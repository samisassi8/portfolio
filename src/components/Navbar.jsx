import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="navbar">
      <ul className={`menu ${showMenu ? "flex" : "hidden"}`}>
        <li>
          <Link to="/">
            <img src={logo} alt="logo link to homepage" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/" className="menu-item" href="#">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/Profil" className="menu-item" href="Profil">
            Profil
          </Link>
        </li>
        <li>
          <Link to="/Competences" className="menu-item" href="Competences">
            Competences
          </Link>
        </li>
        <li>
          <Link to="/Portfolio" className="menu-item" href="Portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="menu-item" href="Contact">
            Contact
          </Link>
        </li>
      </ul>
      <button onClick={() => setShowMenu(!showMenu)} className="toggle-button">
        <img
          className="button-icon"
          src={showMenu ? close : hamburger}
          alt={showMenu ? "cacher le menu" : "Montrer le menu"}
        />
      </button>
    </nav>
  );
}
