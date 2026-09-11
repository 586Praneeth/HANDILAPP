import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import addbio from "../assets/screens/addbio.png";
import onboarding from "../assets/screens/onboarding.png";
import chat from "../assets/screens/chat.png";

const steps = [
  {
    title: "Connect Privately",
    text: "Connect with people without making your phone number the center of every interaction.",
    badge: "Private Identity",
    image: addbio,
  },
  {
    title: "Share Effortlessly",
    text: "Use usernames or QR codes to start conversations in seconds.",
    badge: "Username + QR",
    image: onboarding,
  },
  {
    title: "Stay Organized",
    text: "Conversations become easier to manage with tools designed for everyday communication.",
    badge: "Organized Conversations",
    image: chat,
  },
  {
    title: "Your Data, Your Choice",
    text: "Choose how your conversations and media are managed, with options that fit your needs.",
    badge: "Local • Cloud",
    image: chat,
  },
];

function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-6 sm:py-24 md:px-12 md:py-28"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-180px] top-10 h-[460px] w-[460px] rounded-full bg-sky-500/15 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-60px] right-[-180px] h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
            HOW HANDIL WORKS
          </p>

          <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Connect your way. Control your data.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
            Every part of Handil is designed to give you simpler connections,
            clearer organization, and better control over how your communication
            works.
          </p>

          <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
            {steps.map((step, index) => {
              const selected = active === index;

              return (
                <motion.button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  whileHover={{ x: 4 }}
                  className={`w-full rounded-[24px] border p-5 text-left transition-all duration-300 sm:rounded-[30px] sm:p-7 ${
                    selected
                      ? "border-sky-400 bg-sky-500/10 shadow-xl shadow-sky-950/30"
                      : "border-slate-800 bg-slate-900/70 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-black transition-all sm:h-12 sm:w-12 ${
                        selected
                          ? "scale-105 bg-sky-500 text-white shadow-lg shadow-sky-500/30 sm:scale-110"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      0{index + 1}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-black text-white sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:mt-3 sm:text-base sm:leading-7">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* PHONE VISUAL */}
        <div className="relative flex w-full justify-center overflow-hidden py-4">
          <div className="pointer-events-none absolute h-[360px] w-[360px] rounded-full bg-sky-500/20 blur-[120px] sm:h-[520px] sm:w-[520px] sm:blur-[150px]" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-full max-w-[280px] rounded-[40px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur sm:max-w-[330px] sm:rounded-[48px]"
          >
            <div className="overflow-hidden rounded-[32px] bg-slate-900 sm:rounded-[38px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[active].title}
                  src={steps[active].image}
                  alt={steps[active].title}
                  initial={{ opacity: 0, y: 22, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -22, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="h-auto max-h-[590px] w-full object-contain sm:h-[680px] sm:max-h-none"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ACTIVE BADGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[active].badge}
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-5 z-30 max-w-[90%] rounded-[20px] border border-white/10 bg-slate-900/75 px-4 py-3 text-center shadow-xl backdrop-blur-xl sm:bottom-8 sm:rounded-[24px] sm:px-6 sm:py-4"
            >
              <p className="text-xs font-black text-sky-300 sm:text-sm">
                {steps[active].badge}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* DESKTOP BADGES */}
          <div className="absolute -left-4 top-28 hidden rounded-[22px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl lg:block">
            <p className="text-sm font-semibold text-white">
              Private by design
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Identity on your terms
            </p>
          </div>

          <div className="absolute -right-4 bottom-28 hidden rounded-[22px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl lg:block">
            <p className="text-sm font-semibold text-white">
              Built for everyday life
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Simple, useful, intentional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;