import styles from './Search.module.scss';

import { useEffect, useState, memo } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setSearchValue } from '../../../redux/slices/filterSlice';

const SearchComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.filter.searchValue);
  const [value, setValue] = useState('');

  // Задержка в 500 мс, чтобы избежать частых обновлений состояния
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <span className={styles.icon} />
      <input
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="search"
        placeholder="Поиск пользователя..."
      />
    </div>
  );
};

export const Search = memo(SearchComponent);
