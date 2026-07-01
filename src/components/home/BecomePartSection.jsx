import React from "react";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FaHandHoldingHeart, FaHandHoldingUsd, FaUndo } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

import memberImg   from "../../assets/wazifa/Banner1.jpg";
import donateImg   from "../../assets/wazifa/banner.webp";
import namzadImg   from "../../assets/wazifa/5componnet.jpg";
import qarzImg     from "../../assets/wazifa/career-banner.jpg";

// ── Card data ────────────────────────────────────────────────────────
const cards = [
  {
    img:     memberImg,
    icon:    <FiUsers size={16} />,
    iconBg:  "bg-green-500",
    desc:    "Click here, fill the form, and become a valued part of AWSWM's noble mission.",
    btnLabel:"Become a Member",
    btnClass:"bg-green-600 hover:bg-green-700",
    to:      "/members/join",
  },
  {
    img:     donateImg,
    icon:    <FaHandHoldingHeart size={16} />,
    iconBg:  "bg-red-500",
    desc:    "Click here to donate and support Anjuman Wazifa-e-Sadat wa Momineen.",
    btnLabel:"Make Donation or Pay Khums",
    btnClass:"bg-red-500 hover:bg-red-600",
    to:      "/donate",
  },
  {
    img:     namzadImg,
    icon:    <MdVolunteerActivism size={16} />,
    iconBg:  "bg-yellow-500",
    desc:    "Click here to donate and establish a Namzad Fund in the name of your marhoomeen.",
    btnLabel:"Namzad Fund",
    btnClass:"bg-yellow-500 hover:bg-yellow-600",
    to:      "/namzad-fund",
  },
  {
    img:     qarzImg,
    icon:    <FaUndo size={14} />,
    iconBg:  "bg-blue-600",
    desc:    "Click here to return your Qarz-e-Hasna and help support future students.",
    btnLabel:"Return of Qarz-e-Hasna",
    btnClass:"bg-blue-600 hover:bg-blue-700",
    to:      "/qarz-e-hasna",
  },
];

// ── Component ────────────────────────────────────────────────────────
const BecomePartSection = () => (
  <section className="w-full bg-white py-10 sm:py-14">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

      {/* Heading */}
      <h2 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-10 leading-snug">
        <span className="text-green-600 tracking-wide">BECOME A PART OF </span>
        <span className="text-gray-900 tracking-wide">ANJUMAN WAZIFAE SADAT WA MOMINEEN</span>
      </h2>

      {/* 4-column card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map(({ img, icon, iconBg, desc, btnLabel, btnClass, to }) => (
          <div
            key={btnLabel}
            className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200"
          >
            {/* Image with icon badge */}
            <div className="relative">
              <img
                src={img}
                alt={btnLabel}
                className="w-full h-44 object-cover object-center"
                draggable={false}
              />
              {/* Top-right icon badge */}
              <span className={`absolute top-2.5 right-2.5 ${iconBg} text-white w-7 h-7 rounded-full flex items-center justify-center shadow`}>
                {icon}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-3">
              <p className="text-green-600 text-[12px] sm:text-[13px] leading-relaxed flex-1">
                {desc}
              </p>
              <Link
                to={to}
                className={`${btnClass} text-white text-[12px] font-semibold text-center px-3 py-2 rounded transition-colors duration-200`}
              >
                {btnLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BecomePartSection;
