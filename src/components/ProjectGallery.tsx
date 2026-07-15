import Image from 'next/image';
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
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <h2 className={`text-title ${styles.title}`}>Selected Works</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <div className={styles.details}>
                    <p className={styles.category}>{project.category}</p>
                    <p className={styles.year}>{project.year}</p>
                  </div>
                </div>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
