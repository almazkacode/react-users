import styles from './Button.module.scss';
import { memo } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const ButtonComponent: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export const Button = memo(ButtonComponent);
