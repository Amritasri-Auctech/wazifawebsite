/**
 * constants/siteConfig.js
 * Global static site configuration — contact info, social links, org details.
 * Ek jagah change karo, poori site update ho jaayegi.
 */

export const SITE_CONFIG = {
  orgName: "Anjuman Wazifa-e-Sadat Wa Momineen",
  shortName: "AWSM",
  tagline: "Serving the Sadat & Momineen Community",
  foundedYear: 2017,

  contact: {
    email: "wazifaesadat@gmail.com",
    phone: "9997019772",
    phoneLabel: "9997019772 (HO)",
    address: {
      line1: "Wazifa Manzil",
      line2: "AhmedNagar, Aligarh",
      pincode: "202002",
      state: "U.P.",
      country: "India",
    },
    mapsUrl: "https://maps.google.com",
  },

  social: [
    { platform: "Facebook",  href: "#", icon: "facebook"  },
    { platform: "X",         href: "#", icon: "x"         },
    { platform: "LinkedIn",  href: "#", icon: "linkedin"  },
    { platform: "Instagram", href: "#", icon: "instagram" },
    { platform: "YouTube",   href: "#", icon: "youtube"   },
  ],

  maintainedBy: {
    label: "AWSM Digital Task Force",
    href: "#",
  },
};
