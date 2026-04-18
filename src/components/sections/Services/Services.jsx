import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import { servicePillars } from '@data/services';
import { cn } from '@utils/cn';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <Container>
        <SectionHeader
          index="/ 02"
          eyebrow="What we do"
          title="Four disciplines. One studio."
          description="Engage a single pillar or the full stack. Each sub-brand is an independent specialty that plays nicely with the rest."
        />

        <div className={styles.grid}>
          {servicePillars.map((s) => (
            <article
              key={s.id}
              className={cn(styles.card, 'reveal')}
              id={s.id}
              style={{ '--pillar-color': `var(${s.accentVar})` }}
            >
              <header className={styles.cardHead}>
                <span className={cn('eyebrow', styles.num)}>{s.number}</span>
                <h3 className={cn('h-4', styles.name)}>{s.name}</h3>
                <span className={cn('eyebrow', styles.tagline)}>{s.tagline}</span>
              </header>

              <p className={styles.summary}>{s.summary}</p>

              <ul className={styles.caps}>
                {s.capabilities.map((cap) => (
                  <li key={cap} className={styles.cap}>
                    <span className={styles.capDash} aria-hidden="true" />
                    {cap}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
