import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { 
  Users, Clock, CheckCircle, Award, Code, Cloud, 
  Shield, Laptop, Brain, Smartphone, Headphones,
  BarChart3, LineChart, Settings, Zap, Wrench
} from 'lucide-react';
import {Link} from 'react-router-dom'
const AboutUs = () => {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const frameIdRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const stats = [
    { icon: Users, label: 'Expert Team', value: '100+', subtext: 'Projects Completed' },
    { icon: Clock, label: '24/7', value: '100%', subtext: 'Support Available' },
    { icon: CheckCircle, label: 'Satisfaction', value: '95%', subtext: 'Client Satisfaction' },
    { icon: Award, label: 'Experience', value: '5+', subtext: 'Years of Excellence' },
  ];

  const services = [
    {
      icon: Code,
      title: "Production Service",
      description: "Efficient management and optimization of your IT infrastructure, ensuring smooth operations.",
      features: ["Video Creation", "Cinematography", "Storyboard", "Voiceover", "Photoshoots"]
    },
    {
      icon: Cloud,
      title: "IT & Development",
      description: "Comprehensive software development and system integration solutions for your business needs.",
      features: ["Web Development", "App Development", "SEO", "System Integration", "API Development"]
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Robust security solutions to protect your digital assets and ensure business continuity.",
      features: ["Threat Detection", "Risk Management", "Security Audits", "Compliance", "Training"]
    },
    {
      icon: Brain,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to enhance your online presence and drive engagement.",
      features: ["Social Media", "Content Strategy", "SEO/SEM", "Analytics", "Campaign Management"]
    }
  ];

  const features = [
    {
      icon: Laptop,
      title: "Cutting-edge Solutions",
      description: "Leveraging the latest technologies to deliver innovative solutions that drive business growth."
    },
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Our team of experts brings years of industry experience to every project we undertake."
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Custom solutions designed to meet your specific business needs and objectives."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to delivering projects on schedule without compromising on quality."
    },
    {
      icon: Award,
      title: "Industry Standards",
      description: "Adhering to best practices and maintaining the highest standards in all our services."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your operations run smoothly."
    }
  ];

  const technologies = [
    { icon: Code, label: "Frontend Development" },
    { icon: Cloud, label: "Cloud Computing" },
    { icon: Shield, label: "Security Solutions" },
    { icon: Smartphone, label: "Mobile Development" },
    { icon: BarChart3, label: "Data Analytics" },
    { icon: Wrench, label: "DevOps" },
    { icon: LineChart, label: "Business Intelligence" },
    { icon: Zap, label: "Performance Optimization" }
  ];

  useEffect(() => {
    const cleanup = () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
        rendererRef.current.domElement.remove();
        rendererRef.current = null;
      }
    };

    if (isInitialized) {
      cleanup();
    }

    const initScene = () => {
      if (!containerRef.current) return;

      sceneRef.current = new THREE.Scene();
      
      cameraRef.current = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      cameraRef.current.position.z = 15;

      rendererRef.current = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(rendererRef.current.domElement);

      // Create circuit pattern
      const circuits = new THREE.Group();
      const lineCount = 50;
      
      for (let i = 0; i < lineCount; i++) {
        const points = [];
        let x = (Math.random() - 0.5) * 40;
        let y = (Math.random() - 0.5) * 40;
        let z = (Math.random() - 0.5) * 40;
        
        points.push(new THREE.Vector3(x, y, z));
        
        const branches = Math.floor(Math.random() * 4) + 2;
        for (let j = 0; j < branches; j++) {
          x += (Math.random() - 0.5) * 10;
          y += (Math.random() - 0.5) * 10;
          z += (Math.random() - 0.5) * 10;
          points.push(new THREE.Vector3(x, y, z));
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0xd7be68,
          transparent: true,
          opacity: 0.4
        });
        
        const line = new THREE.Line(geometry, material);
        circuits.add(line);
        
        points.forEach(point => {
          const nodeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
          const nodeMaterial = new THREE.MeshBasicMaterial({
            color: 0xd7be68,
            transparent: true,
            opacity: 0.5
          });
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
          node.position.copy(point);
          circuits.add(node);
        });
      }
      sceneRef.current.add(circuits);

      // Create data cubes
      const cubes = new THREE.Group();
      const cubeCount = 15;
      
      for (let i = 0; i < cubeCount; i++) {
        const size = Math.random() * 0.5 + 0.2;
        const geometry = new THREE.BoxGeometry(size, size, size);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
          color: 0xd7be68,
          transparent: true,
          opacity: 0.4
        });
        
        const cube = new THREE.LineSegments(edges, material);
        cube.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30
        );
        
        cube.userData = {
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          floatSpeed: Math.random() * 0.005,
          floatOffset: Math.random() * Math.PI * 2
        };
        
        cubes.add(cube);
      }
      sceneRef.current.add(cubes);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      const pointLight1 = new THREE.PointLight(0xd7be68, 0.8);
      const pointLight2 = new THREE.PointLight(0xd7be68, 0.3);
      
      pointLight1.position.set(5, 5, 5);
      pointLight2.position.set(-5, -5, 5);
      
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(pointLight1);
      sceneRef.current.add(pointLight2);

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

        circuits.rotation.y += 0.001;
        circuits.rotation.x += 0.0005;
        
        cubes.children.forEach(cube => {
          cube.rotation.x += cube.userData.rotationSpeed;
          cube.rotation.y += cube.userData.rotationSpeed;
          cube.position.y += Math.sin(Date.now() * 0.001 + cube.userData.floatOffset) * cube.userData.floatSpeed;
        });

        cameraRef.current.position.x += (mouseX * 1 - cameraRef.current.position.x) * 0.03;
        cameraRef.current.position.y += (mouseY * 1 - cameraRef.current.position.y) * 0.03;
        cameraRef.current.lookAt(sceneRef.current.position);

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        frameIdRef.current = requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        if (!rendererRef.current || !cameraRef.current) return;
        
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    };

    initScene();
    setIsInitialized(true);

    return cleanup;
  }, []);

  return (
<div className="min-h-screen bg-black text-white overflow-hidden relative">
{/* Background Three.js Container */}
      <div 
        ref={containerRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-60 z-10"
        />
<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-0" />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/90" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d7be68]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-[#d7be68]/10 rounded-full blur-3xl" />
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              About <span className="text-[#d7be68]">Code Lake</span> Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering businesses with innovative technology solutions and exceptional service. 
              Your success is our mission.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/50 backdrop-blur-lg border border-[#d7be68]/20 rounded-lg p-8 text-center hover:border-[#d7be68]/40 transition-all duration-300 shadow-lg shadow-[#d7be68]/5"
                >
                  <stat.icon className="w-12 h-12 text-[#d7be68] mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-[#d7be68] mb-2">{stat.value}</h3>
                  <p className="text-lg text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-400">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-20">
          <div className="absolute -top-40 -right-20 w-96 h-96 bg-[#d7be68]/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative">
                  <span className="relative z-10">Our Mission</span>
                  <div className="absolute -left-4 -bottom-2 h-3 w-16 bg-[#d7be68]/20 rounded-full blur-sm"></div>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At Code Lake Enterprise, we are committed to providing you with the best technology solutions. 
                  Our team of experts is dedicated to delivering high-quality services that meet your specific needs. 
                  With our innovative approach and personalized attention, we guarantee your satisfaction.
                </p>
                <ul className="space-y-4">
                  {features.slice(0, 3).map((feature, index) => (
                    <motion.li
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <feature.icon className="w-6 h-6 text-[#d7be68] mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#d7be68]/20 to-transparent blur-xl rounded-full" />
                <div className="absolute inset-0 bg-[#d7be68]/5 rounded-lg transform -rotate-6" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-black/60 backdrop-blur-lg border border-[#d7be68]/20 rounded-lg p-8 shadow-lg shadow-black/30"
                >
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="space-y-6">
                    {features.slice(3).map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <feature.icon className="w-6 h-6 text-[#d7be68] mt-1" />
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d7be68]/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 relative"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
              <div className="h-0.5 w-20 bg-[#d7be68]/60 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions tailored to meet your business needs and drive growth
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/50 backdrop-blur-lg border border-[#d7be68]/20 rounded-lg p-6 hover:border-[#d7be68]/40 transition-all duration-300 shadow-lg shadow-black/20"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(215, 190, 104, 0.1)" }}
                >
                  <service.icon className="w-12 h-12 text-[#d7be68] mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-gray-300">
                        <div className="h-1.5 w-1.5 bg-[#d7be68] rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative py-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d7be68]/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
              <div className="h-0.5 w-20 bg-[#d7be68]/60 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leveraging cutting-edge technologies to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-lg border border-[#d7be68]/20 rounded-lg p-6 text-center hover:border-[#d7be68]/40 transition-all duration-300 shadow-md shadow-black/10"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(215, 190, 104, 0.1)",
                    background: "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))"
                  }}
                >
                  <tech.icon className="w-8 h-8 text-[#d7be68] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold">{tech.label}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d7be68]/5 via-[#d7be68]/10 to-[#d7be68]/5" />
          <div className="absolute inset-0 backdrop-blur-md" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto relative"
            >
              <div className="absolute -inset-10 bg-[#d7be68]/10 blur-3xl rounded-full opacity-50" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 relative z-10">
                Join us and let us help you achieve your business goals with our innovative solutions
                and dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link to="/contact-us">
                <motion.button 
                  className="px-8 py-4 bg-[#d7be68] text-black rounded-lg font-semibold hover:bg-[#d7be68]/90 transition-all duration-300 shadow-lg shadow-[#d7be68]/20"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  
                  Contact Us
                </motion.button>
                </Link>
                <Link to="/services">
                <motion.button 
                  className="px-8 py-4 border-2 border-[#d7be68] text-[#d7be68] rounded-lg font-semibold hover:bg-[#d7be68]/10 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;