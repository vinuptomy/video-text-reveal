
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
      {/* Single mountain background image with brighter, sunnier look */}
      <div className="absolute inset-0">
        {/* Bright, sunny mountain image */}
        <div className="absolute inset-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        
        {/* Very light overlay to maintain brightness while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-blue-950/30"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-blue-950">Munter</span> <span className="text-blue-800">AI</span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-blue-900">
              <Sparkles className="inline-block w-5 h-5 text-blue-800 mr-2" />
              Inspired by imagination
              <Sparkles className="inline-block w-5 h-5 text-blue-800 ml-2" />
            </h2>
            
            <p className="text-xl md:text-2xl font-medium mb-8 text-blue-950">
              Powering the future through innovative AI solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
