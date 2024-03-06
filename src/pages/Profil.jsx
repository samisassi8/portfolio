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
            Gestionnaire immobilier aguerri avec plus de 10 ans d'expérience ,
            avec un taux d'occupation de 100% et un chiffre d'affaires annuel en
            progression constante.
          </p>
          <p>Compétences clés :</p>
          <ul>
            <li>Prospection et sélection des locataires</li>
            <li>Edition des baux</li>
            <li>Perception des loyers</li>
            <li>Entretien et réparations</li>
            <li>Comptabilité et finances</li>
            <li>Suivi des réglementations</li>
            <li>Gestion d'équipes</li>
            <li>Communication efficace</li>
            <li>Résolution de problèmes</li>
            <li>Compétences informatiques</li>
          </ul>
        </div>
      </div>
      <div className="transitionContainer">
        <div className="textImage">
          <h3>Actuellement</h3>
          <h4>En recherche de challenge</h4>
        </div>
        <img src={serverImage} alt="server image" className="serverImage" />
      </div>
    </div>
  );
}
