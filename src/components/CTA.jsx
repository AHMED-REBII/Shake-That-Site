import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Votre Touche Créative : <br className="sm:block hidden" />
        Partagez Vos Idées pour Enrichir l'Aventure !
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
