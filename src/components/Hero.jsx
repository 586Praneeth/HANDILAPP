import { motion } from "framer-motion";

import onboarding from "../assets/screens/onboarding.png";
import chat from "../assets/screens/chat.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-6 pb-24 pt-20 md:px-12">
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-140px] top-[-120px] h-[460px] w-[460px] rounded-full bg-sky-300/25 blur-[130px]" />

      <div className="absolute right-[-120px] top-[60px] h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="absolute bottom-[-180px] left-[35%] h-[460px] w-[460px] rounded-full bg-blue-200/25 blur-[160px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-500"
          >
            PRIVATE MESSAGING, REIMAGINED
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-4xl text-5xl font-black leading-[1.05] text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Private messaging.

            <span className="mt-2 block text-sky-500">
              Your data, your choice.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 max-w-2xl text-xl font-semibold leading-8 text-slate-700"
          >
            Messaging built for privacy, not surveillance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Handil helps you connect privately, organize what matters, and
            decide how your conversations and personal content are managed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Username-first", "Offline-first", "Local or Cloud"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  {item}
                </span>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-slate-200 bg-white/80 px-8 py-4 font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-200 hover:text-sky-500"
            >
              See How It Works
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT PHONE VISUAL */}
        <div className="relative flex min-h-[680px] items-center justify-center">
          <div className="absolute h-[520px] w-[520px] rounded-full bg-sky-300/30 blur-[140px]" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
          >
            {/* MAIN PHONE */}
            <div className="relative z-20 w-[270px] rounded-[46px] border border-slate-200 bg-white p-3 shadow-[0_40px_110px_rgba(14,165,233,0.28)] sm:w-[310px]">
              <div className="overflow-hidden rounded-[36px] bg-slate-100">
                <img
                  src={chat}
                  alt="Handil private messaging screen"
                  className="h-[560px] w-full object-contain sm:h-[640px]"
                />
              </div>
            </div>

            {/* SECONDARY PHONE */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-28 top-20 z-10 hidden w-[200px] rotate-[-9deg] rounded-[38px] border border-slate-200 bg-white p-3 shadow-2xl md:block"
            >
              <div className="overflow-hidden rounded-[30px] bg-slate-100">
                <img
                  src={onboarding}
                  alt="Handil private onboarding screen"
                  className="h-[440px] w-full object-contain"
                />
              </div>
            </motion.div>

            {/* PRIVACY BADGE */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-16 top-20 z-30 hidden rounded-[22px] border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur md:block"
            >
              <p className="text-sm font-black text-slate-950">
                Private Identity
              </p>

              <p className="mt-1 text-xs font-semibold text-sky-500">
                Connect on your terms
              </p>
            </motion.div>

            {/* DATA CHOICE BADGE */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-16 bottom-28 z-30 hidden rounded-[22px] border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur md:block"
            >
              <p className="text-sm font-black text-slate-950">
                Your Data
              </p>

              <p className="mt-1 text-xs font-semibold text-sky-500">
                Local • Cloud • Your Choice
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;