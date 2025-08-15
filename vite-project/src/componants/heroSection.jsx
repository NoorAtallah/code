import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImmersiveTechBg = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameIdRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  const [activeService, setActiveService] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [performanceLevel, setPerformanceLevel] = useState('high'); // high, medium, low
  
  const services = [
    "Production Service",
    "IT Consulting",
    "Digital Marketing", 
    "Cloud Computing",
    "Entrepreneurial Journeys",
    "E-commerce Solutions",
    "Design & Branding",
    "Data Analytics",
    "Cyber Security",
    "Security Systems",
    "Networking Solutions",
    "Smart Solutions"
  ];

  // Detect device performance once on component mount
  useEffect(() => {
    const detectPerformance = () => {
      // Simple performance detection based on device
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isOldDevice = window.navigator.hardwareConcurrency < 4;

      if (isMobile || isOldDevice) {
        return 'low';
      } else if (window.navigator.hardwareConcurrency < 8) {
        return 'medium';
      } else {
        return 'high';
      }
    };

    setPerformanceLevel(detectPerformance());
  }, []);

  // Setup Intersection Observer to pause scene when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => {
      if (mountRef.current) {
        observer.unobserve(mountRef.current);
      }
    };
  }, []);

  // Main Three.js setup and animation
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    
    // Get particle counts based on performance level
    const getParticleCount = () => {
      switch (performanceLevel) {
        case 'low': return 800;
        case 'medium': return 1500;
        case 'high': return 3000;
        default: return 1500;
      }
    };

    const getSymbolCount = () => {
      switch (performanceLevel) {
        case 'low': return 10;
        case 'medium': return 20;
        case 'high': return 30;
        default: return 20;
      }
    };

    const getSparkleCount = () => {
      switch (performanceLevel) {
        case 'low': return 30;
        case 'medium': return 60;
        case 'high': return 100;
        default: return 60;
      }
    };
    
    // Set appropriate frame throttling based on performance
    const getFrameInterval = () => {
      switch (performanceLevel) {
        case 'low': return 3; // Render every 3rd frame
        case 'medium': return 2; // Render every 2nd frame
        case 'high': return 1; // Render every frame
        default: return 1;
      }
    };

    // Scene setup with optimized renderer settings
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: performanceLevel === 'high', // Only use antialiasing for high performance
      powerPreference: 'high-performance',
      precision: performanceLevel === 'low' ? 'lowp' : 'mediump',
      stencil: false,
      depth: true,
      alpha: false
    });
    
    rendererRef.current = renderer;
    
    // Set resolution scaling based on performance
    const pixelRatio = performanceLevel === 'low' ? 0.7 : (performanceLevel === 'medium' ? 0.85 : window.devicePixelRatio);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    
    // Object pooling - create object pools to reuse
    const objectPools = {
      symbols: [],
      particles: null,
      sparkles: null
    };
    
    mountRef.current.appendChild(renderer.domElement);

    // Grid effect - simplified for performance
    const createGrid = () => {
      // Use smaller grid on low-performance devices
      const gridSize = performanceLevel === 'low' ? 80 : 100;
      const gridDivisions = performanceLevel === 'low' ? 20 : 40;
      const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xd7be68, 0x444444);
      gridHelper.position.y = -20;
      
      // Add frustum culling
      gridHelper.frustumCulled = true;
      
      return gridHelper;
    };

    // Floating tech symbols with individual textures but optimized
    const createFloatingSymbols = () => {
      const group = new THREE.Group();
      const symbols = ['<>', '/>', '=>', '{ }', '[ ]', '&&', '||', 'git', 'npm'];
      const symbolCount = getSymbolCount();
      const symbolPool = objectPools.symbols;
      
      // Create or reuse individual textures for each symbol
      const symbolTextures = [];
      
      // Create textures only if needed
      if (symbolTextures.length === 0) {
        symbols.forEach(symbolText => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = 256;
          canvas.height = 256;
          
          context.fillStyle = '#000000';
          context.fillRect(0, 0, 256, 256);
          
          context.fillStyle = '#d7be68';
          context.font = 'bold 80px monospace';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(symbolText, 128, 128);
          
          const texture = new THREE.CanvasTexture(canvas);
          symbolTextures.push(texture);
        });
      }
      
      for (let i = 0; i < symbolCount; i++) {
        let symbol;
        const symbolIndex = Math.floor(Math.random() * symbols.length);
        
        // Reuse existing symbol if available
        if (i < symbolPool.length) {
          symbol = symbolPool[i];
          symbol.material.map = symbolTextures[symbolIndex];
          symbol.material.needsUpdate = true;
        } else {
          const material = new THREE.SpriteMaterial({
            map: symbolTextures[symbolIndex],
            transparent: true,
            opacity: 0.8
          });
          
          symbol = new THREE.Sprite(material);
          symbolPool.push(symbol);
        }
        
        // Set position and properties
        symbol.position.set(
          THREE.MathUtils.randFloatSpread(60),
          THREE.MathUtils.randFloatSpread(40),
          THREE.MathUtils.randFloatSpread(40)
        );
        
        symbol.scale.set(3, 3, 3);
        
        // Store original position for animation
        symbol.userData = {
          originalY: symbol.position.y,
          speed: Math.random() * 1.5 + 0.5, // Reduced speed range
          symbolIndex: symbolIndex
        };
        
        // Enable frustum culling
        symbol.frustumCulled = true;
        
        group.add(symbol);
      }
      
      return group;
    };

    // Optimized particle system with instancing
    const createParticleSystem = () => {
      const particleCount = getParticleCount();
      
      // Check if we already have a particle system to reuse
      if (objectPools.particles) {
        const particles = objectPools.particles;
        scene.add(particles);
        return particles;
      }
      
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const speedFactors = new Float32Array(particleCount);
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = THREE.MathUtils.randFloatSpread(100);
        positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(60);
        positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(60);
        
        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.1 + 0.55, 0.8, 0.6);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        
        // Add variation in size and animation speed
        sizes[i] = Math.random() * 0.5 + 0.5;
        speedFactors[i] = Math.random() * 0.8 + 0.2;
      }
      
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      particles.setAttribute('speedFactor', new THREE.BufferAttribute(speedFactors, 1));
      
      // Optimize the shader for performance
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          hover: { value: 0 },
          pixelRatio: { value: pixelRatio }
        },
        vertexShader: `
          attribute vec3 color;
          attribute float size;
          attribute float speedFactor;
          uniform float time;
          uniform float hover;
          uniform float pixelRatio;
          varying vec3 vColor;
          
          void main() {
            vColor = color;
            vec3 pos = position;
            
            // Simplified math operations
            float sinValue = sin(time * speedFactor + position.x * 0.3);
            float cosValue = cos(time * speedFactor + position.z * 0.3);
            
            pos.y += sinValue * 0.5;
            pos.x += cosValue * 0.5;
            pos *= 1.0 + hover * 0.2;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = (200.0 / length(mvPosition.xyz)) * size * pixelRatio; 
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          
          void main() {
            vec2 center = gl_PointCoord - 0.5;
            float dist = length(center);
            // Optimize step function - faster than smoothstep
            float alpha = 1.0 - step(0.3, dist);
            gl_FragColor = vec4(vColor, alpha * 0.7);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false // Improve performance by not writing to depth buffer
      });
      
      const particleSystem = new THREE.Points(particles, material);
      particleSystem.frustumCulled = true;
      objectPools.particles = particleSystem;
      
      return particleSystem;
    };

    // Optimized sparkles effect
    const createSparkles = () => {
      // Check if we already have sparkles to reuse
      if (objectPools.sparkles) {
        const sparkles = objectPools.sparkles;
        scene.add(sparkles);
        return sparkles;
      }
      
      const group = new THREE.Group();
      const sparkleCount = getSparkleCount();
      
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(sparkleCount * 3);
      const speedFactors = new Float32Array(sparkleCount);
      
      for (let i = 0; i < sparkleCount; i++) {
        positions[i * 3] = THREE.MathUtils.randFloatSpread(80);
        positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(40);
        positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(40);
        
        speedFactors[i] = Math.random() * 0.8 + 0.2;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('speedFactor', new THREE.BufferAttribute(speedFactors, 1));
      
      // Simplified shader
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0xd7be68) }
        },
        vertexShader: `
          attribute float speedFactor;
          uniform float time;
          varying float vSparkle;
          
          void main() {
            // Simplified math for better performance
            vSparkle = abs(sin(time * 2.0 * speedFactor)); 
            vec3 pos = position;
            pos.y += sin(time * speedFactor) * 0.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = 3.0 * vSparkle;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          varying float vSparkle;
          
          void main() {
            vec2 center = gl_PointCoord - 0.5;
            float dist = length(center);
            // Step is faster than smoothstep
            float alpha = (1.0 - step(0.5, dist)) * vSparkle;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      
      const sparkles = new THREE.Points(geometry, material);
      sparkles.frustumCulled = true;
      group.add(sparkles);
      
      objectPools.sparkles = group;
      return group;
    };

    // Add all elements to scene with frustum culling
    const grid = createGrid();
    const symbols = createFloatingSymbols();
    const particles = createParticleSystem();
    const sparkles = createSparkles();

    scene.add(grid);
    scene.add(symbols);
    scene.add(particles);
    scene.add(sparkles);

    // Lighting - optimized to use fewer lights on low-performance devices
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Only add point lights on medium and high performance devices
    if (performanceLevel !== 'low') {
      const pointLight1 = new THREE.PointLight(0xd7be68, 2);
      pointLight1.position.set(5, 5, 5);
      scene.add(pointLight1);
      
      if (performanceLevel === 'high') {
        const pointLight2 = new THREE.PointLight(0x4a90e2, 1.5);
        pointLight2.position.set(-5, -5, -5);
        scene.add(pointLight2);
      }
    }

    camera.position.z = 30;
    
    // Frame counting for throttling
    let frameCount = 0;
    const frameInterval = getFrameInterval();
    
    // Animation loop with performance optimizations
    const animate = (timestamp) => {
      // Skip frames based on performance level
      frameCount++;
      if (frameCount % frameInterval !== 0) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate delta time for smooth animations regardless of frame rate
      const delta = timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;
      
      // Only animate if the component is visible
      if (isVisible) {
        const time = timestamp * 0.001;
        
        // Update uniforms
        scene.traverse((object) => {
          if (object.material && object.material.uniforms) {
            if (object.material.uniforms.time) {
              object.material.uniforms.time.value = time;
            }
            if (object.material.uniforms.hover) {
              object.material.uniforms.hover.value = isHovering ? 1 : 0;
            }
          }
        });

        // Animate grid with reduced calculation frequency
        grid.rotation.y += 0.002 * (delta / 16.667); // Normalize to 60fps
        
        // Animate only every other frame on low performance
        if (performanceLevel === 'low' && frameCount % 2 === 0) {
          grid.rotation.x = Math.sin(time * 0.2) * 0.1;
        } else if (performanceLevel !== 'low') {
          grid.rotation.x = Math.sin(time * 0.2) * 0.1;
        }

        // Animate symbols with performance considerations
        symbols.children.forEach((symbol, index) => {
          // Only animate a subset of symbols each frame for low performance
          if (performanceLevel === 'low' && index % 2 !== frameCount % 2) return;
          
          symbol.position.y = symbol.userData.originalY + 
            Math.sin(time * symbol.userData.speed) * 1.5;
          
          // Reduced rotation frequency
          if (performanceLevel === 'high' || frameCount % 3 === 0) {
            symbol.rotation.z = time * 0.1;
          }
        });

        // Camera movement - smoother with delta time
        const targetZ = isHovering ? 25 : 30;
        camera.position.z += (targetZ - camera.position.z) * 0.05 * (delta / 16.667);
        
        // Reduce sensitivity on lower performance
        const mouseSensitivity = performanceLevel === 'low' ? 0.01 : 
                               (performanceLevel === 'medium' ? 0.015 : 0.02);
        
        camera.position.x += (mouseX * 15 - camera.position.x) * mouseSensitivity * (delta / 16.667);
        camera.position.y += (-mouseY * 15 - camera.position.y) * mouseSensitivity * (delta / 16.667);
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }
      
      frameIdRef.current = requestAnimationFrame(animate);
    };

    // Event handlers with throttling
    let mouseMoveTimeout;
    const handleMouseMove = (event) => {
      // Throttle mouse move events
      if (!mouseMoveTimeout) {
        mouseMoveTimeout = setTimeout(() => {
          mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          mouseY = (event.clientY / window.innerHeight) * 2 - 1;
          mouseMoveTimeout = null;
        }, performanceLevel === 'low' ? 50 : (performanceLevel === 'medium' ? 30 : 10));
      }
    };

    // Throttled resize handler
    let resizeTimeout;
    const handleResize = () => {
      // Debounce resize events
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize

    // Service rotation interval  
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    // Start animation loop
    frameIdRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(mouseMoveTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose resources to prevent memory leaks
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.geometry) {
            object.geometry.dispose();
          }
          
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, [services.length, isHovering, isVisible, performanceLevel]);

  return (
    <div 
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={mountRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-70" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl mx-auto backdrop-blur-sm bg-black/30 p-6 sm:p-8 rounded-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Innovating Tomorrow's
            <span className="block text-[#d7be68] drop-shadow-[0_0_25px_rgba(215,190,104,0.5)]">
              Digital Solutions
            </span>
          </h1>
          
          <div className="h-16 sm:h-20">
            <p className="text-xl sm:text-2xl md:text-3xl text-white transition-all duration-500 animate-fade-in">
              {services[activeService]}
            </p>
          </div>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Transforming businesses through cutting-edge technology and innovative solutions. 
            Your journey to digital excellence starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to='digital-marketing-solutions'>
            <button className="px-6 py-3 bg-[#d7be68] text-black rounded-lg font-semibold hover:bg-[#d7be68]/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(215,190,104,0.5)]">
              Explore Packeges
            </button>
            </Link>
            <Link to='service-request'>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Get Quote
            </button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default ImmersiveTechBg;