import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/herobackground1.png'; 

const backgroundImageStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function Hero() {
  return (
    <div className="p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        
        style={backgroundImageStyle}
        
        whileHover={{ scale: 1.02 }}
        className="relative h-[550px] w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-cover bg-center transition-all duration-700"
      >
        <div className="absolute inset-0 bg-indigo-900/45 backdrop-blur-[1px] flex flex-col justify-center items-center p-6 text-white">

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center leading-tight tracking-wide"
          >
            Welcome to PIWC Barcelona
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.35 }}
            className="text-lg md:text-xl mb-10 max-w-xl text-center font-light leading-relaxed"
          >
            Building a vibrant community through faith, service, and fellowship.
            Discover a place where you belong.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 active:scale-95 transition-all duration-200">
              Visit Us This Sunday
            </button>

            <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white/15 hover:shadow-lg active:scale-95 transition-all duration-200">
              Join Our Community
            </button>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
