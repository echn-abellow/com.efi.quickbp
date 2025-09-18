import type { ActionItem } from '../types/plan';

interface ActionPlanProps {
  actionItems: ActionItem[];
}

const ActionPlan = ({ actionItems }: ActionPlanProps) => {
  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Execution plan</h2>
        <span className="panel__context">Accountable next steps with impact and blockers</span>
      </div>
      <div className="action-table" role="table" aria-label="Action plan">
        <div className="action-table__row action-table__row--head" role="row">
          <span role="columnheader">Initiative</span>
          <span role="columnheader">Owner</span>
          <span role="columnheader">Due</span>
          <span role="columnheader">Status</span>
          <span role="columnheader">Impact</span>
          <span role="columnheader">Notes</span>
        </div>
        {actionItems.map((item) => (
          <div key={item.id} className="action-table__row" role="row">
            <span role="cell">{item.title}</span>
            <span role="cell">{item.owner}</span>
            <span role="cell">{item.dueDate}</span>
            <span role="cell" className={`status status--${item.status.replace(/\s+/g, '-').toLowerCase()}`}>
              {item.status}
            </span>
            <span role="cell" className={`impact impact--${item.impact.toLowerCase()}`}>
              {item.impact}
            </span>
            <span role="cell" className="action-table__notes">{item.notes}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActionPlan;
