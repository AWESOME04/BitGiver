import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Impact from '../components/home/Impact';
import Footer from '../components/shared/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Impact />
      <Footer />
    </div>
  );
};

export default Home;
