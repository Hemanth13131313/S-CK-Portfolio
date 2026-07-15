"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import AmbientMesh from './AmbientMesh';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <AmbientMesh />
      <header className={styles.header}>
        <div className={styles.logo}>S!CK</div>
        <div className={styles.contact}>
          <MagneticButton>
            <button className={`${styles.letsTalk} magnetic`}>
              Lets Talk <ArrowUpRight size={16} />
            </button>
          </MagneticButton>
        </div>
      </header>

      <div className={styles.mainTitleContainer}>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 
            className={`${styles.mainTitle} text-display`}
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {['S', 'A', 'T'].map((letter, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.1, y: -20, color: "var(--color-primary)" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
            {['V', 'I', 'K'].map((letter, i) => (
              <motion.span 
                key={i + 3}
                className="text-display-italic text-color-primary"
                whileHover={{ scale: 1.1, y: -20, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
      
      <div className="grid-12" style={{ marginTop: 'var(--spacing-2xl)', padding: '0 var(--spacing-md)' }}>
        <div className="col-span-4">
          <p className="text-micro">Strategy, Design,</p>
          <p className="text-micro">Performance</p>
        </div>
        <div className="col-span-4" style={{ gridColumnStart: 9 }}>
          <p className="text-micro">We are a branding studio</p>
          <p className="text-micro">that helps businesses stand out.</p>
        </div>
      </div>
    </section>
  );
}
