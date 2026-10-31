
import VideoPreview from '../VideoPreview/VideoPreview';
import SectionHeading from '../SectionHeading/SectionHeading';

import './DigitalChallengeSection.css';

import videoImage from '../../assets/grande-final-video.jpg';

function DigitalChallenge() {
  return (
    <section className="digital-challenge">

      <div className="digital-challenge-video">
        <VideoPreview image={videoImage} />
      </div>

      <div className="digital-challenge-content">

        <SectionHeading title="DIGITAL CHALLENGE 2025!" />

        <p>
          Novas possibilidades já estão ao nosso alcance,
          e é hora de aproveitar tudo o que o futuro tem a nos oferecer!
        </p>

        <p>
          A jornada do Digital Challenge está prestes a começar,
          e temos um convite especial para você: venha fazer parte
          dessa missão e seja um impulsionador do
          <strong> INTRAEMPREENDEDORISMO </strong>
          e das aplicações da
          <strong> GENERATIVE IA </strong>
          na Stellantis.
        </p>

        <p>
          Neste percurso, vamos trabalhar juntos para desenvolver
          soluções inovadoras que melhorarão nossos processos,
          aprimorarão a experiência de nossos clientes e impulsionarão
          nosso crescimento. Vamos explorar novas tecnologias,
          pensar em ideias criativas e colaborar para encontrar
          as melhores soluções.
        </p>

        <p>
          Então, você aceita fazer parte da missão do
          <strong> DIGITAL CHALLENGE 2025?</strong>
        </p>

      </div>

    </section>
  );
}

export default DigitalChallenge;
