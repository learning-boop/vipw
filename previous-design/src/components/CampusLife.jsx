import { CAMPUS } from '../data/content';
import Photo from './Photo';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function CampusLife() {
  return (
    <section id="campus" className="section" aria-labelledby="campus-title">
      <div className="wrap">
        <SectionHead
          id="campus-title"
          eyebrow="Campus life"
          title="Life beyond the lab."
          aside={
            <p className="lead section-head__aside">
              Health camps, exhibitions, sports and student associations fill the year, alongside the
              institute&apos;s own magazine and newsletter.
            </p>
          }
        />
        <div className="bento">
          {CAMPUS.map((t, i) => (
            <Reveal key={t.title} className={`tile tile--${t.size}`} delay={(i % 3) * 90}>
              <Photo src={t.photo} alt={t.title} label={t.photoLabel} className="tile__photo" />
              <div className="tile__shade" />
              <div className="tile__cap">
                <h3 className="tile__title">{t.title}</h3>
                <p className="tile__text">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
