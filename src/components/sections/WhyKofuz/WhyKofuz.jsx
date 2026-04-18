import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import { whyKofuz } from '@data/whyKofuz';
import { cn } from '@utils/cn';
import styles from './WhyKofuz.module.css';

export default function WhyKofuz() {
  return (
    <section className={styles.section} id="why">
      <Container>
        <SectionHeader
          index="/ 05"
          eyebrow="Why Kofuz"
          title="A studio built for the way modern brands actually grow."
          description="We’re structured like a modern operator — specialized teams, shared context, one table."
        />

        <div className={styles.grid}>
          {whyKofuz.map((item, i) => {
            const accents = [
              '--color-accent',
              '--color-accent-2',
              '--color-accent-3',
              '--color-accent-4'
            ];
            return (
              <div
                key={item.number}
                className={cn(styles.item, 'reveal')}
                style={{ '--item-accent': `var(${accents[i % accents.length]})` }}
              >
                <div className={styles.itemHead}>
                  <span className={cn('eyebrow', styles.num)}>{item.number}</span>
                  <span className={styles.rule} aria-hidden="true" />
                </div>
                <h3 className={cn('h-3', styles.title)}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
