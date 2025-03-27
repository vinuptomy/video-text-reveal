
import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Single mountain background image with overlay */}
      <div className="absolute inset-0 bg-blue-950">
        {/* Brighter mountain image with full opacity */}
        <div className="absolute inset-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        
        {/* Lighter overlay to maintain brightness but ensure text readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Munter</span> <span className="text-white">AI</span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">
              <Sparkles className="inline-block w-5 h-5 text-white mr-2" />
              Inspired by imagination
              <Sparkles className="inline-block w-5 h-5 text-white ml-2" />
            </h2>
            
            <p className="text-xl md:text-2xl font-light opacity-80 mb-8 text-white">
              Powering the future through innovative AI solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
