import { useState } from "react";
import Logo from "./Logo";

function Navbar({ onEarlyAccess }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Problem", href: "#problem" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Upcoming", href: "#cloud" },
    { label: "Feedback", href: "#feedback" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 md:py-5">
        <a href="#" className="transition duration-300 hover:scale-[1.02]">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 text-sm lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-medium text-slate-600 transition-all duration-300 hover:-translate-y-[1px] hover:text-sky-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onEarlyAccess}
            className="hidden rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-sky-200 sm:inline-flex"
          >
            Get Early Access
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-700 transition hover:border-sky-300 hover:text-sky-500 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-sky-50 hover:text-sky-500"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                onEarlyAccess();
              }}
              className="rounded-2xl bg-sky-500 px-4 py-3 text-center text-white transition hover:bg-sky-400"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
