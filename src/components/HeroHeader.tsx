import type { HeroContent } from '../types/plan';

interface HeroHeaderProps {
  content: HeroContent;
}

const HeroHeader = ({ content }: HeroHeaderProps) => {
  return (
    <header className="hero">
      <div className="hero__badge">Business Planning Workspace</div>
      <h1>{content.title}</h1>
      <p className="hero__subtitle">{content.subtitle}</p>
      <p className="hero__meta">{content.updatedAt}</p>
      <div className="hero__actions">
        <button className="button button--primary">{content.primaryCta}</button>
        <button className="button button--ghost">{content.secondaryCta}</button>
      </div>
    </header>
  );
};

export default HeroHeader;
