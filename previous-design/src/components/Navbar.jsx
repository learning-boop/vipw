import { useEffect, useState } from 'react';
import { ASSETS, INSTITUTE, NAV_LINKS } from '../data/content';
import Icon from './Icon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="brand" aria-label={`${INSTITUTE.short} home`} onClick={close}>
          <img className="brand__logo" src={ASSETS.logo} alt="SRK Foundation logo" width="76" height="52" />
          <span className="brand__text">
            <strong className="brand__short">{INSTITUTE.short}</strong>
            <span className="brand__name hide-xs">
              Vijaya Institute of Pharmaceutical
              <br />
              Sciences for Women
            </span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <img
            className="nav__naac hide-md"
            src={ASSETS.naac}
            alt="NAAC accredited with A+ grade, CGPA 3.37 in the first cycle"
            width="54"
            height="54"
          />
          <a className="btn btn--red hide-xs" href="#enquire">
            Enquire now <Icon name="arrow" size={18} className="btn__arrow" />
          </a>
          <button
            type="button"
            className="nav__menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mnav${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="wrap mnav__inner" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="mnav__link"
              style={{ transitionDelay: open ? `${60 + i * 50}ms` : '0ms' }}
              onClick={close}
            >
              {l.label}
              <Icon name="arrow" size={18} />
            </a>
          ))}
          <a className="btn btn--red mnav__cta" href="#enquire" onClick={close}>
            Enquire for admissions <Icon name="arrow" size={18} className="btn__arrow" />
          </a>
        </nav>
      </div>
    </header>
  );
}
