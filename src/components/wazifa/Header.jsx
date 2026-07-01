import React from "react";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";

/**
 * Header
 * Combines the top-bar (logo, contact, social, donate)
 * and the main navigation bar into a single sticky header block.
 */
const Header = () => {
  return (
    <header className="w-full">
      <TopBar />
      <MainNavbar />
    </header>
  );
};

export default Header;
