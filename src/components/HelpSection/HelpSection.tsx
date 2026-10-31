import SectionHeading from '../SectionHeading/SectionHeading';
import ContactCard from './ContactCard';
import './HelpSection.css';

const contacts = [
  {
    name: 'RODRIGO GONTIJO (EXTERNAL)',
    role: 'PARTNERSHIP',
    image: 'https://i.pravatar.cc/80?img=11',
  },
  {
    name: 'ALEX VINICIUS ALEXANDRE RAMA...',
    role: 'IT SYSTEMS SPECIALIST',
    image: 'https://i.pravatar.cc/80?img=12',
  },
  {
    name: 'ANDRE AQUINO BRITO (EXTERNAL)',
    role: 'ILLUMINATION',
    image: 'https://i.pravatar.cc/80?img=13',
  },
  {
    name: 'BRUNA CAROLINA MARTINS R...',
    role: 'PORTFOLIO',
    image: 'https://i.pravatar.cc/80?img=44',
  },
  {
    name: 'CARINA SANTOS LANZA (EXTERNAL)',
    role: 'ILLUMINATION',
    image: 'https://i.pravatar.cc/80?img=45',
  },
  {
    name: 'FABIANA AGUIAR',
    role: 'IT INNOVATION',
    image: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'FERNANDA BATISTA GOMES',
    role: 'AFTER SALES PROJECT ASSISTANT',
    image: 'https://i.pravatar.cc/80?img=49',
  },
  {
    name: 'GABRIELA ALVES TORRES (EXTERNAL)',
    role: 'ILLUMINATION',
    image: 'https://i.pravatar.cc/80?img=48',
  },
  {
    name: 'LUCIANA ORGAZ (EXTERNAL)',
    role: 'PORTFOLIO',
    image: 'https://i.pravatar.cc/80?img=50',
  },
  {
    name: 'MARIAH SOUTO MARQUES (EXTERNAL)',
    role: 'ILLUMINATION',
    image: 'https://i.pravatar.cc/80?img=51',
  },
  {
    name: 'SANDRA CRISTINA SOARES',
    role: 'IT PROJECT, QUALITY AND SERVICE',
    image: 'https://i.pravatar.cc/80?img=52',
  },
];

function HelpSection() {
  return (
    <section className="help-section">
      <SectionHeading title="PRECISA DE AJUDA?" />

      <p className="help-section__description">
        Confira o <a href="#faq">FAQ</a> ou entre em contato com o{' '}
        <a href="#organization-team">time de organização</a>
      </p>

      <div className="help-section__contacts">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.name}
            {...contact}
          />
        ))}
      </div>
    </section>
  );
}

export default HelpSection;