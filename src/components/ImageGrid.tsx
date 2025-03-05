
import React, { useEffect, useRef } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  gradient: string;
}

const ImageGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const images: ImageProps[] = [
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
      alt: "Abstract architectural design",
      title: "Minimalist Design",
      description: "Embracing simplicity in form and function",
      gradient: "purple-gradient"
    },
    {
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
      alt: "Modern interior with subtle lighting",
      title: "Thoughtful Spaces",
      description: "Creating environments that inspire creativity",
      gradient: "blue-gradient"
    },
    {
      src: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop",
      alt: "Intricate product detail",
      title: "Precision Crafted",
      description: "Every detail meticulously considered",
      gradient: "blue-purple-gradient"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target.querySelectorAll('.image-animate');
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add('opacity-100');
                img.classList.remove('opacity-0', 'translate-y-10');
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-purple-dark">Creative Vision</h2>
        <p className="text-center text-blue-dark max-w-2xl mx-auto mb-16">
          Every element designed with purpose, creating a harmonious balance between form and function.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="image-animate opacity-0 translate-y-10 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`image-container shadow-lg aspect-[3/4] mb-6 overflow-hidden ${image.gradient}`}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover image-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-purple-DEFAULT">{image.title}</h3>
              <p className="text-blue-dark">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
