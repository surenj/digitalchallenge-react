import ActionButton from '../ActionButton/ActionButton';

import './SharkTank.css';

import posterImage from '../../assets/shark-tank-poster.jpg';
import SectionHeading from '../SectionHeading/SectionHeading';

function SharkTank() {
  return (
    <section className="shark-tank">

      <div className="shark-tank-content">

        <SectionHeading title="SHARK TANKS 2025" />

        <p>
          O nosso Digital Challenge 2025 está na reta final,
          e agora é o momento dos times mostrarem suas
          propostas para os diretores e especialistas convidados.
        </p>

        <p>
          Então, prepare-se, challenger: é hora de treinar
          o seu pitch e se preparar para convencer os sharks
          (tubarões) de que sua solução é a melhor.
        </p>

        <p>
          Será escolhida apenas uma solução por cluster,
          e os grandes vencedores serão anunciados no dia
          da Grande Final.
        </p>

        <ActionButton label="Saiba mais, aqui!" />

      </div>

      <div className="shark-tank-poster">
        <img src={posterImage} alt="Digital Challenge 2025 Shark Tank" />
      </div>

    </section>
  );
}

export default SharkTank;