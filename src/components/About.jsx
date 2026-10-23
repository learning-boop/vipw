import { ABOUT_PHOTOS, CONTACT, INSTITUTE } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const POINTS = [
  { icon: 'shield', title: 'Built for women', text: 'A Women Empowerment Cell, ICC and dedicated facilities.' },
  { icon: 'flask', title: 'Research culture', text: 'Centre of Excellence, IIC, Ph.D guides and patents.' },
];

export default function About() {
  return (
    <section id="why" className="section about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <Reveal className="about__media">
          <img className="about__main" src={ABOUT_PHOTOS.main} alt="Students and faculty with awards" loading="lazy" />
          <div className="about__circle">
            <img src={ABOUT_PHOTOS.circle} alt="Students in a classroom" loading="lazy" />
          </div>
          <img className="about__small" src={ABOUT_PHOTOS.small} alt="Students on an industrial visit" loading="lazy" />
          <div className="about__badge">
            <strong>{new Date().getFullYear() - INSTITUTE.founded}+</strong>
            <span>Years of excellence</span>
          </div>
        </Reveal>

        <div className="about__copy">
          <SectionTitle
            id="about-title"
            kicker="About us"
            title="A pharmacy college that"
            accent="inspires women"
            after="to lead."
          />
          <Reveal as="p" className="about__text" delay={80}>
            {INSTITUTE.name} was founded in {INSTITUTE.founded} by the {INSTITUTE.foundation} in Enikepadu,
            Vijayawada. It is UGC autonomous, approved by the Pharmacy Council of India and AICTE, affiliated to JNTU
            Kakinada, ISO 9001:2015 certified and graded A+ by NAAC in its first cycle.
          </Reveal>

          <div className="about__points">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} className="point" delay={140 + i * 80}>
                <span className="blob">
                  <Icon name={p.icon} size={26} />
                </span>
                <span>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal className="about__cta" delay={260}>
            <a className="btn btn--red btn--pill" href="https://vipw.in/about-institution.php" target="_blank" rel="noopener noreferrer">
              Discover more <Icon name="arrow" size={16} className="btn__arrow" />
            </a>
            <a className="about__call" href={CONTACT.phones[0].href}>
              <span className="about__call-icon">
                <Icon name="phone" size={20} />
              </span>
              <span>
                <small>Call admissions</small>
                <strong>{CONTACT.phones[0].label}</strong>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
