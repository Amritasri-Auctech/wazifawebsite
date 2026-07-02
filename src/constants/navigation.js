/**
 * constants/navigation.js
 * All static navigation menu data — navbar items, dropdowns, footer links.
 * Agar menu change karna ho toh sirf yahan edit karo, component chhona nahi padega.
 */

// ── Main Navbar Items ────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Anjuman", path: "/about" },
  { label: "Office Bearers", path: "/office-bearers" },
  {
    label: "Members",
    path: "/members",
    dropdown: [
      { label: "Umoomi Member", path: "/members/umoomi" },
      { label: "Dawami Member", path: "/members/dawami" },
      { label: "Life Member", path: "/members/life" },
    ],
  },
  { label: "Namzad Fund", path: "/namzad-fund" },
  { label: "Wazifadar", path: "/wazifadar" },
  {
    label: "Executive",
    path: "/executive",
    dropdown: [
      { label: "Mansabi Member", path: "/executive/mansabi" },
      { label: "Elected Member", path: "/executive/elected" },
      { label: "Mohsin-e-Anjuman", path: "/executive/mohsin" },
      { label: "Sarparst-e-Anjuman", path: "/executive/sarparst" },
    ],
  },
  { label: "Jobs & Career", path: "/jobs", badge: "NEW" },
  { label: "Contact Us", path: "/contact" },
];

// ── Footer – Important Links ─────────────────────────────────────────
export const FOOTER_IMPORTANT_LINKS = [
  { label: "Anjuman At Glance", path: "/about" },
  { label: "Corpus Meter", path: "/corpus-meter" },
  { label: "By Laws", path: "/by-laws" },
  { label: "Local Secretaries", path: "/local-secretaries" },
  { label: "Other Scholarship Sites", path: "/scholarships" },
  { label: "Ijazah", path: "/ijazah" },
  { label: "Jobs & Career", path: "/jobs" },
];

// ── Footer – Publications ────────────────────────────────────────────
export const FOOTER_PUBLICATIONS = [
  { label: "Wazifa Guidance", path: "/publications/wazifa-guidance" },
  { label: "Wall Calander", path: "/publications/wall-calander" },
  { label: "Photo Gallary", path: "/publications/photo-gallary" },
];

// ── Footer – Downloads ───────────────────────────────────────────────
export const FOOTER_DOWNLOADS = [
  { label: "Voter List 2025", path: "/downloads/voter-list-2025" },
  { label: "Mohsin-e-Anjuman 2022", path: "/downloads/mohsin-e-anjuman-2022" },
  { label: "Shedule of Karkun Committee", path: "/downloads/karkun-committee" },
  { label: "Election-2025", path: "/downloads/election-2025" },
  { label: "Contact Us", path: "/contact" },
  { label: "Fard-e-Hisab", path: "/downloads/fard-e-hisab" },
];
