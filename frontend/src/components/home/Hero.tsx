import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import backgroundImage from '../../assets/background.jpg';

const Hero = () => {
  const { isLoggedIn } = useAuth();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          Support Your Favorite Causes <br />
          <span className="text-gradient">with Bitcoin</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          BitGiver makes it easy to donate using Bitcoin and Lightning Network 
          to content creators, charities, and organizations worldwide.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to={isLoggedIn ? "/dashboard" : "/signup"}
            className="px-8 py-4 rounded-lg bg-white text-primary-color font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            {isLoggedIn ? "Go to Dashboard" : "Get Started"}
          </Link>
          <a
            href="#features"
            className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
