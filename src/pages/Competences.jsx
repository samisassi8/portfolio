import "./Competences.css";
import cv from "../assets/cv.jpg";
import cvDownload from "../assets/cv .pdf";

export default function Competences() {
  return (
    <div id="Competences" className="competences">
      <div className="presentation">
        <h2>CV</h2>
        {/* <p>
          Elles sont en constantes améliorations car je suis toujours à la
          recherche de nouvelles compétences. Le développement est pour moi la
          meilleure manière de toujours me surpasser afin d'assouvir ma passion.
        </p> */}
      </div>
      <div className="fullCompetences">
        {/* <div className="competenceContainer">
          <h3 id="competencesH3">back-end</h3>
          <div className="backendIcons">
            <Fade cascade>
              <img src={sql} alt="sql icon" className="competencesIcons" />
              <img src={db} alt="db icon" className="competencesIcons" />
              <img
                src={node}
                alt="node icon"
                className="competencesIcons nodeIcon"
              />
            </Fade>
          </div>
          <h3 id="competencesH3">front-end</h3>
          <div className="frontendIcons">
            <Fade cascade>
              <img src={html} alt="html icon" className="competencesIcons" />
              <img src={css} alt="css icon" className="competencesIcons" />
              <img src={react} alt="react icon" className="competencesIcons" />
            </Fade>
          </div>
        </div> */}
        <div className="cvContainer">
          <img src={cv} alt="cv image" className="cvImage" />
          <a
            href={cvDownload}
            download="Cv file"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btnCv">Dowload .pdf file</button>
          </a>
        </div>
      </div>
    </div>
  );
}
