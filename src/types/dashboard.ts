export interface SocialStats {
  platform: string;
  followers: number;
  engagement: number;
  growth: number;
}

export interface ActivityData {
  date: string;
  likes: number;
  comments: number;
  shares: number;
}

export interface Post {
  id: string;
  content: string;
  platform: string;
  scheduledFor?: string;
  status: 'draft' | 'scheduled' | 'published';
  createdAt: string;
}