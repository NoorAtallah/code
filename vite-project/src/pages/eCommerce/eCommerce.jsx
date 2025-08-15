import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ShoppingCart, 
  CreditCard, 
  Package,
  Truck,
  BarChart2,
  Store,
  Smartphone,
  Users,
  ShoppingBag,
  Globe,
  Zap
} from 'lucide-react';

const EcommerceSolution = () => {
  const services = [
    {
      icon: Store,
      title: "Online Store Development",
      description: "Create powerful and beautiful e-commerce platforms that drive sales. Our custom solutions include intuitive interfaces, secure payment systems, and seamless inventory management.",
      features: ["Custom Design", "Mobile Optimization", "Payment Integration", "Inventory System"]
    },
    {
      icon: ShoppingCart,
      title: "Shopping Experience",
      description: "Enhance customer experience with intuitive navigation and smart product recommendations. We implement features that boost engagement and increase conversion rates.",
      features: ["Smart Search", "Product Filtering", "Wishlist", "Related Products"]
    },
    {
      icon: Package,
      title: "Order Management",
      description: "Streamline your order processing with our comprehensive management system. Track orders, manage inventory, and handle returns efficiently all in one place.",
      features: ["Order Tracking", "Inventory Control", "Returns Portal", "Analytics Dashboard"]
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description: "Implement secure and diverse payment options for your customers. Our payment solutions ensure smooth transactions while maintaining the highest security standards.",
      features: ["Multiple Gateways", "Secure Processing", "Subscription Billing", "Fraud Protection"]
    },
    {
      icon: Truck,
      title: "Logistics Integration",
      description: "Optimize your delivery and shipping processes with integrated logistics solutions. Manage shipping partners, track deliveries, and ensure customer satisfaction.",
      features: ["Shipping API", "Rate Calculator", "Tracking System", "Multiple Carriers"]
    }
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Active Stores",
      value: "1000+"
    },
    {
      icon: ShoppingBag,
      title: "Orders/Month",
      value: "100K+"
    },
    {
      icon: Users,
      title: "Happy Clients",
      value: "5000+"
    },
    {
      icon: BarChart2,
      title: "Growth Rate",
      value: "200%"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
          >
            <motion.div
              className="text-[#d7be68] opacity-10"
              initial={{
                scale: 0.5,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <ShoppingCart size={Math.random() * 30 + 20} />
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
            <span className="block text-white">E-commerce</span>
            <span className="block text-[#d7be68]">Solutions</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Empower your online business with our comprehensive E-Commerce Solutions. From user-friendly website design 
            to seamless payment processing and secure checkout systems, we provide tailored solutions to help you build, 
            manage, and grow your online store.
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

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl bg-[#d7be68]/5 border border-[#d7be68]/20"
        >
          <h2 className="text-3xl font-bold mb-6">Platform Features</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Performance',
                description: 'Lightning-fast loading'
              },
              {
                icon: Smartphone,
                title: 'Responsive',
                description: 'Mobile-first design'
              },
              {
                icon: ShoppingBag,
                title: 'Scalable',
                description: 'Grow without limits'
              },
              {
                icon: Globe,
                title: 'Global',
                description: 'Worldwide reach'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-[#d7be68]/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-[#d7be68]" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-white/60 mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcommerceSolution;