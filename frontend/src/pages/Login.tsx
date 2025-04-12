import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email === 'evans@gmail.com' && formData.password === '12345qwerty') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
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
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-white text-primary-color font-semibold hover:bg-white/90 transition-colors"
              type="submit"
            >
              Login
            </motion.button>
          </form>
          <p className="mt-4 text-center text-white">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold hover:text-purple-300">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
