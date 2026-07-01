import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { HOME_SERVICES } from "../../constants/homeData";
import { SERVICE_ICONS } from "../../constants/icons";

const ServicesSection = () => (
  <section className="py-16 sm:py-20 bg-gray-50">
    <div className="max-w-[1280px] mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
          How We Serve the Community
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          We offer a range of services to support our community members across financial,
          educational, and social dimensions.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOME_SERVICES.map(({ iconKey, title, desc, link }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-green-200 transition-all duration-200 group"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-50 text-green-600 mb-5 group-hover:bg-green-600 group-hover:text-white transition-colors duration-200">
              {SERVICE_ICONS[iconKey]}
            </div>
            <h3 className="text-gray-800 font-semibold text-base mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
            <Link
              to={link}
              className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
            >
              Learn More <FiArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
