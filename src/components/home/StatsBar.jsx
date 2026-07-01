import React from "react";
import { motion } from "framer-motion";

import { HOME_STATS } from "../../constants/homeData";
import { STAT_ICONS } from "../../constants/icons";

const StatsBar = () => (
  <section className="bg-green-700 py-8">
    <div className="max-w-[1280px] mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
        {HOME_STATS.map(({ iconKey, value, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-green-200">{STAT_ICONS[iconKey]}</div>
            <span className="text-2xl sm:text-3xl font-bold">{value}</span>
            <span className="text-sm text-green-100 font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
