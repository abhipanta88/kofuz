import { useEffect, useState } from 'react';
import Container from '@common/Container/Container';
import Button from '@common/Button/Button';
import { site } from '@data/site';
import { cn } from '@utils/cn';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={cn(styles.header, scrolled && styles.isScrolled)}>
      <Container className={styles.bar}>
        <a href="#top" className={styles.logo} aria-label="Kofuz — home">
          <span className={styles.logoMark}>Ko</span>
          <span className={styles.logoDot} aria-hidden="true" />
          <span className={styles.logoMark}>fuz</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button as="a" href="#contact" variant="primary" size="sm" arrow>
            Start a Project
          </Button>
        </div>

        <button
          className={cn(styles.burger, open && styles.burgerOpen)}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </Container>

      <div className={cn(styles.mobile, open && styles.mobileOpen)} aria-hidden={!open}>
        <nav className={styles.mobileNav}>
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <Button as="a" href="#contact" variant="primary" size="md" arrow onClick={handleNavClick}>
            Start a Project
          </Button>
          <p className={styles.mobileMeta}>{site.location}</p>
        </div>
      </div>
    </header>
  );
}
