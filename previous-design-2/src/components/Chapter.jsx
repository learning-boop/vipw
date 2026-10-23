import Reveal from './Reveal';

/** Book-style section heading: chapter number, title and a short lead. */
export default function Chapter({ no, kicker, id, title, lead, light = false }) {
  return (
    <Reveal className={`chapter${light ? ' chapter--light' : ''}`}>
      <p className="chapter__no mono">
        <span>§ {no}</span>
        {kicker}
      </p>
      <h2 id={id} className="chapter__title">
        {title}
      </h2>
      {lead && <p className="chapter__lead">{lead}</p>}
    </Reveal>
  );
}
