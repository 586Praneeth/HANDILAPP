import { motion } from "framer-motion";
import Reveal from "./Reveal";

import chat from "../assets/screens/chat.png";
import addbio from "../assets/screens/addbio.png";
import onboarding from "../assets/screens/onboarding.png";

const principles = [
  {
    number: "01",
    title: "Organize What Matters",
    text: "Everything important shouldn’t disappear into endless conversations.",
    description:
      "Store, revisit, and find messages, files, photos, and notes when you need them.",
    image: chat,
    position: "xl:left-0 xl:top-16",
  },
  {
    number: "02",
    title: "Connect Your Way",
    text: "Choose how you connect with people while sharing only what you’re comfortable sharing.",
    description:
      "Communication should be easy without compromising privacy.",
    image: onboarding,
    position: "xl:right-0 xl:top-16",
  },
  {
    number: "03",
    title: "Stay in Control",
    text: "Your conversations should work on your terms—from how you communicate to how you manage your data.",
    description:
      "Make clear choices about privacy, storage, identity, and communication.",
    image: addbio,
    position: "xl:left-0 xl:bottom-10",
  },
  {
    number: "04",
    title: "Designed for Everyday Life",
    text: "Whether it’s family, work, planning, or memories, Handil is built for the way people communicate today.",
    description:
      "Keep conversations useful, personal, and easy to return to.",
    image: chat,
    position: "xl:right-0 xl:bottom-10",
  },
];

function WhatIsHandil() {
  return (
    <section
      id="why-handil"
      className="relative overflow-hidden bg-[#f8fbff] px-6 py-28 md:px-12"
    >
      <div className="absolute left-[-170px] top-32 h-[440px] w-[440px] rounded-full bg-sky-200/40 blur-[150px]" />

      <div className="absolute right-[-170px] bottom-20 h-[440px] w-[440px] rounded-full bg-cyan-200/35 blur-[160px]" />

      <div className="relative mx-auto max-w-[1600px]">
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

        <div className="relative mx-auto mt-20 max-w-[1350px]">
          {/* DESKTOP FLOATING CARDS */}
          <div className="hidden xl:block">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`absolute z-20 w-[380px] ${principle.position}`}
              >
                <PrincipleCard principle={principle} />
              </motion.div>
            ))}
          </div>

          {/* CENTER PHONE */}
          <div className="relative z-10 flex min-h-[760px] items-center justify-center">
            <div className="absolute h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-[150px]" />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 w-[270px] rounded-[48px] border border-slate-200 bg-white p-3 shadow-[0_40px_120px_rgba(14,165,233,0.28)] sm:w-[310px]"
            >
              <div className="overflow-hidden rounded-[38px] bg-slate-100">
                <img
                  src={chat}
                  alt="Handil conversations"
                  className="h-[570px] w-full object-contain sm:h-[640px]"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 z-30 rounded-[24px] border border-sky-100 bg-white/90 px-5 py-4 shadow-xl backdrop-blur"
            >
              <p className="text-sm font-black text-slate-950">
                Built for real conversations
              </p>

              <p className="mt-1 text-xs font-semibold text-sky-500">
                Private • Organized • Yours
              </p>
            </motion.div>
          </div>

          {/* MOBILE / TABLET CARDS */}
          <div className="relative z-30 grid gap-6 md:grid-cols-2 xl:hidden">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <PrincipleCard principle={principle} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({ principle }) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/95 p-7 shadow-xl shadow-sky-100/50 backdrop-blur-xl">
      <div className="absolute right-[-50px] top-[-50px] h-36 w-36 rounded-full bg-sky-200/35 blur-3xl transition group-hover:bg-sky-300/50" />

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 font-black text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
            {principle.number}
          </div>

          <div className="h-16 w-16 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
            <img
              src={principle.image}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <h3 className="mt-6 text-2xl font-black leading-tight text-slate-950">
          {principle.title}
        </h3>

        <p className="mt-4 font-semibold leading-7 text-slate-700">
          {principle.text}
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          {principle.description}
        </p>
      </div>
    </article>
  );
}

export default WhatIsHandil;