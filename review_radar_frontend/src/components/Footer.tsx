import React from "react";

/**
 * Footer navigation links for the application.
 */
// PUBLIC_INTERFACE
const Footer: React.FC = () => (
  <footer className="w-full py-4 px-4 md:px-8 border-t flex flex-col md:flex-row items-center justify-between text-xs bg-[var(--color-background)]">
    <div className="mb-2 md:mb-0 text-[color:var(--color-primary,#22577A)] font-semibold">
      &copy; {new Date().getFullYear()} Review Radar
    </div>
    <nav className="flex gap-6">
      <a
        className="hover:underline text-[color:var(--color-secondary,#38A3A5)]"
        href="#"
      >
        Home
      </a>
      <a
        className="hover:underline text-[color:var(--color-secondary,#38A3A5)]"
        href="#"
      >
        About
      </a>
      <a
        className="hover:underline text-[color:var(--color-accent,#F6B93B)]"
        href="#"
      >
        Privacy
      </a>
    </nav>
  </footer>
);

export default Footer;
