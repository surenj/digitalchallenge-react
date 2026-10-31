import VideoPreview from '../VideoPreview/VideoPreview';
import ActionButton from '../ActionButton/ActionButton';
import SectionHeading from "../SectionHeading/SectionHeading";

import './GrandeFinal.css';

import videoImage from '../../assets/grande-final-video.jpg';

function GrandeFinal() {
  return (
    <section className="grande-final">

      <div className="grande-final-video">
        <VideoPreview image={videoImage} />
      </div>

      <div className="grande-final-content">

        <SectionHeading title="GRANDE FINAL 2025" />

        <p>
          Após meses de inovação, superação e transformação,
          nossa jornada de 2025 chegou ao seu momento mais esperado!
        </p>

        <p>
          No dia 16 de dezembro, às 14h (horário de Brasília),
          em um evento híbrido, tivemos a presença de líderes
          e especialistas.
        </p>

        <p>
          Durante a grande final, você conheceu os vencedores
          desta jornada.
        </p>

        <p>
          Quer rever esse momento? Assista à gravação!
        </p>

        <div className="grande-final-actions">
          <ActionButton label="CONFIRA AS FOTOS" />
          <ActionButton label="TIMES VENCEDORES 2025" />
        </div>

      </div>

    </section>
  );
}

export default GrandeFinal;