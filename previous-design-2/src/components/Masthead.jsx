import { useEffect, useState } from 'react';
import { ASSETS, CONTACT, INSTITUTE, NAV_LINKS } from '../data/content';
import Icon from './Icon';

const SOCIAL = [
  { name: 'facebook', label: 'Facebook', href: CONTACT.facebook, cls: 'fb' },
  { name: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/918008651333', cls: 'wa' },
  { name: 'youtube', label: 'YouTube', href: CONTACT.youtube, cls: 'yt' },
  { name: 'pin', label: 'Location on Google Maps', href: CONTACT.map, cls: 'map' },
];

/** Cream masthead with the institute's logo, then a sticky steel-blue nav rail. */
export default function Masthead() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 160);
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
    <>
      <header className="mast">
        <div className="wrap mast__inner">
          <a href="#top" className="mast__brand" aria-label={`${INSTITUTE.short} home`}>
            <img src={ASSETS.logo} alt="SRK Foundation logo" width="110" height="76" />
            <span>
              <span className="mast__name">{INSTITUTE.name}</span>
              <span className="mast__sub mono">Autonomous · Vijayawada · Est. {INSTITUTE.founded}</span>
            </span>
          </a>
          <div className="mast__side">
            <img
              className="mast__naac"
              src={ASSETS.naac}
              alt="NAAC accredited with A+ grade, CGPA 3.37 in the first cycle"
              width="72"
              height="72"
            />
            <ul className="social hide-sm">
              {SOCIAL.map((s) => (
                <li key={s.name}>
                  <a className={`social__btn social__btn--${s.cls}`} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <Icon name={s.name} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <nav className={`rail${stuck ? ' rail--stuck' : ''}`} aria-label="Main">
        <div className="wrap rail__inner">
          <a href="#top" className="rail__mini" aria-hidden={!stuck} tabIndex={stuck ? 0 : -1}>
            <img src={ASSETS.logo} alt="" width="44" height="30" />
            {INSTITUTE.short}
          </a>
          <div className="rail__links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a className="btn btn--red btn--sm hide-xs" href="#enquire">
            Apply / Enquire <Icon name="arrow" size={16} className="btn__arrow" />
          </a>
          <button
            type="button"
            className="rail__menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
        <div id="mobile-menu" className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
          <div className="wrap drawer__inner">
            {NAV_LINKS.map((l, i) => (
              <a key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
                <span className="mono">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <a className="btn btn--red" href="#enquire" onClick={close} tabIndex={open ? 0 : -1}>
              Enquire for admissions <Icon name="arrow" size={18} className="btn__arrow" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
