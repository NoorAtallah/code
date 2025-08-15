import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Lightbulb,
  Home,
  Music,
  Mic,
  Radio,
  Speaker,
  Zap,
  MonitorSmartphone,
  Users,
  Award,
  Clock,
  Wifi,
  Power,
  Lock
} from 'lucide-react';

const SmartSolutions = () => {
  const services = [
    {
      icon: Home,
      title: "Home Theatre",
      description: "Transform your entertainment experience with our custom home theatre solutions. From stunning visuals to immersive sound, we create the perfect cinematic environment.",
      features: ["4K/8K Systems", "Surround Sound", "Smart Controls", "Custom Design"]
    },
    {
      icon: Mic,
      title: "Voice Control",
      description: "Integrate seamless voice control throughout your space. Our solutions offer hands-free convenience and intuitive control of all your smart devices.",
      features: ["Multi-Room Control", "Device Integration", "Custom Commands", "Voice Recognition"]
    },
    {
      icon: Lightbulb,
      title: "Smart Lighting",
      description: "Implement intelligent lighting systems that enhance ambiance and efficiency. Our solutions combine aesthetics with energy-saving automation.",
      features: ["Automated Control", "Scene Setting", "Motion Sensors", "Energy Monitoring"]
    },
    {
      icon: Music,
      title: "Multi-Room Audio",
      description: "Experience premium sound throughout your space with our multi-room audio solutions. Stream synchronized music or enjoy different tunes in each room.",
      features: ["Wireless Audio", "Zone Control", "Hi-Fi Quality", "App Control"]
    },
    {
      icon: Lock,
      title: "Security Systems",
      description: "Protect your space with integrated smart security systems. Our solutions provide comprehensive monitoring and control for complete peace of mind.",
      features: ["Camera Systems", "Access Control", "Remote Monitoring", "Smart Alerts"]
    }
  ];

  const highlights = [
    {
      icon: MonitorSmartphone,
      title: "Smart Homes",
      value: "1000+"
    },
    {
      icon: Users,
      title: "Happy Clients",
      value: "5000+"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 2 Hours"
    },
    {
      icon: Award,
      title: "Service Rating",
      value: "4.9/5"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Smart Device Icons */}
        {[...Array(20)].map((_, i) => {
          const icons = [Lightbulb, Speaker, Lock, Wifi, Power];
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0.3, scale: 0.5 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.5, 0.7, 0.5],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            >
              <Icon className="w-8 h-8 text-[#d7be68]" />
            </motion.div>
          );
        })}

        {/* Connection Waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#d7be68]"
            style={{
              width: 100 + i * 100,
              height: 100 + i * 100,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Connection Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px"
            style={{
              background: `linear-gradient(90deg, transparent, #d7be68, transparent)`,
              width: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
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
              <span>Our Services</span>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
            <div className="h-0.5 bg-gradient-to-r from-[#d7be68] to-transparent mt-2" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold space-y-4">
            <span className="block text-white">Smart</span>
            <span className="block text-[#d7be68]">Solutions</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Embrace the future of technology with our Smart Solutions. From home automation to intelligent 
            business processes, we integrate cutting-edge technologies to enhance efficiency and convenience 
            in every aspect of your environment.
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

        {/* Smart Integration Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Integration Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: MonitorSmartphone,
                title: 'Consultation',
                description: 'System planning'
              },
              {
                icon: Zap,
                title: 'Design',
                description: 'Custom solutions'
              },
              {
                icon: Radio,
                title: 'Installation',
                description: 'Expert setup'
              },
              {
                icon: Users,
                title: 'Support',
                description: '24/7 assistance'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-[#d7be68]/20 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-[#d7be68]" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-white/60 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SmartSolutions;