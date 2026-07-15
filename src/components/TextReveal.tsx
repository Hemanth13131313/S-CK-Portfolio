"use client";

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import styles from './TextReveal.module.css';

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = '' }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10% 0px' });

  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.textContainer} ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <span key={index} className={styles.wordWrapper}>
          <motion.span variants={child} className={styles.word}>
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
