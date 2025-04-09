import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};
