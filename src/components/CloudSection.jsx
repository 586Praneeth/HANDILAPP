import { motion } from "framer-motion";
import Reveal from "./Reveal";

const controlItems = [
  {
    number: "01",
    title: "Your conversations.",
    text: "Keep the communication that matters accessible, organized, and easy to return to.",
  },
  {
    number: "02",
    title: "Your memories.",
    text: "Photos, documents, messages, and shared moments should remain under your control.",
  },
  {
    number: "03",
    title: "Your storage.",
    text: "Choose whether your content stays on your device, in the cloud, or across both.",
  },
  {
    number: "04",
    title: "Your choice.",
    text: "Decide how your communication and personal content are managed without hidden compromises.",
  },
];

function CloudSection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-white px-6 py-28 md:px-12"
    >
      <div className="absolute left-[-180px] top-24 h-[460px] w-[460px] rounded-full bg-sky-200/35 blur-[160px]" />

      <div className="absolute right-[-180px] bottom-[-80px] h-[460px] w-[460px] rounded-full bg-cyan-200/30 blur-[160px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-500">
                CONTROL WITHOUT COMPROMISE
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Finally, you’re in control.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Communication should not force you into one storage model, one
                identity system, or one way of managing your personal content.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Local", "Cloud", "Hybrid"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-100 bg-sky-50 px-5 py-3 text-sm font-bold text-sky-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT CONTROL CARDS */}
          <div className="space-y-6">
            {controlItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-[34px] border border-slate-100 bg-[#f8fbff] p-7 shadow-xl shadow-sky-100/40 sm:p-9"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-sky-200/35 blur-3xl transition group-hover:bg-sky-300/50" />

                  <div className="relative flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-sky-500 shadow-sm transition group-hover:bg-sky-500 group-hover:text-white">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SIGNATURE BLUE CARD */}
        <Reveal delay={0.2}>
          <div className="relative mt-20 overflow-hidden rounded-[44px] bg-sky-500 px-8 py-12 text-white shadow-[0_35px_100px_rgba(14,165,233,0.35)] sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-white/15 blur-3xl" />

            <div className="absolute bottom-[-120px] left-[25%] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-100">
                  HANDIL PRINCIPLE
                </p>

                <h3 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  No nonsense data.
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-50">
                  Your communication should remain useful without becoming a
                  system built around surveillance, hidden ownership, or
                  unnecessary complexity.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/20 bg-white/10 px-7 py-6 backdrop-blur-xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">
                  The promise
                </p>

                <p className="mt-3 text-2xl font-black">
                  Control without compromise.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CloudSection;