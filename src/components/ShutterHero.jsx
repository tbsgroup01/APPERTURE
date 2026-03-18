import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Shutter.css';

import logo from "../assets/logo.svg";

gsap.registerPlugin(ScrollTrigger);

const ShutterHero = () => {
  const component = useRef();
  const lineRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const blades = gsap.utils.toArray(".shutter-blade");

      blades.forEach((blade) => {
        const r = getComputedStyle(blade).getPropertyValue("--r");
        gsap.set(blade, { rotation: r });
      });

      const heroTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
          pin: true,
        },
      });

      heroTL
        // 1. The Line grows from top to bottom
        .to(lineRef.current, {
          scaleY: 1,
          duration: 2,
          ease: "none"
        }, 0)
        // 2. Shutters open
        .to(blades, {
          rotation: "+=120",
          x: (i) => Math.cos(((i * 60 - 30) * Math.PI) / 180) * 600,
          y: (i) => Math.sin(((i * 60 - 30) * Math.PI) / 180) * 600,
          opacity: 0,
          stagger: 0.05,
          ease: "power2.inOut",
        }, 0)
        // 3. Logo reveal
        .to(".logo-reveal", {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
        }, "-=1");

      // Entrance Animation
      gsap.timeline()
        .to(".transition-col", {
          yPercent: -100,
          duration: 1,
          stagger: 0.1,
          ease: "expo.inOut"
        })
        .from(".hero-content", {
          y: 30,
          opacity: 0,
          duration: 0.8
        }, "-=0.5");

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="bg-[#050505] text-white overflow-x-hidden">
      
      {/* Loading Overlay */}
      <div className="fixed inset-0 flex z-[100] pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="transition-col flex-1 bg-[#0b0b0f] border-r border-[#46B0D5]/10" />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-around px-6 md:px-10 gap-12 lg:gap-0">
        
        {/* Left: Shutter (Responsive Size) */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="shutter-container w-[280px] sm:w-[350px] md:w-[420px]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`shutter-blade b${i}`} />
            ))}
            
            <div className="logo-reveal absolute inset-0 flex items-center justify-center opacity-0 scale-50 blur-lg z-0">
              <img src={logo} alt="Logo" className="w-24 sm:w-32 md:w-48 h-auto" />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="hero-content relative z-10 lg:pl-20 text-center lg:text-left">
          {/* THE ANIMATED LINE */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute left-0 top-0 w-[3px] bg-gradient-to-b from-[#46B0D5] via-[#46B0D5] to-transparent origin-top scale-y-0"
            style={{ height: '100%' }}
          />

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none uppercase tracking-tighter">
            CINEMATIC<br />
            <span className="text-[#46B0D5]">REVOLUTION</span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-lg text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
            Experience the art of digital focus. We blend premium engineering 
            with high-fidelity visuals to redefine your perspective.
          </p>
          <a href="#explore" className="inline-block mt-8 px-8 py-3 md:px-10 md:py-4 border border-[#46B0D5] text-[#46B0D5] font-bold tracking-widest hover:bg-[#46B0D5] hover:text-black transition-all duration-500 text-sm md:text-base">
            EXPLORE NOW
          </a>
        </div>
      </section>
    </div>
  );
};

export default ShutterHero;