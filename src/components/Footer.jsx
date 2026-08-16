import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 px-6 py-10 text-white md:px-12">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* FOOTER NAVIGATION */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold md:text-base"
        >
          <Link
            to="/"
            onClick={scrollToTop}
            className="transition hover:-translate-y-0.5 hover:text-cyan-200"
          >
            Home
          </Link>

          <Link
            to="/careers"
            onClick={scrollToTop}
            className="transition hover:-translate-y-0.5 hover:text-cyan-200"
          >
            Opportunities
          </Link>

          <Link
            to="/working-at-handil"
            onClick={scrollToTop}
            className="transition hover:-translate-y-0.5 hover:text-cyan-200"
          >
            How We Work
          </Link>

          <a
            href="/#feedback"
            className="transition hover:-translate-y-0.5 hover:text-cyan-200"
          >
            Feedback
          </a>

          <a
            href="/#faq"
            className="transition hover:-translate-y-0.5 hover:text-cyan-200"
          >
            FAQ
          </a>

          <Link
            to="/privacy-policy"
            onClick={scrollToTop}
            className="transition hover:-translate-y-0.5 hover:text-cyan-200"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            onClick={scrollToTop}
            className="transition hover:-translate-y-0.5 hover:text-cyan-200"
          >
            Terms
          </Link>
        </nav>

        {/* SOCIAL MEDIA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/company/handilapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Handil on LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white hover:text-blue-600"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://www.facebook.com/people/HandilApp/61593213819308/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Handil on Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white hover:text-blue-600"
          >
            <FaFacebookF size={19} />
          </a>

          <a
            href="https://www.instagram.com/handilapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Handil on Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white hover:text-violet-600"
          >
            <FaInstagram size={21} />
          </a>

          <a
            href="https://x.com/handilapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Handil on X"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white hover:text-slate-950"
          >
            <FaXTwitter size={20} />
          </a>

          <a
            href="https://www.youtube.com/@HandilApp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Handil on YouTube"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white hover:text-red-600"
          >
            <FaYoutube size={21} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Handil. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-white/60">
            Private communication. Clearer control. Built around trust.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;