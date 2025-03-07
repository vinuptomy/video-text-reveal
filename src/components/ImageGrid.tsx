
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  gradient: string;
  link: string;
}

const ImageGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const images: ImageProps[] = [
    {
      src: "https://images.unsplash.com/photo-1677442135136-760c813a743a?q=80&w=1932&auto=format&fit=crop",
      alt: "AI machine learning visualization",
      title: "Generative AI Solutions",
      description: "Custom AI solutions to transform your business processes",
      gradient: "blue-gradient-light",
      link: "/generative-ai"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220363-35e4621ed990?q=80&w=1770&auto=format&fit=crop",
      alt: "Futuristic AI interface",
      title: "AI Consulting Services",
      description: "Expert guidance on implementing AI in your organization",
      gradient: "blue-gradient-medium",
      link: "/consulting"
    },
    {
      src: "https://images.unsplash.com/photo-1676299481101-d18deb16ab3d?q=80&w=1780&auto=format&fit=crop",
      alt: "AI agent concept",
      title: "Agentic AI Development",
      description: "Building autonomous AI agents for complex business tasks",
      gradient: "blue-gradient-dark",
      link: "/agentic-ai"
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
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-blue-dark">Our AI Expertise</h2>
        <p className="text-center text-blue-DEFAULT max-w-2xl mx-auto mb-16">
          Leveraging the power of artificial intelligence to drive innovation and business transformation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Link 
              to={image.link} 
              key={index} 
              className="image-animate opacity-0 translate-y-10 transition-all duration-700 ease-out hover:scale-105 transition-transform"
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
              <h3 className="text-xl font-medium mb-2 text-blue-DEFAULT">{image.title}</h3>
              <p className="text-blue-dark">{image.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
