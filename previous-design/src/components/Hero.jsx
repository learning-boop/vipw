import { ADMISSION_YEAR, ASSETS, HERO_PHOTO, HERO_TRUST, INSTITUTE } from '../data/content';
import Icon, { Hex } from './Icon';
import Molecule from './Molecule';
import Photo from './Photo';

const WORDS = [
  { w: 'Pharmacy' },
  { w: 'careers,' },
  { w: 'built' },
  { w: 'for' },
  { w: 'women', gold: true },
  { w: 'who', gold: true },
  { w: 'lead.', gold: true, swoosh: true },
];

function Capsule({ className, left, right }) {
  return (
    <svg className={className} width="72" height="28" viewBox="0 0 72 28" aria-hidden="true" focusable="false">
      <path d="M14 1h22v26H14a13 13 0 0 1 0-26z" fill={left} />
      <path d="M36 1h22a13 13 0 0 1 0 26H36z" fill={right} />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <svg className="hero__pattern" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="vipw-hex" width="56" height="97" patternUnits="userSpaceOnUse">
            <path
              d="M28 0L56 16.17L56 48.5L28 64.67L0 48.5L0 16.17Z M28 64.67L28 97"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vipw-hex)" />
      </svg>
      <Capsule className="hero__capsule hero__capsule--a" left="var(--red)" right="#fff" />
      <Capsule className="hero__capsule hero__capsule--b" left="#fff" right="var(--gold)" />

      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="pill fade-up">
            <span className="dot" aria-hidden="true" />
            <span>A women&apos;s college of pharmacy · Vijayawada · Since {INSTITUTE.founded}</span>
          </p>

          <h1 id="hero-title" className="hero__title" aria-label="Pharmacy careers, built for women who lead.">
            {WORDS.map(({ w, gold, swoosh }, i) => (
              <span
                key={w}
                className={`hero__word${gold ? ' hero__word--gold' : ''}`}
                style={{ animationDelay: `${0.15 + i * 0.1 + (gold ? 0.05 : 0)}s` }}
                aria-hidden="true"
              >
                {w}
                {swoosh && (
                  <svg className="swoosh" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                    <path className="swoosh__path" pathLength="100" d="M2 9 C 30 3, 70 2, 98 6" />
                  </svg>
                )}
              </span>
            ))}
          </h1>

          <p className="hero__lead fade-up" style={{ animationDelay: '.9s' }}>
            {INSTITUTE.name} offers B.Pharm, Pharm D and M.Pharm programmes. NAAC A+ accredited, approved by the
            Pharmacy Council of India and run by the {INSTITUTE.foundation}.
          </p>

          <div className="hero__ctas fade-up" style={{ animationDelay: '1.05s' }}>
            <a className="btn btn--red" href="#enquire">
              Enquire for {ADMISSION_YEAR} <Icon name="arrow" size={18} className="btn__arrow" />
            </a>
            <a className="btn btn--ghost" href="#programmes">
              Explore programmes
            </a>
          </div>

          <ul className="hero__trust fade-up" style={{ animationDelay: '1.2s' }}>
            {HERO_TRUST.map((t) => (
              <li key={t}>
                <Icon name="check" size={18} style={{ color: 'var(--gold)' }} />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__frame fade-up" style={{ animationDelay: '.3s' }}>
            <div className="arch">
              <Photo src={HERO_PHOTO.photo} label={HERO_PHOTO.photoLabel} dark className="arch__photo" />
              <Molecule className="arch__molecule" />
            </div>

            <div className="chip float-a hero__chip hero__chip--naac">
              <img src={ASSETS.naac} alt="NAAC A+ badge" width="52" height="52" />
              <span>
                <strong>NAAC A+</strong>
                <span>CGPA 3.37, first cycle</span>
              </span>
            </div>

            <div className="chip float-b hero__chip hero__chip--seats">
              <strong className="hero__chip-num">200</strong>
              <span>
                seats a year
                <br />
                across 7 programmes
              </span>
            </div>

            <div className="badge" aria-hidden="true">
              <svg className="badge__ring spin" viewBox="0 0 120 120" focusable="false">
                <defs>
                  <path id="vipw-circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text className="badge__text">
                  <textPath href="#vipw-circ" textLength="272" lengthAdjust="spacing">
                    SINCE 2009 · VIJAYAWADA · ADMISSIONS {ADMISSION_YEAR} ·
                  </textPath>
                </text>
              </svg>
              <Hex size={30} fill="var(--ink)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
