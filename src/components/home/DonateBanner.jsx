import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHandHoldingHeart } from "react-icons/fa";

const DonateBanner = () => (
  <section
    id="donate"
    className="py-16 sm:py-20 bg-gradient-to-r from-green-800 to-green-600 relative overflow-hidden"
  >
    {/* Diagonal stripe overlay */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px",
      }}
    />

    <div className="relative max-w-[1280px] mx-auto px-4 text-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FaHandHoldingHeart size={48} className="mx-auto mb-5 text-green-200" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Donation Changes Lives</h2>
        <p className="text-green-100 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Every contribution you make goes directly towards helping Sadat and Momineen families
          in need. Join us in making a difference today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-white text-green-700 hover:bg-green-50 font-bold text-sm px-8 py-3 rounded transition-colors duration-200"
          >
            Donate Now ♥
          </a>
          <Link
            to="/about"
            className="border border-white/60 text-white hover:bg-white/10 font-semibold text-sm px-8 py-3 rounded transition-colors duration-200"
          >
            Our Mission
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DonateBanner;
