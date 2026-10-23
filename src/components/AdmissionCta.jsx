import { ADMISSION_YEAR, CTA_PHOTO, ENQUIRY_FORM, INSTITUTE } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';

/** Photo with an arched red offer panel, like the template's "join today" banner. */
export default function AdmissionCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <img className="cta__bg" src={CTA_PHOTO} alt="" loading="lazy" />
      <div className="wrap cta__inner">
        <Reveal className="cta__panel">
          <h2 id="cta-title">Admissions open for {ADMISSION_YEAR}. Join {INSTITUTE.name} today.</h2>
          <p>
            B.Pharm, Pharm D, M.Pharm and Pharm D (PB). Fill the admission enquiry form and the team will call you
            back about seats, fees and eligibility.
          </p>
          <a className="btn btn--white btn--pill" href={ENQUIRY_FORM} target="_blank" rel="noopener noreferrer">
            Apply now <Icon name="arrow" size={16} className="btn__arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
