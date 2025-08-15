import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { 
  Video, Shield, Cloud, Code, 
  Monitor, Lock, Wifi, Phone, 
  Home, Camera, Bell, RadioTower,
  BarChart3, Brain, Settings,
  UserCheck, ShieldCheck
} from 'lucide-react';
import {Link} from 'react-router-dom'
const ServicesPage = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const frameIdRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const services = [
    {
      title: "Production Service",
      icon: Video,
      path: "/production",
      items: ["Video Creation", "Cinematography", "Storyboard", "Voiceover", "Photoshoots"]
    },
    {
      title: "IT & Development",
      icon: Code,
      path: "/it-and-dev",
      items: ["Web Development", "App Development", "SEO", "System Integration", "API Development"]
    },
    {
      title: "Digital Marketing Solutions",
      icon: Brain,
      path: "/marketing",
      items: ["Social Media Management", "Marketing Campaigns", "Search Engine Marketing", "Offline Media Campaigns"]
    },
    {
      title: "Cloud Computing Solutions",
      icon: Cloud,
      path: "/cloud",
      items: ["Infrastructure Solutions", "Cloud Migration", "Cloud Security", "Performance Optimization"]
    },
    {
      title: "Security System Solutions",
      icon: Shield,
      path: "/security",
      items: ["Access Control", "Alarm Systems", "Camera Systems", "Intercom System"]
    },
    {
      title: "Networking Solutions",
      icon: Wifi,
      path: "/network",
      items: ["Network Design", "Cabinet Configuration", "Wi-Fi Installation", "VOIP Systems"]
    },
    {
      title: "Smart Solutions",
      icon: Home,
      path: "/smart",
      items: ["Home Theatre", "Voice Control", "Smart Lighting", "Multi-Room Audio"]
    },
    {
      title: "E-commerce Solutions",
      icon: BarChart3,
      path: "/ecommerce",
      items: ["Online Store Setup", "Payment Integration", "Inventory Management", "E-commerce Analytics"]
    },
    {
      title: "Design & Branding",
      icon: Monitor,
      path: "/design",
      items: ["Motion Graphics", "2D/3D Animation", "Graphic Design", "Brand Identity"]
    },
    {
      title: "Data Analytics",
      icon: Settings,
      path: "/data-analytics",
      items: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Performance Metrics"]
    },
    {
      title: "Cybersecurity Services",
      icon: ShieldCheck,
      path: "/cybersecurity",
      items: ["Threat Detection", "Security Audits", "Penetration Testing", "Security Training"]
    },
    {
      title: "Consulting Services",
      icon: UserCheck,
      path: "/it",
      items: ["IT Strategy", "Digital Transformation", "Process Optimization", "Technology Assessment"]
    },
    {
      title: "Entrepreneurial Services",
      icon: RadioTower,
      path: "/entrepreneurial",
      items: ["Startup Consulting", "Business Planning", "Market Analysis", "Growth Strategy"]
    }
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
      <div className="relative z-20">
        <section className="relative py-20">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/50 backdrop-blur-lg border border-[#d7be68]/20 rounded-lg p-6 
                            hover:border-[#d7be68]/40 transition-all duration-300 shadow-lg shadow-black/20
                            cursor-pointer"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(215, 190, 104, 0.1)" }}
                  onClick={() => navigate(service.path)}
                >
                  <service.icon className="w-12 h-12 text-[#d7be68] mb-4" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-gray-300">
                        <div className="h-1.5 w-1.5 bg-[#d7be68] rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                  className="px-8 py-4 bg-[#d7be68] text-black rounded-lg font-semibold hover:bg-[#d7be68]/90 
                            transition-all duration-300 shadow-lg shadow-[#d7be68]/20"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Us
                </motion.button>
                </Link>
                <Link to="/about">
                <motion.button 
                  className="px-8 py-4 border-2 border-[#d7be68] text-[#d7be68] rounded-lg font-semibold 
                            hover:bg-[#d7be68]/10 transition-all duration-300"
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

export default ServicesPage;