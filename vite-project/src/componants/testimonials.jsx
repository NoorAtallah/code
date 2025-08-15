import React, { useState, useEffect, useRef, memo } from 'react';

// Precomputed static SVGs instead of Lucide components
const SVG = {
  Star: <svg width="20" height="20" viewBox="0 0 24 24" fill="#d7be68" stroke="#d7be68" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  ArrowLeft: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d7be68" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>,
  ArrowRight: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d7be68" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>,
  Quote: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d7be68" strokeWidth="2" opacity="0.3">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
};

// Static CSS classes
const CSS = {
  container: "relative bg-black py-24 px-4",
  innerContainer: "max-w-7xl mx-auto relative",
  headerContainer: "text-center mb-16",
  headerTitle: "text-5xl font-bold text-white mb-4",
  headerSubtitle: "block text-[#d7be68] text-2xl mt-2",
  headerText: "text-white/80 max-w-2xl mx-auto text-lg mt-4",
  testimonialGrid: "grid grid-cols-1 md:grid-cols-3 gap-6",
  navContainer: "flex justify-center gap-4 mt-10",
  navButton: "p-3 rounded-full bg-black hover:bg-[#d7be68]/10",
  
  // Card classes
  card: "p-6 rounded-xl border border-[#d7be68]/20 bg-black relative",
  cardActive: "shadow-[0_0_15px_rgba(215,190,104,0.1)]",
  cardInactive: "opacity-40",
  contentContainer: "space-y-4",
  quoteIcon: "mb-4 text-[#d7be68] opacity-30",
  testimonialText: "text-white/90 text-lg",
  ratingContainer: "flex gap-1 my-3",
  nameText: "text-[#d7be68] font-bold text-lg",
  companyLink: "text-[#d7be68] font-bold text-lg hover:underline cursor-pointer",
  roleText: "text-white/70 text-sm",
  cornerDecoration: "absolute w-8 h-8"
};

// Static testimonial data
const TESTIMONIALS = [
  {
    name: "Khaled Ahmad",
    role: "CEO, Golden Gate Inc",
    content: "The level of expertise and dedication demonstrated by the team was exceptional. They transformed our digital presence completely.",
    rating: 5
  },
  {
    name: "Hatim Nairoukh",
    role: "CEO, AccountLinkCPA",
    website: "https://accountlinkcpa.com",
    content: "Their innovative approach to problem-solving and attention to detail sets them apart. Truly a game-changing partnership.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Director, Global Solutions",
    content: "The results exceeded our expectations. Their team's technical knowledge and creative solutions made all the difference.",
    rating: 5
  }
];

// Pre-render stars to avoid recreating them
const FiveStars = (
  <div className={CSS.ratingContainer}>
    {SVG.Star}{SVG.Star}{SVG.Star}{SVG.Star}{SVG.Star}
  </div>
);

// Simple nav button component
const NavButton = memo(({ onClick, children }) => (
  <button className={CSS.navButton} onClick={onClick}>
    {children}
  </button>
));

// Optimized testimonial card - no useInView, simpler rendering
const TestimonialCard = memo(({ testimonial, isActive }) => {
  // Function to handle name/company rendering
  const renderName = () => {
    if (testimonial.website && testimonial.name.includes("Hatim Nairoukh")) {
      return (
        <a 
          href={testimonial.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={CSS.companyLink}
        >
          {testimonial.name}
        </a>
      );
    }
    return <h4 className={CSS.nameText}>{testimonial.name}</h4>;
  };

  return (
    <div className={`${CSS.card} ${isActive ? CSS.cardActive : CSS.cardInactive}`}>
      <div className={CSS.contentContainer}>
        <div className={CSS.quoteIcon}>{SVG.Quote}</div>
        <p className={CSS.testimonialText}>"{testimonial.content}"</p>
        {FiveStars}
        <div>
          {renderName()}
          <p className={CSS.roleText}>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
});

// Main component with reduced state changes and simpler rendering
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef(null);
  
  // Handle navigation with simple functions
  const goToPrevious = () => {
    setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };
  
  // Simple autoplay with cleanup
  useEffect(() => {
    autoplayRef.current = setInterval(goToNext, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  return (
    <div className={CSS.container}>
      <div className={CSS.innerContainer}>
        {/* Simplified header without animations */}
        <div className={CSS.headerContainer}>
          <h2 className={CSS.headerTitle}>
            Client Testimonials
            <span className={CSS.headerSubtitle}>Success Stories</span>
          </h2>
          <p className={CSS.headerText}>
            Hear what our clients have to say about their experience working with us
          </p>
        </div>

        {/* Simplified testimonial display */}
        <div className={CSS.testimonialGrid}>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        {/* Simplified navigation */}
        <div className={CSS.navContainer}>
          <NavButton onClick={goToPrevious}>
            {SVG.ArrowLeft}
          </NavButton>
          <NavButton onClick={goToNext}>
            {SVG.ArrowRight}
          </NavButton>
        </div>
      </div>
    </div>
  );
};

export default memo(TestimonialsSection);