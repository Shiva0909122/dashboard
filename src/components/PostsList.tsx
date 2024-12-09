import React from 'react';
import { format } from 'date-fns';
import { usePostStore } from '../store/postStore';

export function PostsList() {
  const posts = usePostStore((state) => state.posts);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Posts</h3>
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No posts yet. Create your first post!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-blue-600 capitalize">{post.platform}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  post.status === 'published' ? 'bg-green-100 text-green-800' :
                  post.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {post.status}
                </span>
              </div>
              <p className="text-gray-800 mb-2">{post.content}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Created {format(new Date(post.createdAt), 'PPp')}</span>
                {post.scheduledFor && (
                  <span>Scheduled for {format(new Date(post.scheduledFor), 'PPp')}</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}