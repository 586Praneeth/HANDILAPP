import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer({ onEarlyAccess }) {
  return (
    <footer className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-12">
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Logo />

            <p className="mt-8 max-w-sm leading-8 text-slate-400">
              Private messaging built for the way people communicate today—with
              more organization, more privacy, and clearer control over personal
              data.
            </p>

            <button
              type="button"
              onClick={() => onEarlyAccess?.()}
              className="mt-8 rounded-full bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-950/40 transition hover:-translate-y-1 hover:bg-sky-400"
            >
              Get Early Access
            </button>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Product
            </h3>

            <ul className="space-y-5 text-slate-300">
              <li>
                <a href="/#features" className="transition hover:text-sky-400">
                  Features
                </a>
              </li>

              <li>
                <a
                  href="/#why-handil"
                  className="transition hover:text-sky-400"
                >
                  Why Handil
                </a>
              </li>

              <li>
                <a
                  href="/#how-it-works"
                  className="transition hover:text-sky-400"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a href="/#security" className="transition hover:text-sky-400">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Company
            </h3>

            <ul className="space-y-5 text-slate-300">
              <li>
                <Link to="/careers" className="transition hover:text-sky-400">
                  Careers
                </Link>
              </li>

              <li>
                <a href="/#feedback" className="transition hover:text-sky-400">
                  Feedback
                </a>
              </li>

              <li>
                <a href="/#faq" className="transition hover:text-sky-400">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-sky-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* TRUST */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Trust
            </h3>

            <ul className="space-y-5 text-slate-300">
              <li>
                <a href="#" className="transition hover:text-sky-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-400">
                  Terms
                </a>
              </li>

              <li>
                <a href="/#security" className="transition hover:text-sky-400">
                  Data Control
                </a>
              </li>
            </ul>
          </div>

          {/* USE HANDIL */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Use Handil
            </h3>

            <ul className="space-y-5 text-slate-300">
              <li>
                <a href="#" className="transition hover:text-sky-400">
                  Android
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-400">
                  iPhone
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-400">
                  Web App
                </a>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => onEarlyAccess?.()}
                  className="text-left transition hover:text-sky-400"
                >
                  Early Access
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 border-t border-slate-800 pt-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="text-slate-500">
              © 2026 Handil. Private messaging. Your data, your choice.
            </p>

            <div className="flex gap-5">
              <a
                href="#"
                aria-label="Handil on Instagram"
                className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-sky-500 hover:text-sky-400"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                aria-label="Handil on Twitter"
                className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-sky-500 hover:text-sky-400"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                aria-label="Handil on Facebook"
                className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-sky-500 hover:text-sky-400"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                aria-label="Handil on YouTube"
                className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-sky-500 hover:text-sky-400"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;