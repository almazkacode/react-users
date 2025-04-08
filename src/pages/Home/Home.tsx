import styles from './Home.module.scss';

import { useEffect } from 'react';
import { useUsersQuery } from '../../hooks/useUsersQuery';
import { Card } from '../../components/elements/Card/Card';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: users, isLoading, isError, error, isSuccess } = useUsersQuery();

  if (isError && error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      {/* {isLoading && <Skeleton />} */}
      {isSuccess && (
        <ul className={styles.grid}>
          {Array.isArray(users) &&
            users.map((user) => (
              <Card
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                city={user.address.city}
              />
            ))}
        </ul>
      )}
    </div>
  );
};
