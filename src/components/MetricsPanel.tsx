import type { Metric } from '../types/plan';

interface MetricsPanelProps {
  metrics: Metric[];
}

const MetricsPanel = ({ metrics }: MetricsPanelProps) => {
  return (
    <section className="panel">
      <div className="panel__header">
        <h2>North-star metrics</h2>
        <span className="panel__context">Trailing 12 months with projected outlook</span>
      </div>
      <div className="metrics-grid">
        {metrics.map((metric) => {
          const isPositive = metric.trend === 'up';
          const changeLabel = `${isPositive ? '+' : ''}${metric.change.toFixed(1)}%`;

          return (
            <article key={metric.id} className="metric-card">
              <div className="metric-card__header">
                <span className="metric-card__label">{metric.label}</span>
                <span className={`metric-card__trend metric-card__trend--${metric.trend}`}>
                  {isPositive ? '▲' : '▼'} {changeLabel}
                </span>
              </div>
              <p className="metric-card__value">{metric.value}</p>
              <p className="metric-card__description">{metric.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MetricsPanel;
