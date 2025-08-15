import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Shield, 
  Lock,
  Eye,
  Key,
  AlertCircle,
  Server,
  UserCheck,
  Users,
  Award,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const CyberSecurityService = () => {
  const services = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Protect your network infrastructure with advanced security solutions. Our comprehensive approach ensures your systems are safeguarded against external threats.",
      features: ["Firewall Protection", "Intrusion Detection", "24/7 Monitoring", "Threat Prevention"]
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Secure your sensitive data with state-of-the-art encryption and security protocols. We implement robust measures to protect your valuable information.",
      features: ["Data Encryption", "Access Control", "Backup Solutions", "Recovery Plans"]
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "Monitor your systems round-the-clock for potential security threats. Our advanced monitoring systems detect and respond to security incidents in real-time.",
      features: ["Real-time Alerts", "Threat Detection", "Incident Response", "Activity Logs"]
    },
    {
      icon: Key,
      title: "Access Management",
      description: "Control and manage access to your digital assets effectively. Our solutions ensure only authorized personnel can access sensitive information.",
      features: ["Identity Management", "Multi-factor Auth", "Single Sign-On", "Access Policies"]
    },
    {
      icon: AlertCircle,
      title: "Incident Response",
      description: "Respond to security incidents swiftly and effectively. Our team provides rapid response and resolution to minimize potential impacts.",
      features: ["Quick Response", "Threat Elimination", "Impact Analysis", "Prevention Plans"]
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Threats Blocked",
      value: "1M+/Day"
    },
    {
      icon: Users,
      title: "Protected Users",
      value: "100K+"
    },
    {
      icon: Clock,
      title: "Uptime",
      value: "99.99%"
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
        {/* Hexagonal Grid */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
          >
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="opacity-30"
              initial={{ rotate: 0, scale: 0.5 }}
              animate={{ 
                rotate: 360,
                scale: [0.5, 0.8, 0.5],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <path
                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                fill="none"
                stroke="#d7be68"
                strokeWidth="1"
              />
              <path
                d="M50 10 L83.3 30 L83.3 70 L50 90 L16.7 70 L16.7 30 Z"
                fill="none"
                stroke="#d7be68"
                strokeWidth="0.5"
              />
            </motion.svg>
          </motion.div>
        ))}

        {/* Security Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-px h-1/3 bg-gradient-to-b from-transparent via-[#d7be68] to-transparent"
            style={{
              left: `${(i / 15) * 100}%`,
              opacity: 0.4
            }}
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}

        {/* Shield Pulses */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 1, opacity: 0.2 }}
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.2, 0, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Shield className="w-40 h-40 text-[#d7be68]" />
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
            <span className="block text-white">Cyber</span>
            <span className="block text-[#d7be68]">Security</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Safeguard your digital assets with our robust cyber security solutions. From threat detection 
            to proactive risk management, we prioritize the protection of your data and systems, ensuring 
            that your business operates securely in the ever-evolving digital landscape.
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

        {/* Security Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Security Framework</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'Identify',
                description: 'Threat assessment'
              },
              {
                icon: Shield,
                title: 'Protect',
                description: 'Security implementation'
              },
              {
                icon: Eye,
                title: 'Detect',
                description: 'Continuous monitoring'
              },
              {
                icon: CheckCircle,
                title: 'Respond',
                description: 'Incident management'
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

export default CyberSecurityService;