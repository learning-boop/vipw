import { useState } from 'react';
import { ELEMENTS } from '../data/content';
import Chapter from './Chapter';
import Reveal from './Reveal';

/** "Why VIPW" as a periodic table: pick an element to read about it. */
export default function Elements() {
  const [active, setActive] = useState(0);
  const el = ELEMENTS[active];

  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="wrap">
        <Chapter
          no="01"
          kicker="Why VIPW"
          id="why-title"
          title={
            <>
              The <em>elements</em> of a VIPW education.
            </>
          }
          lead="Six things every student gets here. Select an element to read about it."
        />

        <div className="ptable">
          <Reveal className="ptable__grid" role="tablist" aria-label="Elements">
            {ELEMENTS.map((e, i) => (
              <button
                key={e.sym}
                type="button"
                role="tab"
                id={`el-tab-${i}`}
                aria-selected={i === active}
                aria-controls="el-panel"
                className={`ptile ptile--${e.group}${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onKeyDown={(ev) => {
                  if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
                    const next = (i + (ev.key === 'ArrowRight' ? 1 : -1) + ELEMENTS.length) % ELEMENTS.length;
                    setActive(next);
                    document.getElementById(`el-tab-${next}`)?.focus();
                  }
                }}
                tabIndex={i === active ? 0 : -1}
              >
                <span className="ptile__n mono">{e.n}</span>
                <span className="ptile__sym">{e.sym}</span>
                <span className="ptile__name">{e.name}</span>
              </button>
            ))}
          </Reveal>

          <Reveal delay={120} className={`ptable__panel ptable__panel--${el.group}`}>
            <div id="el-panel" role="tabpanel" aria-labelledby={`el-tab-${active}`} key={el.sym} className="ptable__body">
              <p className="ptable__big" aria-hidden="true">
                {el.sym}
              </p>
              <h3>{el.name}</h3>
              <p>{el.text}</p>
              <p className="ptable__meta mono">
                Element {String(el.n).padStart(2, '0')} / {String(ELEMENTS.length).padStart(2, '0')}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
