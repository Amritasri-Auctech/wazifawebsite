import React from "react";
import scholarshipImg from "../../assets/images/scholarship2026-L.jpeg";

const SCHOLARSHIP_URL = "https://network14.in/home/Wazifa_Scholarship_Portal";

const ScholarshipBanner = () => (
  <section className="w-full bg-white py-8 sm:py-10">

    {/* Heading — contained, centered */}
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-5">
      <h2
        className="text-center font-semibold uppercase"
        style={{ fontSize: "40px", letterSpacing: "4px", color: "#000000" }}
      >
        Student Scholarship{" "}
        <span style={{ color: "#212121" }}>Registration</span>
      </h2>
    </div>

    {/* Full-width clickable banner image */}
    <a
      href={SCHOLARSHIP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <img
        src={scholarshipImg}
        alt="Student Scholarship Registration 2026"
        className="w-full h-auto block hover:opacity-95 transition-opacity duration-200 cursor-pointer"
        draggable={false}
      />
    </a>

  </section>
);

export default ScholarshipBanner;
