import Container from '@common/Container/Container';
import { cn } from '@utils/cn';
import styles from './Testimonial.module.css';

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <Container className={styles.wrap}>
        <span className={styles.quoteMark} aria-hidden="true">“</span>

        <blockquote className={cn(styles.quote, 'reveal')}>
          Kofuz transformed how our basketball league presents itself.
          The brand, the website, the energy — it&rsquo;s all next level.
        </blockquote>

        <figcaption className={styles.credit}>
          <span className={styles.line} aria-hidden="true" />
          <div className={styles.creditText}>
            <span className={styles.who}>TeamFGN Founder</span>
            <span className={styles.where}>Basketball community, Southern Ontario</span>
          </div>
        </figcaption>
      </Container>
    </section>
  );
}
