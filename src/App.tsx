// import React from 'react';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { ActivityChart } from './components/ActivityChart';
import { QuickActions } from './components/QuickActions';
import { PostsList } from './components/PostsList';
import { mockSocialStats, mockActivityData } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockSocialStats.map((stats, index) => (
            <StatsCard key={index} stats={stats} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ActivityChart data={mockActivityData} />
          <QuickActions />
        </div>

        <PostsList />
      </main>
    </div>
  );
}

export default App;