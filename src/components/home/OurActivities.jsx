import React from "react";
import activityImg from "../../assets/wazifa/our activity.jpg";

const OurActivities = () => (
  <section className="w-full bg-white py-12 sm:py-16">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
        <span className="text-gray-900">OUR </span>
        <span className="text-green-500">ACTIVITIES</span>
      </h2>

      {/* Content — image left, text right */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        {/* Image */}
        <div className="w-full lg:w-[42%] flex-shrink-0">
          <img
            src={activityImg}
            alt="Our Activities – Anjuman Wazifa-e-Sadat wa Momineen"
            className="w-full h-auto object-cover rounded-lg shadow-sm"
            draggable={false}
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-[13.5px] sm:text-sm text-gray-700 leading-relaxed text-justify">
          <p>
            The objects of the Anjuman Wazifa-e-sadat-wa-mommineen include spreading of education
            in the community and to provide vocational guidance to the students for acquiring
            purposeful and job-oriented education. Beside this, the idea behind this provision is
            that the scholarship holders should develop a sense of pride and self-confidence, also
            develop a sense of responsibility for helping their community to become self-respecting.
          </p>
          <br />
          <p>
            Anjuman Wazifa-e-sadat-wa-mommineen (Regd) has its own constitution and bye-laws framed
            under it. The highest body of the Anjuman is its Karkun Committee. Its office bearers
            are elected every year in its Annual Session.
          </p>
          <br />
          <p>
            Anjuman Wazifa-e-sadat-wa-mommineen has 117 local secretaries in various cities of India
            and abroad. The local secretaries are the backbone of the Anjuman, who collect membership
            fees, recover loans, enroll new members, collect applications for scholarships and
            recommend them for sanction.
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default OurActivities;
