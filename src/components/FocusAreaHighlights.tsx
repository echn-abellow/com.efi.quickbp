import type { FocusArea } from '../types/plan';

interface FocusAreaHighlightsProps {
  focusAreas: FocusArea[];
}

const FocusAreaHighlights = ({ focusAreas }: FocusAreaHighlightsProps) => {
  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Focus areas</h2>
        <span className="panel__context">Strategic bets prioritized by planning horizon</span>
      </div>
      <div className="focus-grid">
        {focusAreas.map((area) => (
          <article key={area.id} className="focus-card">
            <div className="focus-card__topline">
              <h3>{area.title}</h3>
              <span className="badge badge--subtle">{area.horizon}</span>
            </div>
            <p>{area.summary}</p>
            <div className="confidence-meter" role="img" aria-label={`Confidence ${area.confidence} percent`}>
              <div className="confidence-meter__track">
                <div className="confidence-meter__fill" style={{ width: `${area.confidence}%` }} />
              </div>
              <span className="confidence-meter__label">{area.confidence}% confidence</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FocusAreaHighlights;
