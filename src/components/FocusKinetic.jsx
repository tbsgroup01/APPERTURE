import React from "react";
import { motion } from "framer-motion";

const focusData = [
  { letter: "F", title: "Field-Driven", desc: "Insights rooted in real-world payer landscapes." },
  { letter: "O", title: "Outcome-Oriented", desc: "Strategy designed for measurable patient reach." },
  { letter: "C", title: "Client-Centric", desc: "Tailored solutions for Bio-Pharma leaders." },
  { letter: "U", title: "Unique Value", desc: "Substantiating clinical data into value stories." },
  { letter: "S", title: "Strategic Edge", desc: "Competitive differentiation in Global Markets." },
];

export default function FocusModern() {
  return (
    <section className="bg-[#050508] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#46B0D5]"></span>
            <span className="text-[#46B0D5] font-mono text-xs tracking-widest uppercase font-bold">
              Our Methodology
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
            Delivering <span className="text-white/30 italic font-light">Value.</span>
          </h2>
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-t border-white/10">
          {focusData.map((item, i) => (
            <motion.div
              key={i}
              initial="initial"
              whileHover="hover"
              className="group relative pt-16 pb-24 px-8 border-r border-white/10 last:border-r-0 cursor-default transition-colors duration-500 hover:bg-white/[0.02]"
            >
              {/* Massive Letter: Slide Up + Color Appears */}
              <div className="relative mb-12 h-48 flex items-end">
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -30 } // Pure vertical translation, NO flip
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative inline-block"
                >
                  {/* Background Letter (Ghost Outline) */}
                  <h3 
                    className="text-[10rem] md:text-[13rem] font-black leading-none select-none text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                  >
                    {item.letter}
                    
                    {/* Foreground Letter (Color Reveal) */}
                    <motion.span
                      variants={{
                        initial: { clipPath: "inset(100% 0% 0% 0%)" }, // Hidden at bottom
                        hover: { clipPath: "inset(0% 0% 0% 0%)" }     // Revealed to top
                      }}
                      transition={{ duration: 0.6, ease: "circOut" }}
                      className="absolute inset-0 text-[#46B0D5] select-none"
                      style={{ WebkitTextStroke: "0px" }}
                    >
                      {item.letter}
                    </motion.span>
                  </h3>
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 relative z-10">
                <h4 className="text-white font-bold text-xl uppercase tracking-widest group-hover:text-[#46B0D5] transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Accent Line */}
              <motion.div 
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 }
                }}
                className="absolute bottom-0 left-0 w-full h-1 bg-[#46B0D5] origin-left shadow-[0_0_15px_rgba(70,176,213,0.5)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}