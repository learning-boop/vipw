import { COUNTER_PHOTO, COUNTERS } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import Icon from './Icon';

function Counter({ item, active }) {
  const p = useCountUp(active, 1800);
  return (
    <li className="counter">
      <span className="counter__icon">
        <Icon name={item.icon} size={34} />
      </span>
      <strong>{(item.to * p).toFixed(item.decimals)}</strong>
      <span>+ {item.label}</span>
    </li>
  );
}

/** Count-up figures over a steel-blue tinted campus photo. */
export default function Counters() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section className="counters" aria-label="Vijaya Institute of Pharmaceutical Sciences for Women in numbers">
      <img className="counters__bg" src={COUNTER_PHOTO} alt="" loading="lazy" />
      <ul ref={ref} className="wrap counters__list">
        {COUNTERS.map((c) => (
          <Counter key={c.label} item={c} active={inView} />
        ))}
      </ul>
    </section>
  );
}
