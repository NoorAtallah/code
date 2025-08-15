import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Shield, 
  Camera,
  Bell,
  Key,
  Radio,
  Lock,
  Fingerprint,
  Users,
  Award,
  Clock,
  Eye,
  AlertCircle,
  Scan
} from 'lucide-react';

const SecuritySystemSolutions = () => {
  const services = [
    {
      icon: Camera,
      title: "Camera Systems",
      description: "Deploy state-of-the-art surveillance systems with HD cameras and advanced monitoring capabilities. Protect your premises with comprehensive visual security.",
      features: ["HD Resolution", "Night Vision", "Motion Detection", "Cloud Storage"]
    },
    {
      icon: Bell,
      title: "Alarm Systems",
      description: "Implement robust alarm systems that provide immediate alert responses. Our solutions ensure round-the-clock protection against unauthorized access.",
      features: ["Motion Sensors", "Sound Detection", "Instant Alerts", "Remote Arming"]
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Manage entry permissions effectively with advanced access control systems. From card readers to biometric scanners, we ensure only authorized access.",
      features: ["Keycard Access", "Biometric Scanners", "Time Scheduling", "Access Logs"]
    },
    {
      icon: Radio,
      title: "Intercom Systems",
      description: "Enable clear communication and visitor management with modern intercom solutions. Our systems provide both audio and video communication capabilities.",
      features: ["Video Calls", "Mobile App", "Multiple Units", "Door Release"]
    },
    {
      icon: Lock,
      title: "Security Integration",
      description: "Unify your security systems into one manageable solution. Our integrated approach ensures seamless operation of all security components.",
      features: ["Central Control", "System Sync", "Mobile Access", "Event Logging"]
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Protected Sites",
      value: "5000+"
    },
    {
      icon: Eye,
      title: "Live Monitoring",
      value: "24/7"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 60s"
    },
    {
      icon: Award,
      title: "Security Rating",
      value: "A+"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Scanning Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d7be68]/5 to-transparent"
          animate={{
            y: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Security Grid */}
        <div className="absolute inset-0" style={{ perspective: '1000px' }}>
          <motion.div
            className="absolute inset-0 grid grid-cols-8 grid-rows-8"
            animate={{
              rotateX: [0, 5, 0],
              rotateY: [0, 5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-[#d7be68]/10"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Security Icons */}
        {[...Array(20)].map((_, i) => {
          const icons = [Camera, Lock, Shield, Eye, Scan];
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1, 0.8],
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

        {/* Radar Effect */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-96 h-96 border-2 border-[#d7be68]/20 rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-[#d7be68]/10 rounded-full"
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </motion.div>
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
            <span className="block text-white">Security System</span>
            <span className="block text-[#d7be68]">Solutions</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Protect your assets with our comprehensive security system solutions. From advanced surveillance 
            to access control, we provide integrated security measures that ensure the safety and protection 
            of your premises 24/7.
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

        {/* Security Layers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Security Layers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Scan,
                title: 'Perimeter',
                description: 'External protection'
              },
              {
                icon: Camera,
                title: 'Surveillance',
                description: 'Visual monitoring'
              },
              {
                icon: AlertCircle,
                title: 'Detection',
                description: 'Threat identification'
              },
              {
                icon: Shield,
                title: 'Response',
                description: 'Immediate action'
              }
            ].map((layer, index) => (
              <motion.div
                key={layer.title}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-[#d7be68]/20 flex items-center justify-center mb-4">
                  <layer.icon className="w-8 h-8 text-[#d7be68]" />
                </div>
                <h3 className="text-lg font-semibold">{layer.title}</h3>
                <p className="text-sm text-white/60 mt-2">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecuritySystemSolutions;