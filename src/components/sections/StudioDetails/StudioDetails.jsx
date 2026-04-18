import { useState } from 'react';
import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import { servicePillars } from '@data/services';
import { cn } from '@utils/cn';
import styles from './StudioDetails.module.css';

export default function StudioDetails() {
  const [active, setActive] = useState(0);
  const current = servicePillars[active];

  return (
    <section className={styles.section} id="studio">
      <Container>
        <SectionHeader
          index="/ 06"
          eyebrow="Inside the studio"
          title="A closer look at each sub-brand."
          description="Every discipline runs as its own specialized team — with the shared context of one studio."
        />

        <div className={styles.shell}>
          <nav className={styles.tabs} aria-label="Sub-brand selector">
            {servicePillars.map((p, i) => (
              <button
                key={p.id}
                className={cn(styles.tab, i === active && styles.tabActive)}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                style={{ '--tab-accent': `var(${p.accentVar})` }}
              >
                <span className={styles.tabNum}>{p.number}</span>
                <span className={styles.tabName}>{p.name}</span>
                <span className={styles.tabTagline}>{p.tagline}</span>
              </button>
            ))}
          </nav>

          <div
            className={styles.panel}
            key={current.id}
            style={{ '--panel-accent': `var(${current.accentVar})` }}
          >
            <div className={styles.panelHead}>
              <span className={cn('eyebrow', styles.currentNum)}>{current.number}</span>
              <h3 className={cn('h-1', styles.currentName)}>{current.name}</h3>
              <p className={styles.currentTagline}>{current.tagline}</p>
            </div>

            <p className={styles.currentSummary}>{current.summary}</p>

            <div className={styles.capsGrid}>
              {current.capabilities.map((cap, i) => (
                <div key={cap} className={styles.capRow}>
                  <span className={styles.capNum}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.capName}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
