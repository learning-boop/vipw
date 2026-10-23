import { useEffect, useRef, useState } from 'react';
import { HERO_FILM, INSTITUTE, NOTICES } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Icon from './Icon';

const SCENE_MS = 5000;
const EMBED = 'https://www.youtube-nocookie.com/embed/';

/**
 * Full-width hero that plays like a film: real campus photos cross-fade with a slow
 * zoom and pan. Progress bars show the scenes; "Watch campus video" opens the
 * institute's YouTube video with sound.
 */
export default function Hero() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const scenes = HERO_FILM.scenes;

  useEffect(() => {
    if (reduced || open) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % scenes.length), SCENE_MS);
    return () => clearTimeout(t);
  }, [index, reduced, open, scenes.length]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <>
      <section id="top" className={`hero${reduced ? ' hero--still' : ''}`} aria-labelledby="hero-title">
        <h1 id="hero-title" className="sr-only">
          {INSTITUTE.name}
        </h1>

        {scenes.map((s, i) => (
          <figure key={s.photo} className={`scene scene--${i % 4}${i === index ? ' is-active' : ''}`} aria-hidden={i !== index}>
            <img src={s.photo} alt="" loading={i < 2 ? 'eager' : 'lazy'} fetchpriority={i === 0 ? 'high' : undefined} />
          </figure>
        ))}

        <div className="hero__bar">
          <p className="hero__caption" aria-live="polite">
            <span>{String(index + 1).padStart(2, '0')}</span>
            {scenes[index].caption}
          </p>
          <button type="button" className="hero__watch" onClick={() => setOpen(true)}>
            <span className="hero__watch-icon">
              <Icon name="play" size={16} />
            </span>
            <span className="hero__watch-label">Watch campus video</span>
          </button>
        </div>

        <div className="hero__progress" role="group" aria-label="Scenes">
          {scenes.map((s, i) => (
            <button
              key={s.photo}
              type="button"
              className={i < index ? 'is-done' : i === index ? 'is-active' : undefined}
              onClick={() => setIndex(i)}
              aria-label={`Show scene ${i + 1}: ${s.caption}`}
              aria-current={i === index}
            >
              <span key={i === index ? `run-${index}` : 'idle'} />
            </button>
          ))}
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="player"
        aria-label={HERO_FILM.video.title}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="player__frame">
          {open && (
            <iframe
              src={`${EMBED}${HERO_FILM.video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={HERO_FILM.video.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          )}
        </div>
        <button type="button" className="player__close" onClick={() => setOpen(false)} aria-label="Close video">
          <Icon name="close" size={22} />
        </button>
      </dialog>

      <div className="notice" aria-label="Current events">
        <div className="wrap notice__inner">
          <span className="notice__tag">Current events</span>
          <div className="notice__track">
            <ul className="notice__list">
              {[...NOTICES, ...NOTICES].map((n, i) => (
                <li key={i} aria-hidden={i >= NOTICES.length || undefined}>
                  <span className="notice__new">New</span>
                  <a
                    href={n.href}
                    tabIndex={i >= NOTICES.length ? -1 : undefined}
                    {...(n.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {n.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
