import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ShutterVideoMatch = () => {
  const containerRef = useRef(null);
  const shutterRef = useRef(null);

  useGSAP(() => {
    // Select all 8 blades
    const blades = gsap.utils.toArray('.shutter-blade');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // Length of scroll interaction
        pin: true,
        scrub: 1,      // Links animation perfectly to scroll
      }
    });

    // Animate rotation to match the "opening" motion in your video
    tl.to(blades, {
      rotation: -90, 
      ease: "power2.inOut",
      stagger: 0.05, // Slight stagger makes it feel mechanical
    })
    // Optional: Scale the whole shutter slightly as it opens for depth
    .to(shutterRef.current, {
      scale: 1.2,
      ease: "power2.inOut"
    }, 0);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* 1. CONTENT TO REVEAL (The "Green Screen" Area) */}
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
         <div className="text-center">
            <h1 className="text-white text-6xl font-black tracking-tighter uppercase">Captured</h1>
            <p className="text-zinc-500 tracking-[0.4em] mt-2">SCROLL TO CLOSE</p>
         </div>
      </div>

      {/* 2. THE SHUTTER ASSEMBLY */}
      <div className="relative z-10 pointer-events-none">
        <svg 
          ref={shutterRef}
          viewBox="0 0 200 200" 
          className="w-[120vmax] h-[120vmax]" // Ensures full screen coverage
        >
          {/* Inner Rim (The grey circle in your video) */}
          <circle cx="100" cy="100" r="99" fill="none" stroke="#444" strokeWidth="1" />

          <g transform="translate(100, 100)">
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 45})`}>
                {/* The Blade: 
                   We position it so the rotation point (0,0) is the center of the lens.
                   The 'd' path creates the triangle blade seen in the video.
                */}
                <path
                  className="shutter-blade fill-black stroke-zinc-800"
                  strokeWidth="0.5"
                  d="M 0,0 L 0,-150 L 150,-150 Z"
                  style={{ 
                    transformOrigin: '0px 0px', // Rotates around the center point
                    willChange: 'transform'
                  }}
                />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* 3. VIGNETTE FOR PREMIUM LOOK */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-20" />
    </div>
  );
};

export default ShutterVideoMatch;