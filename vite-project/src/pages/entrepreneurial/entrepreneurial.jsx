import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  TrendingUp, 
  Target, 
  Users,
  Briefcase,
  LineChart,
  BarChart2,
  Lightbulb,
  Book,
  Clock,
  Award,
  Rocket,
  ArrowUpRight,
  ArrowDownRight,
  CircleDollarSign,
  BarChart
} from 'lucide-react';

const EntrepreneurialService = () => {
  const services = [
    {
      icon: Target,
      title: "Business Strategy",
      description: "Develop comprehensive business strategies that align with your vision. Our expert consultants analyze market opportunities and create actionable roadmaps for success.",
      features: ["Market Analysis", "Growth Planning", "Risk Assessment", "Competitive Analysis"]
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Connect with experienced entrepreneurs and industry experts through our structured mentorship programs. Gain invaluable insights and guidance for your business journey.",
      features: ["1-on-1 Guidance", "Industry Expertise", "Network Building", "Growth Support"]
    },
    {
      icon: LineChart,
      title: "Financial Planning",
      description: "Create robust financial strategies for your business growth. Our financial experts help you manage resources effectively and plan for sustainable expansion.",
      features: ["Budget Planning", "Investment Strategy", "Cash Flow Management", "Financial Forecasting"]
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Accelerate your business growth with our comprehensive development services. We help identify opportunities and implement strategies for market expansion.",
      features: ["Market Entry", "Partnership Development", "Sales Strategy", "Growth Optimization"]
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Track and optimize your business performance with data-driven insights. Our analytics help you make informed decisions and drive better results.",
      features: ["KPI Tracking", "Performance Metrics", "Data Analysis", "Growth Monitoring"]
    }
  ];

  const highlights = [
    {
      icon: Rocket,
      title: "Startups Launched",
      value: "200+"
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "92%"
    },
    {
      icon: Users,
      title: "Entrepreneurs",
      value: "500+"
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: "3x Avg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Business Graph Lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`graph-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#d7be68] to-transparent"
            style={{
              width: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${45 + (Math.random() * 10)}deg)`
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              translateY: [0, -20, 0],
              translateX: [0, 20, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Business Icons */}
        {[...Array(15)].map((_, i) => {
          const icons = [Target, Rocket, CircleDollarSign, BarChart, TrendingUp];
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
                opacity: [0.2, 0.5, 0.2],
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

        {/* Growth Indicators */}
        {[...Array(10)].map((_, i) => {
          const Icon = i % 2 === 0 ? ArrowUpRight : ArrowDownRight;
          return (
            <motion.div
              key={`arrow-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            >
              <Icon className="w-6 h-6 text-[#d7be68]" />
            </motion.div>
          );
        })}

        {/* Success Ripples */}
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

        {/* Stock Chart Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M0 80 Q 100 20, 200 80 T 400 80"
            fill="none"
            stroke="#d7be68"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
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
            <span className="block text-white">Entrepreneurial</span>
            <span className="block text-[#d7be68]">Journeys</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Revolutionize your entrepreneurial approach with our cutting-edge solutions. From seamless task 
            coordination to comprehensive analytics and rigorous risk management, we deliver tailored strategies 
            designed to boost efficiency and propel project success.
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

        {/* Success Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Path to Success</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Ideation',
                description: 'Transform ideas into opportunities'
              },
              {
                icon: Book,
                title: 'Planning',
                description: 'Strategic roadmap development'
              },
              {
                icon: Rocket,
                title: 'Launch',
                description: 'Execution with precision'
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                description: 'Sustainable scaling strategies'
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

export default EntrepreneurialService;