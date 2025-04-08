import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/users';
import { User } from '../types/user';

export const useUsersQuery = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery<User[], Error>({
    queryKey: ['users'], // Ключ для запроса
    queryFn: fetchUsers, // Функция для выполнения запроса
    staleTime: 1000 * 60 * 5, // Данные считаются актуальными 5 минут
    refetchOnWindowFocus: false, // Не обновлять данные при фокусе окна
    placeholderData: (prev) => prev ?? [], // сохраняет предыдущие данные, пока грузятся новые
    throwOnError: true, // выбросить ошибку наружу
    // select: (data) => data.slice(0, 10),
  });

  return {
    isLoading,
    users: data ?? [],
    isError,
    error,
    isSuccess,
  };
};
