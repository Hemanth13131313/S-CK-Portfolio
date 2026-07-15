"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const initScrollTrigger = () => {
      if (isMobile || !sectionRef.current || !trackRef.current) return;

      const ctx = gsap.context(() => {
        const getHorizontalDistance = () => {
          if (!trackRef.current) return 0;
          return Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
        };

        const horizontalDistance = getHorizontalDistance();

        if (horizontalDistance > 0) {
          const tl = gsap.to(trackRef.current, {
            x: () => -getHorizontalDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              fastScrollEnd: true,
              invalidateOnRefresh: true,
              start: "top top",
              end: () => `+=${getHorizontalDistance()}`,
            }
          });

          // Child Parallax using containerAnimation
          const images = gsap.utils.toArray<HTMLElement>('.parallaxImageTarget');
          images.forEach((el) => {
            gsap.to(el, {
              x: "10%",
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                containerAnimation: tl,
                start: "left right",
                end: "right left",
                scrub: true,
              }
            });
          });
        }
      }, sectionRef);

      return ctx;
    };

    // Wait for fonts and images to render layout
    let ctx: gsap.Context | undefined;
    const timer = setTimeout(() => {
      ctx = initScrollTrigger();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className={styles.scrollSection} id="work">
      <div className={styles.stickyContainer}>
        <div className={styles.header}>
          <h2 className="text-display">Selected Works</h2>
          <p className="text-micro">Scroll to explore</p>
        </div>
        
        <ScrollSkew>
          <div ref={trackRef} className={styles.gallery}>
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </ScrollSkew>
      </div>
    </section>
  );
}

function Card({ project }: { project: any }) {
  return (
    <Link href={`/work/${project.slug}`} className={`${styles.projectCard} magnetic-target`} data-cursor="view">
      <div className={styles.imageContainer}>
        <div className={`parallaxImageTarget ${styles.parallaxImage}`}>
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
        </div>
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
