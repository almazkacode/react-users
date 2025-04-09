import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from '../services/users';
import { User } from '../types/user';

//хук для получения одного пользователя по ID
export const useUserQuery = (id: number) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery<User, Error>({
    queryKey: ['user', id], // Ключ для кэширования данных
    queryFn: () => fetchUserById(id), // Функция для получения данных
    staleTime: 1000 * 60 * 5, // Время, в течение которого данные считаются актуальными (5 минут)
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
