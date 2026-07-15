"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <div className={styles.logo}>S!CK</div>
        <nav className={styles.nav}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </nav>
        <div className={styles.contact}>
          <button className={styles.letsTalk}>
            Lets Talk <ArrowUpRight size={16} />
          </button>
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
            SATHVIK
          </motion.h1>
        </div>
      </div>
      
      <div className={styles.subTextContainer}>
        <div className={styles.subTextLeft}>
          <p>Strategy, Design,</p>
          <p>Performance</p>
        </div>
        <div className={styles.subTextRight}>
          <p>We are a branding studio</p>
          <p>that helps businesses stand out.</p>
        </div>
      </div>
    </section>
  );
}
