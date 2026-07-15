"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Footer.module.css';
import MagneticButton from './MagneticButton';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <footer ref={containerRef} className={styles.footerContainer}>
      <motion.div style={{ y }} className={styles.footerInner}>
        <div className={styles.content}>
          <h2 className="text-display">
            LET&apos;S <span className="text-display-italic text-color-primary">TALK</span>
          </h2>
          <div className={styles.cta}>
            <MagneticButton>
              <a href="mailto:hello@satvik.com" className={`${styles.emailButton} magnetic`} aria-label="Send email to Satvik">
                hello@satvik.com <ArrowUpRight />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className={styles.logoMark}></div>
        
        <div className={styles.bottomBar}>
          <div className={styles.socials}>
            <MagneticButton><a href="https://www.behance.net/satvikkarnati" target="_blank" rel="noopener noreferrer" className="magnetic text-micro">BEHANCE</a></MagneticButton>
            <MagneticButton><a href="https://www.linkedin.com/in/satvik-karnati-31026b279/" target="_blank" rel="noopener noreferrer" className="magnetic text-micro">LINKEDIN</a></MagneticButton>
            <MagneticButton><a href="https://www.instagram.com/satvik._05/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="magnetic text-micro">INSTAGRAM</a></MagneticButton>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
