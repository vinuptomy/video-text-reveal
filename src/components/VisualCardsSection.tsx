
import React, { useRef, useEffect } from 'react';
import VisualCard from './VisualCard';
import { Sparkles } from 'lucide-react';

const VisualCardsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const cards = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      title: "Modern Architecture Principles",
      category: "Design"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop",
      title: "Sustainable Materials in Design",
      category: "Innovation"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      title: "Creating Inspirational Spaces",
      category: "Lifestyle"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?q=80&w=2070&auto=format&fit=crop",
      title: "Minimalist Interior Design",
      category: "Design"
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
      title: "The Art of Natural Light",
      category: "Photography"
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      title: "Functional Beauty in Objects",
      category: "Product Design"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.card-animate');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100');
                card.classList.remove('opacity-0', 'translate-y-10');
              }, 150 * index);
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
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-light/10 to-blue-light/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-purple-DEFAULT w-6 h-6 mr-2" />
          <h2 className="text-3xl md:text-4xl font-light text-center text-purple-dark">
            Featured Stories
          </h2>
          <Sparkles className="text-purple-DEFAULT w-6 h-6 ml-2" />
        </div>
        
        <p className="text-center text-blue-dark max-w-2xl mx-auto mb-16">
          Explore our collection of articles and insights on design, innovation, and creative thinking.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className="card-animate opacity-0 translate-y-10 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <VisualCard 
                id={card.id}
                image={card.image}
                title={card.title}
                category={card.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualCardsSection;
