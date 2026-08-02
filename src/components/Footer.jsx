import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer({ onEarlyAccess }) {
  const handleEarlyAccess = () => {
    onEarlyAccess?.();
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-12"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* MAIN FOOTER CONTENT */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <div className="inline-flex rounded-2xl bg-white p-3">
              <Logo />
            </div>

            <p className="mt-7 max-w-sm leading-8 text-slate-400">
              Private messaging built for the way people communicate today—with
              more organization, more privacy and clearer control over personal
              data.
            </p>

            <button
              type="button"
              onClick={handleEarlyAccess}
              className="mt-8 rounded-full bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-950/40 transition hover:-translate-y-1 hover:bg-sky-400"
            >
              Get Early Access
            </button>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Company
            </h3>

            <ul className="space-y-5 text-slate-300">
              <li>
                <Link
                  to="/careers"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="transition hover:text-sky-400"
                >
                  Careers
                </Link>
              </li>

              <li>
                <a
                  href="/#feedback"
                  className="transition hover:text-sky-400"
                >
                  Feedback
                </a>
              </li>

              <li>
                <a href="/#faq" className="transition hover:text-sky-400">
                  FAQ
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
                <Link
                  to="/privacy-policy"
                  className="transition hover:text-sky-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="transition hover:text-sky-400"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <a
                  href="/#security"
                  className="transition hover:text-sky-400"
                >
                  Security and Data Control
                </a>
              </li>
            </ul>
          </div>

          {/* GET HANDIL */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Get Handil
            </h3>

            <ul className="space-y-5 text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={handleEarlyAccess}
                  className="text-left transition hover:text-sky-400"
                >
                  Android Early Access
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={handleEarlyAccess}
                  className="text-left transition hover:text-sky-400"
                >
                  iPhone Early Access
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={handleEarlyAccess}
                  className="text-left transition hover:text-sky-400"
                >
                  Join the Waitlist
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-20 border-t border-slate-800 pt-10">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-slate-300">
              <Link
                to="/careers"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className="transition hover:text-sky-400"
              >
                Careers
              </Link>

              <a
                href="/#feedback"
                className="transition hover:text-sky-400"
              >
                Feedback
              </a>

              <a href="/#faq" className="transition hover:text-sky-400">
                FAQ
              </a>

             

              <Link
                to="/privacy-policy"
                className="transition hover:text-sky-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-sky-400"
              >
                Terms
              </Link>
            </div>

            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.linkedin.com/company/handil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Handil on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href="https://www.facebook.com/handil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Handil on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/handil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Handil on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://x.com/handil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Handil on X"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
              >
                <FaXTwitter size={19} />
              </a>

              <a
                href="https://www.youtube.com/@handil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Handil on YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Handil. All rights reserved.
            </p>

            <p className="text-center text-sm text-slate-600">
              Private communication. Clearer control. Built around trust.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;