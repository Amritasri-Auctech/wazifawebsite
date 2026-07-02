import React from "react";
import { Link } from "react-router-dom";

const JoinCTA = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-[1280px] mx-auto px-4">
      <div className="bg-gradient-to-r from-[#6a941a] to-[#86c724] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">

        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Become a Member Today</h2>
          <p className="text-[#eaf7c2] text-sm sm:text-base leading-relaxed">
            Join thousands of Sadat and Momineen families who benefit from the Anjuman's welfare
            programs. Membership is open to all eligible community members.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            to="/members/join"
            className="bg-white text-[#6a941a] hover:bg-[#f4fbe0] font-bold text-sm px-7 py-3 rounded transition-colors duration-200 text-center"
          >
            Join Now
          </Link>
          <Link
            to="/contact"
            className="border border-white/60 text-white hover:bg-white/10 font-semibold text-sm px-7 py-3 rounded transition-colors duration-200 text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default JoinCTA;
