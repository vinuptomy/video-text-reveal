
import React, { useState, useEffect } from 'react';

interface TextAnimationProps {
  originalText: string;
  newText: string;
  delay: number;
}

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [strikeThrough, setStrikeThrough] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const textSequence: TextAnimationProps[] = [
    { originalText: "Simplicity", newText: "Innovation", delay: 4000 },
    { originalText: "Innovation", newText: "Excellence", delay: 4000 },
    { originalText: "Excellence", newText: "Craftsmanship", delay: 4000 },
    { originalText: "Craftsmanship", newText: "Simplicity", delay: 4000 },
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
    const strikeTimer = setTimeout(() => {
      setStrikeThrough(true);
    }, textSequence[currentTextIndex].delay - 2000);
    
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, textSequence[currentTextIndex].delay - 1000);
    
    const nextTextTimer = setTimeout(() => {
      setTextVisible(false);
      setStrikeThrough(false);
      setFadeOut(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
      
      // Show the next text after a short delay
      setTimeout(() => {
        setTextVisible(true);
      }, 500);
    }, textSequence[currentTextIndex].delay);
    
    return () => {
      clearTimeout(strikeTimer);
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
          src="https://cdn.pixabay.com/vimeo/328214420/sunrise-25751.mp4?width=1280&hash=bd8e2eb4d219ec0fbcaed759d88ec21d43aef9f0" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay">
        <div className="text-center px-4 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-light mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Designed with purpose
          </h2>
          
          <div className="h-24 flex items-center justify-center">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight ${textVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ${strikeThrough ? 'text-stroke active' : ''} ${fadeOut ? 'opacity-30' : ''}`}>
              {textSequence[currentTextIndex].originalText}
            </h1>
          </div>
          
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Creating meaningful experiences through thoughtful design and meticulous attention to detail.
          </p>
          
          <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm text-sm tracking-wider">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
