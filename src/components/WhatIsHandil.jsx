import { motion } from "framer-motion";
import Reveal from "./Reveal";

import chat from "../assets/screens/chat.png";

const principles = [
  {
    number: "01",
    title: "Organize What Matters",
    text: "Everything important shouldn’t disappear into endless conversations.",
    description:
      "Store, revisit, and find messages, files, photos, and notes when you need them.",
  },
  {
    number: "02",
    title: "Connect Your Way",
    text: "Choose how you connect with people while sharing only what you’re comfortable sharing.",
    description: "Communication should be easy without compromising privacy.",
  },
  {
    number: "03",
    title: "Stay in Control",
    text: "Your conversations should work on your terms—from how you communicate to how you manage your data.",
    description:
      "Make clear choices about privacy, storage, identity, and communication.",
  },
  {
    number: "04",
    title: "Designed for Everyday Life",
    text: "Whether it’s family, work, planning, or memories, Handil is built for the way people communicate today.",
    description: "Keep conversations useful, personal, and easy to return to.",
  },
];

function WhatIsHandil() {
  return (
    <section
      id="why-handil"
      className="relative overflow-hidden bg-[#f8fbff] px-6 py-28 md:px-12"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-170px] top-32 h-[440px] w-[440px] rounded-full bg-sky-200/40 blur-[150px]" />

      <div className="absolute right-[-170px] bottom-20 h-[440px] w-[440px] rounded-full bg-cyan-200/35 blur-[160px]" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* SECTION HEADING */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-500">
              WHY HANDIL
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Built around what matters.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Handil is designed around the way conversations actually fit into
              everyday life—with more organization, more privacy, and more
              control.
            </p>
          </div>
        </Reveal>

        {/* DESKTOP LAYOUT */}
        <div className="mt-20 hidden items-center gap-12 xl:grid xl:grid-cols-[1fr_360px_1fr]">
          {/* LEFT CARDS */}
          <div className="space-y-10">
            <Reveal>
              <PrincipleCard principle={principles[0]} />
            </Reveal>

            <Reveal delay={0.1}>
              <PrincipleCard principle={principles[2]} />
            </Reveal>
          </div>

          {/* CENTER PHONE */}
          <PhoneMockup />

          {/* RIGHT CARDS */}
          <div className="space-y-10">
            <Reveal>
              <PrincipleCard principle={principles[1]} />
            </Reveal>

            <Reveal delay={0.1}>
              <PrincipleCard principle={principles[3]} />
            </Reveal>
          </div>
        </div>

        {/* TABLET AND MOBILE LAYOUT */}
        <div className="mt-16 xl:hidden">
          <PhoneMockup />

          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.07}>
                <PrincipleCard principle={principle} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute top-1/2 h-[470px] w-[470px] -translate-y-1/2 rounded-full bg-sky-300/25 blur-[140px]" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-[270px] rounded-[46px] border border-slate-200 bg-white p-3 shadow-[0_40px_110px_rgba(14,165,233,0.25)] sm:w-[310px]"
      >
        <div className="overflow-hidden rounded-[36px] bg-slate-100">
          <img
            src={chat}
            alt="Handil conversations"
            className="h-[560px] w-full object-contain sm:h-[620px]"
          />
        </div>
      </motion.div>

      {/* PHONE BADGE */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-3 z-30 rounded-[20px] border border-sky-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
      >
        <p className="text-xs font-black text-slate-950">
          Built for real conversations
        </p>

        <p className="mt-1 text-[11px] font-semibold text-sky-500">
          Private • Organized • Yours
        </p>
      </motion.div>
    </div>
  );
}

function PrincipleCard({ principle }) {
  return (
    <motion.article
      whileHover={{ y: -7, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group relative min-h-[270px] overflow-hidden rounded-[32px] border border-sky-100 bg-white/95 p-8 shadow-xl shadow-sky-100/50 backdrop-blur-xl"
    >
      <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-sky-200/35 blur-3xl transition group-hover:bg-sky-300/50" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
          {principle.number}
        </div>

        <h3 className="mt-7 text-2xl font-black leading-tight text-slate-950">
          {principle.title}
        </h3>

        <p className="mt-5 font-semibold leading-7 text-slate-700">
          {principle.text}
        </p>

        <p className="mt-4 leading-7 text-slate-500">{principle.description}</p>
      </div>
    </motion.article>
  );
}

export default WhatIsHandil;
