import React from "react";
import careerBannerImg from "../../assets/wazifa/5componnet.jpg";

const CareerBanner = () => (
  <section className="w-full">
    <img
      src={careerBannerImg}
      alt="Build Your Career – Anjuman Jobs Portal"
      className="w-full h-auto block"
      draggable={false}
    />
  </section>
);

export default CareerBanner;
