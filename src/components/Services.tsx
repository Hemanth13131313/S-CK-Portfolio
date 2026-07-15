"use client";

import { Pencil, Smartphone, Box, Code2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    id: 'logo',
    title: 'Logo Design',
    description: 'We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.',
    icon: Pencil,
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    description: 'A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.',
    icon: Smartphone,
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    description: 'Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.',
    icon: Box,
  },
  {
    id: 'web',
    title: 'Website Design',
    description: 'Your website should work hard and look good. We design sites that are easy to use and built to grow with you.',
    icon: Code2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 100 }
  },
};

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`text-title ${styles.title}`}>Services We provide</h2>
          <a href="#work" className={styles.link}>Learn More &rarr;</a>
        </div>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className={styles.card}>
              <div className={styles.iconWrapper}>
                <service.icon size={32} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.glow}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
