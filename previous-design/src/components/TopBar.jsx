import { ADMISSION_YEAR, CODES, CONTACT } from '../data/content';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <p className="topbar__news">
          <span className="dot" aria-hidden="true" />
          <span>Admissions open for {ADMISSION_YEAR} · B.Pharm · Pharm D · M.Pharm · Pharm D (PB)</span>
        </p>
        <div className="topbar__meta hide-xs">
          <span>
            EAMCET / ECET code <strong>{CODES.eapcet}</strong>
          </span>
          <span>
            PGECET code <strong>{CODES.pgecet}</strong>
          </span>
          <a href={CONTACT.phones[0].href}>{CONTACT.phones[0].label}</a>
        </div>
      </div>
    </div>
  );
}
