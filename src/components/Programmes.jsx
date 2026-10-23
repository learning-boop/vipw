import { useState } from 'react';
import { CODES, PROGRAMME_PHOTOS, PROGRAMME_TABS } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const FILTERS = [{ id: 'all', label: 'All programmes' }, ...PROGRAMME_TABS.map((t) => ({ id: t.id, label: t.label }))];
const TAGS = { ug: 'UG', pg: 'M.Pharm', pb: 'PB' };
const CODE = { ug: CODES.eapcet, pg: CODES.pgecet, pb: CODES.pgecet };

// Seven cards fill a three-column grid evenly when these two take two columns each.
const WIDE = new Set(['B.Pharmacy', 'Pharm D (PB)']);

const ALL =PROGRAMME_TABS.flatMap((tab) => tab.items.map((p) => ({ ...p, tab: tab.id })));

/** Programme cards in the style of a course grid, filterable by level. */
export default function Programmes() {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? ALL : ALL.filter((p) => p.tab === filter);

  return (
    <section id="programmes" className="section section--tint" aria-labelledby="prog-title">
      <div className="wrap">
        <SectionTitle
          center
          id="prog-title"
          kicker="Our programmes"
          title="Explore our"
          accent="programmes"
          lead="From the four-year B.Pharmacy to the six-year Doctor of Pharmacy and four M.Pharm specialisations."
        />

        <div className="filters" role="group" aria-label="Filter programmes">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={filter === f.id ? 'is-active' : undefined}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="courses">
          {shown.map((p, i) => (
            <Reveal
              as="article"
              key={`${p.tab}-${p.name}`}
              className={`course${filter === 'all' && WIDE.has(p.name) ? ' course--wide' : ''}`}
              delay={(i % 3) * 90}
            >
              <div className="course__media">
                <img src={PROGRAMME_PHOTOS[p.name]} alt="" loading="lazy" />
                <span className="course__tag">
                  <Icon name="tag" size={13} />
                  {TAGS[p.tab]}
                </span>
              </div>
              <div className="course__body">
                <p className="course__kicker">
                  <Icon name="book" size={15} />
                  {p.kicker}
                </p>
                <h3>{p.tab === 'pg' ? `M.Pharm · ${p.name}` : p.name}</h3>
                {p.text && <p className="course__text">{p.text}</p>}
              </div>
              <div className="course__meta">
                <span>
                  <Icon name="users" size={16} /> {p.seats} seats
                </span>
                <span>
                  <Icon name="clock" size={16} /> {String(p.years).padStart(2, '0')} years
                </span>
                <span className="course__code" title="Counselling code">
                  {CODE[p.tab]}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
