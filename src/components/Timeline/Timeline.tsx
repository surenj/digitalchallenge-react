import {
  Grid3X3,
  Rocket,
  Monitor,
  Lightbulb,
  Users,
  Search,
  UsersRound
} from 'lucide-react';

import Milestone from './Milestone/Milestone';
import type { MilestoneProps } from './Milestone/Milestone';

import './Timeline.css';

const timelineItems: MilestoneProps[] = [
  { id: 1, label: '01 – INITIATION', icon: Grid3X3 },
  { id: 2, label: '02 – KICK OFF', icon: Rocket },
  { id: 3, label: '03 – DISCOVERY', icon: Monitor },
  { id: 4, label: '04 – ANALYSIS & DESIGN', icon: Lightbulb },
  { id: 5, label: '05 – IMPLEMENTATION', icon: Users },
  { id: 6, label: '06 – TESTING & VALIDATION', icon: Search },
  { id: 7, label: '07 – FINAL REVIEW & CHANGE FINAL', icon: UsersRound },
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">TIMELINE</h2>

      <div className="timeline-scroll">
        <div className="timeline-track">
          {timelineItems.map((item) => (
            <Milestone key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}