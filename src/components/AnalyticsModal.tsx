import React from 'react';
import { X, TrendingUp, Users, Share2 } from 'lucide-react';
import { mockActivityData, mockSocialStats } from '../data/mockData';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AnalyticsModal({ isOpen, onClose }: AnalyticsModalProps) {
  if (!isOpen) return null;

  const totalEngagement = mockActivityData.reduce(
    (acc, day) => acc + day.likes + day.comments + day.shares,
    0
  );

  const averageEngagementRate = mockSocialStats.reduce(
    (acc, platform) => acc + platform.engagement,
    0
  ) / mockSocialStats.length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-blue-600" />
              <h3 className="font-semibold">Total Engagement</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">{totalEngagement}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Users className="text-green-600" />
              <h3 className="font-semibold">Avg. Engagement Rate</h3>
            </div>
            <p className="text-2xl font-bold text-green-600">{averageEngagementRate.toFixed(1)}%</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="text-purple-600" />
              <h3 className="font-semibold">Total Shares</h3>
            </div>
            <p className="text-2xl font-bold text-purple-600">
              {mockActivityData.reduce((acc, day) => acc + day.shares, 0)}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Platform Performance</h3>
            <div className="space-y-3">
              {mockSocialStats.map((platform, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{platform.platform}</span>
                    <span className={`text-sm ${platform.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {platform.growth >= 0 ? '+' : ''}{platform.growth}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${platform.engagement * 10}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}