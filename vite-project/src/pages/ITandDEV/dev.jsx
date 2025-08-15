import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Code, 
  Globe, 
  Search,
  Smartphone,
  Database,
  Server,
  Shield,
  Award,
  Clock,
  Users,
  Terminal
} from 'lucide-react';

const ITDevelopmentService = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Transform your online presence with customized web development solutions crafted to meet your specific needs. Our expert developers leverage the latest technologies to build responsive websites.",
      features: ["Full-Stack Development", "Custom CMS", "API Integration", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Elevate your business with bespoke app development solutions designed to match your unique goals. Our skilled developers create intuitive, high-performance applications.",
      features: ["Native Apps", "Cross-Platform", "UI/UX Design", "App Maintenance"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Boost your online visibility with our expert SEO services. Through strategic optimization techniques, we enhance your website's rankings and drive organic traffic to your platform.",
      features: ["Technical SEO", "Content Strategy", "Link Building", "Performance Analytics"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Design and implement robust database solutions that ensure data integrity and optimal performance. We create scalable architectures that grow with your business.",
      features: ["Database Design", "Migration Services", "Performance Tuning", "Data Security"]
    },
    {
      icon: Server,
      title: "DevOps Services",
      description: "Streamline your development and operations with our comprehensive DevOps solutions. We implement efficient workflows and automation to enhance productivity.",
      features: ["CI/CD Pipeline", "Infrastructure as Code", "Container Management", "Monitoring"]
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Projects Delivered",
      value: "500+"
    },
    {
      icon: Award,
      title: "Satisfaction Rate",
      value: "99%"
    },
    {
      icon: Clock,
      title: "Avg. Delivery Time",
      value: "4 Weeks"
    },
    {
      icon: Users,
      title: "Expert Developers",
      value: "50+"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-[#d7be68] opacity-20 text-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -100,
            }}
            animate={{
              y: window.innerHeight + 100,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            {[...Array(5)].map((_, j) => (
              <div key={j}>
                {Math.random().toString(2).slice(2, 10)}
              </div>
            ))}
          </motion.div>
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
              <span>Our Services</span>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
            <div className="h-0.5 bg-gradient-to-r from-[#d7be68] to-transparent mt-2" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold space-y-4">
            <span className="block text-white">IT & Development</span>
            <span className="block text-[#d7be68]">Services</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            From software development to system integration, our IT and development services cover the entire 
            software development lifecycle. We create tailored solutions to meet your unique business needs, 
            ensuring scalability, security, and performance.
          </p>

          {/* Highlights Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-[#d7be68]/5 border border-[#d7be68]/10"
              >
                <highlight.icon className="w-6 h-6 text-[#d7be68] mb-2" />
                <div className="text-sm text-white/60">{highlight.title}</div>
                <div className="text-lg font-semibold text-white">{highlight.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl bg-black/40 border border-[#d7be68]/20 backdrop-blur-xl hover:border-[#d7be68]/40 transition-all duration-300"
            >
              <div className="p-6 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-12 h-12 rounded-lg bg-[#d7be68]/10 flex items-center justify-center"
                >
                  <service.icon className="w-6 h-6 text-[#d7be68]" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-white/60">
                      <div className="w-1 h-1 rounded-full bg-[#d7be68]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Development Process</h2>
          <div className="grid md:grid-cols-6 gap-6">
            {[
              {
                icon: Terminal,
                title: 'Requirements',
                description: 'Gathering & Analysis'
              },
              {
                icon: Code,
                title: 'Design',
                description: 'Architecture & Planning'
              },
              {
                icon: Database,
                title: 'Development',
                description: 'Building & Testing'
              },
              {
                icon: Shield,
                title: 'QA',
                description: 'Testing & Validation'
              },
              {
                icon: Server,
                title: 'Deployment',
                description: 'Launch & Monitor'
              },
              {
                icon: Users,
                title: 'Support',
                description: 'Maintenance & Updates'
              }
            ].map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#d7be68]/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#d7be68]" />
                  </div>
                  {index < 5 && (
                    <div className="hidden md:block absolute w-full h-0.5 bg-[#d7be68]/20 left-1/2 top-6" />
                  )}
                </div>
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="text-xs text-white/60 mt-1">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ITDevelopmentService;