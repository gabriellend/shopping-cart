import { Link } from 'react-router-dom';
import { ButtonProps } from './ButtonModel';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  to,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const buttonClass = `${styles.btn} ${styles[variant]}`;
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
