import React from 'react';
import { motion } from 'framer-motion';

const focusData = [
  { letter: 'F', text: 'FRAMED ISSUES' },
  { letter: 'O', text: 'OPTIMISED INSIGHTS' },
  { letter: 'C', text: 'CALIBRATED STRATEGY' },
  { letter: 'U', text: 'UNSURPASSED EXECUTION' },
  { letter: 'S', text: 'SIGNIFICANT OUTCOMES' },
];

const FocusItem = ({ letter, text, index }) => {
  return (
    <motion.div
      // Scroll animation: fades in and slides up
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // The "Wait" (Stagger): each item waits for the previous one
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex items-center gap-6 py-4 cursor-pointer border-b border-gray-100 last:border-0"
    >
      {/* The Outline Letter */}
      <span className="text-6xl font-black transition-all duration-500 text-transparent stroke-text group-hover:text-[#46B0D5]">
        {letter}
      </span>

      {/* The Filling Text */}
      <span className="text-2xl font-bold fill-animation">
        {text}
      </span>
    </motion.div>
  );
};

export default function FocusSection() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      {focusData.map((item, index) => (
        <FocusItem key={index} index={index} {...item} />
      ))}
    </div>
  );
}