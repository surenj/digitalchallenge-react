import { Bookmark } from 'lucide-react';
import './ResourceItem.css';

interface ResourceItemProps {
  title: string;
}

const ResourceItem = ({ title }: ResourceItemProps) => {
  return (
    <div className="resource-item">
      <div className="resource-icon">
        <Bookmark size={21} strokeWidth={2.5} />
      </div>

      <span className="resource-title">{title}</span>
    </div>
  );
};

export default ResourceItem;