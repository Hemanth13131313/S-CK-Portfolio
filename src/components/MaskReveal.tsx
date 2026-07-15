"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './MaskReveal.module.css';

export default function MaskReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !maskRef.current || !videoRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
      },
    });

    // Animate the mask to expand to full screen
    tl.to(maskRef.current, {
      width: '100vw',
      height: '100vh',
      borderRadius: '0px',
      ease: 'power2.inOut',
    });

    // Slightly scale down the inner content for a parallax effect
    tl.to(
      videoRef.current,
      {
        scale: 1,
        ease: 'power2.inOut',
      },
      0
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.maskContainer} ref={maskRef}>
        <div className={styles.videoWrapper} ref={videoRef}>
          {/* Using a highly vibrant abstract gradient instead of video to match premium look */}
          <div className={styles.gradientBg}>
            <div className={styles.logoOverlay}>S!CK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
