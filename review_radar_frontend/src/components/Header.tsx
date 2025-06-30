import React from "react";

/**
 * Header component: Displays application title and search bar slot.
 *
 * @param children - React children (typically the search bar)
 */
// PUBLIC_INTERFACE
const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <header
    className="w-full py-4 px-4 md:px-8 flex items-center justify-between border-b"
    style={{ background: "var(--color-background)" }}
  >
    <h1 className="text-2xl font-bold tracking-tight text-[color:var(--color-primary,#22577A)]">
      Review Radar
    </h1>
    <div className="flex-1 flex justify-center ml-8">{children}</div>
  </header>
);

export default Header;
