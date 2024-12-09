import React from 'react';
import type { ActivityData } from '../types/dashboard';

interface ActivityChartProps {
  data: ActivityData[];
}

export function ActivityChart({ data }: ActivityChartProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Activity Overview</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{item.date}</span>
            <div className="flex gap-4">
              <span className="text-sm">👍 {item.likes}</span>
              <span className="text-sm">💬 {item.comments}</span>
              <span className="text-sm">🔄 {item.shares}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}