import type { Milestone } from '../types/plan';

interface MilestoneTimelineProps {
  milestones: Milestone[];
}

const statusCopy: Record<Milestone['status'], string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  upcoming: 'Upcoming',
};

const MilestoneTimeline = ({ milestones }: MilestoneTimelineProps) => {
  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Milestone tracker</h2>
        <span className="panel__context">Quarter-by-quarter visibility into key commitments</span>
      </div>
      <div className="timeline">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="timeline__item">
            <div className={`timeline__marker timeline__marker--${milestone.status}`} aria-hidden />
            <div className="timeline__content">
              <div className="timeline__topline">
                <span className="timeline__quarter">{milestone.quarter}</span>
                <span className={`status status--${milestone.status}`}>
                  {statusCopy[milestone.status]}
                </span>
              </div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
              <span className="timeline__owner">Owner: {milestone.owner}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilestoneTimeline;
