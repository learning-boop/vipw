import { CODES, NOTICES } from '../data/content';

/** Steel-blue strip from vipw.in, carrying the "Current events" notices as a ticker. */
export default function NoticeBar() {
  const loop = [...NOTICES, ...NOTICES];
  return (
    <div className="notice">
      <div className="notice__tag">
        <span className="notice__new">New</span>
        <span className="hide-xs">Notice board</span>
      </div>
      <div className="notice__track" aria-label="Current events">
        <ul className="notice__list">
          {loop.map((n, i) => (
            <li key={i} aria-hidden={i >= NOTICES.length || undefined}>
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
      <p className="notice__codes mono hide-sm">
        EAMCET/ECET <strong>{CODES.eapcet}</strong> · PGECET <strong>{CODES.pgecet}</strong>
      </p>
    </div>
  );
}
