import "./Profil.css";
import profil from "../assets/profil.jpg";
import serverImage from "../assets/serveurs.jpg";

export default function Profil() {
  return (
    <div className="profilContainer" id="Profil">
      <h2>A PROPOS DE MOI</h2>
      <div className="container">
        <div className="description">
          <img src={profil} alt="" className="profil_picture" />
          <p>
            Je suis un développeur Web passionné qui a débuté sa carrière en
            tant que commercial et entrepreneur dans le secteur de la rénovation
            immobilière.
          </p>
          <p>
            Après avoir dirigé avec succès des entreprises et supervisé la
            rénovation de plusieurs propriétés, j'ai entamé une transition de
            carrière vers le monde du développement Web.
          </p>
          <p>
            Mon parcours entrepreneurial m'a permis de développer des
            compétences en gestion de projet, en résolution de problèmes et en
            communication, que j'utilise pour créer des solutions Web innovantes
            et répondre aux besoins des clients.
          </p>
          <p>J'ai donc suivi des formations pour devenir developpeur web.</p>
          <p>
            Mon objectif est de contribuer à des projets Web stimulants et de
            continuer à grandir en tant que développeur Web.
          </p>
        </div>
      </div>
      <div className="transitionContainer">
        <img src={serverImage} alt="server image" className="serverImage" />
      </div>
    </div>
  );
}
