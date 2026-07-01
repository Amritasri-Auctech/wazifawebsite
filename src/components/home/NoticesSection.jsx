import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import useNotices from "../../hooks/useNotices";

const NoticesSection = () => {
  const { notices, loading } = useNotices(4);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">
              Latest Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-1">
              Notices & Announcements
            </h2>
          </div>
          <Link
            to="/notices"
            className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-800 text-sm font-semibold whitespace-nowrap transition-colors"
          >
            View All <FiArrowRight size={15} />
          </Link>
        </div>

        {/* Skeleton while loading */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-5 animate-pulse h-20"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {notices.map(({ date, title, category }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-white rounded-xl border border-gray-100 p-5 hover:border-green-200 hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <span className="flex-shrink-0 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                  {category}
                </span>
                <div>
                  <p className="text-gray-800 font-medium text-sm leading-snug hover:text-green-700 cursor-pointer transition-colors">
                    {title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1.5">{date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticesSection;
