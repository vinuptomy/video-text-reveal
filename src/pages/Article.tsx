
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const articles = [
    {
      id: "1",
      title: "The Future of Large Language Models",
      category: "AI Research",
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
      content: "Large Language Models (LLMs) are revolutionizing the way we interact with technology. These sophisticated AI systems, trained on vast amounts of text, have the ability to understand, generate, and manipulate language with remarkable fluency. Recent advancements in LLMs have shown promising capabilities in generating human-like text, translating languages, and even writing code."
    },
    {
      id: "2",
      title: "Implementing AI in Enterprise Workflows",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80",
      content: "Integrating AI into enterprise workflows requires a strategic approach that considers both technological capabilities and organizational readiness. Companies that successfully implement AI start with clear business objectives, rather than implementing technology for its own sake. They identify specific pain points or opportunities where AI can provide tangible value, then develop targeted solutions."
    },
    {
      id: "3",
      title: "Ethical Considerations in AI Development",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1681117717962-6a56a45f06c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80",
      content: "As AI systems become more prevalent and powerful, ethical considerations in their development and deployment have never been more important. Key concerns include issues of bias and fairness, as AI systems can inadvertently perpetuate or amplify existing societal biases present in their training data. Transparency and explainability are also crucial, especially in high-stakes domains like healthcare, finance, and criminal justice."
    },
    {
      id: "4",
      title: "AI-Driven Process Automation",
      category: "Implementation",
      image: "https://images.unsplash.com/photo-1675483344627-5ef16e96ef7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      content: "AI-driven process automation is transforming business operations across industries by combining the efficiency of traditional automation with the intelligence and adaptability of AI. Unlike conventional automation tools that follow rigid rules, AI-powered systems can handle variability, learn from patterns, and make decisions based on complex inputs. This enables the automation of tasks that previously required human judgment."
    },
    {
      id: "5",
      title: "The Rise of Multimodal AI Systems",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80",
      content: "Multimodal AI systems represent a significant advancement in artificial intelligence, capable of processing and interpreting multiple types of information such as text, images, audio, and video simultaneously. Unlike traditional AI systems that specialize in a single data type, multimodal models integrate diverse inputs to develop a more comprehensive understanding, mirroring the way humans perceive the world."
    },
    {
      id: "6",
      title: "AI Training Workshop Success Stories",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1676531901179-9a24937c72cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
      content: "Effective AI training workshops have proven to be transformative for organizations looking to build internal AI capabilities. Companies that invest in comprehensive AI training for their teams report faster adoption of AI technologies, more successful implementation of AI projects, and better return on investment. These workshops bridge the gap between technical specialists and business stakeholders, creating a common language and understanding around AI concepts."
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
