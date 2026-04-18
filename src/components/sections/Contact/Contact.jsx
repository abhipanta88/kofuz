import { useState } from 'react';
import Container from '@common/Container/Container';
import Button from '@common/Button/Button';
import { cn } from '@utils/cn';
import styles from './Contact.module.css';

const needsOptions = [
  'Brand Identity',
  'Website / Product',
  'Marketing Automation',
  'Paid Media / SEO',
  'Youth Sports Project',
  'Not sure yet'
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    org: '',
    need: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
    setForm({ name: '', email: '', org: '', need: '', message: '' });
  };

  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.head}>
          <span className="eyebrow">/ 09 — Contact</span>
          <h2 className={cn('h-display', styles.title)}>
            Let&rsquo;s build<br /><em className={styles.em}>something.</em>
          </h2>
          <p className={styles.sub}>
            Tell us what you&rsquo;re building. We reply to every serious message
            within two business days.
          </p>
        </div>

        <div className={styles.grid}>
          <aside className={styles.meta}>
            <div className={styles.block}>
              <span className="eyebrow">/ Email</span>
              <a href="mailto:hello@kofuz.studio" className={styles.email}>
                hello@kofuz.studio
              </a>
            </div>
            <div className={styles.block}>
              <span className="eyebrow">/ Studio</span>
              <p className={styles.blockText}>
                Southern Ontario, Canada<br />
                Working with teams across CA & US
              </p>
            </div>
            <div className={styles.block}>
              <span className="eyebrow">/ Hours</span>
              <p className={styles.blockText}>
                Mon &ndash; Fri · 09:00 &ndash; 18:00 ET
              </p>
            </div>
          </aside>

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                <span className={styles.labelNum}>01</span>
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                value={form.name}
                onChange={onChange('name')}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                <span className={styles.labelNum}>02</span>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                value={form.email}
                onChange={onChange('email')}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="org" className={styles.label}>
                <span className={styles.labelNum}>03</span>
                Organization
              </label>
              <input
                id="org"
                name="org"
                type="text"
                placeholder="Company, league, or team"
                value={form.org}
                onChange={onChange('org')}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelNum}>04</span>
                What do you need?
              </label>
              <div className={styles.chips} role="radiogroup">
                {needsOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    role="radio"
                    aria-checked={form.need === opt}
                    className={cn(styles.chip, form.need === opt && styles.chipActive)}
                    onClick={() => setForm((f) => ({ ...f, need: opt }))}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className={cn(styles.field, styles.fieldFull)}>
              <label htmlFor="message" className={styles.label}>
                <span className={styles.labelNum}>05</span>
                Tell us more <span className={styles.optional}>(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Scope, timeline, what success looks like…"
                value={form.message}
                onChange={onChange('message')}
                className={cn(styles.input, styles.textarea)}
              />
            </div>

            <div className={styles.submit}>
              <span className={styles.legal}>
                By submitting you agree to be contacted about your inquiry.
              </span>
              <Button type="submit" variant="primary" size="lg" arrow>
                {submitted ? 'Message sent' : 'Send message'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
