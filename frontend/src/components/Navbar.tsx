import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import SendFundsModal from './SendFundsModal';
import FundraisingModal from './FundraisingModal';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isFundraisingModalOpen, setIsFundraisingModalOpen] = useState(false);

  const isDashboard = location.pathname === '/dashboard';

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
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
