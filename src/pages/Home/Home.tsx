import styles from './Home.module.scss';

import { useEffect } from 'react';
import { useUsersQuery } from '../../hooks/useUsersQuery';
import { Card } from '../../components/elements/Card/Card';
import { ErrorBlock } from '../../components/elements/ErrorBlock/ErrorBlock';
import { Search } from '../../components/ui/Search/Search';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: users, isLoading, isError, isSuccess } = useUsersQuery();

  if (isError) {
    return (
      <div className="container">
        <ErrorBlock page="Error" />
      </div>
    );
  }

  return (
    <div className="container">
      {/* {isLoading && <Skeleton />} */}
      {isSuccess && (
        <>
          <Search />
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
        </>
      )}
    </div>
  );
};
