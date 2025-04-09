import styles from './Error.module.scss';
import { useNavigate } from 'react-router-dom';
import { ERROR_DATA } from './errorData';
import { Button } from '../../ui/Button/Button';

interface ErrorBlockProps {
  page: string;
  showButton?: boolean;
}

export const ErrorBlock: React.FC<ErrorBlockProps> = ({ page, showButton = true }) => {
  const navigate = useNavigate();

  const errorContent = ERROR_DATA.find((error) => error.page === page)?.content;

  if (!errorContent) {
    return <div className="container">Страница не найдена</div>;
  }

  const { title, text } = errorContent;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p>{text}</p>
      {showButton && <Button text="На главную" onClick={() => navigate('/')} />}
    </div>
  );
};
