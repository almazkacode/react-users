import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Пользователи</h1>
        </div>
      </div>
    </header>
  );
};
