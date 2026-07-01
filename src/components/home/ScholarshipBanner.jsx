import React from "react";
import scholarshipImg from "../../assets/wazifa/scholarship2026-L.jpeg";

const ScholarshipBanner = () => (
  <section className="w-full bg-white py-6 sm:py-8">

    {/* Heading */}
    <h2 className="text-center text-[12px] sm:text-sm font-bold tracking-[0.22em] uppercase text-gray-800 mb-4 px-4">
      Student Scholarship Registration
    </h2>

    {/* Full-width image — no max-width, no side padding */}
    <img
      src={scholarshipImg}
      alt="Student Scholarship Registration 2026"
      className="w-full h-auto block"
      draggable={false}
    />

  </section>
);

export default ScholarshipBanner;
