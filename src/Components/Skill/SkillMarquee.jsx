import { techMarquee } from '../../data/portfolioData';

export default function SkillMarquee() {
  const doubled = [...techMarquee, ...techMarquee];
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-text">{tech}</span>
            <span className="marquee-sep">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
