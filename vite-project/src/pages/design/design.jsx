import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Palette, 
  Play, 
  Pencil,
  Image,
  Layout,
  Layers,
  Monitor,
  Tv,
  Users,
  Award,
  Star,
  Eye,
  Square,
  Circle,
  Triangle,
  Paintbrush,
  MousePointer,
  Grid
} from 'lucide-react';

const DesignBrandingService = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Transform your ideas into visually stunning designs. Our creative team crafts compelling visuals that capture attention and communicate your message effectively.",
      features: ["Brand Identity", "Print Design", "Digital Assets", "Visual Strategy"]
    },
    {
      icon: Play,
      title: "Motion Graphics",
      description: "Bring your brand to life with dynamic motion graphic solutions. We create engaging animations and visual effects that enhance your brand's storytelling.",
      features: ["2D Animation", "Visual Effects", "Logo Animation", "Video Graphics"]
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences. Our UI/UX team designs interfaces that delight users while achieving your business objectives.",
      features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"]
    },
    {
      icon: Layout,
      title: "Brand Identity",
      description: "Develop a unique and memorable brand identity. We help establish your brand's visual language, personality, and positioning in the market.",
      features: ["Logo Design", "Style Guides", "Brand Strategy", "Visual Elements"]
    },
    {
      icon: Tv,
      title: "Digital Design",
      description: "Craft compelling digital experiences across all platforms. From websites to social media, we ensure your brand maintains consistency and impact.",
      features: ["Web Design", "Social Media", "Email Design", "Digital Ads"]
    }
  ];

  const highlights = [
    {
      icon: Star,
      title: "Design Awards",
      value: "50+"
    },
    {
      icon: Users,
      title: "Happy Clients",
      value: "1000+"
    },
    {
      icon: Eye,
      title: "Brand Views",
      value: "10M+"
    },
    {
      icon: Award,
      title: "Recognition",
      value: "Global"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
    {/* Enhanced Animated Background */}
    <div className="fixed inset-0 z-0">
      {/* Design Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full grid grid-cols-12 grid-rows-12"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={`grid-${i}`}
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

      {/* Floating Design Elements */}
      {[...Array(15)].map((_, i) => {
        const icons = [Palette, Pencil, Layout, Image, Grid];
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

      {/* Creative Shapes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
            scale: 0,
            opacity: 0.3,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 3
          }}
        >
          <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-30">
            {i % 3 === 0 && (
              <circle cx="50" cy="50" r="40" stroke="#d7be68" strokeWidth="2" fill="none" />
            )}
            {i % 3 === 1 && (
              <rect x="20" y="20" width="60" height="60" stroke="#d7be68" strokeWidth="2" fill="none" />
            )}
            {i % 3 === 2 && (
              <polygon points="50,10 90,90 10,90" stroke="#d7be68" strokeWidth="2" fill="none" />
            )}
          </svg>
        </motion.div>
      ))}

      {/* Mouse Trail Effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`cursor-${i}`}
          className="absolute w-4 h-4"
          initial={{ opacity: 0.4, scale: 1 }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.4, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <MousePointer className="w-full h-full text-[#d7be68]" />
        </motion.div>
      ))}

      {/* Color Swatches */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`swatch-${i}`}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#d7be68] to-[#d7be68]/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Design Tools */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`tool-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Paintbrush className="w-6 h-6 text-[#d7be68] opacity-30" />
          </motion.div>
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
            <span className="block text-white">Design &</span>
            <span className="block text-[#d7be68]">Branding</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Stand out in the digital landscape with our design and branding services. We craft visually appealing 
            and cohesive brand identities, ensuring that your company's image resonates with your target audience 
            and leaves a lasting impression.
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

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Pencil,
                title: 'Discovery',
                description: 'Research & conceptualization'
              },
              {
                icon: Layers,
                title: 'Design',
                description: 'Creative development'
              },
              {
                icon: Eye,
                title: 'Review',
                description: 'Feedback & refinement'
              },
              {
                icon: Image,
                title: 'Delivery',
                description: 'Final assets & guidelines'
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

export default DesignBrandingService;