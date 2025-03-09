
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-8 text-blue-dark">Contact Us</h1>
        <p className="text-center text-blue-DEFAULT max-w-2xl mx-auto mb-16">
          Have questions about our AI solutions? We're here to help and would love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Mail className="h-10 w-10 text-blue-DEFAULT" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-blue-dark">Email</h3>
            <p className="text-blue-DEFAULT">info@munter-ai.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Phone className="h-10 w-10 text-blue-DEFAULT" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-blue-dark">Phone</h3>
            <p className="text-blue-DEFAULT">+1 (555) 123-4567</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-10 w-10 text-blue-DEFAULT" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-blue-dark">Office</h3>
            <p className="text-blue-DEFAULT">123 AI Innovation Drive<br />Silicon Valley, CA 94025</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-medium mb-6 text-blue-dark">Send us a message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-dark mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-blue-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-DEFAULT"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-dark mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-blue-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-DEFAULT"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-blue-dark mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-blue-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-DEFAULT"
                placeholder="Message subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-blue-dark mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full px-4 py-2 border border-blue-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-DEFAULT"
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full md:w-auto px-6 py-3 bg-blue-DEFAULT text-white rounded-md hover:bg-blue-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
