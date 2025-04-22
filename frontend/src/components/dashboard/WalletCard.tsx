import { motion } from 'framer-motion';

interface WalletCardProps {
  title: string;
  balance?: string | null;
  currency: string;
  address?: string | null;
  gradientFrom: string;
  gradientTo: string;
}


  const formatWalletAddress = (address: string | null | undefined, visibleLength: number = 6): string => {
    if (!address) {
      return 'N/A'; 
    }

    if (address.length <= visibleLength * 2 + 3) {
      return address; 
    }

    const prefix = address.substring(0, visibleLength);
    const suffix = address.substring(address.length - visibleLength);
    return `${prefix}...${suffix}`;
  };

const WalletCard = ({ title, balance, currency, address, gradientFrom, gradientTo }: WalletCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-sm p-6"
  >
    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${gradientFrom} to-${gradientTo} flex items-center justify-center text-white mb-4`}>
       {/* Bitcoin Icon */}
       {"💰"}
    </div>
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <div className="flex items-end justify-between mt-2">
      <span className="text-2xl font-bold text-gray-800">{balance} {currency}</span>
    </div>
    <p className="text-gray-500 text-xs mt-2">Address: {formatWalletAddress(address)}</p>
  </motion.div>
);

export default WalletCard;