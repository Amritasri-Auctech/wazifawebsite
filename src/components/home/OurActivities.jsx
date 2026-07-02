import React from "react";
import activityImg from "../../assets/wazifa/our activity.jpg";

const OurActivities = () => (
  <section className="w-full py-12 sm:py-16">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 bg-[#efeef6] rounded-lg py-10">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
        <span className="text-gray-900">OUR </span>
        <span className="text-[#86c724]">ACTIVITIES</span>
      </h2>

      {/* 50/50 Grid — image left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src={activityImg}
            alt="Our Activities – Anjuman Wazifa-e-Sadat wa Momineen"
            className="w-full h-auto object-cover rounded-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            draggable={false}
          />
        </div>

        {/* Text */}
        <div className="text-[15px] leading-[1.7] text-gray-600 text-justify">
          <p>
            <strong>
              The objects of the Anjuman Wazifa-e-sadat-wa-mommineen include spreading of
              education in the community and to provide vocational guidance to the students for
              acquiring purposeful and job-oriented education. Beside this, the idea behind this
              provision is that the scholarship holders should develop a sense of pride and
              self-confidence, also develop a sense of responsibility for helping their community
              to become self-respecting.
              {" "}Anjuman Wazifa-e-sadat-wa-mommineen (Regd) has its own constitution and
              bye-laws framed under it. The highest body of the Anjuman is its Karkun Committee.
              Its office bearers are elected every year in its Annual Session.
              {" "}Anjuman Wazifa-e-sadat-wa-mommineen has 117 local secretaries in various cities
              of India and abroad. The local secretaries are the backbone of the Anjuman, who
              collect membership fees, recover loans, enroll new members, collect applications for
              scholarships and recommend them for sanction.
            </strong>
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default OurActivities;
