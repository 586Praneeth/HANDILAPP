import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import logo from "../assets/logo/handil-logo.png";

function EarlyAccessModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setMessage("");
    setSuccess(false);

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setMessage("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("early_access").insert([
        {
          email: cleanEmail,
        },
      ]);

      if (error) {
        if (error.code === "23505") {
          setSuccess(true);
          setMessage("You’re already on the early access list.");
          return;
        }

        console.error("Early access signup error:", error);

        setMessage("Something went wrong. Please try again.");
        return;
      }

      setEmail("");
      setSuccess(true);
      setMessage("You’re on the list. We’ll notify you when Handil launches.");
    } catch (error) {
      console.error("Early access signup failed:", error);

      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-md sm:px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="early-access-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl sm:rounded-[36px] sm:p-8"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close early access form"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500 transition hover:bg-slate-200 sm:right-5 sm:top-5"
            >
              ×
            </button>

            {/* LOGO */}
            <img
              src={logo}
              alt="Handil"
              className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
            />

            <h2
              id="early-access-title"
              className="mt-5 text-center text-2xl font-black text-slate-950 sm:mt-6 sm:text-3xl"
            >
              Join Early Access
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Be among the first to try Handil. We’ll notify you when the app
              launches.
            </p>

            {/* FORM */}
            <form className="mt-7 sm:mt-8" onSubmit={handleSubmit}>
              <label htmlFor="early-access-email" className="sr-only">
                Email address
              </label>

              <input
                id="early-access-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (message) {
                    setMessage("");
                    setSuccess(false);
                  }
                }}
                placeholder="Enter your email address"
                disabled={loading}
                className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70 sm:px-5"
              />

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
                    success
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full rounded-full bg-sky-500 px-6 py-4 font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
              >
                {loading ? "Joining..." : "Notify Me"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EarlyAccessModal;