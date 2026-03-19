import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowRight,
  Globe,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import fav from "../assets/fav.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About Us", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Impact", path: "/impact" },
    { name: "Our Work", path: "/work" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="relative bg-[#050505] pt-24 pb-10 px-6 overflow-hidden">
      {/* 1. Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#46B0D5]/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#46B0D5]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Brand (Takes 4 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="relative">
                <img
                  src={fav}
                  alt="Logo"
                  className="h-10 w-auto group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-[#46B0D5] blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-white font-bold tracking-[0.2em] uppercase text-xl">
                Apperture <span className="font-extralight text-[#46B0D5]">Health</span>
              </span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Bridging the gap between technology and human care with precision-engineered digital health solutions.
            </p>
            <div className="flex gap-5">
              {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#46B0D5" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-[#46B0D5]/50 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Navigation (Takes 2 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#46B0D5]" /> Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white text-sm transition-all flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-0 bg-[#46B0D5] group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact (Takes 3 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col gap-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#46B0D5]" /> Connection
            </h4>
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@apperture.health" className="group flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-500 font-bold">Inquiries</span>
                <span className="text-gray-300 group-hover:text-[#46B0D5] transition-colors flex items-center gap-2">
                  hello@apperture.health <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                </span>
              </a>
              <div className="group flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-500 font-bold">Location</span>
                <span className="text-gray-300 flex items-center gap-2">
                  <Globe size={14} className="text-[#46B0D5]" /> Global Remote
                </span>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Newsletter (Takes 3 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col gap-8">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#46B0D5]/10 blur-2xl group-hover:bg-[#46B0D5]/20 transition-all" />
              <h4 className="text-white font-semibold text-sm mb-4">Join our briefing</h4>
              <div className="relative z-10 space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 px-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#46B0D5] transition-all"
                />
                <button className="w-full bg-[#46B0D5] hover:bg-white text-black font-bold py-2.5 rounded-lg text-xs uppercase tracking-tighter transition-all flex items-center justify-center gap-2">
                  Subscribe <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-600 text-[11px] uppercase tracking-widest">
            © {currentYear} <span className="text-gray-400">Apperture Health</span> — Innovation through clarity.
          </p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-[#46B0D5] text-[11px] uppercase tracking-widest transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;