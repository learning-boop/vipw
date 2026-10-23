import { CAMPUS } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

/** Masonry-style gallery of real campus photos, each opening its album on vipw.in. */
export default function Gallery() {
  return (
    <section className="section" aria-labelledby="gallery-title">
      <div className="wrap">
        <SectionTitle
          center
          id="gallery-title"
          kicker="Our gallery"
          title="Life on"
          accent="campus"
          lead="Sport, outreach, industry visits and festivals, straight from the institute's gallery."
        />
        <div className="gallery">
          {CAMPUS.map((c, i) => (
            <Reveal key={c.title} className={`gallery__item gallery__item--${i}`} delay={(i % 3) * 80}>
              <a href={c.href} target="_blank" rel="noopener noreferrer">
                <img src={c.photo} alt={c.title} loading="lazy" />
                <span className="gallery__cap">
                  <Icon name="arrowUpRight" size={18} />
                  {c.title}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="center-cta">
          <a className="btn btn--red btn--pill" href="https://vipw.in/gallery.php" target="_blank" rel="noopener noreferrer">
            View full gallery <Icon name="arrow" size={16} className="btn__arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
