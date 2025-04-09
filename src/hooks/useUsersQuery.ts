import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/users';
import { User } from '../types/user';

//хук для получения всех пользователей
export const useUsersQuery = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
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
