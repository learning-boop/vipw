import { DEPARTMENTS } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function Departments() {
  return (
    <section className="section section--tint" aria-labelledby="dept-title">
      <div className="wrap">
        <SectionTitle
          center
          id="dept-title"
          kicker="Departments"
          title="Browse our"
          accent="departments"
          lead="Five teaching departments, each with its own faculty and labs."
        />
        <div className="depts">
          {DEPARTMENTS.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <a className="dept" href={d.href} target="_blank" rel="noopener noreferrer">
                <span className="dept__icon">
                  <Icon name={d.icon} size={34} />
                </span>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
                <span className="dept__more">
                  Faculty <Icon name="arrow" size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
