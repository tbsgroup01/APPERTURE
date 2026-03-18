import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "APPERTURE partners with you on practical strategies and solutions to deliver great value and better outcomes.",
    author: "US Oncology Access Strategy",
    role: "Senior Director",
  },
  {
    text: "A phenomenal body of work in this research!!! Please thank the team for their work, I'm sure more to come to further build up our confidence level in the paths we're taking.",
    author: "Digital Therapeutics Company",
    role: "CEO",
  },
  {
    text: "APPERTURE has deep understanding and connections with both of the US and Global Payor markets. They contribute to 'big picture' solutions by capitalizing on their deep payor knowledge.",
    author: "Rare Disease US",
    role: "Business Unit Lead",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full bg-[#050508] py-32 px-6 overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#46B0D5]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#46B0D5]"></span>
            <span className="text-[#46B0D5] font-mono text-sm tracking-[0.3em] uppercase font-bold">Feedback</span>
            <span className="w-8 h-[1px] bg-[#46B0D5]"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Client <span className="text-white/30 italic">Testimonials</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-full"
            >
              <div className="relative bg-[#0c0c12] border border-white/5 p-12 md:p-20 rounded-[40px] shadow-2xl">
                <Quote className="absolute top-10 left-10 text-[#46B0D5]/20 w-16 h-16" />
                
                <p className="relative z-10 text-2xl md:text-3xl font-medium text-gray-200 leading-relaxed italic mb-10">
                  "{testimonials[index].text}"
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/5 pt-10">
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">
                      {testimonials[index].author}
                    </h4>
                    <p className="text-[#46B0D5] font-mono text-sm mt-1">
                      {testimonials[index].role}
                    </p>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={prev}
                      className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={next}
                      className="p-4 rounded-full bg-[#46B0D5] text-black hover:bg-[#39a0c4] transition-all shadow-[0_0_20px_rgba(70,176,213,0.3)]"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Visual Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === index ? "w-12 bg-[#46B0D5]" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}