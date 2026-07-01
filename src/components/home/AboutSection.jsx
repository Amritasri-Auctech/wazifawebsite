import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { ABOUT_FEATURES } from "../../constants/homeData";

const AboutSection = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">
          About Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-5 leading-tight">
          Anjuman Wazifa-e-Sadat <br className="hidden sm:block" /> Wa Momineen
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Anjuman Wazifa-e-Sadat Wa Momineen is a community-driven charitable organization that has
          been serving the Sadat and Momineen community for decades. We are committed to the
          financial, social, and educational welfare of our members.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our Anjuman operates with full transparency and is governed by a dedicated executive
          committee elected by the community. Every donation and fund disbursement is meticulously
          documented to ensure accountability.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded transition-colors duration-200"
        >
          Read More <FiArrowRight size={15} />
        </Link>
      </motion.div>

      {/* Feature cards side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {ABOUT_FEATURES.map(({ title, desc }) => (
          <div
            key={title}
            className="bg-gray-50 border border-gray-100 rounded-lg p-5 hover:border-green-300 hover:shadow-md transition-all duration-200"
          >
            <h4 className="text-gray-800 font-semibold text-sm mb-1">{title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
