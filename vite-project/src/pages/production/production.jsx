import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Newspaper, Mic, Image, ChevronRight, Film, Award, Clock, Users } from 'lucide-react';

const ProductionService = () => {
  const services = [
    {
      icon: Video,
      title: "Video Creation",
      description: "Transform your ideas into captivating visual stories with our professional video creation services. From concept development to final editing, we bring your vision to life with creativity and precision.",
      features: ["4K Video Production", "Custom Graphics", "Color Grading", "Sound Design"]
    },
    {
      icon: Camera,
      title: "Cinematography",
      description: "Elevate your project with expert cinematography that captures the essence of every moment. Our team of skilled cinematographers utilizes top-tier equipment and techniques to deliver stunning visuals.",
      features: ["Aerial Filming", "Slow Motion", "Creative Direction", "Lighting Design"]
    },
    {
      icon: Newspaper,
      title: "Storyboard",
      description: "Lay the groundwork for your project's success with meticulous storyboarding. Our experienced team plans each scene, ensuring seamless transitions and compelling narratives.",
      features: ["Scene Planning", "Visual Direction", "Script Integration", "Shot Lists"]
    },
    {
      icon: Mic,
      title: "Voiceover",
      description: "Enhance your project with professional voiceover services that breathe life into your content. Our talented voice artists deliver clarity, emotion, and authenticity to every script.",
      features: ["Professional Artists", "Multiple Languages", "Studio Quality", "Custom Accents"]
    },
    {
      icon: Image,
      title: "Photoshoots",
      description: "Capture the essence of your brand with our expert photoshoot services. From corporate headshots to product photography, we meticulously craft each shot to showcase your unique identity.",
      features: ["Product Photography", "Corporate Portraits", "Event Coverage", "Retouching"]
    }
  ];

  const highlights = [
    {
      icon: Film,
      title: "Premium Equipment",
      value: "Latest Technology"
    },
    {
      icon: Award,
      title: "Award Winning",
      value: "100+ Awards"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      value: "24-48 Hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      value: "20+ Professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d7be68]"
            initial={{
              opacity: Math.random() * 0.5 + 0.1,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [Math.random() * 0.5 + 0.1, 0.1, Math.random() * 0.5 + 0.1],
              scale: [1, 1.5, 1],
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
            <span className="block text-white">Production</span>
            <span className="block text-[#d7be68]">Services</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Our production services encompass state-of-the-art video creation, professional photography, and cutting-edge audio solutions. 
            We focus on delivering exceptional quality content that elevates your brand and captivates your audience.
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Production Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Consultation', 'Planning', 'Production', 'Delivery'].map((step, index) => (
              <div key={step} className="relative">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#d7be68]/20 flex items-center justify-center text-[#d7be68] font-bold">
                    {index + 1}
                  </div>
                  {index < 3 && (
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

export default ProductionService;