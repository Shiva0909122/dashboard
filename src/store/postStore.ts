import { create } from 'zustand';
import type { Post } from '../types/dashboard';

interface PostState {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'createdAt'>) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  addPost: (newPost) => 
    set((state) => ({
      posts: [
        {
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString(),
          status: newPost.scheduledFor ? 'scheduled' : 'published',
          ...newPost,
        },
        ...state.posts,
      ],
    })),
}));