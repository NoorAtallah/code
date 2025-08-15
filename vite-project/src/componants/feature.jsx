import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Globe, Code, Database, Cpu } from 'lucide-react';
import {Link} from 'react-router-dom'
const AnimatedSection = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const frameIdRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    { text: "AI-Powered Solutions", icon: Cpu },
    { text: "Cloud Architecture", icon: Database },
    { text: "Advanced Analytics", icon: Code }
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
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      cameraRef.current.position.z = 15;

      rendererRef.current = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(rendererRef.current.domElement);

      // Create circuit pattern
      const circuits = new THREE.Group();
      const lineCount = 50;
      
      for (let i = 0; i < lineCount; i++) {
        const points = [];
        let x = (Math.random() - 0.5) * 30;
        let y = (Math.random() - 0.5) * 30;
        let z = (Math.random() - 0.5) * 30;
        
        points.push(new THREE.Vector3(x, y, z));
        
        const branches = Math.floor(Math.random() * 4) + 2;
        for (let j = 0; j < branches; j++) {
          x += (Math.random() - 0.5) * 8;
          y += (Math.random() - 0.5) * 8;
          z += (Math.random() - 0.5) * 8;
          points.push(new THREE.Vector3(x, y, z));
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0xd7be68,
          transparent: true,
          opacity: 0.6
        });
        
        const line = new THREE.Line(geometry, material);
        circuits.add(line);
        
        points.forEach(point => {
          const nodeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
          const nodeMaterial = new THREE.MeshBasicMaterial({
            color: 0xd7be68,
            transparent: true,
            opacity: 0.8
          });
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
          node.position.copy(point);
          circuits.add(node);
        });
      }
      sceneRef.current.add(circuits);

      // Create data cubes
      const cubes = new THREE.Group();
      const cubeCount = 20;
      
      for (let i = 0; i < cubeCount; i++) {
        const size = Math.random() * 0.5 + 0.2;
        const geometry = new THREE.BoxGeometry(size, size, size);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
          color: 0xd7be68,
          transparent: true,
          opacity: 0.6
        });
        
        const cube = new THREE.LineSegments(edges, material);
        cube.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
        
        cube.userData = {
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          floatSpeed: Math.random() * 0.01,
          floatOffset: Math.random() * Math.PI * 2
        };
        
        cubes.add(cube);
      }
      sceneRef.current.add(cubes);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      const pointLight1 = new THREE.PointLight(0xd7be68, 1);
      const pointLight2 = new THREE.PointLight(0xd7be68, 0.5);
      
      pointLight1.position.set(5, 5, 5);
      pointLight2.position.set(-5, -5, 5);
      
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(pointLight1);
      sceneRef.current.add(pointLight2);

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;
      };

      containerRef.current.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

        circuits.rotation.y += 0.001;
        
        cubes.children.forEach(cube => {
          cube.rotation.x += cube.userData.rotationSpeed;
          cube.rotation.y += cube.userData.rotationSpeed;
          cube.position.y += Math.sin(Date.now() * 0.001 + cube.userData.floatOffset) * cube.userData.floatSpeed;
        });

        cameraRef.current.position.x += (mouseX * 2 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouseY * 2 - cameraRef.current.position.y) * 0.05;
        cameraRef.current.lookAt(sceneRef.current.position);

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        frameIdRef.current = requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
        
        cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight
        );
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      };
    };

    initScene();
    setIsInitialized(true);

    return cleanup;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const FeatureIcon = features[activeFeature].icon;

  return (
    <div className="relative bg-black min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div 
              className="relative z-10 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block">
                <motion.div
                  className="flex items-center space-x-2 text-[#d7be68] text-sm font-semibold tracking-wider uppercase"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Next-Gen Technology</span>
                </motion.div>
                <div className="h-0.5 bg-gradient-to-r from-[#d7be68] to-transparent mt-2" />
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold space-y-4">
                <span className="block text-white">
                  Accelerating Digital
                </span>
                <span className="block text-[#d7be68]">
                  Transformation
                </span>
              </h2>
              
              <div className="h-20 flex items-center space-x-3 text-xl text-white">
                <FeatureIcon className="w-6 h-6 text-[#d7be68]" />
                <span className="transition-all duration-500">
                  {features[activeFeature].text}
                </span>
              </div>
              
              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                Harness the power of cutting-edge technology to revolutionize your business. 
                Our solutions combine AI, cloud computing, and advanced analytics to drive 
                unprecedented growth and efficiency.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
              <Link to='/services'> 
                <motion.button
                  className="group px-8 py-4 rounded-xl bg-[#d7be68] text-black font-semibold 
                  transition-all duration-300 flex items-center space-x-2 hover:bg-[#d7be68]/80"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Technology</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                </Link>
           
              </div>
            </motion.div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#d7be68]/20 via-[#d7be68]/10 to-transparent blur-3xl rounded-full animate-pulse" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                ref={containerRef} 
                className="relative h-[600px] w-full rounded-3xl overflow-hidden 
                border border-[#d7be68]/20 bg-black/40 backdrop-blur-xl
                shadow-2xl shadow-black/20"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;