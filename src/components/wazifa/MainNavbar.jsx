import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS as navItems } from "../../constants/navigation";

// ── Dropdown Menu ──────────────────────────────────────────────────
const DropdownMenu = ({ items, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.ul
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.18 }}
        className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg border border-gray-100 rounded z-50 overflow-hidden"
      >
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-700 hover:text-white transition-colors duration-150"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
);

// ── Main Navbar Component ──────────────────────────────────────────
const MainNavbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav ref={navRef} className="w-full bg-[#1a1a1a] sticky top-0 z-40 shadow-md">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* ── Desktop Nav ── */}
        <ul className="hidden lg:flex items-center">
          {navItems.map((item) => {
            const active = isActive(item.path);
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const dropOpen = openDropdown === item.label;

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-4 text-[13px] font-medium tracking-wide uppercase whitespace-nowrap transition-colors duration-150
                    ${active
                      ? "bg-green-600 text-white"
                      : "text-gray-200 hover:bg-green-600 hover:text-white"
                    }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-none">
                      {item.badge}
                    </span>
                  )}
                  {hasDropdown && (
                    <FiChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {hasDropdown && (
                  <DropdownMenu items={item.dropdown} isOpen={dropOpen} />
                )}
              </li>
            );
          })}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="text-white font-semibold text-sm tracking-wide uppercase">Menu</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            className="text-white p-1"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-[#111] overflow-hidden"
          >
            <ul className="flex flex-col border-t border-gray-700">
              {navItems.map((item) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const expanded = mobileExpanded === item.label;
                const active = isActive(item.path);

                return (
                  <li key={item.label} className="border-b border-gray-800">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className={`flex-1 flex items-center gap-2 px-5 py-3 text-sm font-medium uppercase tracking-wide transition-colors
                          ${active ? "text-green-400" : "text-gray-300 hover:text-white"}`}
                      >
                        {item.label}
                        {item.badge && (
                          <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-none">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                      {hasDropdown && (
                        <button
                          onClick={() => setMobileExpanded(expanded ? null : item.label)}
                          className="px-4 py-3 text-gray-300 hover:text-white"
                          aria-label={`Expand ${item.label}`}
                        >
                          <FiChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile sub-items */}
                    <AnimatePresence>
                      {hasDropdown && expanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="bg-[#1e1e1e] overflow-hidden"
                        >
                          {item.dropdown.map((sub) => (
                            <li key={sub.path}>
                              <Link
                                to={sub.path}
                                className="block px-8 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-green-700 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavbar;
