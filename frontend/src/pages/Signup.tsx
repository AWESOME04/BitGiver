import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {toast} from 'react-toastify';

const Signup = () => {
  const [lightningAddress, setLightningAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);

  const connectLightningWallet = async () => {
    setIsConnecting(true);
    try {
      if (typeof window.webln === 'undefined') {
        toast.error('Please install a WebLN compatible wallet (like Alby) to continue!');
        return;
      }

      await window.webln.enable();
      const info = await window.webln.getInfo();
      setLightningAddress(info.node.pubkey);
    } catch (error) {
      console.error('Error connecting Lightning wallet:', error);
      alert('Failed to connect Lightning wallet. Please make sure you have a compatible wallet installed.');
    } finally {
      setIsConnecting(false);
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
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2" htmlFor="userType">I am a</label>
              <select
                id="userType"
                className="w-full px-4 py-3 rounded-lg bg-primary-color border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="creator">Content Creator</option>
                <option value="charity">Charity</option>
                <option value="organization">Organization</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder=""
              />
            </div>
            <div>
              <motion.button
                type="button"
                onClick={connectLightningWallet}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg border-2 border-white ${
                  lightningAddress ? 'bg-green-500' : 'bg-white/10'
                } text-white font-semibold transition-colors flex items-center justify-center gap-2`}
              >
                {isConnecting ? (
                  'Connecting...'
                ) : lightningAddress ? (
                  <>
                    <span>Connected: {lightningAddress.slice(0, 6)}...{lightningAddress.slice(-4)}</span>
                  </>
                ) : (
                  'Connect Lightning Wallet'
                )}
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-white text-primary-color font-semibold hover:bg-white/90 transition-colors"
              type="submit"
              disabled={!lightningAddress}
            >
              Sign Up
            </motion.button>
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
