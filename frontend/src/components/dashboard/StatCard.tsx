import { motion } from 'framer-motion';
import { StatCardProps } from '../../types/dashboard';

const StatCard = ({ title, value, icon, trend, gradientFrom, gradientTo }: StatCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-sm p-6"
  >
    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${gradientFrom} to-${gradientTo} flex items-center justify-center text-white mb-4`}>
      {icon}
    </div>
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <div className="flex items-end justify-between mt-2">
      <span className="text-2xl font-bold text-gray-800">{value}</span>
      {trend && (
        <span className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
  </motion.div>
);

export default StatCard;
