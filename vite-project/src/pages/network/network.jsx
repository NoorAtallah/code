import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Network, 
  Wifi,
  Monitor,
  Phone,
  Settings,
  Server,
  Radio,
  Users,
  Award,
  Clock,
  Signal,
  Router,
  Link
} from 'lucide-react';

const NetworkingSolutions = () => {
  const services = [
    {
      icon: Network,
      title: "Network Design",
      description: "Create robust and scalable network architectures tailored to your needs. Our expert team designs comprehensive solutions that ensure optimal performance and reliability.",
      features: ["Infrastructure Planning", "Network Mapping", "Bandwidth Optimization", "Scalability Design"]
    },
    {
      icon: Router,
      title: "Network Configuration",
      description: "Optimize your network infrastructure with professional cabinet configuration and setup. Our precise configurations ensure maximum efficiency and minimal downtime.",
      features: ["Router Setup", "Switch Configuration", "VLAN Management", "QoS Implementation"]
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Deploy enterprise-grade wireless networks with complete coverage. Our Wi-Fi solutions provide reliable connectivity and seamless roaming capabilities.",
      features: ["Site Surveys", "Coverage Mapping", "Access Points", "Signal Optimization"]
    },
    {
      icon: Phone,
      title: "VoIP Systems",
      description: "Implement modern voice communication solutions for your business. Our VoIP systems offer crystal-clear calls and advanced features for efficient communication.",
      features: ["IP Telephony", "Video Conferencing", "Call Management", "Voice Quality"]
    },
    {
      icon: Server,
      title: "Network Security",
      description: "Protect your network infrastructure with comprehensive security measures. We implement robust protocols to safeguard your data and communications.",
      features: ["Firewall Setup", "VPN Access", "Threat Prevention", "Security Policies"]
    }
  ];

  const highlights = [
    {
      icon: Signal,
      title: "Network Uptime",
      value: "99.99%"
    },
    {
      icon: Users,
      title: "Connected Users",
      value: "100K+"
    },
    {
      icon: Router,
      title: "Active Networks",
      value: "500+"
    },
    {
      icon: Award,
      title: "Reliability",
      value: "Best-in-Class"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Network Node Points */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#d7be68] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Connection Lines */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '150px',
              height: '1px',
              background: '#d7be68',
              transformOrigin: '0% 50%',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Data Packets */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`packet-${i}`}
            className="absolute w-1 h-1 bg-[#d7be68] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
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
            <span className="block text-white">Networking</span>
            <span className="block text-[#d7be68]">Solutions</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Transform your connectivity with our comprehensive networking solutions. From design to 
            implementation, we create robust network infrastructures that ensure seamless communication 
            and optimal performance for your business.
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

        {/* Network Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: 'Assessment',
                description: 'Requirements analysis'
              },
              {
                icon: Settings,
                title: 'Design',
                description: 'Network architecture'
              },
              {
                icon: Link,
                title: 'Implementation',
                description: 'Infrastructure setup'
              },
              {
                icon: Signal,
                title: 'Optimization',
                description: 'Performance tuning'
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

export default NetworkingSolutions;