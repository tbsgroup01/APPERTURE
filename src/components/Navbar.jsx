import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import fav from "../assets/fav.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Impact", path: "/impact" },
    { name: "Our Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyles = ({ isActive }) =>
    `relative px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
      isActive ? "text-white" : "text-gray-400 hover:text-[#46B0D5]"
    }`;

  return (
    <nav className="fixed w-full top-0 left-0 z-[100] px-4 py-6">
      {/* Main Glass Navbar Container */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ rotateX: 2, rotateY: -1, scale: 1.01 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative max-w-7xl mx-auto px-6 h-16 md:h-20 
                   flex justify-between items-center transition-all duration-500
                   /* Your Glass Reference Applied Below */
                   bg-white/0 backdrop-blur-[5px] rounded-[16px] 
                   border border-white/30 
                   shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                   /* Pseudo-element for a subtle top-left glint */
                   after:absolute after:inset-0 after:rounded-[16px] 
                   after:bg-gradient-to-br after:from-white/[0.05] after:to-transparent 
                   after:pointer-events-none"
      >
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-4 group relative z-10">
          <div className="relative flex items-center justify-center">
            {/* 1. Refined Ambient Glow: Lower opacity, broader blur for a 'premium' feel */}
            <div className="absolute inset-0 bg-[#46B0D5]/5 blur-2xl rounded-full group-hover:bg-[#46B0D5]/20 transition-all duration-700" />

            {/* 2. Logo Container: Removed the aggressive 360-spin for a smooth 'lift' */}
            <img
              src={fav}
              alt="Logo"
              className="relative h-7 md:h-8 w-auto object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
            />
          </div>

          {/* 3. Professional Typography: 
      - tracking-[0.2em]: Wide letter spacing is the hallmark of premium branding.
      - text-white/90: Pure white is often too harsh; 90% feels more integrated.
  */}
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold text-white/90 tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-[#46B0D5]">
              Apperture
              <span className="font-light text-white/50 ml-0.5">Health</span>
            </span>

            {/* 4. Sub-line detail: Adds a 'corporate authority' look */}
            <div className="h-[1px] w-0 bg-[#46B0D5]/50 group-hover:w-full transition-all duration-500 ease-in-out" />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 relative z-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyles}>
              {({ isActive }) => (
                <>
                  <span className="relative z-20">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="glass-pill"
                      className="absolute inset-0 bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden relative z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/20 text-white transition-all active:scale-95"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <X size={18} className="text-[#46B0D5]" key="close" />
              ) : (
                <Menu size={18} key="open" />
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 15, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-4 right-4 mx-auto max-w-[414px] 
                       bg-black/60 backdrop-blur-2xl border border-white/20 
                       rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] md:hidden"
          >
            <div className="flex flex-col p-3 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-base font-semibold p-4 rounded-[16px] transition-all ${
                        isActive
                          ? "bg-[#46B0D5] text-black"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
