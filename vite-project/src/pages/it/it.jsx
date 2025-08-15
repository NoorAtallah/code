import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  LineChart, 
  Settings, 
  Shield, 
  Cloud, 
  Server,
  Network,
  Users,
  Trophy,
  Clock,
  Laptop
} from 'lucide-react';

const ConsultingService = () => {
  const services = [
    {
      icon: LineChart,
      title: "Strategic Planning",
      description: "Develop comprehensive IT strategies aligned with your business objectives. Our expert consultants analyze your current infrastructure and create roadmaps for digital transformation.",
      features: ["Business Analysis", "Technology Roadmap", "Risk Assessment", "Cost Optimization"]
    },
    {
      icon: Settings,
      title: "Infrastructure Optimization",
      description: "Enhance your IT infrastructure efficiency through careful assessment and strategic improvements. We help streamline operations and reduce technological bottlenecks.",
      features: ["System Assessment", "Performance Tuning", "Resource Planning", "Scalability Solutions"]
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Protect your digital assets with comprehensive security consulting. We identify vulnerabilities and implement robust security measures to safeguard your business.",
      features: ["Security Audit", "Threat Assessment", "Compliance Check", "Security Protocols"]
    },
    {
      icon: Cloud,
      title: "Cloud Strategy",
      description: "Navigate the cloud landscape with expert guidance. We help you choose and implement the right cloud solutions that match your business needs and growth objectives.",
      features: ["Cloud Assessment", "Migration Planning", "Vendor Selection", "Integration Strategy"]
    },
    {
      icon: Server,
      title: "Technology Implementation",
      description: "Execute technology solutions with precision and expertise. Our team ensures smooth implementation of new systems while minimizing disruption to your operations.",
      features: ["Project Planning", "Change Management", "System Integration", "Quality Assurance"]
    }
  ];

  const highlights = [
    {
      icon: Network,
      title: "Global Projects",
      value: "500+"
    },
    {
      icon: Users,
      title: "Expert Consultants",
      value: "50+"
    },
    {
      icon: Trophy,
      title: "Success Rate",
      value: "98%"
    },
    {
      icon: Clock,
      title: "Years Experience",
      value: "15+"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#d7be68]"
            initial={{
              opacity: Math.random() * 0.3 + 0.1,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 2 + 1,
              height: Math.random() * 100 + 50,
            }}
            animate={{
              opacity: [Math.random() * 0.3 + 0.1, 0.1, Math.random() * 0.3 + 0.1],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              filter: 'blur(1px)'
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
              <span>Our Services</span>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
            <div className="h-0.5 bg-gradient-to-r from-[#d7be68] to-transparent mt-2" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold space-y-4">
            <span className="block text-white">IT Consulting</span>
            <span className="block text-[#d7be68]">Services</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Leverage our IT consulting expertise to make informed decisions about technology adoption 
            and implementation. We provide strategic guidance, helping you align your IT strategy with 
            your business objectives, optimize processes, and achieve sustainable growth.
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

        {/* Consulting Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Consulting Approach</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              'Discovery', 
              'Analysis', 
              'Strategy Development', 
              'Implementation', 
              'Monitoring'
            ].map((step, index) => (
              <div key={step} className="relative">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#d7be68]/20 flex items-center justify-center text-[#d7be68] font-bold">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="flex-1 h-0.5 bg-[#d7be68]/20 ml-2" />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultingService;