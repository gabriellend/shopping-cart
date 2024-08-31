import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={`${styles.logoWords} ${styles.black}`}>black</span>
      <span className={`${styles.logoWords} ${styles.white}`}>white</span>
      <span className={`${styles.logoWords} ${styles.red}`}>red</span>
    </div>
  );
};

export default Logo;
