import { PRINCIPAL } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

/** About the principal, shown right after the About section. */
export default function Principal() {
  const p = PRINCIPAL;
  return (
    <section className="section section--tint principal" aria-labelledby="principal-title">
      <div className="wrap principal__grid">
        <Reveal className="principal__media">
          <div className="principal__photo">
            <img src={p.photo} alt={`${p.name}, ${p.role}`} loading="lazy" width="800" height="1038" />
          </div>
          <div className="principal__since">
            <span>Principal since</span>
            <strong>2009</strong>
          </div>
        </Reveal>

        <div>
          <SectionTitle
            id="principal-title"
            kicker="About the principal"
            title={p.name.split(' ').slice(0, -1).join(' ')}
            accent={p.name.split(' ').at(-1)}
          />
          <Reveal as="p" className="principal__role" delay={60}>
            {p.qualifications} <span>·</span> {p.role} <span>·</span> {p.department}
          </Reveal>

          {p.text.map((t, i) => (
            <Reveal as="p" key={t.slice(0, 20)} className="about__text principal__text" delay={100 + i * 60}>
              {t}
            </Reveal>
          ))}

          <Reveal as="dl" className="principal__stats" delay={220}>
            {p.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal as="ul" className="principal__members" delay={280} aria-label="Professional memberships">
            {p.memberships.map((m) => (
              <li key={m}>
                <Icon name="check" size={16} />
                {m}
              </li>
            ))}
          </Reveal>

          <Reveal className="about__cta" delay={320}>
            <a className="btn btn--red btn--pill" href={p.profile} target="_blank" rel="noopener noreferrer">
              View full profile <Icon name="arrow" size={16} className="btn__arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
