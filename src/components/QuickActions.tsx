import React, { useState } from 'react';
import { CreatePostModal } from './CreatePostModal';
import { LoginModal } from './LoginModal';
import { SignupModal } from './SignupModal';
import { AnalyticsModal } from './AnalyticsModal';
import { AccountsModal } from './AccountsModal';
import { PlusCircle, BarChart2, Users } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { usePostStore } from '../store/postStore';

export function QuickActions() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);
  const [isAccountsModalOpen, setIsAccountsModalOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const addPost = usePostStore((state) => state.addPost);

  const handleCreatePost = (postData: { content: string; platform: string; scheduledFor?: string }) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    addPost(postData);
  };

  const handleAction = (action: () => void) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    action();
  };

  const switchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const switchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
      <div className="space-y-4">
        <button
          onClick={() => handleAction(() => setIsCreateModalOpen(true))}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} />
          Create New Post
        </button>
        <button
          onClick={() => handleAction(() => setIsAnalyticsModalOpen(true))}
          className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <BarChart2 size={20} />
          View Analytics
        </button>
        <button
          onClick={() => !isAuthenticated ? setIsSignupModalOpen(true) : setIsAccountsModalOpen(true)}
          className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <Users size={20} />
          {isAuthenticated ? 'Manage Accounts' : 'Sign Up'}
        </button>
      </div>

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePost}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSignupClick={switchToSignup}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onLoginClick={switchToLogin}
      />

      <AnalyticsModal
        isOpen={isAnalyticsModalOpen}
        onClose={() => setIsAnalyticsModalOpen(false)}
      />

      <AccountsModal
        isOpen={isAccountsModalOpen}
        onClose={() => setIsAccountsModalOpen(false)}
      />
    </div>
  );
}