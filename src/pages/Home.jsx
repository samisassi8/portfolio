import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home_container">
      <div className="info">
        <h1 id="homeH1">Sami BRAHIM</h1>
        <h2 id="homeH2">Développeur web React</h2>
        <a href="#Profil">
          <button className="btn">QUI SUIS-JE ?</button>
        </a>
      </div>
    </div>
  );
}
