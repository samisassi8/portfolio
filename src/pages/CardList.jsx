import cardData from "../data/cardData"; // Importez les données de cardData.js
import "./CardList.css";

const Card = ({ project }) => {
  return (
    <div className="cardContainer">
      <div className="row">
        <div className="card">
          <a href={project.url}>
            <img src={`/images/${project.id}.jpg`} alt={project.title} />
          </a>
          <div className="card-content">
            <h2>{project.title}</h2>
            <p>Langages : {project.langages}</p>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default CardList;
