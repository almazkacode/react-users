import styles from './Home.module.scss';

import { useEffect, useMemo } from 'react';
import { useUsersQuery } from '../../hooks/useUsersQuery';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { filterSelector, clearFilters } from '../../redux/slices/filterSlice';
import { Card } from '../../components/elements/Card/Card';
import { ErrorBlock } from '../../components/elements/ErrorBlock/ErrorBlock';
import { Search } from '../../components/ui/Search/Search';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector(filterSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearFilters());
  //   };
  // }, [dispatch]);

  const { data: users, isLoading, isError, isSuccess } = useUsersQuery();

  const filteredItems = useMemo(() => {
    return users?.filter((user) => {
      const searchFilter = user.name
        .replace(/\s+/g, '')
        .toLowerCase()
        .includes(searchValue.replace(/\s+/g, '').toLowerCase());

      return searchFilter;
    });
  }, [users, searchValue]);

  if (isLoading) {
    return (
      <div className="container">
        <ErrorBlock page="Loading" showButton={false} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <ErrorBlock page="Error" />
      </div>
    );
  }

  return (
    <div className="container">
      {isSuccess && (
        <>
          <Search />
          <ul className={styles.grid}>
            {filteredItems?.map((user) => (
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
