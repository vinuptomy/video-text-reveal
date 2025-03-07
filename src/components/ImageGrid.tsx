
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
      src: "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
      alt: "AI machine learning visualization",
      title: "Generative AI Solutions",
      description: "Custom AI solutions to transform your business processes",
      gradient: "from-blue-400 to-blue-600",
      link: "/generative-ai"
    },
    {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80",
      alt: "Futuristic AI interface",
      title: "AI Consulting Services",
      description: "Expert guidance on implementing AI in your organization",
      gradient: "from-blue-500 to-blue-700",
      link: "/consulting"
    },
    {
      src: "https://images.unsplash.com/photo-1675483344627-5ef16e96ef7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      alt: "AI agent concept",
      title: "Agentic AI Development",
      description: "Building autonomous AI agents for complex business tasks",
      gradient: "from-blue-600 to-blue-800",
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
              <div className={`image-container shadow-lg aspect-[3/4] mb-6 overflow-hidden bg-gradient-to-b ${image.gradient}`}>
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
