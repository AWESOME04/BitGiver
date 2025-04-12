import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { SendFundsData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SendFundsModal = ({ isOpen, onClose }: Props) => {
  const [formData, setFormData] = useState<SendFundsData>({
    recipient: '',
    amount: 0,
    note: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending funds:', formData);
    // Handle submission logic here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Send Funds">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipient Address
          </label>
          <input
            type="text"
            value={formData.recipient}
            onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
            placeholder="Enter Bitcoin or Lightning address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (BTC)
          </label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
            step="0.00000001"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Note (Optional)
          </label>
          <textarea
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
            rows={3}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 rounded-lg bg-primary-color text-white font-semibold"
        >
          Send Funds
        </motion.button>
      </form>
    </Modal>
  );
};

export default SendFundsModal;
