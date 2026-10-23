import { ADMISSION_YEAR, CODES, HERO_TRUST, INSTITUTE } from '../data/content';
import Icon from './Icon';
import SunGear from './SunGear';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="folio mono fade-up">
            <span>Vol. {INSTITUTE.founded}–26</span>
            <span>Admissions edition</span>
            <span>{ADMISSION_YEAR}</span>
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="line"><span style={{ animationDelay: '.1s' }}>Where women</span></span>
            <span className="line"><span style={{ animationDelay: '.22s' }}>become the</span></span>
            <span className="line">
              <span style={{ animationDelay: '.34s' }}>
                <em>pharmacists</em>
              </span>
            </span>
            <span className="line"><span style={{ animationDelay: '.46s' }}>of tomorrow.</span></span>
          </h1>

          <p className="hero__lead fade-up" style={{ animationDelay: '.7s' }}>
            B.Pharm, Pharm D and M.Pharm at a NAAC A+, autonomous college of pharmacy for women, run by the{' '}
            {INSTITUTE.foundation} since {INSTITUTE.founded}.
          </p>

          <div className="hero__ctas fade-up" style={{ animationDelay: '.85s' }}>
            <a className="btn btn--red" href="#enquire">
              Enquire for {ADMISSION_YEAR} <Icon name="arrow" size={18} className="btn__arrow" />
            </a>
            <a className="btn btn--line" href="#programmes">
              Read the monographs
            </a>
          </div>

          <ul className="hero__trust fade-up" style={{ animationDelay: '1s' }}>
            {HERO_TRUST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="hero__art fade-up" style={{ animationDelay: '.2s' }}>
          <SunGear />
          <div className="rx-label float-a">
            <p className="rx-label__head">
              <span className="rx">℞</span>
              <span className="mono">Counselling codes</span>
            </p>
            <dl>
              <div>
                <dt>EAMCET / ECET</dt>
                <dd className="mono">{CODES.eapcet}</dd>
              </div>
              <div>
                <dt>PGECET</dt>
                <dd className="mono">{CODES.pgecet}</dd>
              </div>
            </dl>
          </div>
          <div className="stamp float-b" aria-hidden="true">
            <span>NAAC</span>
            <strong>A+</strong>
            <span>CGPA 3.37</span>
          </div>
        </div>
      </div>
    </section>
  );
}
