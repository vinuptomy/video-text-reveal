
import React, { useRef, useEffect } from 'react';
import VisualCard from './VisualCard';
import { Sparkles } from 'lucide-react';

const VisualCardsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const cards = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1679958157990-f291c0bb88b9?q=80&w=1955&auto=format&fit=crop",
      title: "The Future of Large Language Models",
      category: "AI Research"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1655720828083-8a3dde865201?q=80&w=1932&auto=format&fit=crop",
      title: "Implementing AI in Enterprise Workflows",
      category: "Strategy"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1686191128864-3e2cfacf1aa8?q=80&w=1780&auto=format&fit=crop",
      title: "Ethical Considerations in AI Development",
      category: "Ethics"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1684079159853-e2c2728eed8f?q=80&w=1770&auto=format&fit=crop",
      title: "AI-Driven Process Automation",
      category: "Implementation"
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1677442136019-21740b2dd9fb?q=80&w=1932&auto=format&fit=crop",
      title: "The Rise of Multimodal AI Systems",
      category: "Technology"
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1692607431293-499496dcd826?q=80&w=1932&auto=format&fit=crop",
      title: "AI Training Workshop Success Stories",
      category: "Case Studies"
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
            AI Insights & Resources
          </h2>
          <Sparkles className="text-purple-DEFAULT w-6 h-6 ml-2" />
        </div>
        
        <p className="text-center text-blue-dark max-w-2xl mx-auto mb-16">
          Explore our collection of articles, case studies, and research on artificial intelligence and machine learning.
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
