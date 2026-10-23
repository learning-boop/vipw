import { CODES, CONTACT } from '../data/content';
import Icon from './Icon';

export const SOCIAL = [
  { name: 'facebook', label: 'Facebook', href: CONTACT.facebook },
  { name: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/918008651333' },
  { name: 'youtube', label: 'YouTube', href: CONTACT.youtube },
  { name: 'pin', label: 'Location on Google Maps', href: CONTACT.map },
];

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <span className="hide-sm">Follow us:</span>
        <ul className="topbar__social">
          {SOCIAL.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <Icon name={s.name} size={14} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="topbar__right">
        <li className="hide-md">
          <Icon name="pin" size={15} />
          {CONTACT.addressShort}
        </li>
        <li className="hide-sm">
          <Icon name="mail" size={15} />
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </li>
        <li>
          <Icon name="phone" size={15} />
          <a href={CONTACT.phones[0].href}>{CONTACT.phones[0].label}</a>
        </li>
        <li className="topbar__codes hide-xs">
          EAMCET <strong>{CODES.eapcet}</strong> · PGECET <strong>{CODES.pgecet}</strong>
        </li>
      </ul>
    </div>
  );
}
