import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Salut, je m'appelle
        <span className="font-semibold mx-2 text-white">Ahmed Rebii</span>
        👋
        <br />
        un développeur Full Stack JS de la Tunisie.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          "Le Défi du Rire : Teste ton Humour en Contre-la-Montre"
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Éclatez de Rire Instantanément
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Explorez le côté hilarant de React avec notre sélection de sites
          drôles et testez votre humour dans le Défi du Rire, avec des
          expériences amusantes en contre-la-montre.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Découvrir les Surprises Humoristiques
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Partagez vos idées pour améliorer notre site, <br /> nous sommes
          ouverts à toutes suggestions !
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
