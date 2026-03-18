import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SceneSettings = () => {
  const canvasRef = useRef(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Check if device is mobile
    const isMobile = window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Smaller particles on mobile
        this.size = Math.random() * (isMobile ? 1.0 : 1.5) + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(70, 176, 213, 0.3)';
      }

      update(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Reduce particle count on mobile (40 vs 80)
    const particleCount = isMobile ? 40 : 80;
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(mouse.x, mouse.y);
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#08080a]" />
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 50%, #111b21 0%, #08080a 100%)` }}
      />
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />

      {/* Hide Custom Cursor on Mobile Devices */}
      <motion.div
        className="hidden md:flex fixed top-0 left-0 w-8 h-8 rounded-full border border-[#46B0D5] pointer-events-none z-[9999] items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 20px rgba(70, 176, 213, 0.4), inset 0 0 10px rgba(70, 176, 213, 0.2)'
        }}
      >
        <div className="w-1 h-1 bg-[#46B0D5] rounded-full shadow-[0_0_10px_#46B0D5]" />
      </motion.div>
    </>
  );
};

export default SceneSettings;