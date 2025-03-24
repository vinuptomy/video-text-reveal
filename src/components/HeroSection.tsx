
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  
  // Main headline animation
  useEffect(() => {
    // Initial visibility
    setTimeout(() => {
      setTextVisible(true);
    }, 500);

    // Animation sequence
    const intervalId = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getAnimationHeadline = () => {
    switch (animationPhase) {
      case 0:
        return "Transform Your Business";
      case 1:
        return "Unlock New Capabilities";
      case 2:
        return "Elevate User Experiences";
      case 3:
        return "Drive Innovation with AI";
      default:
        return "Transform Your Business";
    }
  };

  return (
    <div className="hero-video-container">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source 
          src="https://cdn.pixabay.com/vimeo/562517013/digital-earth-70240.mp4?width=1280&hash=97de2a7a3b3cf8cbfb4572e47c81373e494b7cf7" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay bg-gradient-to-b from-[#1A1F2C]/95 to-[#2D1A3D]/95">
        <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[#D946EF]/20 blur-md animate-pulse"></div>
              <div className="bg-[#1A1F2C]/80 rounded-full p-4 relative">
                <Sparkles className="w-10 h-10 text-[#D946EF]" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', textShadow: '0 0 20px rgba(46, 84, 192, 0.7)' }}>
            <span className="text-[#081F5C]">Munter</span> <span className="text-[#1E5928]">AI</span>
          </h1>
          
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center overflow-hidden">
            <h2 
              className={`text-2xl md:text-4xl font-light tracking-tight text-white
                ${textVisible ? 'opacity-100' : 'opacity-0'} 
                transition-all duration-700`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              {getAnimationHeadline()}
            </h2>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#1A1F2C]/30 to-transparent"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-[#D946EF]/30 rounded-full"
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
