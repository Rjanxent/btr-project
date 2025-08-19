
import React from 'react';
import seal from './assets/seal.png';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <header className="bg-yellow-300 border border-yellow-300 flex items-center justify-center relative p-2">
        {/* Seal on the left */}
        <div className="absolute left-24 flex items-center h-full">
          <img src={seal} alt="Seal Logo" className="h-16 w-16 object-contain" />
        </div>

        {/* Centered text */}
        <div className="text-center">
          <div className="text-green-900 text-sm font-serif tracking-wide">
            REPUBLIC OF THE PHILIPPINES
          </div>
          <div className="text-blue-900 text-2xl font-bold font-serif tracking-wider">
            BUREAU OF THE TREASURY
          </div>
        </div>
      </header>

      {/* Content area */}
      <main className="flex flex-1 p-4 space-x-4">
        
        {/* Left sidebar container */}
        <aside className="w-64 bg-gray-200 p-4 rounded-lg shadow-md flex-shrink-0 flex flex-col justify-between">
          <div>
            {/* User email container */}
            <div className="p-3 mb-4 bg-white rounded-md shadow-sm h-10">admin@gmail.com</div>
            
            {/* Navigation links container */}
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-md shadow-sm h-10">Dashboard</div>
              <div className="p-3 bg-white rounded-md shadow-sm h-10">Message</div>
              <div className="p-3 bg-white rounded-md shadow-sm h-10">Settings</div>
            </div>
          </div>
          
          {/* Sign out button container */}
          <div className="mt-auto">
            <div className="flex items-center justify-center p-3 bg-white rounded-md shadow-sm h-10">Sign Out</div>
          </div>
        </aside>
        
        {/* Right main content area with a 2-column layout */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          
          {/* Left column for maintenance and reminders */}
          <div className="space-y-4">
            {/* Preventive Maintenance container */}
            <div className="p-4 bg-gray-200 rounded-lg shadow-sm h-32">Preventive Maintenance</div>

            {/* Reminders container */}
            <div className="p-4 bg-gray-200 rounded-lg shadow-md">
              <div className="flex items-center justify-center p-3 h-6 w-24 rounded-sm mb-4">Reminders</div>
              <div className="space-y-2">
                <div className="h-16 bg-white rounded-md"></div>
                <div className="h-16 bg-white rounded-md"></div>
                <div className="h-16 bg-white rounded-md"></div>
              </div>
            </div>
          </div>
          
          {/* Right column for the calendar */}
          <div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="h-4 w-24 bg-gray-200 rounded-sm mb-4"></div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {[...Array(35)].map((_, i) => (
                  <div key={i} className="h-8 w-8 bg-gray-200 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </main>
  
    </div>
  );
}

export default Dashboard;


