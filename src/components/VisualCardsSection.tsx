
import React, { useRef, useEffect } from 'react';
import VisualCard from './VisualCard';
import { Sparkles } from 'lucide-react';

const VisualCardsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Updated with new uploaded images, with the last 3 cards using the newly provided images
  const cards = [
    {
      id: "1",
      image: "/lovable-uploads/176c01de-a533-4e4a-be66-43fc129190f7.png",
      title: "The Future of Large Language Models",
      category: "AI Research",
      gradient: "from-blue-800 to-purple-800"
    },
    {
      id: "2",
      image: "/lovable-uploads/5a1e1d68-5703-4f8d-8180-0a7d05fc51cb.png",
      title: "Implementing AI in Enterprise Workflows",
      category: "Strategy",
      gradient: "from-purple-800 to-pink-700"
    },
    {
      id: "3",
      image: "/lovable-uploads/41fa346d-3d8b-4383-834d-d9b6839c43e7.png",
      title: "Ethical Considerations in AI Development",
      category: "Ethics",
      gradient: "from-pink-700 to-red-700"
    },
    {
      id: "4",
      image: "/lovable-uploads/d73efd0f-e6fd-4bad-95e3-3e1d44150fe5.png",
      title: "AI-Driven Process Automation",
      category: "Implementation",
      gradient: "from-blue-800 to-cyan-600"
    },
    {
      id: "5",
      image: "/lovable-uploads/9310c4d7-0933-499a-af11-1726ebc6e54b.png",
      title: "The Rise of Multimodal AI Systems",
      category: "Technology",
      gradient: "from-emerald-700 to-green-800"
    },
    {
      id: "6",
      image: "/lovable-uploads/ad293b85-9bad-48d3-83d2-63d77030b8ce.png",
      title: "AI Training Workshop Success Stories",
      category: "Case Studies",
      gradient: "from-indigo-800 to-violet-900"
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
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-800/10 to-purple-700/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-blue-600 w-6 h-6 mr-2" />
          <h2 className="text-3xl md:text-4xl font-light text-center text-blue-dark">
            AI Insights & Resources
          </h2>
          <Sparkles className="text-blue-600 w-6 h-6 ml-2" />
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
                gradient={card.gradient}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualCardsSection;
