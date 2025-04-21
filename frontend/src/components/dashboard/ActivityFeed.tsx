import { motion } from 'framer-motion';

const ActivityFeed = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
    <div className="space-y-6">
      {recentActivities.map((activity, index) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4"
        >
          <div className={`w-8 h-8 rounded-full bg-${activity.color} flex items-center justify-center text-white flex-shrink-0`}>
            {activity.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-800">{activity.message}</p>
            <span className="text-xs text-gray-500">{activity.time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const recentActivities = [
  {
    id: 1,
    icon: '💸',
    message: 'Received 0.005 BTC from Anonymous',
    time: '5 minutes ago',
    color: 'green-500'
  },
  // Add more activities...
];

export default ActivityFeed;
