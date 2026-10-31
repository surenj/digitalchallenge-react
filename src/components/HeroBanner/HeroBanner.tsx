import './HeroBanner.css';
import foliageImage from '../../assets/foliageImage.png'

const HeroBanner = () => {
  return (
    <section className="hero-banner">

      
      <div className="hero-illustration">
        <img
          src={foliageImage}
          alt=""
        />
      </div>

      
      <div className="hero-heading">
        <h1>
          DIGITAL
          <br />
          CHALLENGE
        </h1>
      </div>

      
      <div className="hero-description">
        <p>
          Discover new ideas and explore innovative
          solutions to create a better digital future.
        </p>
      </div>

    </section>
  );
};

export default HeroBanner;