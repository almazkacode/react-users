import styles from './Select.module.scss';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { filterSelector, setCities } from '../../../redux/slices/filterSlice';

interface SelectProps {
  cities: string[];
}

export const Select: React.FC<SelectProps> = ({ cities }) => {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector(filterSelector);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCities(event.target.value));
  };

  return (
    <select className={styles.select} value={city} onChange={handleCityChange}>
      <option value="all">Все города</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};
