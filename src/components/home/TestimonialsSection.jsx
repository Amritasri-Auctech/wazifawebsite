import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

import useTestimonials from "../../hooks/useTestimonials";
import useSlider from "../../hooks/useSlider";

const TestimonialsSection = () => {
  const { testimonials } = useTestimonials(3);
  const { current, goTo } = useSlider(testimonials.length || 1, 6000);

  if (!testimonials.length) return null;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            What Our Members Say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 sm:p-10 text-center border border-gray-100 shadow-sm"
            >
              <FaQuoteLeft size={28} className="text-green-500 mx-auto mb-5 opacity-60" />
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed italic mb-6">
                "{testimonials[current].text}"
              </p>
              <p className="text-gray-800 font-semibold">{testimonials[current].name}</p>
              <p className="text-green-600 text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-green-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
