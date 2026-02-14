import React from "react";
import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  theme: string;
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggle }) => {
  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "mailto:okoehimare@gmail.com" },
  ];

  return (
    <header className="header-sticky">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold tracking-tighter text-xl">
          {" "}
          <a href="#">JEFFERY.SYS</a>{" "}
        </div>

        {/* Nav & Toggle */}
        <nav className="flex items-center gap-6 md:gap-10">
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link text-xs font-bold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggle}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
