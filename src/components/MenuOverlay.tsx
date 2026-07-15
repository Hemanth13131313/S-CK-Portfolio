"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MenuOverlay.module.css';
import MagneticButton from './MagneticButton';

const menuLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
];

export default function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } },
    open: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  const linkVariants = {
    closed: { y: 100, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 + (i * 0.1) }
    })
  };

  return (
    <>
      <div className={styles.hamburgerContainer}>
        <MagneticButton>
          <button className={`${styles.hamburger} magnetic`} onClick={toggleMenu}>
            <div className={`${styles.line} ${isOpen ? styles.lineOpen1 : ''}`} />
            <div className={`${styles.line} ${isOpen ? styles.lineOpen2 : ''}`} />
          </button>
        </MagneticButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.menuOverlay}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className={styles.nav}>
              {menuLinks.map((link, i) => (
                <div key={link.name} className={styles.linkContainer}>
                  <motion.a 
                    href={link.href}
                    className={`${styles.link} text-display magnetic`}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
            </nav>
            <motion.div 
              className={styles.footer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <p className="text-micro">Say Hello</p>
              <a href="mailto:hello@satvik.com" className="text-body">hello@satvik.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
