import React from "react";
import { motion } from "framer-motion";
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              APPERTURE<span className="text-[#46B0D5]">.</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Elevating Bio-Pharmaceutical strategy through precision, 
              innovation, and global market expertise.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#46B0D5" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {["Expertise", "Impact", "Case Studies", "Training"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail size={16} className="text-[#46B0D5]" />
                info@apperture.com
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={16} className="text-[#46B0D5]" />
                +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm leading-relaxed">
                <MapPin size={16} className="text-[#46B0D5] shrink-0" />
                Global HQ, New York, NY
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-500 text-sm">Stay updated with the latest in Market Access.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white text-sm focus:outline-none focus:border-[#46B0D5] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-[#46B0D5] rounded-full text-black hover:bg-[#39a0c4] transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © {currentYear} APPERTURE Strategy Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}