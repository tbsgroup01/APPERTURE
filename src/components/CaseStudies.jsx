import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const cases = [
  {
    title: "Five Year Global RWE Strategy Development",
    category: "Real World Evidence",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "US Dermatology Product Market Access & Pricing",
    category: "Launch Strategy",
    img: "https://i1.wp.com/apperture.wp.bearly.dev/wp-content/uploads/sites/2/2021/06/AdobeStock_68275237-scaled.jpeg?fit=2560%2C1700&ssl=1",
  },
  {
    title: "Heme Onc Value Proposition Development Workshop",
    category: "Value Communications",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#050508] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#46B0D5]"></span>
            <span className="text-[#46B0D5] font-mono text-sm tracking-widest uppercase font-semibold">
              Success Stories
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Our Case <span className="text-white/40 italic">Studies</span>
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg">
            APPERTURE has worked on several brand and asset critical projects. 
            Presented here are successes that highlight our capabilities.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Dark Overlays */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
              </div>

              {/* Content Box */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="overflow-hidden">
                   <motion.span 
                    className="inline-block bg-[#46B0D5] text-[10px] font-bold uppercase tracking-widest text-black px-3 py-1 rounded-full mb-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                   >
                    {item.category}
                  </motion.span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="h-[1px] flex-grow bg-white/20" />
                  <button className="flex items-center gap-2 text-white font-semibold text-sm">
                    View Project <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Top Right Corner Floating Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                <ExternalLink size={18} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex justify-center">
            <button className="text-gray-500 hover:text-[#46B0D5] font-mono text-sm border-b border-gray-800 hover:border-[#46B0D5] transition-all pb-2">
                BROWSE ALL PROJECTS (12+)
            </button>
        </div>
      </div>
    </section>
  );
}