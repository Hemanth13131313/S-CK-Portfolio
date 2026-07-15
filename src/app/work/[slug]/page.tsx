"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// Centralized data (can be moved to a data file later)
const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    slug: 'brand-identity',
    category: 'Branding & Print',
    year: '2025',
    outcome: '[+40% Brand Recognition]',
    image: '/images/project_brand_identity_1784088349071.png',
    brief: '[Project Brief: Describe the core challenge and why the client approached S!CK. Focus on the strategic problem rather than just the visual deliverables. How did we reposition them in the market?]',
    process: '[Process Notes: Detail the execution phase. Mention specific design decisions, typographic choices, or UX paradigms that solved the brief. What was the conceptual breakthrough?]'
  },
  {
    id: 2,
    title: 'Mobile UI/UX',
    slug: 'mobile-ui-ux',
    category: 'Digital Product',
    year: '2025',
    outcome: '[2x User Retention]',
    image: '/images/project_ui_design_1784088362031.png',
    brief: '[Project Brief: Describe the core challenge and why the client approached S!CK. Focus on the strategic problem rather than just the visual deliverables. How did we reposition them in the market?]',
    process: '[Process Notes: Detail the execution phase. Mention specific design decisions, typographic choices, or UX paradigms that solved the brief. What was the conceptual breakthrough?]'
  },
  {
    id: 3,
    title: 'Cosmetics Packaging',
    slug: 'cosmetics-packaging',
    category: 'Packaging Design',
    year: '2026',
    outcome: '[Sold out in 24 hours]',
    image: '/images/project_packaging_1784088475852.png',
    brief: '[Project Brief: Describe the core challenge and why the client approached S!CK. Focus on the strategic problem rather than just the visual deliverables. How did we reposition them in the market?]',
    process: '[Process Notes: Detail the execution phase. Mention specific design decisions, typographic choices, or UX paradigms that solved the brief. What was the conceptual breakthrough?]'
  },
];

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.header}>
          <Link href="/#work" className={styles.backLink} data-cursor="view">
            &larr; Back to Work
          </Link>
          <motion.h1 
            className="text-display"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {project.title}
          </motion.h1>
          <div className={styles.meta}>
            <p className="text-micro">{project.category}</p>
            <p className="text-micro" style={{ color: 'var(--color-primary)' }}>{project.outcome}</p>
            <p className="text-micro">{project.year}</p>
          </div>
        </header>
      </div>

      <motion.div 
        className={styles.heroImageContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          priority 
          className={styles.heroImage}
          sizes="100vw"
        />
      </motion.div>

      <div className="container">
        <div className={`grid-12 ${styles.contentGrid}`}>
          <div className="col-span-4">
            <h2 className="text-title" style={{ fontSize: '2rem' }}>The Brief</h2>
          </div>
          <div className="col-span-8">
            <p className="text-body" style={{ fontSize: '1.25rem' }}>{project.brief}</p>
          </div>
        </div>

        <div className={styles.spacer}></div>

        <div className={`grid-12 ${styles.contentGrid}`}>
          <div className="col-span-4">
            <h2 className="text-title" style={{ fontSize: '2rem' }}>The Process</h2>
          </div>
          <div className="col-span-8">
            <p className="text-body" style={{ fontSize: '1.25rem' }}>{project.process}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
