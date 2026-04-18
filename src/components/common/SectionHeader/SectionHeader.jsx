import { cn } from '@utils/cn';
import styles from './SectionHeader.module.css';

export default function SectionHeader({
  eyebrow,
  index,
  title,
  description,
  align = 'left',
  className
}) {
  return (
    <header className={cn(styles.header, styles[align], className)}>
      <div className={styles.meta}>
        {index && <span className={cn('eyebrow', styles.index)}>{index}</span>}
        {eyebrow && <span className={cn('eyebrow', styles.eyebrow)}>{eyebrow}</span>}
      </div>
      {title && <h2 className={cn('h-2', styles.title, 'reveal')}>{title}</h2>}
      {description && (
        <p className={cn('lede', styles.desc, 'reveal')}>{description}</p>
      )}
    </header>
  );
}
