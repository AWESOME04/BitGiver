import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockUsers } from './mockUsers';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find(u => u.id === id);

  if (!user) return <div>User not found</div>;

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/dashboard')}
          className="mb-6 px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-gradient-to-r from-primary-color to-purple-600" />
          <div className="relative px-6 pb-6">
            <div className="flex justify-between items-end -mt-12">
              <img 
                src={user.imageUrl}
                alt={user.name}
                className="w-24 h-24 rounded-xl border-4 border-white shadow-lg"
              />
              <button className="px-4 py-2 bg-primary-color text-white rounded-lg">
                Send Funds
              </button>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600 capitalize">{user.type}</p>
              <p className="mt-4 text-gray-800">{user.description}</p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Wallet Address</h3>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {user.walletAddress}
                </code>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Total Raised', value: '₿0.523' },
                { label: 'Supporters', value: '48' },
                { label: 'Campaigns', value: '3' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-color">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                  <span>Member since {new Date().toLocaleDateString()}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{user.description}</p>
              </div>
            </div>

            {/* Wallet Address */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Wallet Address</h3>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm bg-gray-100 px-2 py-1 rounded">
                  {user.walletAddress}
                </code>
                <button 
                  onClick={() => navigator.clipboard.writeText(user.walletAddress)}
                  className="p-2 text-gray-500 hover:text-primary-color"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
