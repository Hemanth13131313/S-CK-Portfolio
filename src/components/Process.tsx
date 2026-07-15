"use client";

import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  { id: '01', title: 'Discover', text: 'We dig deep to uncover the truth of your brand. No fluff, just the raw material we need to build a foundation that lasts.' },
  { id: '02', title: 'Strategize', text: 'We map the exact path forward. A bold vision is useless without a bulletproof strategy to bring it to the world.' },
  { id: '03', title: 'Execute', text: 'We design and build premium experiences. Pixel-perfect execution that grabs attention and refuses to let go.' },
];

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <div className="grid-12">
          <div className="col-span-4">
            <h2 className="text-title">How We<br/>Work</h2>
          </div>
          <div className={`col-span-8 ${styles.stepsList}`}>
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className={styles.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
              >
                <div className={styles.stepNumber}>{step.id}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className="text-body">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
