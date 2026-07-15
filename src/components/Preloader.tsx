"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem('sick_visited')) {
      setIsLoading(false);
      return;
    }

    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          sessionStorage.setItem('sick_visited', 'true');
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = '';
          }, 500); // Wait half a second at 100% before sliding up
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  const slideUp = {
    initial: {
      top: 0
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div 
          className={styles.preloader}
          variants={slideUp}
          initial="initial"
          exit="exit"
        >
          <div className={styles.content}>
            <div className={styles.logo}>S!CK</div>
            <div className={styles.counter}>{Math.min(progress, 100)}%</div>
          </div>
          <motion.div 
            className={styles.progressBar}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
