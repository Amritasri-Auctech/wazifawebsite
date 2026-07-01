import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Preloader
 * Shows a branded loading screen, then fires onDone() after a short delay.
 */
const Preloader = ({ onDone }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Spinning ring */}
          <div className="relative w-20 h-20 mb-5">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            />
          </div>

          {/* Brand text */}
          <p className="text-green-700 font-semibold text-sm tracking-widest uppercase">
            Anjuman Wazifa-e-Sadat
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
