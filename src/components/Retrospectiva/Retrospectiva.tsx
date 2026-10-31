import { useRef, useState } from 'react';

import RetroCard from './RetroCard/RetroCard';
import RetroNavigation from './RetroNavigation/RetroNavigation';

import './Retrospectiva.css';

import retro2024 from '../../assets/retrospective/retro-2024.jpg';
import retro2023 from '../../assets/retrospective/retro-2023.jpg';
import retro2022 from '../../assets/retrospective/retro-2022.jpg';
import retro2021 from '../../assets/retrospective/retro-2021.jpg';
import SectionHeading from '../SectionHeading/SectionHeading';

const retrospectives = [
  {
    image: retro2024,
    title: 'Digital Challenge 2024: Enjoy the new trend'
  },
  {
    image: retro2023,
    title: 'Digital Challenge 2023: Of course it helps!'
  },
  {
    image: retro2022,
    title: 'Digital Challenge 2022: New connections'
  },
  {
    image: retro2021,
    title: 'Digital Challenge 2021: Global'
  }
];

const Retrospectiva = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateTo = (index: number) => {
    const container = carouselRef.current;

    if (!container) return;

    const cards = container.querySelectorAll('.retro-card');

    if (!cards[index]) return;

    container.scrollTo({
      left: (cards[index] as HTMLElement).offsetLeft -
        (cards[0] as HTMLElement).offsetLeft,
      behavior: 'smooth'
    });

    setActiveIndex(index);
  };

  const handlePrevious = () => {
    navigateTo(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    navigateTo(
      Math.min(retrospectives.length - 1, activeIndex + 1)
    );
  };

  return (
    <section className="retrospectiva">

      <SectionHeading title="RETROSPECTIVA" />
      <br/>

      <div className="retro-carousel" ref={carouselRef}>
        <div className="retro-carousel-track">
          {retrospectives.map((item, index) => (
            <RetroCard
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <RetroNavigation
        activeIndex={activeIndex}
        totalItems={retrospectives.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSelect={navigateTo}
      />

    </section>
  );
};

export default Retrospectiva;