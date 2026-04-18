import { cn } from '@utils/cn';
import styles from './Marquee.module.css';

export default function Marquee({ items = [], speed = 45, className }) {
  const row = (
    <div className={styles.row} aria-hidden="false">
      {items.map((it, i) => (
        <span key={i} className={styles.item}>
          <span>{it}</span>
          <span className={styles.dot} aria-hidden="true">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn(styles.marquee, className)}>
      <div className={styles.track} style={{ '--duration': `${speed}s` }}>
        {row}
        {row}
      </div>
    </div>
  );
}
