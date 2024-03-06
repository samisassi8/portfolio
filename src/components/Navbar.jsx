import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState(false);
  const [showToggleButton, setShowToggleButton] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
        setShowToggleButton(true);
      } else {
        setColor(false);
        setShowToggleButton(true);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", changeColor);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  useEffect(() => {
    setShowToggleButton(window.scrollY < 90);
  }, [color]);

  const closeMenu = () => {
    if (showMenu) setShowMenu(false);
  };

  function isMobile() {
    return window.innerWidth < 768;
  }

  return (
    // <div className="header">
    <nav className={`navbar ${color ? "opaque" : ""}`}>
      {/* <li>
        <RouterLink to="/">
          <img src={logo} alt="logo link to homepage" className="logo" />
        </RouterLink>
      </li> */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`toggle-button ${showToggleButton ? "show" : ""}`}
      >
        <img
          className="button-icon"
          src={showMenu ? close : hamburger}
          alt={showMenu ? "show menu" : "hide menu"}
        />
      </button>
      <div className={color ? "navbar navbar-bg" : "header"}>
        <ul className={`menu ${showMenu ? "flex" : "hidden"}`}>
          <li>
            <Link
              smooth
              to="/#Home"
              className="menu-item"
              onClick={isMobile() ? closeMenu : undefined}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="/#Profil"
              className="menu-item"
              onClick={isMobile() ? closeMenu : undefined}
            >
              Profil
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="/#Competences"
              className="menu-item"
              onClick={isMobile() ? closeMenu : undefined}
            >
              Compétences
            </Link>
          </li>
          <li>
            {/* <Link
              smooth
              to="/#CardList"
              className="menu-item"
              onClick={isMobile() ? closeMenu : undefined}
            >
              Portfolio
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
    // </div>
  );
}
