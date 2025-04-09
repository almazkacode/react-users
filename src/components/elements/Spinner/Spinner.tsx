import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <p className={styles.text}>Загрузка...</p>
    </div>
  );
};
