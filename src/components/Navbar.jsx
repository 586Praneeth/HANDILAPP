import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
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
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:py-5">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="min-w-0 transition duration-300 hover:scale-[1.02]"
          aria-label="Go to Handil home page"
        >
          <div className="scale-[0.82] origin-left sm:scale-100">
            <Logo />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-7 text-sm lg:flex">
          {navItems.map((item) => renderNavItem(item))}
        </div>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Hide Careers button on very small screens */}
          <Link
            to="/careers"
            onClick={() => {
              closeMenu();

              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="hidden rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-600 sm:inline-flex sm:px-6"
          >
            Careers
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-700 transition hover:border-sky-300 hover:text-sky-500 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-4 py-5 shadow-xl sm:px-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3 text-sm font-semibold text-slate-700">
            {navItems.map((item) => renderNavItem(item, true))}

            {/* Careers always available inside mobile menu */}
            <Link
              to="/careers"
              onClick={closeMenu}
              className="mt-1 inline-flex justify-center rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-600"
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