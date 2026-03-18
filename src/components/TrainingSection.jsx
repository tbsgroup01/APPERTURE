import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight, PlayCircle } from "lucide-react";

const modules = [
  {
    title: "Recent Initiatives in US Drug Policy",
    subtitle: "Innovation, Value & Affordability",
    img: "https://images.unsplash.com/photo-1585435559383-cc9c91440990?auto=format&fit=crop&q=80&w=800",
    duration: "45 min",
  },
  {
    title: "US Healthcare Overview Module",
    subtitle: "Training Agenda & Ecosystem",
    img: "https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=800",
    duration: "60 min",
  },
  {
    title: "EU Payer Strategy Module",
    subtitle: "Training Agenda & Market Access",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    duration: "55 min",
  },
];

export default function TrainingSection() {
  return (
    <section className="bg-[#050508] py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#46B0D5]/30 bg-[#46B0D5]/5 mb-6"
          >
            <BookOpen size={14} className="text-[#46B0D5]" />
            <span className="text-[#46B0D5] font-mono text-[10px] tracking-[0.2em] uppercase font-bold">Educational Excellence</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Trained by <span className="text-[#46B0D5]">APPERTURE</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Empowering the next generation of Bio-Pharmaceutical leaders through expert-led, strategic training modules.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              whileHover="hover"
              initial="initial"
              className="group relative cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111] border border-white/5">
                <motion.img
                  src={mod.img}
                  alt={mod.title}
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-[1px] w-4 bg-[#46B0D5]"></span>
                    <span className="text-[#46B0D5] font-mono text-[10px] uppercase tracking-widest">{mod.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#46B0D5] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {mod.subtitle}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <motion.div 
                      variants={{
                        initial: { x: -10, opacity: 0 },
                        hover: { x: 0, opacity: 1 }
                      }}
                      className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest"
                    >
                      Explore Module <ChevronRight size={14} />
                    </motion.div>
                    
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white group-hover:bg-[#46B0D5] group-hover:text-black transition-colors duration-300">
                      <PlayCircle size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#46B0D5] group-hover:w-1/2 transition-all duration-500 shadow-[0_0_15px_rgba(70,176,213,0.5)]" />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 text-center">
            <button className="group relative px-10 py-4 bg-transparent border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-[#46B0D5]">
               <span className="relative z-10 text-white group-hover:text-white transition-colors font-semibold text-sm">
                  Access Full Curriculum
               </span>
               <div className="absolute inset-0 bg-[#46B0D5] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
        </div>
      </div>
    </section>
  );
}