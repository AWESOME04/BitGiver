import { motion } from 'framer-motion';
import backgroundImage from '../assets/background.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  return (
    <div className="pt-16">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex flex-col items-center justify-center p-6 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10">
          <motion.h1
            variants={titleVariants}
            className="text-5xl font-bold text-white mb-4 text-center"
          >
            Support Your Favorite Causes with Bitcoin
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 mb-8 text-center max-w-2xl"
          >
            BitGiver makes it easy to donate using Bitcoin and Lightning Network to content creators, charities, and organizations worldwide.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-primary-color text-white hover:bg-purple-700 transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border-2 border-primary-color text-primary-color hover:bg-purple-50 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
