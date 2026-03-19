import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Ensure these are imported correctly
import {
  Home,
  User,
  Activity,
  Target,
  Briefcase,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import fav from "../assets/fav.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={16} /> },
    { name: "About", path: "/about", icon: <User size={16} /> },
    { name: "Expertise", path: "/expertise", icon: <Activity size={16} /> },
    { name: "Impact", path: "/impact", icon: <Target size={16} /> },
    { name: "Our Work", path: "/work", icon: <Briefcase size={16} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={16} /> },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-[100] px-4 py-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="navv relative max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center bg-black/10 backdrop-blur-xl rounded-[50px] border border-white/20 shadow-2xl"
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <img
            src={fav}
            alt="Logo"
            className="h-8 w-auto group-hover:scale-110 transition-transform"
          />
          <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">
            Apperture <span className="font-light opacity-50">Health</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-[#46B0D5]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* --- ICON RENDER --- */}
                  <span
                    className={`${isActive ? "text-[#46B0D5]" : "opacity-50"}`}
                  >
                    {link.icon}
                  </span>
                  <span>{link.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute inset-0 -z-10 border border-white/10"
                      style={{
                        borderRadius: "30px",
                        boxShadow:
                          "#00cfff 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} color="#00cfff"/> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-28 left-4 right-4 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[30px] p-4 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      isActive
                        ? "bg-[#46B0D5] text-black"
                        : "text-white/70 hover:bg-white/5"
                    }`
                  }
                >
                  {/* --- ICON RENDER MOBILE --- */}
                  <span className="opacity-80">{link.icon}</span>
                  <span className="font-semibold">{link.name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
