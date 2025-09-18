import ActionPlan from './components/ActionPlan';
import FocusAreaHighlights from './components/FocusAreaHighlights';
import HeroHeader from './components/HeroHeader';
import MetricsPanel from './components/MetricsPanel';
import MilestoneTimeline from './components/MilestoneTimeline';
import ObjectivesBoard from './components/ObjectivesBoard';
import SWOTMatrix from './components/SWOTMatrix';
import {
  actionItems,
  focusAreas,
  heroContent,
  metrics,
  milestones,
  objectives,
  swotMatrix,
} from './data/planData';
import './App.css';

const App = () => {
  return (
    <div className="app-shell">
      <HeroHeader content={heroContent} />
      <main className="content-grid">
        <MetricsPanel metrics={metrics} />
        <ObjectivesBoard objectives={objectives} />
        <div className="content-grid__split">
          <MilestoneTimeline milestones={milestones} />
          <FocusAreaHighlights focusAreas={focusAreas} />
        </div>
        <SWOTMatrix categories={swotMatrix} />
        <ActionPlan actionItems={actionItems} />
      </main>
      <footer className="app-footer">
        <p>
          Need a deeper review? Schedule a planning session and export this workspace to
          stakeholders in seconds.
        </p>
      </footer>
    </div>
  );
};

export default App;
