import React from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Social Dashboard</h1>
            {user && (
              <p className="text-sm text-gray-500">Welcome back, {user.name}</p>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            {user && (
              <button
                onClick={logout}
                className="p-2 rounded-full hover:bg-gray-100"
                title="Logout"
              >
                <LogOut size={20} className="text-gray-600" />
              </button>
            )}
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              {user && (
                <span className="ml-2 text-sm font-medium text-gray-700">
                  @{user.username}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}