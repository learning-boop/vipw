import { MARQUEE } from '../data/content';
import { Hex } from './Icon';

function Group({ hidden = false }) {
  return (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {MARQUEE.map((item) => (
        <li key={item} className="marquee__item">
          {item}
          <Hex size={14} fill="#fff" />
        </li>
      ))}
    </ul>
  );
}

/** Endless ticker of approvals; the second copy makes the loop seamless. */
export default function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Approvals and recognitions">
      <div className="marquee__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
