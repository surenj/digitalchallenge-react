import {
  Grid3X3,
  Rocket,
  Monitor,
  Lightbulb,
  Users,
  Search,
  UsersRound
} from 'lucide-react';

import './Milestone.css';

export interface MilestoneProps {
  id: number;
  label: string;
  icon: React.ElementType;
}

export default function Milestone({
  label,
  icon: Icon
}: MilestoneProps) {

  return (
    <div className="milestone">
      <div className="milestone-circle">
        <Icon size={28} strokeWidth={1.8} />
      </div>

      <p className="milestone-label">{label}</p>
    </div>
  );
}