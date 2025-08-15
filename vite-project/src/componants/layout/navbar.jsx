import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Code } from 'lucide-react';
import img from '../../assets/1.png'
import img2 from '../../assets/2.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Production", path: "/production" },
    { name: "IT Consulting", path: "/it" },
    { name: "IT & Development", path: "/it-and-dev" },
    { name: "Digital Marketing", path: "/marketing" },
    { name: "Cloud Computing", path: "/cloud" },
    { name: "Entrepreneurial Journeys", path: "/entrepreneurial" },
    { name: "E-commerce Solutions", path: "/ecommerce" },
    { name: "Design & Branding", path: "/design" },
    { name: "Data Analytics", path: "/data-analytics" },
    { name: "Cyber Security", path: "/cybersecurity" },
    { name: "Security Systems", path: "/security" },
    { name: "Networking Solutions", path: "/network" },
    { name: "Smart Solutions", path: "/smart" }
  ];

  // New function to handle closing menus
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-black shadow-lg z-50 sticky top-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <img 
                src={img} 
                alt="Code Lake Enterprise Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-[#ebebe8] font-bold text-xl">Code Lake Enterprise</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#ebebe8] hover:text-[#d7be68] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[#ebebe8] hover:text-[#d7be68] transition-colors">
              About
            </Link>
            <Link to="/contact-us" className="text-[#ebebe8] hover:text-[#d7be68] transition-colors">
              Contact
            </Link>
            {/* Services Dropdown */}
            <div 
              className="relative group" 
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-[#ebebe8] hover:text-[#d7be68] transition-colors z-15"
                onClick={() => setIsServicesOpen((prev) => !prev)}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>

              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-black shadow-lg rounded-md py-2 z-[60]"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2 text-[#ebebe8] hover:text-[#d7be68] transition-colors"
                      onClick={handleLinkClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

           
            
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#ebebe8] hover:text-[#d7be68] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-[#ebebe8] hover:bg-[#ebebe8] hover:text-[#d7be68] rounded-md transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-[#ebebe8] hover:bg-[#ebebe8] hover:text-[#d7be68] rounded-md transition-colors"
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-3 py-2 text-[#ebebe8] hover:text-[#d7be68] rounded-md transition-colors"
                      onClick={handleLinkClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block px-3 py-2 text-[#ebebe8] hover:bg-[#ebebe8] hover:text-[#d7be68] rounded-md transition-colors"
              onClick={handleLinkClick}
            >
              About
            </Link>
            
            <Link
              to="/contact-us"
              className="block px-3 py-2 text-[#ebebe8] hover:bg-[#ebebe8] hover:text-[#d7be68] rounded-md transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;