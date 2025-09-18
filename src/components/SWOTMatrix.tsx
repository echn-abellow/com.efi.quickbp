import type { SWOTCategory } from '../types/plan';

interface SWOTMatrixProps {
  categories: SWOTCategory[];
}

const SWOTMatrix = ({ categories }: SWOTMatrixProps) => {
  return (
    <section className="panel">
      <div className="panel__header">
        <h2>SWOT analysis</h2>
        <span className="panel__context">Snapshot of internal and external dynamics</span>
      </div>
      <div className="swot-grid">
        {categories.map((category) => (
          <article key={category.title} className="swot-card">
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SWOTMatrix;
