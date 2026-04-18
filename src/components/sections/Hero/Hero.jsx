import Container from '@common/Container/Container';
import Button from '@common/Button/Button';
import { site } from '@data/site';
import { cn } from '@utils/cn';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Container className={styles.inner}>
        <div className={styles.topRow}>
          <span className="eyebrow">/ Kofuz — Creative & Product Studio</span>
          <span className="eyebrow">/ Est. {site.location}</span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.line}>
            <em className={cn(styles.em, styles.em1)}>Build</em> Brands.
          </span>
          <span className={styles.line}>
            <em className={cn(styles.em, styles.em2)}>Launch</em> Products.
          </span>
          <span className={styles.line}>
            <em className={cn(styles.em, styles.em3)}>Grow</em> Communities.
          </span>
        </h1>

        <div className={styles.tail}>
          <div className={styles.rail}>
            <span className="eyebrow">/ 01</span>
            <span className={styles.railText}>A studio, four disciplines</span>
          </div>

          <p className={styles.sub}>
            Kofuz is a Southern Ontario creative and product studio helping new businesses,
            rebrands, and youth sports organizations turn ambition into momentum.
          </p>

          <div className={styles.ctas}>
            <Button as="a" href="#work" variant="primary" size="lg" arrow>
              See Our Work
            </Button>
            <Button as="a" href="#contact" variant="secondary" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </Container>

      <div className={styles.bottomMeta}>
        <Container className={styles.metaRow}>
          <span className="eyebrow">/ Creative. Product. Growth.</span>
          <span className="eyebrow">/ Scroll ↓</span>
        </Container>
      </div>
    </section>
  );
}
