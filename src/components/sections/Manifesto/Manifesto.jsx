import Container from '@common/Container/Container';
import Marquee from '@common/Marquee/Marquee';
import { cn } from '@utils/cn';
import styles from './Manifesto.module.css';

const marqueeItems = [
  'Brand Identity',
  'Product Design',
  'Web Development',
  'Youth Sports',
  'Marketing Automation',
  'Growth Strategy',
  'Campaign Creative',
  'Rebrands'
];

export default function Manifesto() {
  return (
    <section className={styles.section}>
      <Marquee items={marqueeItems} speed={42} />

      <Container className={styles.wrap}>
        <div className={styles.meta}>
          <span className="eyebrow">/ Studio note</span>
          <span className="eyebrow">/ 2025 — ongoing</span>
        </div>

        <h2 className={cn(styles.body, 'reveal')}>
          We believe the best brands are&nbsp;
          <em className={styles.em}>built in public</em>, shipped fast, and
          sharpened by&nbsp;<em className={styles.em2}>real operators</em>.
          Kofuz is structured to move at the speed of the founders, leagues,
          and teams we work with — strategy, design, product, and growth sitting
          at the same table from day one.
        </h2>

        <div className={styles.sig}>
          <span className={styles.rule} aria-hidden="true" />
          <span className={styles.sigText}>Kofuz / Studio Principles</span>
        </div>
      </Container>
    </section>
  );
}
