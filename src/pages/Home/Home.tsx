import styles from './Home.module.scss';

import { useEffect, useMemo } from 'react';
import { useUsersQuery } from '../../hooks/useUsersQuery';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { filterSelector, clearFilters } from '../../redux/slices/filterSlice';
import { Card } from '../../components/elements/Card/Card';
import { ErrorBlock } from '../../components/elements/ErrorBlock/ErrorBlock';
import { Search } from '../../components/ui/Search/Search';
import { Select } from '../../components/ui/Select/Select';
import { Button } from '../../components/ui/Button/Button';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue, city } = useAppSelector(filterSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  const { data: users, isLoading, isError, isSuccess } = useUsersQuery();

  const uniqueCities = useMemo(
    () => Array.from(new Set(users?.map((user) => user.address.city))),
    [users],
  );

  const filteredItems = useMemo(() => {
    return users?.filter((user) => {
      const searchFilter = (user.name + user.email)
        .replace(/\s+/g, '')
        .toLowerCase()
        .includes(searchValue.replace(/\s+/g, '').toLowerCase());

      const cityFilter = city === 'all' || user.address.city === city;

      return searchFilter && cityFilter;
    });
  }, [users, searchValue, city]);

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
          <div className={styles.wrapper}>
            <Search />
            <Select cities={uniqueCities} />
            <Button text="Сбросить фильтры" onClick={() => dispatch(clearFilters())} />
          </div>
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
