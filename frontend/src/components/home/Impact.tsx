import { motion } from 'framer-motion';

const Impact = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-gray-100/95" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Making Real Impact</h2>
          <p className="text-xl text-gray-600">See how BitGiver is changing lives</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-primary-color/10 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Targeted Support</h3>
                <p className="text-gray-600">Direct your donations to causes that matter most to you</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-primary-color/10 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Transparent Tracking</h3>
                <p className="text-gray-600">Monitor your impact with real-time tracking</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary-color/5 rounded-lg blur-xl" />
            <div className="relative bg-white p-8 rounded-lg shadow-xl">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-color to-purple-500 bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-xl mb-6">of your donation goes directly to the cause</p>
              <div className="h-2 bg-gray-700 rounded-full mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-primary-color to-purple-500 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400">
                Zero platform fees, powered by Lightning Network
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
