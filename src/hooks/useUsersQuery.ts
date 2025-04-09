import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/users';
import { User } from '../types/user';

//хук для получения всех пользователей
export const useUsersQuery = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery<User[], Error>({
    queryKey: ['users'], // Ключ для кэширования данных
    queryFn: fetchUsers, // Функция для получения данных
    staleTime: 1000 * 60 * 5,  // Время, в течение которого данные считаются актуальными (5 минут)
    refetchOnWindowFocus: false, // Не выполнять запрос при фокусировке на окно
  });

  return {
    isLoading,
    data,
    isError,
    error,
    isSuccess,
  };
};
