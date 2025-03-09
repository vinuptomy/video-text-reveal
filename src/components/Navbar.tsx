
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Info, Settings, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo with improved visibility */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-white p-1 rounded-md shadow-sm">
                <img 
                  src="/lovable-uploads/1a7fe7c0-b53f-423f-9d25-7044a5d4c38c.png" 
                  alt="Munter AI Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <span className="ml-3 text-xl font-bold text-blue-dark">Munter AI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-blue-DEFAULT hover:text-blue-dark transition-colors flex items-center space-x-1">
              <Info className="w-4 h-4" />
              <span>About us</span>
            </Link>
            <Link to="/consulting" className="text-blue-DEFAULT hover:text-blue-dark transition-colors flex items-center space-x-1">
              <Settings className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link to="/generative-ai" className="text-blue-DEFAULT hover:text-blue-dark transition-colors flex items-center space-x-1">
              <Settings className="w-4 h-4" />
              <span>Solutions</span>
            </Link>
            <Link to="/contact" className="text-blue-DEFAULT hover:text-blue-dark transition-colors flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>Contact us</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-blue-DEFAULT p-2 rounded-md hover:bg-blue-light/10 transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-blue-DEFAULT hover:bg-blue-light/10 rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="w-4 h-4 mr-2" />
              About us
            </Link>
            <Link 
              to="/consulting" 
              className="block px-3 py-2 text-blue-DEFAULT hover:bg-blue-light/10 rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings className="w-4 h-4 mr-2" />
              Services
            </Link>
            <Link 
              to="/generative-ai" 
              className="block px-3 py-2 text-blue-DEFAULT hover:bg-blue-light/10 rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings className="w-4 h-4 mr-2" />
              Solutions
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-blue-DEFAULT hover:bg-blue-light/10 rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
