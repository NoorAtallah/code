// Import React Icons for social media
import { 
  FaLinkedin, 
  FaXTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaTiktok,
  FaWhatsapp
} from 'react-icons/fa6';
import { FaMapMarker } from 'react-icons/fa';import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Globe,
  MessageCircle,
  Network
} from 'lucide-react';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (437) 430-3470",
      subtitle: "Available 24/7 for support"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "Info@CodeLakeEnterprise.com",
      subtitle: "We reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "25 Sheppard Ave W Suite 300, North York ON M2N 6S6",
      subtitle: "Book an appointment"
    },
  ];

  const socialLinks = [
    { 
      icon: FaFacebookF, 
      name: 'Facebook',
      url: 'https://www.facebook.com/CLERDGHQ/'
    },  
    { 
      icon: FaXTwitter, 
      name: 'X',
      url: 'https://x.com/CLE_RDGHQ'
    },
    { 
      icon: FaInstagram, 
      name: 'Instagram',
      url: 'https://www.instagram.com/cle_rdghq/'
    },
    { 
      icon: FaLinkedin, 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/clerdghq'
    },
    {
      icon: FaTiktok,
      name: 'TikTok',
      url: 'https://www.tiktok.com/@cle_rdghq'
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      url: 'https://wa.me/14374303470'
    },
    {
      icon: FaMapMarker,
      name: 'Google Maps',
      url: 'https://g.co/kgs/Ab8FAWg'
    },
    {
      icon: FaYoutube,
      name: 'YouTube',
      url: 'https://www.youtube.com/@CLE_RDGHQ'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Network Lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#d7be68] to-transparent"
            style={{
              width: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Connection Points */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`point-${i}`}
            className="absolute w-2 h-2 bg-[#d7be68] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Communication Icons */}
        {[...Array(8)].map((_, i) => {
          const icons = [MessageCircle, Network, Globe, Phone];
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={`icon-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            >
              <Icon className="w-8 h-8 text-[#d7be68]" />
            </motion.div>
          );
        })}

        {/* Ripple Effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#d7be68]"
            style={{
              width: 100 + i * 100,
              height: 100 + i * 100,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 2],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          className="relative space-y-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <motion.div
              className="flex items-center space-x-2 text-[#d7be68] text-sm font-semibold tracking-wider uppercase"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
            <div className="h-0.5 bg-gradient-to-r from-[#d7be68] to-transparent mt-2" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold space-y-4">
            <span className="block text-white">Contact</span>
            <span className="block text-[#d7be68]">Us</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Ready to transform your business? Connect with our team of experts and discover how we can help 
            you achieve your goals. We're here to answer your questions and provide the solutions you need.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full sm:w-80 md:w-72 lg:w-80 rounded-xl bg-black/40 border border-[#d7be68]/20 backdrop-blur-xl 
              hover:border-[#d7be68]/40 transition-all duration-300 p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-12 h-12 rounded-lg bg-[#d7be68]/10 flex items-center justify-center mb-4"
              >
                <contact.icon className="w-6 h-6 text-[#d7be68]" />
              </motion.div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
              <p className="text-[#d7be68] font-medium mb-2">{contact.info}</p>
              <p className="text-sm text-white/60">{contact.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20 p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Connect With Us</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center justify-center"
                title={social.name}
              >
                <social.icon className="w-8 h-8 text-[#d7be68] hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-[#d7be68]">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Business Hours</span>
          </div>
          <p className="text-white/70 mt-2">
            Monday - Friday: 9:00 AM - 5:00 PM EST
          </p>
          <p className="text-white/70">
            24/7 Support Available for Emergency Services
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;