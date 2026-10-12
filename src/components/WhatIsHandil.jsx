import { motion } from "framer-motion";
import Reveal from "./Reveal";

import chat from "../assets/screens/chat.png";

const evolutionPoints = [
  {
    number: "01",
    title: "Messaging has become more than chat.",
    text: "Conversations now carry photos, videos, documents, tickets, payment details, reminders, and memories.",
  },
  {
    number: "02",
    title: "Our information lives inside conversations.",
    text: "Messaging apps have become one of the main gateways to the digital information we use every day.",
  },
  {
    number: "03",
    title: "But most apps still behave like simple chat tools.",
    text: "Important information gets buried inside long conversations and becomes harder to find when you need it.",
  },
  {
    number: "04",
    title: "Communication should help people stay organized.",
    text: "Users should be able to manage what matters, revisit important information, and remove what no longer matters.",
  },
  {
    number: "05",
    title: "That’s where Handil is different.",
    text: "Handil combines messaging with built-in organization and data management, giving users more control over their communication and digital information.",
  },
];

const principles = [
  {
    number: "01",
    title: "Built-in Data Manager",
    text: "Messaging brings information in. Handil helps you decide what matters.",
    description:
      "Organize, find, and manage important messages, notes, files, photos, reminders, and shared information without letting everything disappear into endless conversations.",
  },
  {
    number: "02",
    title: "Connect Your Way",
    text: "Choose how you connect with people while sharing only what you’re comfortable sharing.",
    description:
      "Communication should be easy without compromising privacy.",
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
    description:
      "Keep conversations useful, personal, and easy to return to.",
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

        {/* MESSAGING HAS CHANGED */}
        <Reveal delay={0.08}>
          <div className="mx-auto mt-20 max-w-5xl text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-sky-500">
              MESSAGING HAS CHANGED
            </p>

            <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              The products we use to communicate should change with it.
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Messages are no longer just conversations. They carry the
              information we use every day. Handil is designed to help people
              manage that information, stay organized, and remain in control.
            </p>
          </div>
        </Reveal>

        {/* EVOLUTION POINTS */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-5">
          {evolutionPoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -7, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative h-full overflow-hidden rounded-[28px] border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50"
              >
                <div className="absolute right-[-35px] top-[-35px] h-24 w-24 rounded-full bg-sky-200/35 blur-2xl transition group-hover:bg-sky-300/50" />

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
                    {item.number}
                  </div>

                  <h4 className="mt-5 text-lg font-black leading-7 text-slate-950">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* EVERY MESSAGE MATTERS */}
        <Reveal delay={0.12}>
          <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-[42px] bg-slate-950 px-8 py-14 text-center text-white shadow-[0_35px_100px_rgba(15,23,42,0.28)] sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute left-[-80px] top-[-80px] h-64 w-64 rounded-full bg-sky-500/20 blur-[100px]" />

            <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-400">
                HANDIL PRINCIPLE
              </p>

              <h3 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                Every message matters.
              </h3>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                A message can become a reminder, a decision, a memory, a
                document, or something you need later. Handil helps you keep
                what matters organized, accessible, and under your control.
              </p>
            </div>
          </div>
        </Reveal>

        {/* PRINCIPLES HEADING */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-24 max-w-4xl text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-sky-500">
              BUILT DIFFERENTLY
            </p>

            <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Messaging that helps you manage what matters.
            </h3>
          </div>
        </Reveal>

        {/* DESKTOP LAYOUT */}
        <div className="mt-16 hidden items-center gap-12 xl:grid xl:grid-cols-[1fr_360px_1fr]">
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

        {/* TABLET + MOBILE */}
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
        className="relative z-20 w-full max-w-[270px] rounded-[46px] border border-slate-200 bg-white p-3 shadow-[0_40px_110px_rgba(14,165,233,0.25)] sm:max-w-[310px]"
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

        <p className="mt-4 leading-7 text-slate-500">
          {principle.description}
        </p>
      </div>
    </motion.article>
  );
}

export default WhatIsHandil;