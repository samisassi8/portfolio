import "./Home.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Home() {
  return (
    <div className="Home_container" id="Home">
      <div className="info">
        <h1 id="homeH1">Sami BRAHIM</h1>
        <h2 id="homeH2">Gestionnaire</h2>
        <Link smooth to="#Profil">
          <button className="btn">QUI SUIS-JE ?</button>
        </Link>
      </div>
    </div>
  );
}
