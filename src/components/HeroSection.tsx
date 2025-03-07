
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface TextAnimationProps {
  originalText: string;
  newText: string;
  delay: number;
}

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const [firstLineText, setFirstLineText] = useState("Inspired by imagination");

  const textSequence: TextAnimationProps[] = [
    { originalText: "Creativity", newText: "Innovation", delay: 4000 },
    { originalText: "Innovation", newText: "Elegance", delay: 4000 },
    { originalText: "Elegance", newText: "Imagination", delay: 4000 },
    { originalText: "Imagination", newText: "Creativity", delay: 7000 }, // Longer display time
  ];

  useEffect(() => {
    // Initial text reveal
    const initialReveal = setTimeout(() => {
      setTextVisible(true);
    }, 1000);

    return () => clearTimeout(initialReveal);
  }, []);

  useEffect(() => {
    if (!textVisible) return;
    
    // Animation sequence
    const slideTimer = setTimeout(() => {
      if (currentTextIndex < 3) {
        setSlideOut(true);
      }
    }, textSequence[currentTextIndex].delay - 1500);
    
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, textSequence[currentTextIndex].delay - 1000);
    
    const nextTextTimer = setTimeout(() => {
      setTextVisible(false);
      setSlideOut(false);
      setFadeOut(false);
      
      // Change first line text when fourth text (Imagination) appears
      if (currentTextIndex === 2) { // About to show the fourth text (index 3)
        setFirstLineText("Powered by AI");
      }
      
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
      
      // Show the next text after a short delay
      setTimeout(() => {
        setTextVisible(true);
      }, 500);
    }, textSequence[currentTextIndex].delay);
    
    return () => {
      clearTimeout(slideTimer);
      clearTimeout(fadeTimer);
      clearTimeout(nextTextTimer);
    };
  }, [currentTextIndex, textVisible]);

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
      
      <div className="hero-overlay">
        <div className="text-center px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light opacity-0 animate-fade-in text-glow mb-4" style={{ animationDelay: '0.3s' }}>
            {firstLineText}
          </h2>
          
          <div className="h-24 flex items-center justify-center overflow-hidden">
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight 
                ${textVisible ? 'opacity-100' : 'opacity-0'} 
                transition-all duration-500 
                ${slideOut ? 'translate-y-[-50px]' : ''} 
                ${fadeOut ? 'opacity-0' : ''} text-glow`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              {textSequence[currentTextIndex].originalText}
            </h1>
          </div>
          
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Transforming businesses through cutting-edge AI solutions and expert consulting.
          </p>
          
          <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <button className="px-8 py-3 bg-blue-DEFAULT hover:bg-blue-dark text-white transition-all duration-300 rounded-md text-sm tracking-wider shadow-lg hover:shadow-xl">
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
