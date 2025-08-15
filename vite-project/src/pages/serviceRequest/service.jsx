// ServiceRequestPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  Clock,
  Send,
  CheckCircle2,
  Shield,
  Activity
} from 'lucide-react';
import api from '../../api/api';
import Swal from 'sweetalert2';

const ServiceRequestPage = () => {
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    bestTimeToContact: '',
    service: 'Production Service',
    brandingPackage: '',
    marketingPackage: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false
  });

  // Update form data if values were passed via location state
  useEffect(() => {
    if (location.state) {
      setFormData(prevState => ({
        ...prevState,
        ...location.state
      }));
    }
  }, [location.state]);

  const services = [
    "Production Service",
    "IT Consulting",
    "IT & Development Service",
    "Digital Marketing Solutions",
    "Cloud Computing Solutions",
    "Entrepreneurial Journeys",
    "E-commerce Solution",
    "Design & Branding",
    "Data Analytics",
    "Cyber Security",
    "Security System Solutions",
    "Networking Solutions",
    "Smart Solutions"
  ];
  
  const timeOptions = [
    "Morning (9AM - 12PM)",
    "Afternoon (12PM - 5PM)",
    "Evening (5PM - 9PM)",
    "Any time"
  ];

  const brandingPackages = [
    "Boldbrand Package",
    "Engagement Package",
    "Others"
  ];

  const marketingPackages = [
    "AdImpact Package",
    "Others"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true });

    try {
      // Clean the form data - only send relevant package fields
      const cleanedData = { ...formData };
      
      // Remove brandingPackage if service is not Design & Branding
      if (cleanedData.service !== "Design & Branding") {
        delete cleanedData.brandingPackage;
      }
      
      // Remove marketingPackage if service is not Digital Marketing Solutions
      if (cleanedData.service !== "Digital Marketing Solutions") {
        delete cleanedData.marketingPackage;
      }

      const response = await api.post('/service-requests', cleanedData);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        bestTimeToContact: '',
        service: 'Cloud Computing Solutions',
        brandingPackage: '',
        marketingPackage: ''
      });
      
      // Show success message with SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Request Submitted!',
        text: 'We\'ll contact you during your preferred time.',
        confirmButtonColor: '#d7be68',
        background: '#121212',
        color: '#ffffff'
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      
      // Show error message with SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: error.response?.data?.error || error.message || 'An error occurred. Please try again.',
        confirmButtonColor: '#d7be68',
        background: '#121212',
        color: '#ffffff'
      });
    } finally {
      setFormStatus({ isSubmitting: false });
    }
  };

  return (
    <div className="min-h-screen text-white relative">
      {/* Simple elegant background */}
      <div className="fixed inset-0 z-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `linear-gradient(135deg, #d7be68 1px, transparent 1px), linear-gradient(45deg, #d7be68 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* Gold accent elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d7be68] to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#d7be68] to-transparent"></div>
        
        {/* Corner accents */}
        <div className="absolute top-8 right-8 w-32 h-32 border-t-2 border-r-2 border-[#d7be68]/30 rounded-tr-xl"></div>
        <div className="absolute bottom-8 left-8 w-32 h-32 border-b-2 border-l-2 border-[#d7be68]/30 rounded-bl-xl"></div>
        
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#d7be68]/5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div 
          className="relative space-y-8 mb-12"
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
              <span>Request Service</span>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
            <div className="h-0.5 bg-gradient-to-r from-[#d7be68] to-transparent mt-2" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold space-y-2">
            <span className="block text-white">Request Our</span>
            <span className="block text-[#d7be68]">Services</span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Fill out the form below to request any of our professional services. Our team will 
            review your request and contact you during your preferred time to discuss 
            how we can help transform your business.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl bg-black/70 border border-[#d7be68]/20 p-8 shadow-lg backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Phone Number */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Service Required</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Conditional Branding Package Selection */}
            {formData.service === "Design & Branding" && (
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-white/80">Branding Package</label>
                <select
                  name="brandingPackage"
                  value={formData.brandingPackage}
                  onChange={handleChange}
                  required={formData.service === "Design & Branding"}
                  className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a package</option>
                  {brandingPackages.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}
            
            {/* Conditional Marketing Package Selection */}
            {formData.service === "Digital Marketing Solutions" && (
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-white/80">Marketing Package</label>
                <select
                  name="marketingPackage"
                  value={formData.marketingPackage}
                  onChange={handleChange}
                  required={formData.service === "Digital Marketing Solutions"}
                  className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a package</option>
                  {marketingPackages.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}
            
            {/* Best Time to Contact */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Best Time to Contact</label>
              <select
                name="bestTimeToContact"
                value={formData.bestTimeToContact}
                onChange={handleChange}
                required
                className="w-full bg-black/60 border border-[#d7be68]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d7be68]/50 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={formStatus.isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#d7be68] to-[#c4a84a] rounded-lg text-black font-semibold flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
            >
              {formStatus.isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Request</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
        
        {/* Contact Timing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl bg-black/70 border border-[#d7be68]/20 flex items-center space-x-4 shadow-lg"
        >
          <div className="flex-shrink-0">
            <Clock className="w-8 h-8 text-[#d7be68]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Response Guarantee</h3>
            <p className="text-white/70">
              Our team will respond to your service request within 24 hours during business days.
            </p>
          </div>
        </motion.div>
        
        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: CheckCircle2,
              title: "Expert Support",
              description: "Our specialized team offers personalized guidance tailored to your needs"
            },
            {
              icon: Shield,
              title: "Secure Process",
              description: "Your information is handled with the highest security standards"
            },
            {
              icon: Activity,
              title: "Fast Turnaround",
              description: "Experience rapid service delivery with our efficient workflows"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-black/70 border border-[#d7be68]/10"
              whileHover={{ y: -5, borderColor: 'rgba(215, 190, 104, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <feature.icon className="w-10 h-10 text-[#d7be68] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceRequestPage;