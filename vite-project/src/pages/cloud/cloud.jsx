import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Cloud, 
  Server, 
  Shield,
  Database,
  Network,
  Laptop,
  Users,
  FileCode,
  Clock,
  Zap,
  Lock
} from 'lucide-react';

const CloudComputingService = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Build and maintain scalable cloud infrastructure that grows with your business. Our solutions ensure optimal performance, reliability, and cost-effectiveness.",
      features: ["Auto-scaling", "Load Balancing", "Disaster Recovery", "24/7 Monitoring"]
    },
    {
      icon: Server,
      title: "Cloud Migration",
      description: "Seamlessly transition your existing infrastructure to the cloud with our expert migration services. We ensure minimal disruption while maximizing cloud benefits.",
      features: ["Assessment", "Planning", "Data Migration", "Post-Migration Support"]
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Protect your cloud infrastructure with comprehensive security solutions. We implement robust measures to safeguard your data and applications.",
      features: ["Encryption", "Access Control", "Threat Detection", "Compliance"]
    },
    {
      icon: Database,
      title: "Cloud Storage",
      description: "Implement efficient cloud storage solutions that provide secure and scalable data management. Access your data anywhere while maintaining control.",
      features: ["Data Backup", "File Sharing", "Version Control", "Data Recovery"]
    },
    {
      icon: Network,
      title: "Cloud Integration",
      description: "Connect your cloud services seamlessly with existing systems. Our integration solutions ensure smooth data flow and operational efficiency.",
      features: ["API Integration", "Hybrid Cloud", "Multi-Cloud", "Workflow Automation"]
    }
  ];

  const highlights = [
    {
      icon: Server,
      title: "Data Centers",
      value: "Global"
    },
    {
      icon: Users,
      title: "Active Users",
      value: "1M+"
    },
    {
      icon: Clock,
      title: "Uptime",
      value: "99.99%"
    },
    {
      icon: Shield,
      title: "Security Level",
      value: "Enterprise"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Cloud className="w-full h-full text-[#d7be68]" />
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
            <span className="block text-white">Cloud Computing</span>
            <span className="block text-[#d7be68]">Solutions</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Transform your business with our innovative cloud computing solutions. From scalable infrastructure 
            to seamless migration and robust security, we provide tailored cloud solutions designed to optimize 
            performance, enhance flexibility, and drive growth.
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

        {/* Cloud Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Cloud Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Scalability',
                description: 'Grow resources on demand'
              },
              {
                icon: Lock,
                title: 'Security',
                description: 'Enterprise-grade protection'
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: '99.99% uptime guarantee'
              },
              {
                icon: FileCode,
                title: 'Innovation',
                description: 'Latest cloud technologies'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-[#d7be68]/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-[#d7be68]" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-white/60 mt-2">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudComputingService;