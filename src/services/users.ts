import axios from 'axios';
import { User } from '../types/user';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// Запрос всех пользователей
export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(BASE_URL);
    return response.data;
  } catch {
    throw new Error('Failed to fetch users!');
  }
}

// Запрос одного пользователя по ID
export async function fetchUserById(id: number): Promise<User> {
  try {
    const response = await axios.get<User>(`${BASE_URL}/${id}`);
    return response.data;
  } catch {
    throw new Error(`Failed to fetch user with ID ${id}`);
  }
}
