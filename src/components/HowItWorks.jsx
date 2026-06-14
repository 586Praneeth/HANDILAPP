import { motion, AnimatePresence } from "framer-motion";
import addbio from "../assets/screens/addbio.png";
import onboarding from "../assets/screens/onboarding.png";
import chat from "../assets/screens/chat.png";
import { useEffect, useState } from "react";
function HowItWorks() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Create Username",
      text: "No phone-number discovery. Build intentional identity.",
      image: addbio,
    },
    {
      title: "Connect by QR",
      text: "Share connections privately through QR or username.",
      image: onboarding,
    },
    {
      title: "Chat Smarter",
      text: "Notes, scheduling, previews, bookmarks, smarter tools.",
      image: chat,
    },
    {
      title: "Choose Local / Cloud",
      text: "Own where your conversations and media live.",
      image: chat,
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
<section id="how-it-works" className="bg-slate-950 px-6 py-32 text-white md:px-12">      <div className="mx-auto grid max-w-[1600px] items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 uppercase tracking-[0.3em] text-sky-400">
            HOW HANDIL WORKS
          </p>

          <h2 className="text-5xl font-black leading-tight">
            Messaging designed around intentional communication.
          </h2>

          <div className="mt-16 space-y-5">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`w-full rounded-[32px] border p-8 text-left transition-all duration-300 ${
                  active === index
                    ? "border-sky-400 bg-sky-500/10"
                    : "border-slate-800 bg-slate-900 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all duration-300

                ${
                    active === index
                    ? "bg-sky-500 shadow-lg shadow-sky-500/40 scale-110"
                    : "bg-slate-700 text-slate-300"
                }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>

                    <p className="mt-2 text-slate-400">{step.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />

          <div className="absolute -left-6 top-20 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl lg:block">
            <p className="text-sm font-semibold text-sky-300">
              Private Identity
            </p>
            <p className="mt-1 text-xs text-slate-400">@handil_user</p>
          </div>

          <div className="absolute -right-6 bottom-24 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl lg:block">
            <p className="text-sm font-semibold text-sky-300">Storage Choice</p>
            <p className="mt-1 text-xs text-slate-400">Local ↔ Cloud</p>
          </div>

          <div className="relative rounded-[48px] bg-white/5 p-10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={steps[active].title}
                src={steps[active].image}
                alt={steps[active].title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="h-[700px] rounded-[36px] object-contain"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
