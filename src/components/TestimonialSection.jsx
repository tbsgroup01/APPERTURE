import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    text: "APPERTURE partners with you on practical strategies and solutions to deliver great value and better outcomes.",
    author: "US Oncology Access Strategy",
    role: "Senior Director",
  },
  {
    text: "A phenomenal body of work in this research!!! Please thank the team for their work, I'm sure more to come to further build up our confidence level.",
    author: "Digital Therapeutics Company",
    role: "CEO",
  },
  {
    text: "APPERTURE has deep understanding and connections with both of the US and Global Payor markets. They contribute to 'big picture' solutions.",
    author: "Rare Disease US",
    role: "Business Unit Lead",
  },
];

export default function TestimonialSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Logic for infinite wrap and direction tracking
  const index = Math.abs(page % testimonials.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Animation variants for directional sliding
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    }),
  };

  return (
    <section className="relative w-full bg-[#050508] py-32 px-6 overflow-hidden">
      {/* 1. Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#46B0D5]/5 blur-[150px] rounded-full" />
        {/* Decorative Watermark Text */}
        <span className="absolute top-20 left-10 text-[15vw] font-bold text-white/[0.02] select-none leading-none tracking-tighter uppercase">
          {/* Voices */}
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* 2. Header with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-24 text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              className="h-[1px] bg-[#46B0D5]" 
            />
            <span className="text-[#46B0D5] font-mono text-xs tracking-[0.4em] uppercase font-black">
              Testimonials
            </span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              className="h-[1px] bg-[#46B0D5]" 
            />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/5 italic">Impact</span>
          </h2>
        </motion.div>

        {/* 3. Main Carousel Area */}
        <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute w-full"
            >
              <div className="relative grid md:grid-cols-5 items-center gap-12 bg-white/[0.02] border border-white/5 backdrop-blur-sm p-8 md:p-16 rounded-[40px] shadow-2xl">
                {/* Large Decorative Quote Icon */}
                <Quote className="absolute -top-8 -left-4 text-[#46B0D5] w-20 h-20 opacity-20" />
                
                {/* Content Left (Text) */}
                <div className="md:col-span-3">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-4xl font-light text-gray-100 leading-[1.4] tracking-tight"
                  >
                    "{testimonials[index].text}"
                  </motion.p>
                </div>

                {/* Content Right (Author) */}
                <div className="md:col-span-2 md:border-l md:border-white/10 md:pl-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {testimonials[index].author}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#46B0D5]" />
                      <p className="text-[#46B0D5] font-mono text-sm tracking-widest uppercase opacity-80">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 4. Overlapping Navigation (Magnetic Feel) */}
          <div className="absolute -bottom-10 md:bottom-auto md:-right-6 flex md:flex-col gap-4 z-20">
            <motion.button 
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-[#46B0D5]/50 transition-colors backdrop-blur-xl"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-6 rounded-2xl bg-[#46B0D5] text-black shadow-[0_20px_40px_rgba(70,176,213,0.3)] hover:bg-white transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* 5. Custom Scrubber Progress */}
        <div className="flex items-center justify-center gap-4 mt-24">
          <span className="text-white/20 font-mono text-xs">01</span>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > index ? 1 : -1])}
                className="group relative h-8 w-8 flex items-center justify-center"
              >
                <div className={`h-[2px] transition-all duration-500 rounded-full ${
                  i === index ? "w-8 bg-[#46B0D5]" : "w-4 bg-white/10 group-hover:bg-white/30"
                }`} />
              </button>
            ))}
          </div>
          <span className="text-white/20 font-mono text-xs">0{testimonials.length}</span>
        </div>
      </div>
    </section>
  );
}