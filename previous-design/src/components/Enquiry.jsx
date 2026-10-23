import { useState } from 'react';
import { ADMISSION_YEAR, CONTACT, ENQUIRY_PROGRAMMES } from '../data/content';
import { submitEnquiry } from '../lib/submitEnquiry';
import Icon from './Icon';
import Reveal from './Reveal';

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
    <section id="enquire" className="section section--red" aria-labelledby="enquire-title">
      <div className="wrap enquiry">
        <Reveal className="enquiry__copy">
          <p className="eyebrow eyebrow--red">Enquire</p>
          <h2 id="enquire-title" className="h2">
            Talk to the admissions team.
          </h2>
          <p className="enquiry__lead">
            Questions about seats, fees or eligibility for {ADMISSION_YEAR}? Leave your number for a call back, or
            reach the team directly.
          </p>
          <ul className="contact-list">
            <li>
              <a href={CONTACT.phones[0].href}>
                <span className="contact-list__icon">
                  <Icon name="phone" />
                </span>
                {CONTACT.phones.map((p) => p.label).join(' · ')}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <span className="contact-list__icon">
                  <Icon name="mail" />
                </span>
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.map} target="_blank" rel="noopener noreferrer">
                <span className="contact-list__icon">
                  <Icon name="pin" />
                </span>
                {CONTACT.addressShort}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="enquiry__form-wrap" delay={120}>
          <form className="form" onSubmit={onSubmit} noValidate>
            <p className="form__title">Request a call back</p>

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
              <label htmlFor="enq-prog">Programme</label>
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

            <button type="submit" className="btn btn--navy form__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Request a call back'}
              {status !== 'sending' && <Icon name="arrow" size={18} className="btn__arrow" />}
            </button>

            <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
              {status === 'sent' && 'Thank you. The admissions team will call you shortly.'}
              {status === 'error' &&
                `Something went wrong. Please call ${CONTACT.phones[0].label} instead.`}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
