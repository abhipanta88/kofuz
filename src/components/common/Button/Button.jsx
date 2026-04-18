import { cn } from '@utils/cn';
import styles from './Button.module.css';

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(styles.btn, styles[variant], styles[`size-${size}`], className)}
      {...rest}
    >
      <span className={styles.inner}>
        <span className={styles.label}>{children}</span>
        {arrow && (
          <span className={styles.arrow} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </span>
        )}
      </span>
    </Tag>
  );
}
