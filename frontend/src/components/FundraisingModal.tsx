import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { FundraisingFormData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FundraisingModal = ({ isOpen, onClose }: Props) => {
  const [formData, setFormData] = useState<FundraisingFormData>({
    title: '',
    description: '',
    goal: 0,
    endDate: '',
    category: 'personal',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating fundraiser:', formData);
    // Handle submission logic here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Start Fundraising">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
            placeholder="Enter fundraiser title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as FundraisingFormData['category'] })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
          >
            <option value="personal">Personal</option>
            <option value="charity">Charity</option>
            <option value="project">Project</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Goal (BTC)
          </label>
          <input
            type="number"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: Number(e.target.value) })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
            step="0.00000001"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-color"
            rows={4}
          />
        </div> */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 rounded-lg bg-primary-color text-white font-semibold"
        >
          Create Fundraiser
        </motion.button>
      </form>
    </Modal>
  );
};

export default FundraisingModal;
