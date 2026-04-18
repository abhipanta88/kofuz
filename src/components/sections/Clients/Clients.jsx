import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import { clientTypes } from '@data/clients';
import { cn } from '@utils/cn';
import styles from './Clients.module.css';

export default function Clients() {
  return (
    <section className={styles.section} id="who">
      <Container>
        <SectionHeader
          index="/ 03"
          eyebrow="Who we work with"
          title="Partners, not accounts."
          description="We work with operators who care about the craft and the outcome — founders, marketers, general managers, and community builders."
        />

        <ol className={styles.list}>
          {clientTypes.map((c, i) => {
            const accents = [
              '--color-accent',
              '--color-accent-2',
              '--color-accent-3',
              '--color-accent-4'
            ];
            return (
            <li
              key={c.title}
              className={cn(styles.row, 'reveal')}
              style={{ '--row-accent': `var(${accents[i % accents.length]})` }}
            >
              <span className={cn('eyebrow', styles.num)}>{c.number}</span>
              <h3 className={cn('h-2', styles.title)}>{c.title}</h3>
              <p className={styles.desc}>{c.description}</p>
              <span className={styles.arrow} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M6 16L16 6M16 6H8M16 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </span>
            </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
