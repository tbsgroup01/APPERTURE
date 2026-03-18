import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Users, BrainCircuit, Target, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const impactMetrics = [
  {
    value: "100",
    suffix: "+",
    label: "Projects Completed",
    icon: <Target className="text-[#46B0D5]" />,
  },
  {
    value: "25",
    suffix: "+",
    label: "Clients Served",
    icon: <Users className="text-[#46B0D5]" />,
  },
  {
    value: "75",
    suffix: "+",
    label: "Hours of CSR",
    icon: <Award className="text-[#46B0D5]" />,
  },
  {
    value: "4000",
    suffix: "+",
    label: "Hours of Training",
    icon: <BrainCircuit className="text-[#46B0D5]" />,
  },
];

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const metricsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Metric Counters Animation
      metricsRef.current.forEach((metric) => {
        const valueObj = { val: 0 };
        const targetValue = parseInt(metric.getAttribute("data-value"));
        const valueDisplay = metric.querySelector(".metric-value");

        gsap.to(valueObj, {
          val: targetValue,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: metric,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            valueDisplay.innerText = Math.ceil(valueObj.val);
          },
        });
      });

      // 2. Content Fade-in Animation
      gsap.from(".impact-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".impact-content",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050508] py-32 px-6 overflow-hidden border-t border-white/5"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/grid.svg')] bg-center"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* --- LEFT SIDE: METRICS GRID --- */}
        <div className="grid grid-cols-2 gap-8">
          {impactMetrics.map((metric, i) => (
            <div
              key={i}
              ref={(el) => (metricsRef.current[i] = el)}
              data-value={metric.value}
              className="relative bg-[#0c0c12] border border-white/5 p-8 rounded-2xl flex flex-col gap-4 overflow-hidden group hover:border-[#46B0D5]/20 transition-colors duration-500"
            >
              {/* Icon & Label */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {metric.icon}
                </div>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  {metric.label}
                </p>
              </div>

              {/* Counter Value */}
              <div className="flex items-baseline gap-1">
                <span className="metric-value text-6xl md:text-7xl font-extrabold text-white tracking-tighter">
                  0
                </span>
                <span className="text-5xl font-bold text-[#46B0D5]">
                  {metric.suffix}
                </span>
              </div>

              {/* Subtle Hover Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#46B0D5]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE: NARRATIVE CONTENT --- */}
        <div className="space-y-10 impact-content">
          {/* Section Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#46B0D5]"></span>
            <span className="text-[#46B0D5] font-mono text-sm tracking-widest uppercase font-semibold">
              Our Impact
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Proven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Results
            </span>
            , Global Reach.
          </h2>

          {/* Narrative Text */}
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold">APPERTURE</span> has
              added value to several Top 25 Bio-Pharmaceutical companies as well
              as emerging Bio Pharmaceuticals and works actively with industry
              associations and payor partners.
            </p>
            <p className="border-l-2 border-[#46B0D5]/30 pl-6 py-1">
              From Pricing strategy development to determining US Payer Access
              strategy, to Global HTA, to leading Real World Strategy
              development, our expertise is recognized and sought after.
            </p>
            <p>
              We train next-generation Bio-Pharmaceutical leaders in Key areas
              of Market Access and HEOR strategy to ensure their competitive
              differentiation.
            </p>
          </div>

          {/* Call to Action (Optional, but looks professional) */}
          <motion.button
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            Explore Case Studies
            <Plus size={18} className="text-black/50" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
