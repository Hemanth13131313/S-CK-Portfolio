"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaTextRef = useRef<HTMLHeadingElement>(null);
  const massiveLogoRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && ctaTextRef.current) {
      // Scale the massive text as user scrolls into footer
      gsap.fromTo(ctaTextRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          }
        }
      );
    }

    if (containerRef.current && massiveLogoRef.current) {
      gsap.fromTo(massiveLogoRef.current,
        { y: '50%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <footer className={styles.footer} ref={containerRef}>
      <div className={styles.ctaContainer}>
        <h2 className={`${styles.ctaText} text-display`} ref={ctaTextRef}>
          So, are you ready to<br />Stand out?
        </h2>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.left}>
          <h3 className={styles.motto}>Design it once. Design it right.</h3>
          <button className={styles.letsTalk}>
            Lets Talk <ArrowUpRight size={16} />
          </button>
          <div className={styles.contactInfo}>
            <p>New Business :</p>
            <a href="mailto:hello@satvikkarnati.com">hello@satvikkarnati.com</a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <a href="#work">WORK</a>
              <a href="#about">ABOUT</a>
              <a href="#services">SERVICES</a>
              <a href="#careers">CAREERS</a>
              <a href="#contact">CONTACT</a>
            </div>
            <div className={styles.linkColumn}>
              <a href="#">INSTAGRAM &#8597;</a>
              <a href="#">LINKEDIN &#8597;</a>
              <a href="#">X (TWITTER) &#8597;</a>
              <a href="#">EMAIL &#8597;</a>
            </div>
          </div>
          
          <div className={styles.footerDetails}>
            <div className={styles.location}>
              <p>Mumbai</p>
              <p>India, Asia</p>
            </div>
            <div className={styles.legal}>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.massiveLogo}>
        <h1 className="text-display" ref={massiveLogoRef}>S!CK</h1>
      </div>
    </footer>
  );
}
