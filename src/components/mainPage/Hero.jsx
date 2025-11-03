import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/heroBackground1.png';

const backgroundImageStyle = {
    backgroundImage : `url(${backgroundImage})`,
}

function Hero() {
    return (
             <div className="p-4 md:p-8"> 
      <div 
        className="relative h-[550px] w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
        style={backgroundImageStyle}
      >
        <div className="absolute inset-0 bg-indigo-800/50 flex flex-col justify-center items-center p-6 text-white">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center leading-tight">
            Welcome to PIWC barcelona
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-xl text-center font-light">
            Building a vibrant community through faith, service, and fellowship. Discover a place where you belong.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white text-indigo-800 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-200">
              Visit Us This Sunday
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/20 transition duration-200">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Hero;