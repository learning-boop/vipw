import { useEffect, useState } from 'react';
import { ASSETS, INSTITUTE, NAV_LINKS } from '../data/content';
import Icon from './Icon';

const LINKS = [{ label: 'Home', href: '#top' }, ...NAV_LINKS, { label: 'Contact', href: '#enquire' }];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="wrap header__inner">
        <a href="#top" className="logo" aria-label={`${INSTITUTE.name} home`} onClick={close}>
          <img src={ASSETS.logo} alt="SRK Foundation logo" width="70" height="48" />
          <span>
            <strong>{INSTITUTE.name}</strong>
            <small>Autonomous · NAAC A+ · Vijayawada</small>
          </span>
        </a>

        <nav className="header__nav" aria-label="Main">
          {LINKS.map((l, i) => (
            <a key={l.href + l.label} href={l.href} className={i === 0 ? 'is-current' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <img
            className="header__naac"
            src={ASSETS.naac}
            alt="NAAC accredited with A+ grade, CGPA 3.37 in the first cycle"
            width="58"
            height="58"
          />
          <a className="btn btn--red btn--pill hide-xs" href="#enquire">
            <Icon name="doc" size={16} /> Apply now
          </a>
          <button
            type="button"
            className="header__menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="wrap drawer__inner" aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href + l.label} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
              {l.label}
              <Icon name="chevronRight" size={18} />
            </a>
          ))}
          <a className="btn btn--red btn--pill" href="#enquire" onClick={close} tabIndex={open ? 0 : -1}>
            Apply now
          </a>
        </nav>
      </div>
    </header>
  );
}
