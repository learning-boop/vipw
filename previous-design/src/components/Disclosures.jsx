import { DISCLOSURES } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';

export default function Disclosures() {
  return (
    <section id="disclosures" className="section section--paper" aria-labelledby="disclosures-title">
      <div className="wrap disclosures">
        <Reveal className="disclosures__intro">
          <p className="eyebrow eyebrow--light">Disclosures</p>
          <h2 id="disclosures-title" className="h2">
            Every approval and report, one click away.
          </h2>
          <p className="lead">
            For regulators, NAAC peer teams and parents: mandatory documents gathered in one place instead of
            spread across menus.
          </p>
        </Reveal>
        <Reveal className="disclosures__grid" delay={120}>
          {DISCLOSURES.map((d) => (
            <a key={d.title} className="dlink" href={d.href} target="_blank" rel="noopener noreferrer">
              <span>
                <strong>{d.title}</strong>
                <span className="dlink__sub">{d.sub}</span>
              </span>
              <Icon name="arrowUpRight" size={20} className="dlink__arrow" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
