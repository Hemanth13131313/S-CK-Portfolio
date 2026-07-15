"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import styles from './ProjectGallery.module.css';
import ScrollSkew from './ScrollSkew';

const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    slug: 'brand-identity',
    category: 'Branding & Print',
    year: '2025',
    outcome: '[+40% Brand Recognition]',
    image: '/images/project_brand_identity_1784088349071.png',
  },
  {
    id: 2,
    title: 'Mobile UI/UX',
    slug: 'mobile-ui-ux',
    category: 'Digital Product',
    year: '2025',
    outcome: '[2x User Retention]',
    image: '/images/project_ui_design_1784088362031.png',
  },
  {
    id: 3,
    title: 'Cosmetics Packaging',
    slug: 'cosmetics-packaging',
    category: 'Packaging Design',
    year: '2026',
    outcome: '[Sold out in 24 hours]',
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
        
        <ScrollSkew>
          <motion.div style={{ x }} className={styles.gallery}>
            {projects.map((project) => (
              <Card key={project.id} project={project} scrollYProgress={scrollYProgress} />
            ))}
          </motion.div>
        </ScrollSkew>
      </div>
    </section>
  );
}

function Card({ project, scrollYProgress }: { project: any, scrollYProgress: any }) {
  // Add a subtle parallax effect to the image inside the card based on the same scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <Link href={`/work/${project.slug}`} className={`${styles.projectCard} magnetic-target`} data-cursor="view">
      <div className={styles.imageContainer}>
        <motion.div style={{ scale, x: imageX }} className={styles.parallaxImage}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={project.id === 1}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </motion.div>
        </motion.div>
        <div className={styles.overlay}>
          <div className={styles.details}>
            <p className="text-micro">{project.category}</p>
            <p className="text-micro" style={{ color: 'var(--color-primary)' }}>{project.outcome}</p>
            <p className="text-micro">{project.year}</p>
          </div>
        </div>
      </div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
    </Link>
  );
}
