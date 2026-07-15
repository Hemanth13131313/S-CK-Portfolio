"use client";

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HoverList.module.css';

const collaborators = [
  { id: 1, name: 'Alex Thompson', role: 'Founder, TechVision', image: '/images/portrait_one_1784088489725.png' },
  { id: 2, name: 'Sarah Jenkins', role: 'Creative Director', image: '/images/portrait_two_1784088503720.png' },
  { id: 3, name: 'David Chen', role: 'Head of Design', image: '/images/portrait_three_1784088590703.png' },
];

export default function HoverList() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section className={styles.section} id="collaborations" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setActiveItem(null)}>
      <div className="container">
        <h2 className={`text-title ${styles.title}`}>Explore<br/>Collaborations</h2>
        
        <div className={styles.list}>
          {collaborators.map((collab) => (
            <div 
              key={collab.id} 
              className={styles.listItem}
              onMouseEnter={() => setActiveItem(collab.id)}
            >
              <h3 className={styles.name}>{collab.name}</h3>
              <p className={styles.role}>{collab.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal */}
      {collaborators.map((collab) => (
        <motion.div
          key={collab.id}
          className={styles.floatingImage}
          animate={{
            x: mousePosition.x - 150, // center the image on cursor (width/2)
            y: mousePosition.y - 150, // center the image on cursor (height/2)
            opacity: activeItem === collab.id ? 1 : 0,
            scale: activeItem === collab.id ? 1 : 0.8,
            rotate: activeItem === collab.id ? (mousePosition.x % 10 - 5) : 0 // subtle rotation
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.5 }}
        >
          <Image
            src={collab.image}
            alt={collab.name}
            fill
            className={styles.image}
            sizes="300px"
          />
        </motion.div>
      ))}
    </section>
  );
}
