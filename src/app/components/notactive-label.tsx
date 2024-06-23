import React from 'react';
import styles from './notactive-label.module.css';

export interface NotActivaLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActivaLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
