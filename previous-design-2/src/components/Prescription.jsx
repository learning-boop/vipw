import { ADMISSION_LINKS, ADMISSION_YEAR, COUNSELLING_CODES, STEPS } from '../data/content';
import Chapter from './Chapter';
import Icon from './Icon';
import Reveal from './Reveal';

/** Admissions, written out as a prescription: four steps and the counselling codes. */
export default function Prescription() {
  return (
    <section id="admissions" className="section section--steel" aria-labelledby="adm-title">
      <div className="wrap">
        <Chapter
          light
          no="03"
          kicker={`Admissions ${ADMISSION_YEAR}`}
          id="adm-title"
          title={
            <>
              Your prescription for <em>getting in</em>.
            </>
          }
          lead="Four steps, taken in order. Convener seats come through state counselling; management seats through the Category B form."
        />

        <div className="rxpad-wrap">
          <Reveal className="rxpad">
            <div className="rxpad__head">
              <span className="rx rx--big" aria-hidden="true">
                ℞
              </span>
              <div>
                <p className="rxpad__title">Admissions, {ADMISSION_YEAR}</p>
                <p className="mono">Take one step at a time. Repeat until admitted.</p>
              </div>
            </div>
            <ol className="rxpad__steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="rxpad__n mono">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="rxpad__sign">VIPW Admissions Office</p>
          </Reveal>

          <div className="rxside">
            {COUNSELLING_CODES.map((c, i) => (
              <Reveal key={c.code} delay={120 + i * 100} className="codecard">
                <p className="mono">{c.exam}</p>
                <strong className="codecard__code">{c.code}</strong>
                <p>{c.for}</p>
              </Reveal>
            ))}
            <Reveal delay={320} className="rxlinks">
              {ADMISSION_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={l.primary ? 'is-primary' : undefined}
                >
                  {l.label}
                  <Icon name="arrowUpRight" size={18} />
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
