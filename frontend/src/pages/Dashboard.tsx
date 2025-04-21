import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/dashboard/StatCard';
import { mockUsers } from './mockUsers';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: "Total Donations",
      value: "₿1.234",
      icon: "💰",
      trend: 12,
      gradientFrom: "purple-500",
      gradientTo: "pink-500"
    },
    {
      title: "Active Campaigns",
      value: "24",
      icon: "🎯",
      trend: 8,
      gradientFrom: "blue-500",
      gradientTo: "cyan-500"
    },
    {
      title: "Total Impact",
      value: "$50K+",
      icon: "🌟",
      trend: 15,
      gradientFrom: "green-500",
      gradientTo: "emerald-500"
    },
    {
      title: "Community Members",
      value: "1.2K",
      icon: "👥",
      trend: 5,
      gradientFrom: "orange-500",
      gradientTo: "amber-500"
    }
  ];

  const handleViewProfile = (userId: string) => {
    navigate(`/profile/${userId}`);
  };

  // Filter users based on search term and active tab
  const filteredUsers = mockUsers.filter(user => 
    (activeTab === 'all' || user.type.toLowerCase() === activeTab) &&
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
            />
          ))}
        </div>

        {/* Main Content Area */}
        <div className="w-full">
          {/* Tabs and Search */}
          <div className="flex gap-4 mb-6">
            {['all', 'creators', 'charities', 'organizations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === tab
                    ? 'bg-primary-color text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Search users, charities, or organizations..."
              className="w-full max-w-2xl px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-color"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* User Grid - Updated to full width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <motion.div
                key={user.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.imageUrl} 
                    alt={`${user.name} logo`}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{user.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">{user.type}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm line-clamp-2">{user.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {user.walletAddress.slice(0, 6)}...{user.walletAddress.slice(-4)}
                  </span>
                  <button 
                    onClick={() => handleViewProfile(user.id)}
                    className="text-primary-color hover:underline text-sm font-medium"
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No results found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;