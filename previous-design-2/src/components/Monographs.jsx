import { PROGRAMME_TABS } from '../data/content';
import Chapter from './Chapter';
import Reveal from './Reveal';

const TONES = { ug: 'navy', pg: 'steel', pb: 'red' };

/** Programmes printed as medicine-label "monographs". */
export default function Monographs() {
  const pg = PROGRAMME_TABS.find((t) => t.id === 'pg');
  let count = 0;

  return (
    <section id="programmes" className="section section--paper" aria-labelledby="prog-title">
      <div className="wrap">
        <Chapter
          no="02"
          kicker="Programmes"
          id="prog-title"
          title={
            <>
              Seven programmes, written up as <em>monographs</em>.
            </>
          }
          lead={pg.intro}
        />

        <div className="mono-grid">
          {PROGRAMME_TABS.map((tab) =>
            tab.items.map((p) => {
              count += 1;
              const tone = TONES[tab.id];
              const conv = Math.round((p.convener / p.seats) * 100);
              return (
                <Reveal
                  as="article"
                  key={`${tab.id}-${p.name}`}
                  delay={(count % 3) * 90}
                  className={`label label--${tone}${tab.layout === 'wide' ? ' label--wide' : ''}`}
                >
                  <header className="label__band">
                    <span className="mono">No. {String(count).padStart(3, '0')}</span>
                    <span className="mono">{tab.label}</span>
                  </header>
                  <div className="label__body">
                    <p className="label__kicker mono">{p.kicker}</p>
                    <h3 className="label__name">{p.name}</h3>
                    {p.text && <p className="label__text">{p.text}</p>}

                    <dl className="label__facts">
                      <div>
                        <dt>Course</dt>
                        <dd>{p.years} years</dd>
                      </div>
                      <div>
                        <dt>Intake</dt>
                        <dd>{p.seats} seats</dd>
                      </div>
                    </dl>

                    <div className="label__comp">
                      <p className="mono">Composition</p>
                      <div className="label__bar" role="img" aria-label={`${p.convener} convener seats and ${p.management} management seats`}>
                        <span style={{ '--w': `${conv}%` }} />
                      </div>
                      <p className="label__legend mono">
                        <span>Convener {p.convener}</span>
                        <span>Management {p.management}</span>
                      </p>
                    </div>

                    {p.tags && (
                      <ul className="label__tags">
                        {p.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              );
            }),
          )}
        </div>
      </div>
    </section>
  );
}
