import { ASSETS, DISCLOSURES } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const BADGES = ['NAAC A+', 'PCI', 'AICTE', 'JNTU Kakinada', 'UGC Autonomous', 'ISO 9001:2015'];

export default function Disclosures() {
  return (
    <section id="disclosures" className="section section--tint" aria-labelledby="disc-title">
      <div className="wrap">
        <SectionTitle
          center
          id="disc-title"
          kicker="Disclosures"
          title="Accreditations and"
          accent="records"
          lead="Reports, approvals and committees, all in one place."
        />
        <div className="disc">
          {DISCLOSURES.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 70}>
              <a className="disc__card" href={d.href} target="_blank" rel="noopener noreferrer">
                <span className="disc__icon">
                  <Icon name="doc" size={22} />
                </span>
                <span>
                  <strong>{d.title}</strong>
                  <small>{d.sub}</small>
                </span>
                <Icon name="arrowUpRight" size={18} className="disc__go" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="badges">
        <ul className="wrap badges__row" aria-label="Approved and accredited by">
          <li>
            <img src={ASSETS.naac} alt="NAAC A+" width="64" height="64" />
          </li>
          {BADGES.map((b) => (
            <li key={b}>
              <span className="badge-seal">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
