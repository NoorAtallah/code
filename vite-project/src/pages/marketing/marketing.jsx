import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Share2, 
  Search, 
  BarChart2, 
  Mail,
  MessageSquare,
  Globe,
  TrendingUp,
  Users,
  Target,
  Zap
} from 'lucide-react';

const DigitalMarketingService = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Elevate your brand presence across all social platforms with our expert social media management. We create engaging content, build communities, and drive meaningful interactions.",
      features: ["Content Creation", "Community Management", "Analytics Reporting", "Campaign Strategy"]
    },
    {
      icon: Search,
      title: "Search Engine Marketing",
      description: "Drive qualified traffic to your website through optimized paid and organic search strategies. Our SEM experts ensure maximum visibility and ROI for your campaigns.",
      features: ["Keyword Research", "PPC Management", "SEO Optimization", "Performance Tracking"]
    },
    {
      icon: BarChart2,
      title: "Marketing Campaigns",
      description: "Create impactful marketing campaigns that resonate with your target audience. From concept to execution, we deliver results-driven campaigns across multiple channels.",
      features: ["Campaign Planning", "Creative Design", "A/B Testing", "ROI Analysis"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture customer relationships and drive conversions with strategic email marketing campaigns. We create personalized, engaging email content that delivers results.",
      features: ["List Management", "Template Design", "Automation", "Performance Analytics"]
    },
    {
      icon: MessageSquare,
      title: "Content Marketing",
      description: "Tell your brand story through compelling content that engages and converts. Our content strategies are designed to establish authority and drive organic growth.",
      features: ["Content Strategy", "Blog Management", "SEO Writing", "Content Distribution"]
    }
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Reach",
      value: "150+ Countries"
    },
    {
      icon: TrendingUp,
      title: "Avg. ROI",
      value: "300%"
    },
    {
      icon: Users,
      title: "Active Campaigns",
      value: "1000+"
    },
    {
      icon: Target,
      title: "Conversions",
      value: "Millions"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <svg className="w-full h-full opacity-20">
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#d7be68"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
            <span className="block text-white">Digital Marketing</span>
            <span className="block text-[#d7be68]">Solutions</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Transform your digital presence with our comprehensive marketing solutions. From social media 
            management to advanced analytics, we help you reach your target audience and achieve 
            measurable results in the ever-evolving digital landscape.
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

        {/* Marketing Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Marketing Framework</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Research & Strategy',
                description: 'Market analysis and strategic planning'
              },
              {
                icon: Zap,
                title: 'Campaign Creation',
                description: 'Creative development and content production'
              },
              {
                icon: Share2,
                title: 'Implementation',
                description: 'Multi-channel campaign execution'
              },
              {
                icon: BarChart2,
                title: 'Optimization',
                description: 'Performance tracking and refinement'
              }
            ].map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#d7be68]/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#d7be68]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center">{step.title}</h3>
                <p className="text-sm text-white/60 text-center mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketingService;