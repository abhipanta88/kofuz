import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import { founders } from '@data/team';
import { cn } from '@utils/cn';
import styles from './Founders.module.css';

export default function Founders() {
  return (
    <section className={styles.section} id="team">
      <Container>
        <SectionHeader
          index="/ 07"
          eyebrow="The Founders"
          title="Built by two operators, not a committee."
          description="Kofuz was started by a creative director and a product engineer who kept getting pulled onto the same projects. So we formalized it."
        />

        <div className={styles.grid}>
          {founders.map((f, i) => (
            <article
              key={f.id}
              className={cn(styles.card, 'reveal')}
              style={{
                '--founder-accent':
                  f.accent === 'accent2'
                    ? 'var(--color-accent-2)'
                    : 'var(--color-accent)'
              }}
            >
              <div className={styles.portrait} aria-hidden="true">
                <span className={styles.portraitIndex}>
                  0{i + 1} — Founder
                </span>
                <span className={styles.initials}>{f.initials}</span>
                <span className={styles.portraitMark}>Kofuz</span>
              </div>

              <div className={styles.body}>
                <header className={styles.head}>
                  <span className={cn('eyebrow', styles.role)}>{f.role}</span>
                  <h3 className={cn('h-2', styles.name)}>{f.name}</h3>
                  <span className={styles.discipline}>{f.discipline}</span>
                </header>

                <p className={styles.bio}>{f.bio}</p>

                <ul className={styles.focus}>
                  {f.focus.map((tag) => (
                    <li key={tag} className={styles.tag}>{tag}</li>
                  ))}
                </ul>

                <div className={styles.contact}>
                  <div className={styles.contactRow}>
                    <span className={cn('eyebrow', styles.contactLabel)}>
                      / Direct
                    </span>
                    <a
                      href={`tel:+1${f.phone}`}
                      className={styles.phone}
                      aria-label={`Call ${f.name} at ${f.phoneDisplay}`}
                    >
                      {f.phoneDisplay}
                      <span className={styles.phoneArrow} aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M4 13L13 4M13 4H6M13 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
