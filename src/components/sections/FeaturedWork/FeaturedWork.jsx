import Container from '@common/Container/Container';
import SectionHeader from '@common/SectionHeader/SectionHeader';
import Button from '@common/Button/Button';
import { featuredProjects, teamfgnGallery } from '@data/projects';
import { cn } from '@utils/cn';
import styles from './FeaturedWork.module.css';

export default function FeaturedWork() {
  const [teamfgn, academy, behance] = featuredProjects;

  return (
    <section className={styles.section} id="work">
      <Container>
        <SectionHeader
          index="/ 04"
          eyebrow="Featured work"
          title="Selected projects across brand, product, and community."
          description="A snapshot of recent engagements — identity systems, platforms, and campaigns built with operators we believe in."
        />
      </Container>

      {/* Project 01 — TeamFGN showcase */}
      <Container className={styles.projectWrap}>
        <article className={styles.project}>
          <header className={styles.projectHead}>
            <div className={styles.projectMeta}>
              <span className={cn('eyebrow', styles.index)}>{teamfgn.index} / {teamfgn.year}</span>
              <span className={cn('eyebrow', styles.category)}>{teamfgn.category}</span>
            </div>
            <h3 className={cn('h-1', styles.projectName)}>{teamfgn.name}</h3>
            <p className={styles.projectSummary}>{teamfgn.summary}</p>
            <ul className={styles.scope}>
              {teamfgn.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </header>

          <div className={styles.gallery}>
            <figure className={cn(styles.frame, styles.frameHero, 'reveal')}>
              <img src={teamfgnGallery[0].src} alt={teamfgnGallery[0].alt} loading="lazy" />
              <figcaption className={styles.cap}>
                <span className="eyebrow">/ 01</span>
                <span>{teamfgnGallery[0].caption}</span>
              </figcaption>
            </figure>

            <div className={styles.duo}>
              <figure className={cn(styles.frame, 'reveal')}>
                <img src={teamfgnGallery[1].src} alt={teamfgnGallery[1].alt} loading="lazy" />
                <figcaption className={styles.cap}>
                  <span className="eyebrow">/ 02</span>
                  <span>{teamfgnGallery[1].caption}</span>
                </figcaption>
              </figure>
              <figure className={cn(styles.frame, 'reveal')}>
                <img src={teamfgnGallery[2].src} alt={teamfgnGallery[2].alt} loading="lazy" />
                <figcaption className={styles.cap}>
                  <span className="eyebrow">/ 03</span>
                  <span>{teamfgnGallery[2].caption}</span>
                </figcaption>
              </figure>
            </div>

            <figure className={cn(styles.frame, styles.frameWide, 'reveal')}>
              <img src={teamfgnGallery[3].src} alt={teamfgnGallery[3].alt} loading="lazy" />
              <figcaption className={styles.cap}>
                <span className="eyebrow">/ 04</span>
                <span>{teamfgnGallery[3].caption}</span>
              </figcaption>
            </figure>
          </div>
        </article>
      </Container>

      {/* Secondary projects */}
      <Container className={styles.projectWrap}>
        <div className={styles.secondaryGrid}>
          {[academy, behance].map((p) => (
            <article key={p.id} className={cn(styles.secondary, 'reveal')}>
              <div className={styles.secondaryFrame}>
                <div className={styles.placeholder} aria-hidden="true">
                  <span className={styles.placeholderName}>{p.name}</span>
                  <span className={styles.placeholderMark}>Kofuz</span>
                </div>
              </div>
              <div className={styles.secondaryMeta}>
                <span className={cn('eyebrow', styles.index)}>{p.index} / {p.year}</span>
                <h4 className={cn('h-4', styles.secondaryName)}>{p.name}</h4>
                <p className={styles.secondarySummary}>{p.summary}</p>
                <ul className={styles.scopeInline}>
                  {p.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Button as="a" href="#contact" variant="secondary" size="lg" arrow>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
