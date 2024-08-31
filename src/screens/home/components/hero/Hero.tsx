import styles from './Hero.module.css';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p>
          At blackwhitered, we believe that true style is found in simplicity.
          Our collection is a celebration of minimalism, elegance, and timeless
          design. Each piece is thoughtfully curated to offer you classic
          sophistication with a modern edge, so you can express yourself with
          confidence and grace.
        </p>
      </div>
    </div>
  );
};

export default Hero;
