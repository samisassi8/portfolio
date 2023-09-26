import "./Competences.css";
import node from "../assets/nodejs.png";
import sql from "../assets/sql.png";
import db from "../assets/db.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.svg";

export default function Competences() {
  return (
    <div id="#Competences" className="competences">
      <h2>Competences</h2>
      <p>
        Elles sont en constantes améliorations car je suis toujours à la
        recherche de nouvelles compétences. Le développement est pour moi la
        meilleure manière de toujours se surpasser afin d`assouvir ma passion .
      </p>
      <div className="competenceContainer">
        <h3 id="competencesH3">back-end</h3>
        <div className="backendIcons">
          <img src={sql} alt="sql icon" className="competencesIcons" />
          <img src={db} alt="db icon" className="competencesIcons" />
          <img src={node} alt="node icon" className="competencesIcons" />
        </div>
        <h3 id="competencesH3">front-end</h3>
        <div className="frontendIcons">
          <img src={html} alt="html icon" className="competencesIcons" />
          <img src={css} alt="css icon" className="competencesIcons" />
          <img src={react} alt="react icon" className="competencesIcons" />
        </div>
      </div>
    </div>
  );
}
