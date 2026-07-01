import React from "react";
import statBg from "../../assets/wazifa/stat.jpg";

const stats = [
  { value: "22000", label: "Umoomi" },
  { value: "12080", label: "Life"   },
  { value: "5600",  label: "Dawami" },
  { value: "11586", label: "Wazifadar" },
];

const StatsSection = () => (
  <section className="w-full relative overflow-hidden">

    {/* Background image */}
    <img
      src={statBg}
      alt="Stats background"
      className="absolute inset-0 w-full h-full object-cover object-center"
      draggable={false}
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/65" />

    {/* Stats grid */}
    <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <span className="text-white text-4xl sm:text-5xl font-bold tracking-wide">
              {value}
            </span>
            <span className="text-[#a8d060] text-sm sm:text-base font-medium tracking-widest">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default StatsSection;
