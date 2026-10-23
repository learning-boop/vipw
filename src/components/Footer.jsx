import { useEffect, useState } from 'react';
import { ASSETS, BROCHURE, CONTACT, ENQUIRY_FORM, FOOTER_COLUMNS, INSTITUTE } from '../data/content';
import Icon from './Icon';
import { SOCIAL } from './TopBar';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__about">
          <a href="#top" className="logo logo--light">
            <img src={ASSETS.logo} alt="SRK Foundation logo" width="70" height="48" />
            <span>
              <strong>{INSTITUTE.name}</strong>
              <small>Autonomous · NAAC A+ · Vijayawada</small>
            </span>
          </a>
          <p>
            {INSTITUTE.name}, an autonomous institution of the {INSTITUTE.foundation}.
          </p>
          <ul className="footer__contact">
            <li>
              <span className="footer__ic"><Icon name="phone" size={16} /></span>
              <span>
                {CONTACT.phones.map((p, i) => (
                  <span key={p.href}>
                    {i > 0 && <br />}
                    <a href={p.href}>{p.label}</a>
                  </span>
                ))}
              </span>
            </li>
            <li>
              <span className="footer__ic"><Icon name="pin" size={16} /></span>
              {CONTACT.addressFull}
            </li>
            <li>
              <span className="footer__ic"><Icon name="mail" size={16} /></span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
          </ul>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="footer__h">{col.title}</p>
            <ul className="footer__links">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    <Icon name="chevronRight" size={14} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="footer__h">Admissions</p>
          <p className="footer__note">Enquire for the coming year or download the institute's brochure.</p>
          <a className="btn btn--red btn--pill footer__btn" href={ENQUIRY_FORM} target="_blank" rel="noopener noreferrer">
            Admission form <Icon name="arrowUpRight" size={16} />
          </a>
          <a className="btn btn--outline btn--pill footer__btn" href={BROCHURE} target="_blank" rel="noopener noreferrer">
            Brochure (PDF) <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="wrap footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} <span className="hl">{INSTITUTE.name}</span> · {INSTITUTE.foundation}. All rights
            reserved.
          </p>
          <ul className="footer__social">
            {SOCIAL.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon name={s.name} size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="#top" className={`to-top${showTop ? ' is-visible' : ''}`} aria-label="Back to top" tabIndex={showTop ? 0 : -1}>
        <Icon name="arrowUp" size={20} />
      </a>
    </footer>
  );
}
