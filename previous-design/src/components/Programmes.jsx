import { useRef, useState } from 'react';
import { PROGRAMME_TABS } from '../data/content';
import Icon from './Icon';
import SectionHead from './SectionHead';

function SeatBar({ seats, convener, management, compact }) {
  const c = (convener / seats) * 100;
  return (
    <div className="seats">
      <div className="seats__row">
        <strong>{seats} seats</strong>
        <span>{compact ? `${convener} + ${management}` : `${convener} convener · ${management} management`}</span>
      </div>
      <div
        className="seats__bar"
        role="img"
        aria-label={`${convener} convener seats and ${management} management seats`}
      >
        <span className="seats__c" style={{ width: `${c}%` }} />
        <span className="seats__m" style={{ width: `${100 - c}%` }} />
      </div>
    </div>
  );
}

function ProgrammeCard({ p, compact }) {
  return (
    <article className={`card prog${compact ? ' prog--compact' : ''}`}>
      <div className="prog__head">
        <div>
          <p className="prog__kicker mono">{p.kicker}</p>
          <h3 className="prog__name">{p.name}</h3>
        </div>
        {!compact && (
          <span className="tag">
            <Icon name="clock" size={16} />
            {p.years} years
          </span>
        )}
      </div>
      {p.text && <p className="card__text">{p.text}</p>}
      <SeatBar seats={p.seats} convener={p.convener} management={p.management} compact={compact} />
      {p.tags && (
        <div className="prog__tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Programmes() {
  const [active, setActive] = useState(PROGRAMME_TABS[0].id);
  const tabRefs = useRef([]);
  const current = PROGRAMME_TABS.find((t) => t.id === active);

  const onKeyDown = (e, index) => {
    const last = PROGRAMME_TABS.length - 1;
    let next = null;
    if (e.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    if (e.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(PROGRAMME_TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="programmes" className="section section--paper" aria-labelledby="programmes-title">
      <div className="wrap">
        <SectionHead
          id="programmes-title"
          eyebrow="Programmes"
          title="Seven ways into a pharmacy career."
          aside={
            <div className="tabs" role="tablist" aria-label="Programme level">
              {PROGRAMME_TABS.map((t, i) => (
                <button
                  key={t.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={active === t.id}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={active === t.id ? 0 : -1}
                  className={`tab${active === t.id ? ' is-active' : ''}`}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          }
        />

        <div
          key={current.id}
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="panel"
        >
          {current.intro && <p className="panel__intro">{current.intro}</p>}
          <div className={`grid ${current.layout === 'compact' ? 'grid--compact' : 'grid--wide'}`}>
            {current.items.map((p) => (
              <ProgrammeCard key={p.name} p={p} compact={current.layout === 'compact'} />
            ))}
            {current.promo && (
              <div className="promo">
                <p className="promo__text">{current.promo.text}</p>
                <a className="btn btn--red" href="#enquire">
                  {current.promo.cta} <Icon name="arrow" size={18} className="btn__arrow" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
