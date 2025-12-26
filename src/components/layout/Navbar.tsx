"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from "react";
import { ChevronsUpDownIcon, Code2 } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Update state when scrolling past 50px
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > (window.visualViewport?.height ?? 900)) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 transition-all duration-500
         ${isScrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"}`}
    >
      <Link
        href="/"
        className="text-xl font-display font-bold tracking-tighter text-white hover:opacity-70 transition-opacity self-start"
      >
        DEV_01
      </Link>

      <div className="relative">
        <AnimatedMenu />
      </div>
    </motion.nav>
  );
}

export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items list
  const items = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Lab", href: "#blog" },
  ];
  // Variants for the main container's size and shape
  const containerVariants = {
    closed: {
      width: '8rem', // Corresponds to w-48
      height: '3rem', // Corresponds to h-12
      borderRadius: '1rem', // Rounded-full for pill shape
    },
    open: {
      width: '9rem', // Slightly wider for menu
      height: 'auto', // Expands to fit content
      borderRadius: '1rem', // Rounded-2xl for card shape
    },
  };

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for individual menu items (staggered entrance)
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-center z-50">
      <motion.div
        className="bg-white shadow-lg text-gray-800 overflow-hidden cursor-pointer relative z-10"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Main 'Menu' Toggle Button */}
        <motion.button
          className="flex items-center justify-between w-full px-4 h-12 text-base font-medium focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.98 }}
        >
          <span>Menu</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {
              isOpen ? <ChevronsUpDownIcon className="w-5 h-5 text-gray-500" /> : <Code2 className="w-5 h-5 text-gray-500" />
            }

          </motion.div>
        </motion.button>

        {/* Menu Items List */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="flex flex-col px-4 pb-4 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
              variants={wrapperVariants}
            >
              {items.map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  className="py-2 text-sm font-medium cursor-pointer hover:text-blue-500 transition-colors"
                >
                  <a href={item.href} onClick={() => setIsOpen(false)}>{item.name}</a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}