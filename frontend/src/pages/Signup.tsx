import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { User } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { signupUser } from '../utils/api';

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<User>({
    id: uuidv4(),
    username: '',
    email: '',
    password: '',
    userType: 'creator'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signupUser(formData);
      toast.success('Account created successfully! Please login.');
      navigate('/login');
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-primary-color">
      <div className="container mx-auto px-4 h-full flex items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-2" htmlFor="userType">I am a</label>
              <select
                id="userType"
                className="w-full px-4 py-3 rounded-lg bg-primary-color border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.userType}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  userType: e.target.value as 'creator' | 'charity' | 'organization'
                })}
              >
                <option value="creator">Content Creator</option>
                <option value="charity">Charity</option>
                <option value="organization">Organization</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder=""
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-primary-color text-white hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold hover:text-purple-300">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
