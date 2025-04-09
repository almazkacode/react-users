import styles from './Home.module.scss';
import { useEffect, useMemo, useCallback } from 'react';
import { useUsersQuery } from '../../hooks/useUsersQuery';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { filterSelector, clearFilters } from '../../redux/slices/filterSlice';

import { Card } from '../../components/elements/Card/Card';
import { ErrorBlock } from '../../components/elements/ErrorBlock/ErrorBlock';
import { Search } from '../../components/ui/Search/Search';
import { Select } from '../../components/ui/Select/Select';
import { Button } from '../../components/ui/Button/Button';
import { Spinner } from '../../components/elements/Spinner/Spinner';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue, city } = useAppSelector(filterSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Сброс фильтров при переходе на страницу профиля
  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  // Сброс фильтров при нажатии на кнопку
  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  // Запрос пользователей с помощью React Query
  const { data: users, isLoading, isError, isSuccess } = useUsersQuery();

  // Мемоизация списка городов для фильтрации
  const uniqueCities = useMemo(
    () => Array.from(new Set(users?.map((user) => user.address.city))),
    [users],
  );

  // Фильтрация пользователей
  const filteredItems = useMemo(() => {
    return users?.filter((user) => {
      // Поиск по имени и email
      const searchFilter = (user.name + user.email)
        .replace(/\s+/g, '')
        .toLowerCase()
        .includes(searchValue.replace(/\s+/g, '').toLowerCase());

      // Фильтрация по городу
      const cityFilter = city === 'all' || user.address.city === city;

      return searchFilter && cityFilter;
    });
  }, [users, searchValue, city]);

  // Пока данные загружаются, показывается спиннер
  if (isLoading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  // Если произошла ошибка
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
            <Button text="Сбросить фильтры" onClick={handleClearFilters} />
          </div>
          <ul className={styles.grid}>
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((user) => (
                <Card
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  city={user.address.city}
                />
              ))
            ) : (
              <p className={styles.empty}>Ничего не найдено.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
