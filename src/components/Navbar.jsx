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

  // Brand Color: #46B0D5
  const linkStyles = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive ? "text-[#46B0D5]" : "text-gray-300 hover:text-[#46B0D5]"
    }`;

  return (
    <nav className="fixed w-full top-0 left-0 z-[100] px-4 py-4">
      {/* The Glass Container */}
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl flex justify-between items-center transition-all duration-300 shadow-2xl">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <img
            src={fav}
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          <span className="font-bold text-lg md:text-xl text-white tracking-tighter uppercase">
            APPERTURE
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyles}>
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.name}</span>
                  {/* Animated Pill Background for Active/Hover */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  {/* Bottom Line */}
                  {/* <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-[#46B0D5] w-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                  /> */}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} className="text-[#46B0D5]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-4 right-4 bg-[#0b0b0f]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-xl font-bold p-4 rounded-2xl transition-all ${
                        isActive
                          ? "bg-[#46B0D5] text-black"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
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