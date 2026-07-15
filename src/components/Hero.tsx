"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <div className={styles.logo}>S!CK</div>
        <nav className={styles.nav}>
          <MagneticButton><a href="#work" className="magnetic">Work</a></MagneticButton>
          <MagneticButton><a href="#about" className="magnetic">About</a></MagneticButton>
          <MagneticButton><a href="#services" className="magnetic">Services</a></MagneticButton>
        </nav>
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
            SATVIK
          </motion.h1>
        </div>
      </div>
      
      <div className={styles.subTextContainer}>
        <div className={styles.subTextLeft}>
          <p className="text-micro">Strategy, Design,</p>
          <p className="text-micro">Performance</p>
        </div>
        <div className={styles.subTextRight}>
          <p className="text-micro">We are a branding studio</p>
          <p className="text-micro">that helps businesses stand out.</p>
        </div>
      </div>
    </section>
  );
}
