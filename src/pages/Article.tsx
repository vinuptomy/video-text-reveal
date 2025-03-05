
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const articles = [
    {
      id: "1",
      title: "Modern Architecture Principles",
      category: "Design",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      content: "Modern architecture is characterized by simplification of form and elimination of ornament. The motto 'Less is more' by architect Ludwig Mies van der Rohe perfectly captures the essence of modern design principles. These principles focus on the use of industrial materials such as glass, steel, and concrete, and emphasize the importance of function over form."
    },
    {
      id: "2",
      title: "Sustainable Materials in Design",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop",
      content: "Sustainable design is about creating spaces and products that reduce negative impacts on the environment. It involves considering the entire lifecycle of materials and prioritizing renewable resources. Innovative approaches to sustainable design include using recycled materials, implementing energy-efficient systems, and designing for longevity and adaptability."
    },
    {
      id: "3",
      title: "Creating Inspirational Spaces",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      content: "Inspirational spaces are designed to evoke emotion and enhance wellbeing. They consider how people interact with their environment and how that environment can impact mood, productivity, and creativity. Key elements include natural light, acoustic comfort, biophilic design, and thoughtful use of color and texture."
    },
    {
      id: "4",
      title: "Minimalist Interior Design",
      category: "Design",
      image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?q=80&w=2070&auto=format&fit=crop",
      content: "Minimalist interior design is characterized by simplicity, clean lines, and a monochromatic palette with color used as an accent. It focuses on the principle that less is more. Minimalist interiors feature open space with carefully selected furnishings where every item serves a purpose. This approach creates calm, uncluttered spaces that highlight architectural features and thoughtfully chosen objects."
    },
    {
      id: "5",
      title: "The Art of Natural Light",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
      content: "Natural light is a fundamental element in both architectural design and photography. It brings spaces to life, highlighting textures, creating contrast, and enhancing colors. Understanding how light changes throughout the day allows designers and photographers to capture moments and spaces in their most compelling form. The interplay between light and shadow adds depth and dimension to both physical spaces and visual compositions."
    },
    {
      id: "6",
      title: "Functional Beauty in Objects",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      content: "Great product design balances form and function, creating objects that are both beautiful and useful. This philosophy echoes Dieter Rams' principle that 'good design is as little design as possible.' Products that achieve functional beauty solve problems elegantly and intuitively, with every detail serving a purpose. This approach results in timeless designs that remain relevant regardless of changing trends."
    }
  ];
  
  const article = articles.find(item => item.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Article not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="animate-page-transition-in">
      <div className="h-[50vh] relative overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container mx-auto px-4 md:px-8 py-12">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl text-white font-light mb-6 max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-3xl">
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          {article.content}
        </p>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          Dieter Rams, one of the most influential industrial designers of the 20th century, established ten principles for good design. He believed that good design is innovative, makes a product useful, is aesthetic, makes a product understandable, is unobtrusive, is honest, is long-lasting, is thorough down to the last detail, is environmentally friendly, and involves as little design as possible.
        </p>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          These principles have influenced generations of designers and continue to be relevant today. They emphasize the importance of simplicity, functionality, and sustainability in design. By focusing on these principles, designers can create products and spaces that are not only beautiful but also meaningful and useful.
        </p>
        
        <div className="mt-16 border-t border-gray-200 pt-8">
          <Link to="/" className="text-gray-900 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
