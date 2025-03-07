
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-dark/10 to-blue-light/5 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-DEFAULT hover:text-blue-dark mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light text-blue-dark mb-6">AI Consulting Services</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1682687220363-35e4621ed990?q=80&w=1770&auto=format&fit=crop" 
          alt="AI Consulting Services" 
          className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
        />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-blue-dark/80 text-xl">
            Our expert AI consultants help you navigate the complex landscape of artificial intelligence, 
            providing strategic guidance and implementation support for your organization.
          </p>
          
          <h2 className="text-2xl font-medium text-blue-DEFAULT mt-8 mb-4">Our Consulting Approach</h2>
          
          <ul className="space-y-4 text-blue-dark/80">
            <li>AI readiness assessment to identify opportunities and challenges</li>
            <li>Strategic planning for AI integration into your business</li>
            <li>Vendor selection and technology evaluation</li>
            <li>ROI analysis and business case development</li>
            <li>Change management and organizational adaptation</li>
            <li>Implementation oversight and quality assurance</li>
          </ul>
          
          <p className="mt-8 text-blue-dark/80">
            Work with our experienced consultants to develop a customized AI strategy that aligns with your business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
