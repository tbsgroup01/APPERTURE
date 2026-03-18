import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe, BarChart3, FileText, TrendingUp,
  MessageSquare, ShieldCheck, ArrowUpRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const expertiseData = [
  { title: "Market Access", icon: <Globe size={24} />, desc: "Navigating complex payer landscapes and ensuring patient reach." },
  { title: "HEOR", icon: <BarChart3 size={24} />, desc: "Evidence-based value substantiation via clinical data." },
  { title: "Value Proposition", icon: <FileText size={24} />, desc: "Crafting compelling narratives for healthcare stakeholders." },
  { title: "Global Pricing", icon: <TrendingUp size={24} />, desc: "Strategic price optimization and launch sequencing." },
  { title: "Communication", icon: <MessageSquare size={24} />, desc: "Elevating stakeholder engagement through digital precision." },
  { title: "Policy & Advocacy", icon: <ShieldCheck size={24} />, desc: "Influencing the global healthcare ecosystem landscape." },
];

export default function ExpertiseSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // 2. Cards Staggered Animation
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // Triggers when top of section hits 70% of viewport
          end: "bottom 15%", // Disappears when bottom leaves 15% of viewport
          toggleActions: "play reverse play reverse", // Replays when scrolling back up
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050508] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl reveal-text">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#46B0D5]"></span>
              <span className="text-[#46B0D5] font-mono text-sm tracking-widest uppercase font-semibold">Specialization</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Expertise</span>
            </h2>
          </div>
          
          <div className="max-w-lg reveal-text">
            <p className="text-gray-400 text-lg leading-relaxed border-l border-[#46B0D5]/30 pl-6">
              <span className="text-white font-semibold">APPERTURE</span> excels in US and Global Payer strategy, global pricing and market access, value communication, and innovative outcomes & evidence strategies.
            </p>
          </div>
        </div>

        {/* --- GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              initial="initial"
              whileHover="hover"
              className="group relative bg-[#0c0c12] border border-white/5 p-10 h-[400px] flex flex-col justify-between overflow-hidden transition-colors duration-500 hover:bg-[#0e0e16]"
            >
              {/* CORNER BORDERS (TOP-RIGHT & BOTTOM-LEFT) */}
              <span className="absolute top-0 right-0 w-0 h-[2px] bg-[#46B0D5] transition-all duration-500 group-hover:w-20" />
              <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#46B0D5] transition-all duration-500 group-hover:h-20" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#46B0D5] transition-all duration-500 group-hover:w-20" />
              <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#46B0D5] transition-all duration-500 group-hover:h-20" />

              <div className="relative z-10">
                <div className="relative mb-10 inline-block">
                  <div className="absolute inset-0 bg-[#46B0D5]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    variants={{ hover: { scale: 1.1, rotate: 12 } }}
                    className="relative w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 text-[#46B0D5] group-hover:bg-[#46B0D5] group-hover:text-white transition-all duration-500"
                  >
                    <motion.div variants={{ hover: { rotate: -12, scale: 1.2 } }}>
                      {item.icon}
                    </motion.div>
                  </motion.div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono text-gray-700 tracking-tighter group-hover:text-[#46B0D5] transition-colors">
                  // PHASE_0{i + 1}
                </span>
                <motion.div
                  variants={{ hover: { x: 5, y: -5 } }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-[#46B0D5] group-hover:text-[#46B0D5] transition-all"
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}