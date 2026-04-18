import { useState } from 'react';
import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import { faqs } from '@data/faq';
import { cn } from '@utils/cn';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <Container className={styles.grid}>
        <div className={styles.lead}>
          <SectionHeader
            index="/ 08"
            eyebrow="FAQ"
            title="Common questions."
            description="Still have one? Reach out — we like the conversations."
          />
        </div>

        <ul className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <li key={item.q} className={cn(styles.row, isOpen && styles.rowOpen)}>
                <button
                  className={styles.q}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span className={cn('eyebrow', styles.qNum)}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.qText}>{item.q}</span>
                  <span className={styles.qIcon} aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  className={styles.a}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className={styles.aInner}>{item.a}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
