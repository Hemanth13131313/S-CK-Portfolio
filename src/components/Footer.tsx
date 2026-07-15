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
            LET'S <span className="text-display-italic text-color-primary">TALK</span>
          </h2>
          <div className={styles.cta}>
            <MagneticButton>
              <a href="mailto:hello@satvik.com" className={`${styles.emailButton} magnetic`} aria-label="Send email to Satvik">
                hello@satvik.com <ArrowUpRight />
              </a>
            </MagneticButton>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p className="text-micro">© {new Date().getFullYear()} SATVIK KARNATI. ALL RIGHTS RESERVED.</p>
          <div className={styles.socials}>
            <MagneticButton><a href="#" className="magnetic text-micro" aria-label="Behance profile">Behance</a></MagneticButton>
            <MagneticButton><a href="#" className="magnetic text-micro" aria-label="Twitter profile">Twitter</a></MagneticButton>
            <MagneticButton><a href="#" className="magnetic text-micro" aria-label="LinkedIn profile">LinkedIn</a></MagneticButton>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
