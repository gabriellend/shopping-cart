import { Icons } from '../../../assets/icons';
import styles from './AddedToCart.module.css';

const AddedToCart = () => {
  return (
    <>
      <span>Added to cart</span>
      <img className={styles.checkMark} src={Icons.checkMark} />
    </>
  );
};

export default AddedToCart;
