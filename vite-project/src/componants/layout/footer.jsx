import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone,
  Globe,
  Mail,
  ChevronRight,
  Cpu,
  Video,
  Briefcase,
  Cloud,
  Code,
  ShoppingCart,
  Palette,
  PieChart,
  Shield,
  Network,
  Lightbulb
} from 'lucide-react';
import img from '../../assets/1.png'
import rdgImg from '../../assets/2.png' // You'll need to add this logo image

const Footer = () => {
  const services = [
    { name: "Production Service", icon: Video, path: "/production" },
    { name: "Digital Marketing Solutions", icon: Briefcase, path: "/marketing" },
    { name: "IT & Development Service", icon: Code, path: "/it-and-dev" },
    { name: "Cloud Computing Solutions", icon: Cloud, path: "/cloud" },
    { name: "Entrepreneurial Journeys", icon: Cpu, path: "/entrepreneurial" },
    { name: "E-commerce Solution", icon: ShoppingCart, path: "/ecommerce" },
    { name: "Design & Branding", icon: Palette, path: "/design" },
    { name: "Data Analytics", icon: PieChart, path: "/data-analytics" },
    { name: "Cyber Security", icon: Shield, path: "/cybersecurity" },
    { name: "Security System Solutions", icon: Shield, path: "/security" },
    { name: "Networking Solutions", icon: Network, path: "/network" },
    { name: "Smart Solutions", icon: Lightbulb, path: "/smart" },
    { name :"IT Consulting", icon: Code, path: "/it" }
  ];

  const quickLinks = [
    { name: "About Our Company", path: "/about" },
    { name: "Our Services", path: "/services" }
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d7be68]/20 to-transparent" />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              {/* Code Lake Enterprise logo and name */}
              <div className="flex items-center space-x-2">
                <img src={img} alt="Code Lake Enterprise Logo" className="w-10 h-10" />
                <h3 className="text-2xl font-bold text-[#d7be68]">Code Lake Enterprise</h3>
              </div>
              
              {/* Royal Delta Group logo and name */}
             
            </div>
            
            <p className="text-white/70 max-w-sm">
              Empowering your business with professional services. Our team of experts has successfully completed over 100 projects with a 95% satisfaction rate.
            </p>
            <div className="space-y-3">
              <a href="tel:+14378308800" className="flex items-center space-x-3 text-white/70 hover:text-[#d7be68] transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-[#d7be68]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#d7be68]" />
                </div>
                <span>+1 (437) 430-3470</span>
              </a>
              <a href="mailto:Info@CodeLakeEnterprise.Com" className="flex items-center space-x-3 text-white/70 hover:text-[#d7be68] transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-[#d7be68]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#d7be68]" />
                </div>
                <span>Info@CodeLakeEnterprise.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#d7be68] transition-colors duration-300 
                      flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 
                      group-hover:ml-0 transition-all duration-300 text-[#d7be68]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-white">Our Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="flex items-center space-x-2 text-white/70 hover:text-[#d7be68] transition-colors duration-300 group"
                >
                  <service.icon className="w-5 h-5 text-[#d7be68]" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
            <div className="md:order-2">
              <p className="text-white/50 text-sm text-right">
                Copyright © 2025 by Code Lake Enterprise Inc. Powered and secured by Our Technology Department
              </p>
            </div>
            <div className="md:order-1">
              {/* You can add additional links here if needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;