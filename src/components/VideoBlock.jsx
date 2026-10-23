import { INSTITUTE, VIDEO_FEATURE, VIDEOS } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function VideoBlock() {
  const main = VIDEOS.find((v) => v.id === VIDEO_FEATURE.id);
  const other = VIDEOS.find((v) => v.id !== VIDEO_FEATURE.id);

  return (
    <section id="campus" className="section" aria-labelledby="video-title">
      <div className="wrap video-grid">
        <div>
          <SectionTitle id="video-title" kicker="Latest video" title="Let's check our" accent="campus life" />
          <Reveal as="p" className="about__text" delay={80}>
            See the campus, the classrooms and the events that make up a year at {INSTITUTE.name}, from the
            institute's own YouTube channel.
          </Reveal>
          <Reveal className="about__cta" delay={160}>
            {other && (
              <a
                className="btn btn--red btn--pill"
                href={`https://www.youtube.com/watch?v=${other.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch: {other.title} <Icon name="arrow" size={16} className="btn__arrow" />
              </a>
            )}
          </Reveal>
        </div>
        <Reveal delay={120}>
          <a
            className="video-card"
            href={`https://www.youtube.com/watch?v=${main.id}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Play video: ${main.title}`}
          >
            <img src={VIDEO_FEATURE.photo} alt="" loading="lazy" />
            <span className="video-card__play">
              <Icon name="play" size={28} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
