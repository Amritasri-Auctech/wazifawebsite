import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { SITE_CONFIG } from "../../constants/siteConfig";
import { SOCIAL_ICONS } from "../../constants/icons";

const TopBar = () => {
  const { contact, social, orgName } = SITE_CONFIG;

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src={logo}
            alt={orgName}
            className="h-[70px] w-auto object-contain"
          />
        </motion.a>

        {/* Right side: contact + social + donate */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">

          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 text-gray-600 hover:text-green-700 text-sm transition-colors"
          >
            <MdEmail size={16} className="text-green-700 flex-shrink-0" />
            <span>{contact.email}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:+91${contact.phone}`}
            className="flex items-center gap-1.5 text-gray-600 hover:text-green-700 text-sm transition-colors"
          >
            <FaPhone size={13} className="text-green-700 flex-shrink-0" />
            <span>{contact.phoneLabel}</span>
          </a>

          {/* Divider */}
          <div className="h-5 w-px bg-gray-300 hidden sm:block" />

          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            {social.map(({ platform, href, icon }) => (
              <a
                key={platform}
                href={href}
                aria-label={platform}
                className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-600
                           hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-200"
              >
                {SOCIAL_ICONS[icon]}
              </a>
            ))}
          </div>

          {/* Donate button */}
          <motion.a
            href="#donate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold
                       px-4 py-2 rounded transition-colors duration-200 flex-shrink-0"
          >
            Donate Now <span className="text-red-300 text-base leading-none">♥</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
