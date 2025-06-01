import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-[#e86227] to-[#d4541f] rounded-xl flex items-center justify-center shadow-lg shadow-[#e86227]/25">
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-white">Devlizer</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white/80 hover:text-[#e86227] transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-white/80 hover:text-[#e86227] transition-colors font-medium">
                About
              </a>
              <a href="#portfolio" className="text-white/80 hover:text-[#e86227] transition-colors font-medium">
                Portfolio
              </a>
              <a href="#contact" className="text-white/80 hover:text-[#e86227] transition-colors font-medium">
                Contact
              </a>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(232, 98, 39, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#e86227] to-[#d4541f] text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
}
