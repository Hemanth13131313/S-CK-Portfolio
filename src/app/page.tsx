import Hero from '@/components/Hero';
import MaskReveal from '@/components/MaskReveal';
import TextReveal from '@/components/TextReveal';
import Process from '@/components/Process';
import ProjectGallery from '@/components/ProjectGallery';
import Services from '@/components/Services';
import HoverList from '@/components/HoverList';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      
      <section className={styles.statementSection}>
        <div className="container">
          <TextReveal 
            text="Design on the web isn't static anymore. Today's brands need energy, personality and meaning. We bring together strategy, design and storytelling to build digital experiences that grab attention, move fast and make people feel." 
            className={styles.statementText}
          />
        </div>
      </section>

      <Process />

      <MaskReveal />
      
      <ProjectGallery />
      
      <Services />
      
      <HoverList />
    </main>
  );
}
