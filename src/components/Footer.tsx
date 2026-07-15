"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Footer.module.css';
import MagneticButton from './MagneticButton';
import { ArrowUpRight } from 'lucide-react';

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M8.7 10.2c.4-.2.6-.5.6-.9 0-.8-.6-1.3-1.6-1.3H4v8.2h4.2c1.3 0 1.9-.6 1.9-1.5 0-.6-.3-1-.8-1.1v-.1c.6-.1.9-.6.9-1.2zm-2.8 2H4v-1.8h1.8c.4 0 .8.2.8.7 0 .5-.3.8-.8.8zm.1-3.6H4V7.2h2c.4 0 .7.2.7.6 0 .4-.3.7-.7.7zm13.1 3c-.1-1.7-1.3-2.9-3.2-2.9-2 0-3.3 1.4-3.3 3.3 0 2 1.3 3.4 3.4 3.4 1.5 0 2.5-.7 3-1.8h-1.5c-.3.5-.8.8-1.5.8-1.1 0-1.8-.7-1.8-1.8h4.9zm-4.9-1.1c.1-1.1.8-1.6 1.7-1.6 1 0 1.6.5 1.6 1.6h-3.3zM16 7h4v1.5h-4z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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
            <MagneticButton>
              <a href="https://www.behance.net/satvikkarnati" target="_blank" rel="noopener noreferrer" className="magnetic text-micro">
                <BehanceIcon className={styles.socialIcon} /> BEHANCE
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/satvik-karnati-31026b279/" target="_blank" rel="noopener noreferrer" className="magnetic text-micro">
                <LinkedinIcon className={styles.socialIcon} /> LINKEDIN
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.instagram.com/satvik._05/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="magnetic text-micro">
                <InstagramIcon className={styles.socialIcon} /> INSTAGRAM
              </a>
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
