import ChallengeHighlights from './components/ChallengeHighlights/ChallengeHighlights';
import DigitalChallengeSection from './components/DigitalChallengeSection/DigitalChallengeSection';
import DigitalStrategySection from './components/DigitalStrategySection/DigitalStrategySection';
import HelpSection from './components/HelpSection/HelpSection';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Retrospectiva from './components/Retrospectiva/Retrospectiva';
import Timeline from './components/Timeline/Timeline';
import UsefulTools from './components/UsefulTools/UsefulTools';

function App() {
  return (
    <main>
      <HeroBanner />
      <Timeline/>
      <ChallengeHighlights />
      <DigitalChallengeSection />
      <Retrospectiva/>
      <UsefulTools />
      <br/>
      <DigitalStrategySection />
      <br/>
      <HelpSection/>
      <hr/>
    </main>
  );
}

export default App;