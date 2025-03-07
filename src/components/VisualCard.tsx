
import React from 'react';
import { Link } from 'react-router-dom';

interface VisualCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  gradient?: string;
}

const VisualCard: React.FC<VisualCardProps> = ({ id, image, title, category, gradient = "from-blue-DEFAULT to-blue-dark" }) => {
  return (
    <Link to={`/article/${id}`} className="block visual-card group">
      <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-md">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className={`visual-card-overlay bg-gradient-to-t ${gradient} bg-opacity-80`}>
        <span className="inline-block px-3 py-1 text-xs bg-blue-dark/30 backdrop-blur-sm rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-medium mb-2 text-glow">{title}</h3>
        <p className="text-white/80 text-sm">
          Explore Article
        </p>
      </div>
    </Link>
  );
};

export default VisualCard;
