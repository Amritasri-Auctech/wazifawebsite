/**
 * constants/icons.jsx
 * Centralized icon maps — keeps JSX out of plain .js constant files.
 * Import the map you need and look up by iconKey.
 */
import React from "react";
import { FiUsers, FiHeart, FiBriefcase, FiBook } from "react-icons/fi";
import { MdVolunteerActivism, MdFamilyRestroom } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ── Stat section icons ───────────────────────────────────────────────
export const STAT_ICONS = {
  users:     <FiUsers size={28} />,
  heart:     <FaHandHoldingHeart size={28} />,
  briefcase: <FiBriefcase size={28} />,
  book:      <FiBook size={28} />,
};

// ── Service card icons ───────────────────────────────────────────────
export const SERVICE_ICONS = {
  volunteer: <MdVolunteerActivism size={36} />,
  handHeart: <FaHandHoldingHeart size={36} />,
  users:     <FiUsers size={36} />,
  family:    <MdFamilyRestroom size={36} />,
  briefcase: <FiBriefcase size={36} />,
  heart:     <FiHeart size={36} />,
};

// ── Social icons (used in TopBar & Footer) ───────────────────────────
export const SOCIAL_ICONS = {
  facebook:  <FaFacebookF size={13} />,
  x:         <FaXTwitter size={13} />,
  linkedin:  <FaLinkedinIn size={13} />,
  instagram: <FaInstagram size={13} />,
  youtube:   <FaYoutube size={13} />,
};
