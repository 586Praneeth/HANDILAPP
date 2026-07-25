import { motion } from "framer-motion";
import Reveal from "./Reveal";

function RethinkingMessaging() {
  const highlights = [
    "Memories",
    "Documents",
    "Decisions",
    "Relationships",
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white px-6 py-28 md:px-12"
    >
      <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-sky-200/35 blur-[150px]" />

      <div className="absolute right-[-160px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-500">
              RETHINKING MESSAGING
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Messaging, redesigned for the way people communicate today.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Your conversations hold memories, documents, decisions, and
              relationships. Handil helps you organize them, protect your
              privacy, and stay in control of your communication.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-[#f8fbff] p-7 shadow-lg shadow-sky-100/50"
              >
                <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-sky-200/40 blur-2xl transition group-hover:bg-sky-300/60" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-sky-500 shadow-sm">
                    0{index + 1}
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Important parts of your life deserve more than disappearing
                    into endless conversations.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-4xl rounded-[36px] border border-sky-100 bg-sky-50/70 px-8 py-10 text-center shadow-xl shadow-sky-100/50 backdrop-blur md:px-14">
            <p className="text-2xl font-black leading-tight text-slate-950 md:text-3xl">
              Communication has changed.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Messaging should help you find what matters, connect comfortably,
              and make decisions about your data without unnecessary
              complexity.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default RethinkingMessaging;