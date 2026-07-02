import React from "react";
import statBg from "../../assets/images/stat.jpg";

const stats = [
  { value: "22000", label: "Umoomi" },
  { value: "12080", label: "Life" },
  { value: "5600",  label: "Dawami" },
  { value: "11586", label: "Wazifadar" },
];

const StatsSection = () => (
  <section className="w-full bg-white py-4 sm:py-6">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

      {/* Contained box — background-attachment: fixed via inline style */}
      <div
        className="relative overflow-hidden rounded-lg"
        style={{
          backgroundImage: `url(${statBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}

        {/* Stats grid */}
        <div className="relative z-10 px-8 py-16 sm:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                {/* Number */}
                <span
                  className="text-white font-normal leading-tight mb-3"
                  style={{ fontSize: "60px" }}
                >
                  {value}
                </span>
                {/* Label */}
                <h4
                  className="font-semibold tracking-[2px] text-center"
                  style={{ color: "#86c724", fontSize: "26px", lineHeight: "35px", padding: "0 20px", marginTop: "20px" }}
                >
                  {label}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default StatsSection;
