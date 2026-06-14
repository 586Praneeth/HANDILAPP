import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import logo from "../assets/logo/handil-logo.png";

function EarlyAccessModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("early_access").insert([
      {
        email: cleanEmail,
      },
    ]);

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        setMessage("You’re already on the early access list.");
        return;
      }

      setMessage(error.message || "Something went wrong. Please try again.");
      return;
    }

    setEmail("");
    setMessage("You’re on the list. We’ll notify you when Handil launches.");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 px-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-[36px] bg-white p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500 hover:bg-slate-200"
            >
              ×
            </button>

            <img
              src={logo}
              alt="Handil"
              className="mx-auto h-20 w-20 object-contain"
            />

            <h2 className="mt-6 text-center text-3xl font-black text-slate-950">
              Join Early Access
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-center leading-7 text-slate-600">
              Be among the first to try Handil. We’ll notify you when the app
              launches.
            </p>

            <div className="mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-400"
              />

              {message && (
                <p
                  className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
                    message.includes("list") || message.includes("already")
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-5 w-full rounded-full bg-sky-500 px-6 py-4 font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Joining..." : "Notify Me"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EarlyAccessModal;