import React from "react";
import aboutCollage from "../../assets/images/about_1.webp";
import aboutLogo    from "../../assets/images/about_2.webp";

const WelcomeSection = () => (
  <section className="py-12 pb-16 bg-white">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

      {/* ── Two-column grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT — Heading + Text */}
        <div>
          {/* Heading sits directly above the text, inside left column */}
          <h2 className="text-5xl sm:text-3xl font-semibold mb-6 tracking-wide text-center">
            <span className="text-green-500">WEL</span>
            <span className="text-gray-900">COME</span>
          </h2>

          <div className="space-y-5 text-[15px] leading-7 text-gray-700 text-justify">
            <p>
              Anjuman Wazifa-e-Sadat-wa-Momineen was established in 1912 with a modest capital of
              Rs. 4.50 (72 Annas) by two eminent educationists Late Haji S. Jalaluddin Haider and
              Late Nawab S. Mohsin Meerza. The object was to award loan scholarships (Qarz-e-Hasna)
              to needy, deserving and meritorious students of the community to pursue religious or
              temporal studies, repayable without interest in easy instalments after settlement.
            </p>
            <p>
              Over time, the Anjuman has benefited more than nine thousand students. Many have gone
              on to become Engineers, Doctors, Lawyers, Teachers, Administrators, Judges, Writers,
              Bankers, Philosophers, Alim‑e‑Deen and even Ministers.
            </p>
            <p>
              The Anjuman celebrated its centenary in 2012. Its income sources include membership
              fees, nominated funds and loan recoveries from beneficiaries. The Anjuman is committed
              to reaching every needy and deserving student through scholarship support.
            </p>
            <p>
              The Anjuman humbly appeals to the community members to join and support the
              organization. You may start a nominated (Namzad) fund in memory of a loved one,
              become a local secretary, or help identify needy students. We seek your active support!
            </p>
          </div>
        </div>

        {/* RIGHT — Collage with logo badge */}
        <div className="relative pb-10">

          {/* Main collage image */}
          <img
            src={aboutCollage}
            alt="Anjuman collage"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />

          {/* Logo badge — bottom-left overlap */}
          <div className="absolute bottom-0 
                          bg-white p-2.5 rounded-2xl
                          shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
            <img
              src={aboutLogo}
              alt="AWSM Logo"
              className="w-25 h-25 object-contain rounded-xl"
            />
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default WelcomeSection;
