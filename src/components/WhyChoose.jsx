import { WHY, WHY_PHOTO } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

/** Navy "why choose us" section with an arched photo and feature cards. */
export default function WhyChoose() {
  return (
    <section className="section section--navy why" aria-labelledby="why-title">
      <div className="wrap why__grid">
        <div>
          <SectionTitle
            dark
            id="why-title"
            kicker="Why choose us"
            title="We are experts and"
            accent="do our best"
            after="for your goal."
            lead="Six reasons students and parents choose Vijaya Institute of Pharmaceutical Sciences for Women."
          />
          <div className="why__cards">
            {WHY.map((w, i) => (
              <Reveal key={w.title} className="feature" delay={(i % 2) * 90}>
                <span className="blob blob--sm">
                  <Icon name={w.icon} size={22} />
                </span>
                <span>
                  <strong>{w.title}</strong>
                  <span>{w.text}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="why__arch" delay={150}>
          <img src={WHY_PHOTO} alt="A national conference at Vijaya Institute of Pharmaceutical Sciences for Women" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
