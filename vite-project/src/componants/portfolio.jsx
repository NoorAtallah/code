import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Building2 } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "98%",
      label: "Growth Rate",
      description: "Year-over-year growth in digital transformation projects"
    },
    {
      icon: Users,
      value: "10K+",
      label: "Active Users",
      description: "Globally connected users leveraging our platforms"
    },
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
      description: "Recognition for innovation and excellence"
    },
    {
      icon: Building2,
      value: "4+",
      label: "Global Offices",
      description: "Supporting clients across major tech hubs"
    }
  ];

  return (
    <div className="relative bg-black py-24 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iI2Q3YmU2OCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d7be68]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d7be68]/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Global Impact
            <span className="block text-[#d7be68] text-2xl mt-2">Driving Innovation</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Driving innovation and delivering results across industries and continents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative bg-black/50 backdrop-blur-sm rounded-2xl p-6
                hover:bg-black/80 transition-all duration-300 
                border border-[#d7be68]/20 hover:border-[#d7be68]/40">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#d7be68]/20 
                  to-transparent opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 blur-sm" />
                
                <div className="relative">
                  <div className="w-12 h-12 bg-[#d7be68] rounded-xl mb-4 
                    flex items-center justify-center shadow-lg p-2.5
                    group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-full h-full text-black" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl font-bold text-[#d7be68]">
                        {stat.value}
                      </h3>
                      <span className="text-sm font-semibold text-white/60">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">
                      {stat.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#d7be68]/30 rounded-tl-xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d7be68]/30 rounded-br-xl" />

                  <div className="absolute top-0 right-0 w-24 h-24 
                    bg-[#d7be68]/5 rounded-full blur-2xl 
                    group-hover:scale-150 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#d7be68]/10 rounded-full 
          blur-3xl mix-blend-multiply animate-blob" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#d7be68]/5 rounded-full 
          blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default StatsSection;