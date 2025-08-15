import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Gold accent elements */}
      <div className="absolute inset-0">
        {/* Abstract grid pattern */}
        <div className="absolute w-full h-full opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-px bg-[#d7be68] left-0 right-0"
              style={{ top: `${i * 10}%` }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scaleX: 1 
              }}
              transition={{ 
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
          
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute w-px bg-[#d7be68] top-0 bottom-0"
              style={{ left: `${i * 10}%` }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scaleY: 1 
              }}
              transition={{ 
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-[#d7be68]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: Math.random() * 0.5,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: [Math.random() * 0.3, Math.random() * 0.7, Math.random() * 0.3],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{ 
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        
        {/* Golden light beams */}
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#d7be68] rounded-full blur-3xl"
          style={{ opacity: 0.05 }}
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 bg-[#d7be68] rounded-full blur-3xl"
          style={{ opacity: 0.03 }}
          animate={{
            opacity: [0.02, 0.05, 0.02],
            scale: [0.85, 1.15, 0.85]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Vertical gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
      
      {/* Diagonal graphic elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`diagonal-${i}`}
          className="absolute bg-[#d7be68]/10 h-px transform -rotate-45 origin-left"
          style={{ 
            top: `${20 + i * 15}%`,
            left: 0,
            right: 0
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ 
            duration: 2.5,
            delay: i * 0.4,
            ease: "easeOut" 
          }}
        />
      ))}
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  );
};

export default HeroBackground;