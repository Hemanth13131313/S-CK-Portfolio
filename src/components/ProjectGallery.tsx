"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ProjectGallery.module.css';

const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding & Print',
    year: '2025',
    image: '/images/project_brand_identity_1784088349071.png',
  },
  {
    id: 2,
    title: 'Mobile UI/UX',
    category: 'Digital Product',
    year: '2025',
    image: '/images/project_ui_design_1784088362031.png',
  },
  {
    id: 3,
    title: 'Cosmetics Packaging',
    category: 'Packaging Design',
    year: '2026',
    image: '/images/project_packaging_1784088475852.png',
  },
];

export default function ProjectGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the entire track to the left
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className={styles.scrollSection} id="work">
      <div className={styles.stickyContainer}>
        <div className={styles.header}>
          <h2 className="text-display">Selected Works</h2>
          <p className="text-micro">Scroll to explore</p>
        </div>
        
        <motion.div style={{ x }} className={styles.horizontalTrack}>
          {projects.map((project) => (
            <Card key={project.id} project={project} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ project, scrollYProgress }: { project: any, scrollYProgress: any }) {
  // Add a subtle parallax effect to the image inside the card based on the same scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div className={`${styles.projectCard} magnetic-target`}>
      <div className={styles.imageContainer}>
        <motion.div style={{ scale, x: imageX }} className={styles.parallaxImage}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={project.id === 1}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
        <div className={styles.overlay}>
          <div className={styles.details}>
            <p className="text-micro">{project.category}</p>
            <p className="text-micro">{project.year}</p>
          </div>
        </div>
      </div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
    </div>
  );
}
