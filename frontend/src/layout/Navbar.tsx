import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import SendFundsModal from '../components/SendFundsModal';
import FundraisingModal from '../components/FundraisingModal';
import { connectMetamaskWallet } from '../utils/wallet';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isFundraisingModalOpen, setIsFundraisingModalOpen] = useState(false);
  const { setAddress, setBalance } = useAuth();
  const [connectedWallet, setConnectedWallet] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const { address, balance } = useAuth();

  const isDashboard = location.pathname === '/dashboard';

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  useEffect(() => {
    const address = localStorage.getItem('walletAddress');
    const balance = localStorage.getItem('walletBalance');
    if (address) setAddress(address);
    if (balance) setBalance(balance);
    if (address && balance) setConnectedWallet(true);
  }
  , [address, balance]);

  const connectWallet = async () => {
    try {
      // Check if Wallet is already connected
      const existingAddress = localStorage.getItem('walletAddress');
      const existingBalance = localStorage.getItem('walletBalance');
      if (existingAddress && existingBalance) {
        console.log(`Wallet already connected: ${existingAddress} with balance: ${existingBalance}`);
        toast.info('Wallet already connected!');
        return;
      }
      setLoading(true);
      const { address, balance, error } = await connectMetamaskWallet();

      if (error) {
        console.error('Error connecting to wallet:', error);
        toast.error(`Failed to connect wallet, ${error}`);
        return;
      }
      
      if (address && balance) {
        // Store wallet address and balance in localStorage or state
        localStorage.setItem('walletAddress', address);
        localStorage.setItem('walletBalance', balance);
        setAddress(address);
        setBalance(balance);
        console.log(`Connected to wallet: ${address} with balance: ${balance}`);
        setConnectedWallet(address);
        toast.success('Wallet connected successfully!');
      }
      
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast.error(`Failed to connect wallet, ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="text-2xl font-bold text-primary-color">
                BitGiver
              </Link>
            </motion.div>
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <>
                  {isDashboard ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={connectWallet}
                        className={`px-4 py-2 rounded-lg  ${ connectedWallet ? "bg-green-500" : "bg-primary-color"}  text-white hover:bg-purple-700 transition-colors`}
                      >
                        { connectedWallet ? "Connected" : loading ? "Connecting..." : "Connect Wallet" }
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSendModalOpen(true)}
                        className="px-4 py-2 rounded-lg bg-primary-color text-white hover:bg-purple-700 transition-colors"
                      >
                        Send Funds
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsFundraisingModalOpen(true)}
                        className="px-4 py-2 rounded-lg border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white transition-colors"
                      >
                        Start Fundraising
                      </motion.button>
                    </>
                  ) : (
                    <Link
                      to="/dashboard"
                      className="px-4 py-2 rounded-lg text-primary-color hover:bg-primary-color hover:text-white transition-colors"
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/login"
                      className="px-4 py-2 rounded-lg text-primary-color hover:bg-primary-color hover:text-white transition-colors border border-primary-color"
                    >
                      Login
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/signup"
                      className="px-4 py-2 rounded-lg bg-primary-color text-white hover:bg-blue-800 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      <SendFundsModal 
        isOpen={isSendModalOpen}
        onClose={() => setIsSendModalOpen(false)}
      />
      <FundraisingModal
        isOpen={isFundraisingModalOpen}
        onClose={() => setIsFundraisingModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
