import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiRotateCcw } from "react-icons/fi";
import { FaHeart, FaUniversity } from "react-icons/fa";

import memberImg from "../../assets/images/2.jpg";
import donateImg from "../../assets/images/1.jpg";
import namzadImg from "../../assets/images/found.jpg";
import qarzImg   from "../../assets/images/4.jpg";

const cards = [
  {
    img:      memberImg,
    icon:     <FiUsers size={15} />,
    iconBg:   "bg-[#86c724]",
    desc:     "Click here, fill the form, and become a valued part of AWSWM's noble mission.",
    btnLabel: "Become a Member",
    btnClass: "bg-[#86c724] hover:bg-[#6a941a]",
    to:       "/members/join",
  },
  {
    img:      donateImg,
    icon:     <FaHeart size={13} />,
    iconBg:   "bg-red-500",
    desc:     "Click here to donate and support Anjuman Wazifa-e-Sadat-wa-Momineen.",
    btnLabel: "Make Donation or Pay Khums",
    btnClass: "bg-red-500 hover:bg-red-600",
    to:       "/donate",
  },
  {
    img:      namzadImg,
    icon:     <FaUniversity size={13} />,
    iconBg:   "bg-yellow-500",
    desc:     "Click here to donate and establish a Namzad Fund in the name of your marhoomeen.",
    btnLabel: "Namzad Fund",
    btnClass: "bg-yellow-500 hover:bg-yellow-600",
    to:       "/namzad-fund",
  },
  {
    img:      qarzImg,
    icon:     <FiRotateCcw size={13} />,
    iconBg:   "bg-blue-600",
    desc:     "Click here to return your Qarz-e-Hasana and help support future students.",
    btnLabel: "Return of Qarz-e-Hasna",
    btnClass: "bg-blue-600 hover:bg-blue-700",
    to:       "/qarz-e-hasna",
  },
];

const BecomePartSection = () => (
  <section className="w-full bg-white py-10 sm:py-14">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

      {/* Heading — exact match to .w3ls_head CSS */}
      <h4
        className="text-center font-semibold uppercase mb-8 sm:mb-10 leading-snug"
        style={{ fontSize: "38px", letterSpacing: "4px", marginBottom: "20px" }}
      >
        <span style={{ color: "#86c724" }}>BECOME A PART OF </span>
        <span style={{ color: "#212121" }}>ANJUMAN WAZIFAE SADAT WA MOMINEEN</span>
      </h4>

      {/* 4-column card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map(({ img, icon, iconBg, desc, btnLabel, btnClass, to }) => (
          <Link
            key={btnLabel}
            to={to}
            className="no-underline"
          >
            <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full
                            hover:shadow-xl hover:scale-[1.02] transition-all duration-200 bg-white">

              {/* Image + icon badge */}
              <div className="relative">
                <img
                  src={img}
                  alt={btnLabel}
                  className="w-full h-44 object-cover rounded-t-2xl"
                  draggable={false}
                />
                <span className={`absolute top-2.5 right-2.5 ${iconBg} text-white
                                  w-7 h-7 rounded-full flex items-center justify-center shadow`}>
                  {icon}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-3 text-center">
                <p
                  className="text-[14px] font-bold leading-relaxed flex-1 my-2"
                  style={{
                    background: "linear-gradient(-102deg, #00b300, #d9534f, #005196)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {desc}
                </p>
                <span className={`${btnClass} text-white text-[12px] font-semibold
                                  text-center px-3 py-2.5 rounded transition-colors duration-200`}>
                  {btnLabel}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BecomePartSection;
