import Reveal from './Reveal';

/** Eyebrow + heading on the left, intro text (or any node) on the right. */
export default function SectionHead({ eyebrow, title, aside, tone = 'light', id, className = '' }) {
  return (
    <Reveal className={`section-head ${className}`}>
      <div className="section-head__main">
        <p className={`eyebrow eyebrow--${tone}`}>{eyebrow}</p>
        <h2 id={id} className="h2">
          {title}
        </h2>
      </div>
      {aside}
    </Reveal>
  );
}
