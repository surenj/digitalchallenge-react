import './RetroNavigation.css';

interface RetroNavigationProps {
  activeIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

const RetroNavigation = ({
  activeIndex,
  totalItems,
  onPrevious,
  onNext,
  onSelect
}: RetroNavigationProps) => {
  return (
    <div className="retro-navigation">

      <button
        className="retro-nav-arrow"
        onClick={onPrevious}
        aria-label="Previous"
      >
        &#8249;
      </button>

      <div className="retro-nav-dots">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            className={`retro-nav-dot ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => onSelect(index)}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="retro-nav-arrow"
        onClick={onNext}
        aria-label="Next"
      >
        &#8250;
      </button>

    </div>
  );
};

export default RetroNavigation;