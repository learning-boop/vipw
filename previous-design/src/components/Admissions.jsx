import { ADMISSION_LINKS, ADMISSION_YEAR, COUNSELLING_CODES, STEPS } from '../data/content';
import { useInView } from '../hooks/useInView';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Admissions() {
  const [stepsRef, stepsIn] = useInView({ threshold: 0.35 });

  return (
    <section id="admissions" className="section section--ink" aria-labelledby="admissions-title">
      <div className="wrap">
        <SectionHead
          id="admissions-title"
          tone="dark"
          eyebrow={`Admissions ${ADMISSION_YEAR}`}
          title="Four steps to your seat."
          aside={
            <p className="lead lead--dark section-head__aside">
              70% of seats are filled through state counselling and 30% under the management (Category B) quota.
            </p>
          }
        />

        <ol ref={stepsRef} className={`steps${stepsIn ? ' is-drawn' : ''}`}>
          <li className="steps__line" aria-hidden="true">
            <span className="steps__fill" />
          </li>
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} className="step" delay={i * 120}>
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="codes">
          {COUNSELLING_CODES.map((c) => (
            <div key={c.code} className="code-card">
              <p className="code-card__exam mono">{c.exam}</p>
              <p className="code-card__code">{c.code}</p>
              <p className="code-card__for">{c.for}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="btn-row">
          {ADMISSION_LINKS.map((l) => (
            <a
              key={l.href}
              className={`btn ${l.primary ? 'btn--red' : 'btn--ghost'}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
              {l.primary && <Icon name="arrow" size={18} className="btn__arrow" />}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
