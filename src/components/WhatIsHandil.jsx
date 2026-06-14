import { motion } from "framer-motion";
import Reveal from "./Reveal";

import onboarding from "../assets/screens/onboarding.png";
import chat from "../assets/screens/chat.png";
import addbio from "../assets/screens/addbio.png";

function WhatIsHandil() {
  const leftFeatures = [
    {
      title: "QR Connect",
      text: "Connect instantly with QR codes and usernames.",
      icon: "▦",
    },
    {
      title: "Scheduled Messages",
      text: "Plan messages and send them at the perfect time.",
      icon: "◷",
    },
    {
      title: "Important Messages",
      text: "Mark important chats and never miss them.",
      icon: "☆",
    },
  ];

  const rightFeatures = [
    {
      title: "Notes",
      text: "Jot down ideas and keep conversations organized.",
      icon: "▤",
    },
    {
      title: "Preview Messages",
      text: "Peek into messages without opening the chat.",
      icon: "◉",
    },
    {
      title: "More Features",
      text: "Cloud sync, disappearing messages, desktop and more.",
      icon: "↗",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8fbff] px-5 pb-36 pt-24 sm:px-6 md:px-10 lg:px-12"
    >
      <div className="absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-sky-200/40 blur-[130px]" />
      <div className="absolute right-[-140px] top-60 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 font-semibold uppercase tracking-[0.28em] text-sky-500">
              WHAT IS HANDIL
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Everything you need.
              <br />
              Nothing you don’t.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Smart features that make conversations simple, private and powerful.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14 grid items-center gap-10 xl:grid-cols-[340px_1fr_340px]">
          {/* LEFT CARDS */}
          <div className="order-2 grid gap-5 sm:grid-cols-2 xl:order-1 xl:grid-cols-1">
            {leftFeatures.map((item, index) => (
              <FeatureCard
                key={item.title}
                item={item}
                number={index + 1}
              />
            ))}
          </div>

          {/* PHONE AREA */}
          <div className="order-1 flex justify-center xl:order-2">
            <div className="relative flex min-h-[500px] w-full max-w-[720px] items-center justify-center sm:min-h-[560px] lg:min-h-[640px]">
              <div className="absolute bottom-8 h-12 w-[260px] rounded-full bg-sky-300/30 blur-xl sm:w-[360px]" />

              {/* CONNECTOR LINES - DESKTOP ONLY */}
              <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
                <FlowLine className="left-[-110px] top-[145px] w-[240px]" />
                <FlowLine className="left-[-90px] top-[295px] w-[210px]" />
                <FlowLine className="left-[-110px] top-[445px] w-[240px]" />

                <FlowLine className="right-[-110px] top-[145px] w-[240px]" reverse />
                <FlowLine className="right-[-90px] top-[295px] w-[210px]" reverse />
                <FlowLine className="right-[-110px] top-[445px] w-[240px]" reverse />
              </div>

              {/* LEFT PHONE */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[4%] z-10 hidden w-[180px] rotate-[-9deg] rounded-[34px] border border-slate-200 bg-white p-2 shadow-2xl md:block lg:w-[220px]"
              >
                <div className="overflow-hidden rounded-[26px] bg-slate-100">
                  <img
                    src={addbio}
                    alt="Username setup"
                    className="h-[380px] w-full object-contain lg:h-[460px]"
                  />
                </div>
              </motion.div>

              {/* RIGHT PHONE */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[4%] z-10 hidden w-[180px] rotate-[9deg] rounded-[34px] border border-slate-200 bg-white p-2 shadow-2xl md:block lg:w-[220px]"
              >
                <div className="overflow-hidden rounded-[26px] bg-slate-100">
                  <img
                    src={onboarding}
                    alt="Onboarding"
                    className="h-[380px] w-full object-contain lg:h-[460px]"
                  />
                </div>
              </motion.div>

              {/* MAIN PHONE */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-[250px] rounded-[44px] border border-slate-200 bg-white p-2.5 shadow-[0_35px_100px_rgba(14,165,233,0.25)] sm:w-[285px] lg:w-[320px]"
              >
                <div className="overflow-hidden rounded-[34px] bg-slate-100">
                  <img
                    src={chat}
                    alt="Handil chat"
                    className="h-[460px] w-full object-contain lg:h-[580px]"
                  />
                </div>
              </motion.div>

              {/* PRIVACY BADGE */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-75px] z-30 hidden max-w-md items-center gap-4 rounded-[24px] border border-slate-100 bg-white/90 px-5 py-4 shadow-xl shadow-sky-100/70 backdrop-blur-xl sm:flex"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-xl">
                  🛡️
                </div>

                <div>
                  <p className="font-black text-slate-950">Privacy First.</p>
                  <p className="text-sm text-slate-600">
                    Your data, your rules.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="order-3 grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            {rightFeatures.map((item, index) => (
              <FeatureCard
                key={item.title}
                item={item}
                number={index + 4}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item, number }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group rounded-[28px] border border-sky-100 bg-white/90 p-5 shadow-lg shadow-sky-100/60 backdrop-blur-xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-[52px] w-[52px] min-h-[52px] min-w-[52px] items-center justify-center rounded-2xl bg-sky-50 text-xl font-black text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
          {item.icon}
        </div>

        <div>
          <h3 className="text-base font-black text-slate-950">
            {number}. {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function FlowLine({ className = "", reverse = false }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative h-[2px] overflow-hidden">
        <div className="absolute inset-0 border-t-2 border-dashed border-sky-300/70" />

        <motion.div
          animate={{
            x: reverse ? ["100%", "-20%"] : ["-20%", "100%"],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-4px] h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.9)]"
        />
      </div>
    </div>
  );
}

export default WhatIsHandil;