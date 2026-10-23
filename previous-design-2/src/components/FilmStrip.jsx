import { CAMPUS, VIDEOS } from '../data/content';
import Chapter from './Chapter';
import Icon from './Icon';
import Photo from './Photo';
import Reveal from './Reveal';

/** Campus life as a horizontally scrolling contact sheet, plus the institute's videos. */
export default function FilmStrip() {
  return (
    <section id="campus" className="section" aria-labelledby="campus-title">
      <div className="wrap">
        <Chapter
          no="04"
          kicker="Campus life"
          id="campus-title"
          title={
            <>
              Life outside the <em>lab</em>.
            </>
          }
          lead="Sport, outreach, industry visits and festivals, straight from the VIPW gallery. Scroll sideways for more."
        />
      </div>
      <Reveal className="strip">
        <ul className="strip__track" tabIndex={0} aria-label="Campus life photos">
          {CAMPUS.map((c, i) => (
            <li key={c.title} className={`frame frame--${i % 3}`}>
              <a href={c.href} target="_blank" rel="noopener noreferrer">
                <Photo src={c.photo} alt={c.title} label={c.title} className="frame__photo" />
                <div className="frame__cap">
                  <span className="mono">{String(i + 1).padStart(2, '0')}A</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </a>
            </li>
          ))}
          <li className="frame frame--more">
            <a href="https://vipw.in/gallery.php" target="_blank" rel="noopener noreferrer">
              Open the full gallery →
            </a>
          </li>
        </ul>
      </Reveal>

      <div className="wrap videos">
        {VIDEOS.map((v, i) => (
          <Reveal key={v.id} delay={i * 120}>
            <a
              className="video"
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
              <span className="video__play" aria-hidden="true">
                <Icon name="youtube" size={30} />
              </span>
              <span className="video__title">
                <span className="mono">Watch · YouTube</span>
                {v.title}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
