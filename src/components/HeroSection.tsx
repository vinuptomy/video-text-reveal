
import React, { useEffect, useState, useRef } from 'react';
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
      {/* Background gradient and mountain scene */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-indigo-800 to-pink-500">
        {/* Mountain silhouettes with mist effect */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-bottom opacity-40"></div>
        
        {/* Mist overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
        
        {/* Animated robot */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="robot relative w-64 h-64 animate-float">
            <div className="absolute w-full h-full">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-400 opacity-20 animate-pulse" style={{ filter: 'blur(20px)' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="AI Robot" 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-auto opacity-75 mix-blend-screen"
                style={{ filter: 'brightness(1.5) contrast(1.2)' }}
              />
              
              {/* Light trails */}
              <div className="absolute left-1/2 -translate-x-1/2 top-3/4 w-12 h-48 bg-gradient-to-t from-transparent via-blue-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Particles effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index}
              className="absolute w-1 h-1 rounded-full bg-blue-300 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.7,
                animationDuration: `${3 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-blue-400">Munter</span> <span className="text-green-500">AI</span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light mb-6">
              <Sparkles className="inline-block w-5 h-5 text-pink-400 mr-2" />
              Inspired by imagination
              <Sparkles className="inline-block w-5 h-5 text-pink-400 ml-2" />
            </h2>
            
            <p className="text-xl md:text-2xl font-light opacity-80 mb-8">
              Powering the future through innovative AI solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
