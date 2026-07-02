import React from "react";
import careerBannerImg from "../../assets/wazifa/5componnet.jpg";

const CareerBanner = () => (
  <section className="w-full bg-white py-4">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
      <img
        src={careerBannerImg}
        alt="Build Your Career – Anjuman Jobs Portal"
        className="w-full h-auto block rounded-lg"
        draggable={false}
      />
    </div>
  </section>
);

export default CareerBanner;
