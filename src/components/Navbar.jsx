import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <li>
        <Link to="/">
          <img src={logo} alt="logo link to homepage" className="logo" />
        </Link>
      </li>
      <ul className={`menu ${showMenu ? "flex" : "hidden"}`}>
        <li>
          <Link to="/" className="menu-item" href="#" onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/Profil"
            className="menu-item"
            href="Profil"
            onClick={closeMenu}
          >
            Profil
          </Link>
        </li>
        <li>
          <Link
            to="/Competences"
            className="menu-item"
            href="Competences"
            onClick={closeMenu}
          >
            Competences
          </Link>
        </li>
        <li>
          <Link
            to="/Portfolio"
            className="menu-item"
            href="Portfolio"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="menu-item"
            href="Contact"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button onClick={() => setShowMenu(!showMenu)} className="toggle-button">
        <img
          className="button-icon"
          src={showMenu ? close : hamburger}
          alt={showMenu ? "show menu" : "hide menu"}
        />
      </button>
    </nav>
  );
}
