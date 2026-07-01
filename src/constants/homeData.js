/**
 * constants/homeData.js
 * Static content for the Home page sections.
 * Icons are NOT here (can't serialize JSX in plain JS) — icons map is in constants/icons.jsx
 */

// ── Hero Slides (image-only) ─────────────────────────────────────────
import bannerWebp       from "../assets/wazifa/banner.webp";
import banner1          from "../assets/wazifa/Banner1.jpg";
import careerBanner     from "../assets/wazifa/career-banner.jpg";
import mohsinMeerza     from "../assets/wazifa/Mohsinmeerza.jpg";

export const HERO_SLIDES = [
  { id: 1, img: bannerWebp,      alt: "Anjuman Wazifa-e-Sadat – Main Banner"          },
  { id: 2, img: banner1,         alt: "Anjuman Wazifa-e-Sadat – Banner"               },
  { id: 3, img: careerBanner,    alt: "Anjuman Wazifa-e-Sadat – Jobs & Career"        },
  { id: 4, img: mohsinMeerza,    alt: "Bani-e-Anjuman Syed Mohsin Meerza (1883–1929)" },
];

// ── Stats ────────────────────────────────────────────────────────────
export const HOME_STATS = [
  { iconKey: "users",     value: "5000+",  label: "Registered Members" },
  { iconKey: "heart",     value: "₹2 Cr+", label: "Aid Distributed"    },
  { iconKey: "briefcase", value: "200+",   label: "Jobs Facilitated"   },
  { iconKey: "book",      value: "300+",   label: "Students Supported" },
];

// ── Marquee notice text ──────────────────────────────────────────────
export const MARQUEE_NOTICES = [
  "🔔 Important Notice:Applications are now open for students of Classes 9 to 12. Submit your form within the prescribed timeline to be considered for the scholarship program.                        ",
];


// ── About – Feature Cards ────────────────────────────────────────────
export const ABOUT_FEATURES = [
  {
    title: "Transparency",
    desc: "All funds are audited and publicly reported to every member.",
  },
  {
    title: "Community First",
    desc: "Every decision is made with the community's best interest in mind.",
  },
  {
    title: "Zakat & Wazifa",
    desc: "Proper distribution of Zakat and wazifa as per Islamic principles.",
  },
  {
    title: "Member Support",
    desc: "24/7 support and guidance for all registered members and families.",
  },
];

// ── Services ─────────────────────────────────────────────────────────
// iconKey → maps to SERVICE_ICONS in constants/icons.jsx
export const HOME_SERVICES = [
  {
    iconKey: "volunteer",
    title: "Wazifa Aid",
    desc: "Regular monthly wazifa (stipend) is provided to eligible Sadat and Momineen families as per Anjuman guidelines.",
    link: "/wazifadar",
  },
  {
    iconKey: "handHeart",
    title: "Namzad Fund",
    desc: "A dedicated fund offering financial relief to registered members during emergencies, marriages, and other critical occasions.",
    link: "/namzad-fund",
  },
  {
    iconKey: "users",
    title: "Membership",
    desc: "Join our community to access welfare benefits, stay connected, and participate in Anjuman's charitable activities.",
    link: "/members/join",
  },
  {
    iconKey: "family",
    title: "Family Welfare",
    desc: "Comprehensive support programs for families in need — including healthcare assistance, education, and daily essentials.",
    link: "/about",
  },
  {
    iconKey: "briefcase",
    title: "Jobs & Career",
    desc: "Career guidance and job placement services for community members seeking employment and professional development.",
    link: "/jobs",
  },
  {
    iconKey: "heart",
    title: "Donation Drive",
    desc: "Transparent donation management ensuring every rupee reaches the intended beneficiaries within the community.",
    link: "#donate",
  },
];

// ── Static Notices (fallback if API fails) ───────────────────────────
export const STATIC_NOTICES = [
  {
    date: "June 28, 2026",
    title: "Wazifa Distribution for July 2026 – Schedule Announced",
    category: "Wazifa",
  },
  {
    date: "June 20, 2026",
    title: "New Job Openings Available – Apply Before July 15",
    category: "Jobs",
  },
  {
    date: "June 15, 2026",
    title: "Annual General Meeting – July 10, 2026 at Head Office",
    category: "Meeting",
  },
  {
    date: "June 5, 2026",
    title: "Namzad Fund Applications Now Open for Q3 2026",
    category: "Fund",
  },
];

// ── Static Testimonials (fallback if API fails) ──────────────────────
export const STATIC_TESTIMONIALS = [
  {
    name: "Syed Mohsin Ali",
    role: "Member since 2010",
    text: "Anjuman has been a pillar of support for our family. The wazifa and Namzad Fund helped us during our most difficult times. I am deeply grateful.",
  },
  {
    name: "Fatima Zahra",
    role: "Beneficiary",
    text: "The education support I received from Anjuman changed my life. I was able to complete my degree without financial worry. May Allah reward them.",
  },
  {
    name: "Mohammad Hussain",
    role: "Executive Member",
    text: "Being part of this Anjuman for 15 years has been a blessing. The transparency and dedication of the committee is truly commendable.",
  },
];
