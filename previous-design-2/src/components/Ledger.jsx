import { STATS } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

function Entry({ stat, index, active }) {
  const p = useCountUp(active, 1600 + index * 150);
  const value = stat.from + (stat.to - stat.from) * p;
  return (
    <li className="ledger__entry">
      <span className="ledger__idx mono">{String(index + 1).padStart(2, '0')}</span>
      <strong className="ledger__num">{value.toFixed(stat.decimals)}</strong>
      <span className="ledger__label">{stat.label}</span>
    </li>
  );
}

/** Key figures set like a ruled ledger line. */
export default function Ledger() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section className="ledger" aria-label="VIPW in numbers">
      <ol ref={ref} className="wrap ledger__list">
        {STATS.map((s, i) => (
          <Entry key={s.label} stat={s} index={i} active={inView} />
        ))}
      </ol>
    </section>
  );
}
