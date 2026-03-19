import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhatWeDo = () => {
  const component = useRef(null); // The wrapper
  const slider = useRef(null);    // The moving text

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pixelsToMove = slider.current.offsetWidth - window.innerWidth;
      
      gsap.to(slider.current, {
        x: -pixelsToMove,
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          pin: true,           // Locks the page
          scrub: 1,            // Smoothly follows the scroll
          start: "top top",    // Starts when the top of the section hits the top of the viewport
          end: () => "+=" + pixelsToMove, // Ends exactly when text finishes
          invalidateOnRefresh: true,
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="overflow-hidden bg-[#050508]">
      <section className="h-screen w-full flex flex-col justify-center relative">
        
        {/* Top Label */}
        <div className="absolute top-20 left-12 flex items-center gap-4 z-20">
          <span className="text-[#46B0D5] font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
            System // Capabilities
          </span>
          <div className="h-[1px] w-12 bg-[#46B0D5]/30" />
        </div>

        {/* THE ANIMATED TEXT CONTAINER */}
        <div className="flex items-center">
          <h2 
            ref={slider}
            className="text-[20vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter inline-block px-[5vw] will-change-transform"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
            }}
          >
            We Bridge <span className="text-white italic">The Gap</span> Between 
            <span className="text-[#46B0D5]"> Data & Care</span> For A 
            <span className="text-white"> Better Tomorrow</span> —
          </h2>
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-20 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8 z-20">
          <div className="flex items-baseline gap-6">
            <span className="text-7xl font-black text-white/5 italic select-none">ACT</span>
            <p className="max-w-xs text-gray-500 text-sm font-light leading-relaxed">
              Transforming complex clinical insights into global market access 
              strategies that ensure innovations reach patients faster.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
             <div className="w-24 h-[1px] bg-white/10 mb-4" />
             <span className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
               Scroll to Explore
             </span>
          </div>
        </div>

      </section>
      
      {/* Small transition buffer to prevent sudden jump to next section */}
      <div className="h-[10vh] bg-[#050508]" />
    </div>
  );
};

export default WhatWeDo;