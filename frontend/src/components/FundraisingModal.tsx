import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { generateInvoice } from '../utils/lightning';
import Modal from './Modal';
import { FundraisingFormData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FundraisingModal = ({ isOpen, onClose }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FundraisingFormData>({
    title: '',
    description: '',
    goal: 0,
    endDate: '',
    category: 'personal',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const invoice = await generateInvoice(
        Number(formData.goal),
        formData.title
      );
      
      // Store fundraiser details in localStorage for now
      const fundraisers = JSON.parse(localStorage.getItem('fundraisers') || '[]');
      fundraisers.push({
        ...formData,
        invoice,
        created: new Date().toISOString(),
      });
      localStorage.setItem('fundraisers', JSON.stringify(fundraisers));
      
      toast.success('Fundraiser created successfully!');
      onClose();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to create fundraiser');
    } finally {
      setIsLoading(false);
    }
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
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 rounded-lg bg-primary-color text-white font-semibold"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Fundraiser'}
        </motion.button>
      </form>
    </Modal>
  );
};

export default FundraisingModal;
