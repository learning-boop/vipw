import { WHY } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function WhyVipw() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="wrap">
        <SectionHead
          id="why-title"
          eyebrow="Why VIPW"
          title="Built around the women who study here."
          aside={
            <p className="lead section-head__aside">
              Our mission is simple: empower young women through a holistic pharmacy education, with research,
              clinical exposure and career support from the first year.
            </p>
          }
        />
        <div className="grid grid--cards">
          {WHY.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90}>
              <article className="card">
                <div className="card__icon">
                  <Icon name={c.icon} size={24} />
                </div>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
