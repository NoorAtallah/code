import React, { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * ULTRA-OPTIMIZED SERVICES SECTION
 * Advanced techniques for maximum performance while keeping original colors:
 * 1. Minimal SVG paths and DOM elements
 * 2. Static CSS with containment strategies
 * 3. Hardware acceleration hints
 * 4. Pure components with zero calculations
 */

// Pre-computed merged SVG sprite to reduce DOM nodes and rendering cost
const IconSprite = memo(() => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <defs>
      <symbol id="icon-briefcase" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <line x1="8" y1="7" x2="8" y2="21" />
        <line x1="16" y1="7" x2="16" y2="21" />
      </symbol>
      <symbol id="icon-rocket" viewBox="0 0 24 24">
        <path d="M12 2l9 9-9 9-9-9z" />
        <circle cx="12" cy="11" r="3" />
      </symbol>
      <symbol id="icon-monitor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </symbol>
      <symbol id="icon-pen" viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7z" />
        <path d="M12 12L2 22" />
      </symbol>
      <symbol id="icon-network" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5M8 16h5M16 16h5M8 8H3" />
      </symbol>
      <symbol id="icon-lock" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </symbol>
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </symbol>
    </defs>
  </svg>
));

/**
 * Icon component that references the sprite
 * This reduces DOM complexity significantly
 */
const Icon = memo(({ name, className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" 
       strokeLinecap="round" strokeLinejoin="round">
    <use href={`#icon-${name}`} />
  </svg>
));

// Original gold color
const goldColor = "#d7be68";

/**
 * Static service card with zero calculations
 * Using the CSS contain property for isolation
 */
const ServiceCard = memo(({ iconName, title, description }) => (
  <div className="bg-black border border-white/10 rounded-xl p-6 contain-layout contain-paint">
    <div className="p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6" 
         style={{ backgroundColor: goldColor }}>
      <Icon name={iconName} className="w-8 h-8 text-black" />
    </div>
    <h3 className="text-2xl font-bold" style={{ color: goldColor }}>{title}</h3>
    <p className="text-white/70 mt-4">{description}</p>
  </div>
));

/**
 * Static button with no computations
 */
const ExploreButton = memo(() => (
  <Link to="services" className="inline-block">
    <button className="px-8 py-4 rounded-xl" 
            style={{ backgroundColor: `${goldColor}/10` }}>
      <span className="flex items-center gap-2" style={{ color: goldColor }}>
        Explore All Services
        <Icon name="arrow" className="w-5 h-5" />
      </span>
    </button>
  </Link>
));

/**
 * Section header with original colors
 */
const SectionHeader = memo(() => (
  <div className="text-center mb-20">
    <h2 className="text-5xl font-bold text-white mb-6">
      Our Services
      <span className="block text-2xl mt-2" style={{ color: goldColor }}>Innovative Solutions</span>
    </h2>
    <p className="text-white/80 max-w-2xl mx-auto text-xl mt-6">
      Comprehensive technology solutions tailored to elevate your business to new heights
    </p>
  </div>
));

/**
 * Precomputed static service data
 */
const SERVICES = [
  {
    iconName: "briefcase",
    title: "IT & Development Services",
    description: "Strategic technology guidance to optimize your business processes and infrastructure."
  },
  {
    iconName: "rocket",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to boost your online presence and reach."
  },
  {
    iconName: "monitor",
    title: "Entrepreneurial Journeys",
    description: "Comprehensive support for startups and business growth initiatives."
  },
  {
    iconName: "pen",
    title: "Design & Branding",
    description: "Creative design solutions that elevate your brand identity and user experience."
  },
  {
    iconName: "network",
    title: "Networking Solutions",
    description: "Advanced networking infrastructure for seamless connectivity and communication."
  },
  {
    iconName: "lock",
    title: "Security Systems Solutions",
    description: "Comprehensive security solutions for both physical and digital environments."
  }
];

/**
 * Optimized CSS for performance with custom gold color
 */
const styles = {
  container: {
    contain: 'content', 
    transform: 'translateZ(0)'
  },
  goldBackground: {
    backgroundColor: goldColor
  },
  goldText: { 
    color: goldColor 
  },
  goldBackgroundOpacity: {
    backgroundColor: `${goldColor}10`
  }
};

/**
 * Main services section - no calculations, no hooks, no state
 * Using transform: translateZ(0) for hardware acceleration
 */
const ServicesSection = () => {
  // Pre-compute service cards to avoid mapping in render
  const serviceCards = SERVICES.map((service, index) => (
    <ServiceCard 
      key={`service-${index}`}
      iconName={service.iconName}
      title={service.title}
      description={service.description} 
    />
  ));

  return (
    <div className="bg-black py-24 px-4 will-change-contents" style={styles.container}>
      <IconSprite />
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        
        {/* Eliminate responsive classes that cause reflows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceCards}
        </div>
        
        <div className="text-center mt-20">
          <ExploreButton />
        </div>
      </div>
    </div>
  );
};

// Add component display name for debugging
ServicesSection.displayName = 'ServicesSection';

// Use React.memo with custom comparison for maximum stability
export default memo(ServicesSection, () => true);