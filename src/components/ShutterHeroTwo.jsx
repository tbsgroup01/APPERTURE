import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

// Replace with your actual logo path
import logo from "../assets/logo.svg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ShutterHero = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      const blades = gsap.utils.toArray(".shutter-blade");

      // Main Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1, 
        },
      });

      tl.to(blades, {
        // We rotate further to ensure the iris "opens" fully
        rotation: -45, 
        transformOrigin: "0% 0%",
        ease: "power2.inOut",
        stagger: 0, // Set to 0 for perfectly simultaneous opening
      })
        .to(
          ".logo-reveal",
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.5,
          },
          "-=0.4"
        )
        .to(
          lineRef.current,
          {
            scaleY: 1,
            ease: "none",
          },
          0
        );

      // Initial Entrance
      gsap.from(".hero-content", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0b0b0f] text-white overflow-hidden"
    >
      <section className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-around px-6 md:px-10 gap-16">
        
        {/* THE SHUTTER UNIT */}
        <div className="relative z-10 flex justify-center items-center w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
          <div className="relative w-full h-full rounded-full overflow-hidden border border-[#46B0D5]/20 bg-black shadow-2xl">
            
            <div className="logo-reveal absolute inset-0 flex items-center justify-center opacity-0 scale-75 blur-md z-0">
              <img src={logo} alt="Logo" className="w-24 md:w-44 h-auto" />
            </div>

            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
              {/* Center the group */}
              <g transform="translate(100, 100)">
                {[...Array(8)].map((_, i) => (
                  <g key={i} transform={`rotate(${i * 45})`}>
                    <path
                      className="shutter-blade fill-[#0b0b0f] stroke-[#46B0D5]/40"
                      strokeWidth="0.5"
                      /* Balanced Geometry:
                        M 0,0 : Start at center
                        L 0,-120 : Straight line up
                        A 120,120 0 0 1 84.85,-84.85 : 45-degree arc (perfect slice)
                        Z : Close back to center
                      */
                      d="M 0,0 L 0,-120 A 120,120 0 0 1 84.85,-84.85 Z"
                      style={{
                        transformOrigin: "0px 0px",
                        willChange: "transform",
                      }}
                    />
                  </g>
                ))}
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 rounded-full border border-[#46B0D5]/10 scale-105 pointer-events-none" />
        </div>

        {/* HERO CONTENT */}
        <div className="hero-content relative z-20 lg:pl-20 flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-0 top-0 w-[4px] bg-[#46B0D5] origin-top scale-y-0"
            style={{ height: "100%" }}
          />
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none uppercase tracking-tighter">
            <span className="block text-white mb-1">CINEMATIC</span>
            <span className="block bg-gradient-to-r from-[#46B0D5] from-50% to-white/20 to-50% bg-[length:200%_100%] bg-[100%_0%] bg-clip-text text-transparent transition-all duration-1000 ease-in-out group-hover:bg-[0%_0%]">
              REVOLUTION
            </span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-md text-sm sm:text-lg leading-relaxed opacity-70 group-hover:text-gray-200 transition-colors duration-500">
            Experience the art of digital focus.
          </p>
          <Link to="/contact" className="mt-10 px-8 py-3 border border-[#46B0D5]/40 hover:bg-[#46B0D5] hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-[10px] font-bold">
            Get In Touch
          </Link>
        </div>
      </section>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)] z-30" />
    </div>
  );
};

export default ShutterHero;