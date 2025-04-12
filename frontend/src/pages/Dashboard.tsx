import { motion } from 'framer-motion';
import { useState } from 'react';
import { mockUsers } from './mockUsers';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter users based on search term
  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search users, charities, or organizations..."
            className="w-full max-w-2xl px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-color"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <button className="text-primary-color hover:underline text-sm font-medium">
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
  );
};

export default Dashboard;