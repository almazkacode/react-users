import styles from './Card.module.scss';
import { memo } from 'react';

import { useNavigate } from 'react-router-dom';

type CardProps = {
  id: number;
  name: string;
  email: string;
  city: string;
};

export const CardComponent: React.FC<CardProps> = ({ id, name, email, city }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${id}`);
  };

  return (
    <li className={styles.card} onClick={handleClick}>
      <p className={styles.name}>{name}</p>
      <p>email: {email}</p>
      <p>city: {city}</p>
    </li>
  );
};

export const Card = memo(CardComponent);
