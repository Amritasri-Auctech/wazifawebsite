import React from "react";
import logo         from "../../assets/logo.png";
import aboutImg     from "../../assets/wazifa/about_1.webp";

const WelcomeSection = () => (
  <section className="w-full bg-white py-12 sm:py-16">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* ── LEFT — Text ── */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 tracking-widest">
            <span className="text-green-500">WEL</span>
            <span className="text-gray-900">COME</span>
          </h2>

          {/* Paragraphs — justified like screenshot */}
          <div className="space-y-4 text-[13.5px] sm:text-sm text-gray-700 leading-relaxed text-justify">
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
              Bankers, Philosophers, Alim-e-Deen and even Ministers.
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

        {/* ── RIGHT — Image ── */}
        <div className="relative flex items-start justify-center">
          <img
            src={aboutImg}
            alt="Spreading Successful Smiles – Anjuman Wazifa"
            className="w-full h-auto object-cover rounded-xl shadow-md"
            draggable={false}
          />

          {/* "Spreading Successful Smiles" overlay badge */}
          <div className="absolute bottom-16 right-3 sm:right-5
                          bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2
                          text-center shadow-md max-w-[130px]">
            <p className="text-[11px] font-bold text-gray-800 leading-tight">
              Spreading ✦<br />
              <span className="text-[10px] font-semibold text-gray-600 tracking-widest uppercase">
                Successful<br />Smiles
              </span>
            </p>
          </div>

          {/* Logo badge — bottom-right */}
          <div className="absolute -bottom-5 right-4 sm:right-6
                          w-16 h-16 sm:w-20 sm:h-20
                          bg-white rounded-xl shadow-lg
                          flex items-center justify-center p-2">
            <img src={logo} alt="AWSM Logo" className="w-full h-full object-contain" />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default WelcomeSection;
