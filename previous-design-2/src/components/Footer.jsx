import { ASSETS, CONTACT, FOOTER_COLUMNS, INSTITUTE, MARQUEE } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__approvals" aria-label="Approvals and accreditations">
        <ul className="footer__marquee">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <li key={i} aria-hidden={i >= MARQUEE.length || undefined}>
              {m}
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src={ASSETS.logo} alt="SRK Foundation logo" width="96" height="66" />
          <p>
            {INSTITUTE.name}, an autonomous institution of the {INSTITUTE.foundation}.
          </p>
          <address>
            {CONTACT.addressFull}
            <br />
            {CONTACT.phones.map((p, i) => (
              <span key={p.href}>
                {i > 0 && ' · '}
                <a href={p.href}>{p.label}</a>
              </span>
            ))}
            <br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </address>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="footer__h mono">{col.title}</p>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="footer__word" aria-hidden="true">
        {INSTITUTE.short}
      </p>
      <div className="wrap footer__base mono">
        <span>© {new Date().getFullYear()} {INSTITUTE.foundation}</span>
        <span>Knowledge is Power</span>
      </div>
    </footer>
  );
}
