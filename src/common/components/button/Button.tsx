import { Link } from 'react-router-dom';
import { ButtonProps } from './ButtonModel';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  to,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) => {
  const classNames = `${styles.btn} ${styles[className]}`;
  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
