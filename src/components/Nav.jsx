
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sprout } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/#home", hash: "#home" },
  { name: "About", path: "/#about", hash: "#about" },
  { name: "Products", path: "/#products", hash: "#products" },
  {
    name: "Wellness Programs",
    path: "/#wellness-programs",
    hash: "#wellness-programs",
  },
  {
    name: "Business Opportunity",
    path: "/#business-opportunity",
    hash: "#business-opportunity",
  },
  { name: "Contact", path: "/#contact", hash: "#contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const activeHash = location.hash || "#home";

  const getLinkClass = (link) => {
    const isActive =
      location.pathname === "/" && activeHash === link.hash;

    return `relative whitespace-nowrap py-2 text-[15px] font-medium
      transition-colors 2xl:text-[17px]
      ${
        isActive
          ? "font-bold text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-primary"
          : "text-body hover:text-primary"
      }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      <nav className="mx-auto flex h-17 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">

        {/* Logo */}
        <Link
          to="/#home"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 flex-col leading-none text-dark-green"
        >
          <span className="flex items-center text-[27px] font-bold tracking-tight sm:text-3xl lg:text-[38px]">
            Herbalife
            <Sprout className="ml-0.5 h-5 w-5 -translate-y-2 sm:h-6 sm:w-6" />
          </span>

          <span className="mt-1 text-[13px] font-medium sm:text-sm lg:text-[17px]">
            Independent Associate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 xl:flex 2xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to={link.path}
              className={getLinkClass(link)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Join Button - Desktop */}
        <Link
          to="/#contact"
          className="hidden shrink-0 rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition hover:bg-dark-green xl:inline-flex"
        >
          Join with Me
        </Link>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-dark-green hover:bg-primary-dull xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile / Tablet Navigation */}
      {menuOpen && (
        <div className="border-t border-primary-dull bg-white px-5 py-4 shadow-lg xl:hidden">

          <div className="mx-auto flex max-w-[1400px] flex-col gap-1">

            {navLinks.map((link) => {
              const isActive =
                location.pathname === "/" && activeHash === link.hash;

              return (
                <Link
                  key={link.hash}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-[16px] font-medium transition
                    ${
                      isActive
                        ? "bg-primary-dull font-bold text-primary"
                        : "text-body hover:bg-primary-dull hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-primary px-6 py-3 text-center font-semibold text-white transition hover:bg-dark-green"
            >
              Join with Me
            </Link>

          </div>
        </div>
      )}

    </header>
  );
};

export default Nav;
