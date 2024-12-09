import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { SocialStats } from '../types/dashboard';

interface StatsCardProps {
  stats: SocialStats;
}

export function StatsCard({ stats }: StatsCardProps) {
  const isPositiveGrowth = stats.growth > 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{stats.platform}</h3>
        {isPositiveGrowth ? (
          <ArrowUpRight className="text-green-500" size={20} />
        ) : (
          <ArrowDownRight className="text-red-500" size={20} />
        )}
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-3xl font-bold text-gray-900">{stats.followers.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Engagement Rate</span>
          <span className="font-medium">{stats.engagement}%</span>
        </div>
        <div className="flex items-center">
          <span className={`text-sm ${isPositiveGrowth ? 'text-green-500' : 'text-red-500'}`}>
            {isPositiveGrowth ? '+' : ''}{stats.growth}% growth
          </span>
        </div>
      </div>
    </div>
  );
}