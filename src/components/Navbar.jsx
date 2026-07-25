import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ onEarlyAccess }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Why Handil", href: "#why-handil" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  const handleSectionClick = (event, href) => {
    closeMenu();

    if (location.pathname === "/") {
      return;
    }

    event.preventDefault();
    window.location.assign(`/${href}`);
  };

  const renderNavItem = (item, mobile = false) => {
    const commonClassName = mobile
      ? "rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-sky-50 hover:text-sky-500"
      : "relative font-medium text-slate-600 transition-all duration-300 hover:-translate-y-[1px] hover:text-sky-500";

    if (item.href.startsWith("/")) {
      return (
        <Link
          key={item.label}
          to={item.href}
          onClick={closeMenu}
          className={commonClassName}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        key={item.label}
        href={item.href}
        onClick={(event) => handleSectionClick(event, item.href)}
        className={commonClassName}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 md:py-5">
        <Link
          to="/"
          onClick={closeMenu}
          className="transition duration-300 hover:scale-[1.02]"
          aria-label="Go to Handil home page"
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-7 text-sm lg:flex">
          {navItems.map((item) => renderNavItem(item))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/careers"
            onClick={closeMenu}
            className="hidden rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-sky-200 sm:inline-flex"
          >
            Careers
          </Link>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-700 transition hover:border-sky-300 hover:text-sky-500 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
            {navItems.map((item) => renderNavItem(item, true))}

            <Link
              to="/careers"
              onClick={closeMenu}
              className="hidden rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-sky-200 sm:inline-flex"
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
