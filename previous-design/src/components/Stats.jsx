import { STATS } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import Reveal from './Reveal';

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const progress = useCountUp(inView);

  return (
    <section className="stats" aria-label="VIPW in numbers">
      <div ref={ref} className="wrap stats__grid">
        {STATS.map((s, i) => {
          const value = (s.from + (s.to - s.from) * progress).toFixed(s.decimals);
          return (
            <Reveal key={s.label} className="stat" delay={i * 80}>
              <p className="stat__num" aria-hidden="true">
                {value}
              </p>
              <p className="stat__label">
                <span className="sr-only">{s.to.toFixed(s.decimals)} </span>
                {s.label}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
