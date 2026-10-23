import { ASSETS, CODES, CONTACT, FOOTER_COLUMNS, INSTITUTE } from '../data/content';
import Icon from './Icon';

const isExternal = (href) => href.startsWith('http');

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__about">
          <div className="footer__logos">
            <span className="footer__logo-tile">
              <img src={ASSETS.logo} alt="SRK Foundation logo" width="67" height="46" />
            </span>
            <span className="footer__logo-tile footer__logo-tile--sq">
              <img src={ASSETS.naac} alt="NAAC A+ badge" width="50" height="50" />
            </span>
          </div>
          <p className="footer__blurb">
            <strong>{INSTITUTE.name}.</strong> Established {INSTITUTE.founded} by the {INSTITUTE.foundation}.{' '}
            {CONTACT.addressFull}.
          </p>
          <p className="footer__codes">
            EAMCET / ECET code <strong>{CODES.eapcet}</strong> · PGECET code <strong>{CODES.pgecet}</strong>
          </p>
          <div className="footer__social">
            <a className="social" href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="VIPW on Facebook">
              <Icon name="facebook" />
            </a>
            <a className="social" href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="VIPW on YouTube">
              <Icon name="youtube" />
            </a>
            <a className="social" href={CONTACT.map} target="_blank" rel="noopener noreferrer" aria-label="VIPW on Google Maps">
              <Icon name="pin" />
            </a>
          </div>
        </div>

        <div className="footer__cols">
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              <p className="footer__col-title mono">{col.title}</p>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(isExternal(l.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div className="wrap footer__bottom">
        <p>
          © {year} {INSTITUTE.name}, Vijayawada
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
