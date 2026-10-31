import './HelpSection.css';

interface ContactCardProps {
  name: string;
  role: string;
  image: string;
}

function ContactCard({ name, role, image }: ContactCardProps) {
  return (
    <div className="contact-card">
      <img
        className="contact-card__image"
        src={image}
        alt={name}
      />

      <div className="contact-card__details">
        <h3 className="contact-card__name" title={name}>
          {name}
        </h3>

        <p className="contact-card__role">{role}</p>
      </div>
    </div>
  );
}

export default ContactCard;