// DigitalMarketingSolutions.jsx
import React from 'react';
import { 
  ChevronRight, 
  Instagram,
  Target,
  ArrowRight,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketingSolutions = () => {
  // WhatsApp function
  const handleWhatsAppRequest = (packageName, service) => {
    const phoneNumber = "14374303470"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      `Hi! I'm interested in requesting the ${packageName} from your ${service}. Could you please provide more details and pricing information?`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background "nodes" */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#d7be68] rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {[...Array(30)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '150px',
              height: '1px',
              background: '#d7be68',
              transformOrigin: '0% 50%',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-[#d7be68] text-sm font-semibold tracking-wider uppercase">
              <span>Premium Services</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d7be68] to-transparent mt-2" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="block text-white">DISCOVER OUR THREE</span>
            <span className="block text-[#d7be68]">PREMIUM PACKAGES</span>
          </h1>
        </div>
        
        {/* Packages Container */}
        <div className="space-y-14">
          {/* AdImpact Package */}
          <div className="overflow-hidden rounded-2xl border border-[#d7be68]/20 bg-black/80 backdrop-blur-xl hover:border-[#d7be68]/40 transition-all duration-300">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-1">ADIMPACT PACKAGE</h3>
                  <p className="text-xl text-[#d7be68] font-semibold">DRIVE RESULTS WITH HIGH-CONVERTING ADS</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <TrendingUp className="w-12 h-12 text-[#d7be68] opacity-80" />
                </div>
              </div>
              
              <div className="bg-[#d7be68]/5 rounded-xl p-6 border border-[#d7be68]/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Ad Campaign Strategy</h4>
                    <p className="text-white/70 text-center text-sm">Tailored advertising strategies for Facebook, Instagram, Google, and more</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Ad Creatives</h4>
                    <p className="text-white/70 text-center text-sm">Scroll-stopping visuals crafted to capture your audience's attention</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Copywriting for Ads</h4>
                    <p className="text-white/70 text-center text-sm">Persuasive and clear messaging optimized for conversions</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">A/B Testing & Optimization</h4>
                    <p className="text-white/70 text-center text-sm">Continuous improvement to boost ad performance and ROI</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Campaign Setup & Launch</h4>
                    <p className="text-white/70 text-center text-sm">From pixel setup to ad placement—we handle it all</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Weekly Performance Report</h4>
                    <p className="text-white/70 text-center text-sm">Clear insights and actionable data for ongoing success</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <p className="text-lg">SCALE YOUR BUSINESS WITH SMART, DATA-DRIVEN ADS</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    to="/service-request" 
                    state={{ 
                      service: "Digital Marketing Solutions", 
                      marketingPackage: "AdImpact Package" 
                    }}
                  >
                    <button className="bg-[#d7be68] hover:bg-[#d7be68]/80 text-black font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300">
                      <span>Request This Package</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  
                  <button 
                    onClick={() => handleWhatsAppRequest("AdImpact Package", "Digital Marketing Solutions")}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Request via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Package */}
          <div className="overflow-hidden rounded-2xl border border-[#d7be68]/20 bg-black/80 backdrop-blur-xl hover:border-[#d7be68]/40 transition-all duration-300">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-1">ENGAGEMENT PACKAGE</h3>
                  <p className="text-xl text-[#d7be68] font-semibold">BOOST YOUR BRAND'S IMPACT</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Instagram className="w-12 h-12 text-[#d7be68] opacity-80" />
                </div>
              </div>
              
              <div className="bg-[#d7be68]/5 rounded-xl p-6 border border-[#d7be68]/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">12 Custom Social Media Designs</h4>
                    <p className="text-white/70 text-center text-sm">Eye-catching visuals tailored to your brand</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">2 Engaging Videos</h4>
                    <p className="text-white/70 text-center text-sm">High-quality, scroll-stopping content</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Content Creation</h4>
                    <p className="text-white/70 text-center text-sm">Captivating captions and compelling copy for all 12 designs</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Social Media Management</h4>
                    <p className="text-white/70 text-center text-sm">Optimize, schedule, and manage your brand's presence</p>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <h4 className="text-xl font-bold text-center mb-3">30-Minute Marketing Consultation</h4>
                    <p className="text-white/70 text-center text-sm">Expert guidance to refine your strategy</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <p className="text-lg">TAKE YOUR BUSINESS TO THE NEXT LEVEL WITH OUR ENGAGEMENT PACKAGE</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    to="/service-request" 
                    state={{ 
                      service: "Design & Branding", 
                      brandingPackage: "Engagement Package" 
                    }}
                  > 
                    <button className="bg-[#d7be68] hover:bg-[#d7be68]/80 text-black font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300">
                      <span>Request This Package</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  
                  <button 
                    onClick={() => handleWhatsAppRequest("Engagement Package", "Design & Branding")}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Request via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* BoldBrand Package */}
          <div className="overflow-hidden rounded-2xl border border-[#d7be68]/20 bg-black/80 backdrop-blur-xl hover:border-[#d7be68]/40 transition-all duration-300">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-1">BOLDBRAND PACKAGE</h3>
                  <p className="text-xl text-[#d7be68] font-semibold">A BRAND THAT STICKS IN PEOPLE'S MINDS</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Target className="w-12 h-12 text-[#d7be68] opacity-80" />
                </div>
              </div>
              
              <div className="bg-[#d7be68]/5 rounded-xl p-6 border border-[#d7be68]/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Logo Design</h4>
                    <p className="text-white/70 text-center text-sm">Eye-catching visuals tailored to your brand</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Logo Animation</h4>
                    <p className="text-white/70 text-center text-sm">Bring your logo to life with stunning motion graphics</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Letterhead Design</h4>
                    <p className="text-white/70 text-center text-sm">A polished and professional look for your documents</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Business Card Design</h4>
                    <p className="text-white/70 text-center text-sm">A sleek and modern design to leave a lasting impression</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">Stamp & Envelope Design</h4>
                    <p className="text-white/70 text-center text-sm">Custom branding for official documents and packaging</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-center mb-3">ID Card & Banner Design</h4>
                    <p className="text-white/70 text-center text-sm">Corporate identity elements for your team and promotions</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <p className="text-lg">YOUR BRAND'S IDENTITY IS THE FIRST IMPRESSION YOU MAKE</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    to="/service-request" 
                    state={{ 
                      service: "Design & Branding", 
                      brandingPackage: "Boldbrand Package" 
                    }}
                  > 
                    <button className="bg-[#d7be68] hover:bg-[#d7be68]/80 text-black font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300">
                      <span>Request This Package</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  
                  <button 
                    onClick={() => handleWhatsAppRequest("Boldbrand Package", "Design & Branding")}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Request via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Footer */}
        <div className="mt-16 text-center">
          <div className="text-[#d7be68]">
            <p>Info@CodeLakeEnterprise.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingSolutions;