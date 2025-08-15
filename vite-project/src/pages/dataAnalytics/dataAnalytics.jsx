import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  BarChart2, 
  LineChart, 
  PieChart,
  TrendingUp,
  Database,
  Search,
  Brain,
  ArrowUpRight,
  Users,
  Award,
  Clock,
  Flag
} from 'lucide-react';

const DataAnalyticsService = () => {
  const services = [
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Leverage advanced analytics to forecast trends and make data-driven decisions. Our predictive models help you anticipate market changes and optimize strategies.",
      features: ["Trend Analysis", "Forecasting", "Risk Assessment", "Pattern Recognition"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Organize and optimize your data infrastructure for maximum efficiency. We help you collect, store, and manage data while ensuring security and accessibility.",
      features: ["Data Warehousing", "Data Cleaning", "Integration", "Security"]
    },
    {
      icon: Search,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights. Our BI solutions provide clear visualizations and reports that help you understand your business better.",
      features: ["Dashboard Creation", "Report Automation", "KPI Tracking", "Data Visualization"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Implement intelligent solutions that learn and improve over time. Our ML models help automate processes and uncover hidden patterns in your data.",
      features: ["Algorithm Development", "Model Training", "Automation", "Performance Tuning"]
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Track and optimize business performance with comprehensive analytics. We help you measure success and identify areas for improvement.",
      features: ["Metrics Definition", "Performance Tracking", "Optimization", "Reporting"]
    }
  ];

  const highlights = [
    {
      icon: Database,
      title: "Data Processed",
      value: "10TB+"
    },
    {
      icon: Flag,
      title: "Success Rate",
      value: "99.9%"
    },
    {
      icon: Users,
      title: "Active Users",
      value: "1M+"
    },
    {
      icon: Award,
      title: "Accuracy",
      value: "99%"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#d7be68] opacity-20"
            initial={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#d7be68] to-transparent opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              transform: `rotate(${Math.random() * 360}deg)`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              opacity: [0.2, 0, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
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
            <span className="block text-white">Data</span>
            <span className="block text-[#d7be68]">Analytics</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Unlock the power of your data with our advanced analytics solutions. We help you gather, analyze, 
            and derive valuable insights from your data, empowering you to make data-driven decisions that 
            propel your business forward.
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

        {/* Analytics Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Analytics Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: Database,
                title: 'Collection',
                description: 'Data gathering'
              },
              {
                icon: Search,
                title: 'Processing',
                description: 'Data cleaning & preparation'
              },
              {
                icon: Brain,
                title: 'Analysis',
                description: 'Pattern identification'
              },
              {
                icon: PieChart,
                title: 'Visualization',
                description: 'Visual representation'
              },
              {
                icon: ArrowUpRight,
                title: 'Action',
                description: 'Implementing insights'
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

export default DataAnalyticsService;