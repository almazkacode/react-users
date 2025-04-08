import { useQuery } from '@tanstack/react-query';
import { fetchUsers, fetchUserById } from '../services/users';
import { User } from '../types/user';

export const useUsersQuery = (id?: number) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery<User[] | User, Error>({
    queryKey: id ? ['user', id] : ['users'], // Ключ для запроса
    queryFn: () => (id ? fetchUserById(id) : fetchUsers()), // Функция для выполнения запроса
    staleTime: 1000 * 60 * 5, // Данные считаются актуальными 5 минут
    refetchOnWindowFocus: false, // Не обновлять данные при фокусе окна
    placeholderData: (prev) => prev ?? [], // сохраняет предыдущие данные, пока грузятся новые
    throwOnError: true, // выбросить ошибку наружу
  });

  return {
    isLoading,
    data,
    isError,
    error,
    isSuccess,
  };
};
