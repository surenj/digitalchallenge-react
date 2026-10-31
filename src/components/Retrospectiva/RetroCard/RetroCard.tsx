import './RetroCard.css';

interface RetroCardProps {
  image: string;
  title: string;
}

const RetroCard = ({ image, title }: RetroCardProps) => {
  return (
    <div className="retro-card">
      <div className="retro-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="retro-card-title">
        {title}
      </div>
    </div>
  );
};

export default RetroCard;