import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
// import logo from "../assets/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="header">
      <nav className="navbar">
        {/* <li>
        <RouterLink to="/">
          <img src={logo} alt="logo link to homepage" className="logo" />
        </RouterLink>
      </li> */}
        <div className={color ? "navbar navbar-bg" : "header"}>
          <ul className={`menu ${showMenu ? "flex" : "hidden"}`}>
            <li>
              <Link
                smooth
                to="/#Home"
                className="menu-item"
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#Profil"
                className="menu-item"
                onClick={closeMenu}
              >
                Profil
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#Competences"
                className="menu-item"
                onClick={closeMenu}
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#Portfolio"
                className="menu-item"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#Contact"
                className="menu-item"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="toggle-button"
        >
          <img
            className="button-icon"
            src={showMenu ? close : hamburger}
            alt={showMenu ? "hide menu" : "show menu"}
          />
        </button>
      </nav>
    </div>
  );
}
