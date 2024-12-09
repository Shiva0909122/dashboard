import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, SignupData } from '../types/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  users: User[];
  signup: (data: SignupData) => Promise<void>;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      users: [],
      signup: async (data: SignupData) => {
        const users = get().users;
        const existingUser = users.find(u => u.email === data.email || u.username === data.username);
        
        if (existingUser) {
          throw new Error('User already exists');
        }

        const newUser = {
          id: Math.random().toString(36).substr(2, 9),
          email: data.email,
          username: data.username,
          name: data.name,
        };

        set(state => ({
          users: [...state.users, { ...newUser, password: data.password }],
        }));
      },
      login: async (email: string, password: string) => {
        const users = get().users;
        const user = users.find(u => (u.email === email || u.username === email) && u.password === password);
        
        if (!user) {
          return { success: false, error: 'Invalid credentials' };
        }

        set({ user, isAuthenticated: true });
        return { success: true };
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);