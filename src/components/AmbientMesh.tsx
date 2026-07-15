"use client";

import styles from './AmbientMesh.module.css';

export default function AmbientMesh() {
  return (
    <div className={styles.meshContainer}>
      <div className={styles.gradientMesh}></div>
      <div className={styles.noiseOverlay}></div>
    </div>
  );
}
