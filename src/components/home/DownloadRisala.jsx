import React from "react";
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

// ── Download buttons data ────────────────────────────────────────────
const mainButtons = [
  {
    label: "WAZIFA PROGRESS REPORT",
    bg: "bg-[#4a9fd4] hover:bg-[#3a8fc4]",
    href: "#",
  },
];

const earlierEditions = [
  { label: "Edition 2020", href: "#" },
  { label: "Edition 2018", href: "#" },
  { label: "Edition 2015", href: "#" },
  { label: "Edition 2012", href: "#" },
];

const rightButtons = [
  {
    label: "WAZIFA SILVER JUBLI",
    bg: "bg-[#e8453c] hover:bg-[#d43c33]",
    href: "#",
  },
  {
    label: "WAZIFA GOLDEN JUBLI",
    bg: "bg-[#f0a500] hover:bg-[#e09500]",
    href: "#",
  },
  {
    label: "WAZIFA DIAMOND JUBLI",
    bg: "bg-[#4a9fd4] hover:bg-[#3a8fc4]",
    href: "#",
  },
];

// ── Component ────────────────────────────────────────────────────────
const DownloadRisala = () => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section className="w-full bg-white py-10 sm:py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-wide">
          <span className="text-green-500">DOWNLOAD </span>
          <span className="text-gray-900">-RISALA WAZIFA</span>
        </h2>

        {/* Sub heading */}
        <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
          Click the buttons to download
        </p>

        {/* Buttons row */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">

          {/* Wazifa Progress Report */}
          <a
            href={mainButtons[0].href}
            className={`${mainButtons[0].bg} text-white text-[11px] sm:text-xs font-bold
                        tracking-wider uppercase px-4 py-2.5 rounded transition-colors duration-200`}
          >
            {mainButtons[0].label}
          </a>

          {/* Earlier Editions with dropdown */}
          <div ref={dropRef} className="relative">
            <div className="flex items-stretch">
              {/* Label part */}
              <a
                href="#"
                className="bg-green-600 hover:bg-green-700 text-white text-[11px] sm:text-xs
                           font-bold tracking-wider uppercase px-4 py-2.5 rounded-l
                           transition-colors duration-200"
              >
                EARLIER EDITIONS
              </a>
              {/* Arrow toggle */}
              <button
                onClick={() => setDropOpen((p) => !p)}
                aria-label="Toggle earlier editions"
                className="bg-green-700 hover:bg-green-800 text-white px-2.5 rounded-r
                           border-l border-green-500 transition-colors duration-200"
              >
                <FiChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Dropdown */}
            {dropOpen && (
              <ul className="absolute left-0 top-full mt-1 w-44 bg-white border border-gray-200
                             rounded shadow-lg z-30">
                {earlierEditions.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50
                                 hover:text-green-700 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right buttons */}
          {rightButtons.map(({ label, bg, href }) => (
            <a
              key={label}
              href={href}
              className={`${bg} text-white text-[11px] sm:text-xs font-bold
                          tracking-wider uppercase px-4 py-2.5 rounded
                          transition-colors duration-200`}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DownloadRisala;
