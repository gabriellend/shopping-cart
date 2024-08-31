import styles from './SizeContainer.module.css';
import SizeCircle from '../size-circle/SizeCircle';
import { sizes } from '../../../constants/Constants';
import { SizeContainerProps } from '../SizeModel';

const SizeContainer = ({
  item,
  selectedSize,
  setSelectedSize,
}: SizeContainerProps) => {
  return (
    <div className={styles.sizes}>
      {sizes.map((size) => (
        <SizeCircle
          key={size}
          item={item}
          size={size}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      ))}
    </div>
  );
};

export default SizeContainer;
