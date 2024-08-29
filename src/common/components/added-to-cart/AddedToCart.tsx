import { Icons } from '../../../assets/icons';
import './AddedToCart.css';

const AddedToCart = () => {
  return (
    <>
      <span>Added to cart</span>
      <img className="check-mark" src={Icons.checkMark} />
    </>
  );
};

export default AddedToCart;
