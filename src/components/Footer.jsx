import React from "react";
import { Link } from "react-router-dom";
import {
  FOOTER_IMPORTANT_LINKS,
  FOOTER_PUBLICATIONS,
  FOOTER_DOWNLOADS,
} from "../constants/navigation";
import { SITE_CONFIG } from "../constants/siteConfig";

// ── Two-tone column heading ──────────────────────────────────────────
const ColHeading = ({ first, rest }) => (
  <h3 className="text-xs font-bold tracking-[0.18em] uppercase mb-5">
    <span className="text-[#c8e64c]">{first}</span>
    <span className="text-white">{rest}</span>
  </h3>
);

// ── Link list ────────────────────────────────────────────────────────
const LinkList = ({ items }) => (
  <ul className="space-y-[9px]">
    {items.map(({ label, path }) => (
      <li key={label}>
        <Link
          to={path}
          className="text-[11px] text-gray-400 hover:text-[#c8e64c] tracking-[0.08em] uppercase transition-colors duration-150"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

// ── Footer ───────────────────────────────────────────────────────────
const Footer = () => {
  const { orgName, foundedYear, contact, maintainedBy } = SITE_CONFIG;

  return (
    <footer className="bg-[#111111] text-gray-300">

      {/* ── Main grid ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-12 sm:py-16
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Col 1 – Important Links */}
        <div>
          <ColHeading first="IMPORTANT " rest="LINKS" />
          <LinkList items={FOOTER_IMPORTANT_LINKS} />
        </div>

        {/* Col 2 – Publications */}
        <div>
          <ColHeading first="PUBLI" rest="CATIONS" />
          <LinkList items={FOOTER_PUBLICATIONS} />
        </div>

        {/* Col 3 – Downloads */}
        <div>
          <ColHeading first="DOWN" rest="LOADS" />
          <LinkList items={FOOTER_DOWNLOADS} />
        </div>

        {/* Col 4 – Address */}
        <div>
          <ColHeading first="ADD" rest="RESS" />
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-gray-500 tracking-wide uppercase mb-3 block hover:text-[#c8e64c] transition-colors"
          >
            Click for Direction
          </a>
          <address className="not-italic text-[13px] text-gray-300 leading-7">
            {contact.address.line1},<br />
            {contact.address.line2}–<br />
            {contact.address.pincode} ({contact.address.state}) {contact.address.country}
          </address>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <hr className="border-gray-800" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-5
                      text-center text-[11px] text-gray-500 tracking-wide">
        © {foundedYear}-{new Date().getFullYear()} {orgName}. All rights reserved | Maintained by&nbsp;
        <a
          href={maintainedBy.href}
          className="text-[#c8e64c] hover:underline transition-colors"
        >
          {maintainedBy.label}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
