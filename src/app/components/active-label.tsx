import React from 'react';
import styles from './active-label.module.css';

export interface ActivaLabelProps {
  children: React.ReactNode;
}
console.log(styles);
export default function ActiveLabel({ children }: ActivaLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
