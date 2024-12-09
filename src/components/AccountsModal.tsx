import React from 'react';
import { X, Plus } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface AccountsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountsModal({ isOpen, onClose }: AccountsModalProps) {
  const { users, user } = useAuthStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Manage Accounts</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Connected Accounts</h3>
            <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
              <Plus size={16} />
              Add Account
            </button>
          </div>

          <div className="space-y-3">
            {users.map((account) => (
              <div
                key={account.id}
                className={`p-4 rounded-lg border ${
                  account.id === user?.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {account.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{account.name}</p>
                      <p className="text-sm text-gray-500">@{account.username}</p>
                    </div>
                  </div>
                  {account.id === user?.id && (
                    <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      Current
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}