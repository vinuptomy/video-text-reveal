
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GenerativeAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-dark/10 to-blue-light/5 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-DEFAULT hover:text-blue-dark mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light text-blue-dark mb-6">Generative AI Solutions</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
          alt="Generative AI Visualization" 
          className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
        />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-blue-dark/80 text-xl">
            Our generative AI solutions harness the power of cutting-edge artificial intelligence to create new content, 
            ideas, and insights tailored to your business needs.
          </p>
          
          <h2 className="text-2xl font-medium text-blue-DEFAULT mt-8 mb-4">What We Offer</h2>
          
          <ul className="space-y-4 text-blue-dark/80">
            <li>Custom language models fine-tuned on your industry data</li>
            <li>AI-powered content generation for marketing, documentation, and creative needs</li>
            <li>Multimodal AI systems that work with text, images, and audio</li>
            <li>Integration of generative AI into your existing business workflows</li>
            <li>Training and support for your team to effectively use AI tools</li>
          </ul>
          
          <p className="mt-8 text-blue-dark/80">
            Contact us today to discuss how our generative AI solutions can transform your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAI;
