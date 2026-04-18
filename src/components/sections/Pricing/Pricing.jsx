import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import Button from '@common/Button/Button';
import { pricingTiers } from '@data/pricing';
import { cn } from '@utils/cn';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <Container>
        <SectionHeader
          index="/ 07"
          eyebrow="Engagements"
          title="Clear tiers. Real scope. No surprises."
          description="Most partnerships start tight and grow. Every engagement is scoped with a clear deliverable list, timeline, and success metric."
        />

        <div className={styles.grid}>
          {pricingTiers.map((tier, i) => {
            const accents = [
              '--color-accent',
              '--color-accent-2',
              '--color-accent-3'
            ];
            return (
            <article
              key={tier.id}
              className={cn(styles.card, tier.featured && styles.featured, 'reveal')}
              style={{ '--tier-accent': `var(${accents[i % accents.length]})` }}
            >
              <header className={styles.header}>
                <div className={styles.headRow}>
                  <span className={cn('eyebrow', styles.num)}>/ 0{i + 1}</span>
                  {tier.featured && <span className={styles.badge}>Most engaged</span>}
                </div>
                <h3 className={cn('h-3', styles.name)}>{tier.name}</h3>
                <span className={styles.tagline}>{tier.tagline}</span>
              </header>

              <div className={styles.priceBlock}>
                <span className={styles.price}>{tier.price}</span>
                <span className={styles.priceNote}>{tier.priceNote}</span>
              </div>

              <p className={styles.desc}>{tier.description}</p>

              <ul className={styles.includes}>
                {tier.includes.map((line) => (
                  <li key={line} className={styles.inc}>
                    <span className={styles.tick} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7.5L5.5 11 12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className={styles.foot}>
                <Button
                  as="a"
                  href={tier.cta.href}
                  variant={tier.featured ? 'primary' : 'secondary'}
                  size="md"
                  arrow
                  className={styles.cta}
                >
                  {tier.cta.label}
                </Button>
              </div>
            </article>
            );
          })}
        </div>

        <p className={styles.note}>
          Not sure which fits? <a href="#contact">Start a conversation</a> — we will scope the right
          engagement together.
        </p>
      </Container>
    </section>
  );
}
