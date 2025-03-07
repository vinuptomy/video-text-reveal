
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AgenticAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-dark/10 to-blue-light/5 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-DEFAULT hover:text-blue-dark mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light text-blue-dark mb-6">Agentic AI Development</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1676299481101-d18deb16ab3d?q=80&w=1780&auto=format&fit=crop" 
          alt="Agentic AI Development" 
          className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
        />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-blue-dark/80 text-xl">
            Our agentic AI solutions create autonomous AI systems that can perform complex tasks, 
            make decisions, and interact with other systems on behalf of your business.
          </p>
          
          <h2 className="text-2xl font-medium text-blue-DEFAULT mt-8 mb-4">Agentic AI Capabilities</h2>
          
          <ul className="space-y-4 text-blue-dark/80">
            <li>Autonomous AI agents that handle complex workflows</li>
            <li>Multi-agent systems that collaborate to solve problems</li>
            <li>Tool-using AI that can access and utilize various software applications</li>
            <li>Customized AI agents designed for your specific business processes</li>
            <li>Continuous learning and improvement systems</li>
            <li>Secure, monitored, and controlled autonomous operation</li>
          </ul>
          
          <p className="mt-8 text-blue-dark/80">
            Experience the future of business automation with our cutting-edge agentic AI development services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgenticAI;
