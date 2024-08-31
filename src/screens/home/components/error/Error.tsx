import { Button } from '../../../../common/components';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.errorMessage}>
      <h1>Oops! Something Went Wrong</h1>
      <div className={styles.divider}></div>
      <p>We were unable to load the inventory. Please try again.</p>
      <Button variant="primary" onClick={() => window.location.reload()}>
        Retry
      </Button>
    </div>
  );
};

export default Error;
