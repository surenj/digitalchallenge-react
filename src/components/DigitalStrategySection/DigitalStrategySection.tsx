import StrategyNetworkIcon from "./StrategyNetworkIcon";
import ActionButton from "../ActionButton/ActionButton";
import "./DigitalStrategySection.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const DigitalStrategySection = () => {
  return (
    <section className="digital-strategy">
      <SectionHeading title="CONHEÇA A ESTRATÉGIA DIGITAL POR TRÁS DO DIGITAL CHALLENGE!" />

      <div className="digital-strategy__icon">
        <StrategyNetworkIcon />
      </div>

      <div className="digital-strategy__action">
        <ActionButton label="Conheça a Estratégia Digital" />
      </div>
    </section>
  );
};

export default DigitalStrategySection;