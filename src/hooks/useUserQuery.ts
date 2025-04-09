import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from '../services/users';
import { User } from '../types/user';

//хук для получения одного пользователя по ID
export const useUserQuery = (id: number) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery<User, Error>({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    data,
    isError,
    error,
    isSuccess,
  };
};
