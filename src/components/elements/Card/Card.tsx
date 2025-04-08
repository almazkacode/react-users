import styles from './Card.module.scss';

import { Link } from 'react-router-dom';

type CardProps = {
  id: number;
  name: string;
  email: string;
  city: string;
};

export const Card: React.FC<CardProps> = ({ id, name, email, city }) => {
  const onClickCard = () => {
    // dispatch(setInfo({ firstName, lastName, avatar, email }));
  };

  return (
    <li className={styles.card}>
      {/* <Link to="/profile" onClick={onClickCard}> */}

      <p className={styles.name}>{name}</p>
      <p>email: {email}</p>
      <p>city: {city}</p>

      {/* </Link> */}
    </li>
  );
};
