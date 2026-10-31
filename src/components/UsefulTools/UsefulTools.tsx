import SectionHeading from '../SectionHeading/SectionHeading';
import ResourceItem from './ResourceItem/ResourceItem';
import './UsefulTools.css';

const resources = [
  'TEMPLATE DC 2025',
  'BACKGROUND PARA REUNIÕES',
  'FERRAMENTAS FACILITADORAS',
  'MOLDURA PARA O TEAMS'
];

const UsefulTools = () => {
  return (
    <section className="useful-tools">

      <SectionHeading title="FERRAMENTAS PARA VOCÊ APROVEITAR!" />
      <br/>

      <div className="useful-tools-list">
        {resources.map((resource) => (
          <ResourceItem
            key={resource}
            title={resource}
          />
        ))}
      </div>

    </section>
  );
};

export default UsefulTools;