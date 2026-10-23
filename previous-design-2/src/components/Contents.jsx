import { DISCLOSURES } from '../data/content';
import Chapter from './Chapter';
import Reveal from './Reveal';

/** Statutory disclosures laid out like a book's table of contents. */
export default function Contents() {
  return (
    <section id="disclosures" className="section section--paper" aria-labelledby="disc-title">
      <div className="wrap contents">
        <Chapter
          no="05"
          kicker="Disclosures"
          id="disc-title"
          title={
            <>
              Everything on the <em>record</em>.
            </>
          }
          lead="Accreditation reports, approvals, committees and the mandatory disclosure, all in one index."
        />
        <Reveal as="ol" className="toc">
          {DISCLOSURES.map((d, i) => (
            <li key={d.title}>
              <a href={d.href} target="_blank" rel="noopener noreferrer">
                <span className="toc__n mono">{String.fromCharCode(65 + i)}.</span>
                <span className="toc__title">{d.title}</span>
                <span className="toc__sub">{d.sub}</span>
                <span className="toc__dots" aria-hidden="true" />
                <span className="toc__go mono">open ↗</span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
