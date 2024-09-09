import { Icons } from '../../../assets/icons';
import { CartItemModel } from '../../../models';
import styles from './AddToCartMessage.module.css';

const AddToCartMessage = ({
  itemInCart,
}: {
  itemInCart: CartItemModel | undefined;
}) => {
  return (
    <>
      <span>{itemInCart ? `Added to cart` : 'Add to cart'}</span>
      {itemInCart && <img className={styles.checkMark} src={Icons.checkMark} />}
    </>
  );
};

export default AddToCartMessage;
