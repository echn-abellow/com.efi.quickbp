import type { Objective } from '../types/plan';

interface ObjectivesBoardProps {
  objectives: Objective[];
}

const statusCopy: Record<Objective['status'], string> = {
  'on-track': 'On track',
  'at-risk': 'Needs attention',
  'off-track': 'Off track',
};

const ObjectivesBoard = ({ objectives }: ObjectivesBoardProps) => {
  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Strategic objectives</h2>
        <span className="panel__context">Owners, target milestones, and completion confidence</span>
      </div>
      <div className="objectives-grid">
        {objectives.map((objective) => (
          <article key={objective.id} className={`objective-card objective-card--${objective.status}`}>
            <div className="objective-card__topline">
              <h3>{objective.title}</h3>
              <span className="badge">{objective.owner}</span>
            </div>
            <p className="objective-card__description">{objective.description}</p>
            <div className="objective-card__meta">
              <span>{objective.dueQuarter}</span>
              <span>{statusCopy[objective.status]}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar__fill"
                style={{ width: `${objective.progress}%` }}
                aria-hidden
              />
            </div>
            <div className="objective-card__progress-label">
              <span>{objective.progress}% complete</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ObjectivesBoard;
