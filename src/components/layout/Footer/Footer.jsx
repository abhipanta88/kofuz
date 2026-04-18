import Container from '@common/Container/Container';
import { site } from '@data/site';
import { servicePillars } from '@data/services';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.mega}>
          <div className={styles.lead}>
            <span className="eyebrow">/ Let's build</span>
            <h2 className="h-1">
              Your next chapter<br />starts here.
            </h2>
            <a href="#contact" className={styles.bigCta}>
              hello@kofuz.studio
              <span aria-hidden="true" className={styles.arrow}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14h18M16 7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <span className="eyebrow">/ Studio</span>
            <p className={styles.note}>
              Kofuz is a Southern Ontario creative and product studio. We build brands, launch products,
              and grow communities with youth sports organizations, new businesses, and rebrands.
            </p>
          </div>

          <div className={styles.col}>
            <span className="eyebrow">/ Sub-brands</span>
            <ul className={styles.list}>
              {servicePillars.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <span className="eyebrow">/ Navigate</span>
            <ul className={styles.list}>
              {site.nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <span className="eyebrow">/ Elsewhere</span>
            <ul className={styles.list}>
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">{s.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.mark}>Kofuz</span>
          <span className={styles.meta}>© {year} Kofuz Studio — {site.location}</span>
          <span className={styles.meta}>All rights reserved</span>
        </div>
      </Container>
    </footer>
  );
}
