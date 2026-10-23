import { useState } from 'react';
import {
  ADMISSION_LINKS,
  ADMISSION_YEAR,
  CONTACT,
  COUNSELLING_CODES,
  ENQUIRY_PROGRAMMES,
  ENROL_PHOTO,
  STEPS,
} from '../data/content';
import { submitEnquiry } from '../lib/submitEnquiry';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const EMPTY = { name: '', phone: '', programme: ENQUIRY_PROGRAMMES[0], message: '' };

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.';
  const digits = v.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
  if (!/^[6-9]\d{9}$/.test(digits)) errors.phone = 'Please enter a valid 10-digit mobile number.';
  return errors;
}

export default function Enquiry() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus('sending');
    try {
      await submitEnquiry(values);
      setStatus('sent');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="enquire" className="enrol" aria-labelledby="enrol-title">
      <img className="enrol__bg" src={ENROL_PHOTO} alt="" loading="lazy" />
      <div className="wrap enrol__grid">
        <Reveal className="enrol__form-wrap">
          <form className="form" onSubmit={onSubmit} noValidate aria-labelledby="enrol-form-title">
            <div className="form__head">
              <p id="enrol-form-title" className="form__title">
                Start your enrolment
              </p>
              <p>Leave your number and the admissions team will call you back.</p>
            </div>

            <div className="form__body">
              <div className="field">
                <label htmlFor="enq-name">Full name</label>
                <input
                  id="enq-name"
                  className="input"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'enq-name-err' : undefined}
                />
                {errors.name && (
                  <p id="enq-name-err" className="field__error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="enq-phone">Mobile number</label>
                <input
                  id="enq-phone"
                  className="input"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91"
                  value={values.phone}
                  onChange={update('phone')}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'enq-phone-err' : undefined}
                />
                {errors.phone && (
                  <p id="enq-phone-err" className="field__error">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="enq-prog">Choose programme</label>
                <select id="enq-prog" className="input" value={values.programme} onChange={update('programme')}>
                  {ENQUIRY_PROGRAMMES.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="enq-msg">Your question (optional)</label>
                <textarea
                  id="enq-msg"
                  className="input"
                  rows={3}
                  placeholder="Ask about fees, eligibility or hostel"
                  value={values.message}
                  onChange={update('message')}
                />
              </div>

              <button type="submit" className="btn btn--red btn--pill form__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Enrol now'}
                {status !== 'sending' && <Icon name="arrow" size={16} className="btn__arrow" />}
              </button>

              <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
                {status === 'sent' && 'Thank you. The admissions team will call you shortly.'}
                {status === 'error' && `Something went wrong. Please call ${CONTACT.phones[0].label} instead.`}
              </p>
            </div>
          </form>
        </Reveal>

        <div id="admissions" className="enrol__copy">
          <SectionTitle
            dark
            id="enrol-title"
            kicker={`Admissions ${ADMISSION_YEAR}`}
            title="Your path to"
            accent="admission"
            lead="Convener seats come through state counselling with the codes below; management seats through the Category B form."
          />

          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80}>
                <span className="steps__n">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </span>
              </Reveal>
            ))}
          </ol>

          <Reveal className="codes" delay={200}>
            {COUNSELLING_CODES.map((c) => (
              <div key={c.code} className="codes__item">
                <small>{c.exam}</small>
                <strong>{c.code}</strong>
                <span>{c.for}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="enrol__links" delay={260}>
            {ADMISSION_LINKS.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                <Icon name="doc" size={16} />
                {l.label}
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
