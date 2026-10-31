
import "./SectionHeading.css";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading = ({
  title,
  className = "",
}: SectionHeadingProps) => {
  return (
    <h2 className={`section-heading ${className}`}>
      {title}
    </h2>
  );
};

export default SectionHeading;
