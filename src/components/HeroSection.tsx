
import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Brain, Cpu, Server } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const aiIcons = [
    { icon: <Brain className="w-12 h-12 text-blue-light" />, label: "Cognitive AI" },
    { icon: <Code className="w-12 h-12 text-blue-light" />, label: "Generative AI" },
    { icon: <Cpu className="w-12 h-12 text-blue-light" />, label: "Machine Learning" },
    { icon: <Server className="w-12 h-12 text-blue-light" />, label: "AI Infrastructure" }
  ];

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

  // Icon rotation
  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % aiIcons.length);
    }, 2000);

    return () => clearInterval(iconInterval);
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
      
      <div className="hero-overlay bg-gradient-to-b from-blue-dark/95 to-blue-DEFAULT/95">
        <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-blue-light/20 blur-md animate-pulse"></div>
              <div className="bg-blue-dark/80 rounded-full p-4 relative">
                <Sparkles className="w-10 h-10 text-blue-light" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', textShadow: '0 0 20px rgba(46, 84, 192, 0.7)' }}>
            Munter <span className="text-blue-light">AI</span>
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
          
          <div className="flex justify-center space-x-8 md:space-x-16 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {aiIcons.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`transition-all duration-500 transform ${currentIcon === index ? 'scale-125' : 'scale-100 opacity-60'}`}>
                  {item.icon}
                  <p className="text-sm text-white mt-2">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-white opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Transforming businesses through cutting-edge AI solutions and expert consulting.
          </p>
          
          <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <button className="px-8 py-3 bg-blue-light hover:bg-blue-DEFAULT text-white transition-all duration-300 rounded-md text-sm tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              EXPLORE SERVICES
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-dark/30 to-transparent"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-blue-light/30 rounded-full"
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
