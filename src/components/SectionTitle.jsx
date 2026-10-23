import Icon from './Icon';
import Reveal from './Reveal';

/**
 * Kicker with a small icon, then a two-tone title: `title` is plain text and
 * `accent` is the highlighted part (red on light sections, gold on dark ones).
 */
export default function SectionTitle({ kicker, title, accent, after = '', lead, id, center = false, dark = false }) {
  return (
    <Reveal className={`stitle${center ? ' stitle--center' : ''}${dark ? ' stitle--dark' : ''}`}>
      <p className="kicker">
        <Icon name="book" size={16} />
        {kicker}
      </p>
      <h2 id={id} className="stitle__h">
        {title} <span className="hl">{accent}</span>
        {after && ` ${after}`}
      </h2>
      {lead && <p className="stitle__lead">{lead}</p>}
    </Reveal>
  );
}
