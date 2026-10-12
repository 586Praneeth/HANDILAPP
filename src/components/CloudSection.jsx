import { motion } from "framer-motion";
import Reveal from "./Reveal";

const securityItems = [
  {
    number: "01",
    title: "End-to-End Encrypted",
    text: "Private messages are encrypted before they leave your device and decrypted only by the intended recipient.",
  },
  {
    number: "02",
    title: "Handil Can’t Read Your Messages",
    text: "Handil cannot decrypt or access the content of end-to-end encrypted private messages.",
  },
  {
    number: "03",
    title: "Protected in Transit",
    text: "Message content remains encrypted while it is being delivered between devices.",
  },
  {
    number: "04",
    title: "Private by Default",
    text: "End-to-end encryption is built into private messaging rather than offered as an optional mode.",
  },
];

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
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-180px] top-24 h-[460px] w-[460px] rounded-full bg-sky-200/35 blur-[160px]" />

      <div className="absolute right-[-180px] bottom-[-80px] h-[460px] w-[460px] rounded-full bg-cyan-200/30 blur-[160px]" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* SECURITY INTRO */}
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-500">
              SECURITY & PRIVACY
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Private conversations should stay private.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Handil uses end-to-end encryption to protect private messages.
              Message content is encrypted before it leaves your device and can
              only be decrypted by the intended recipient.
            </p>
          </div>
        </Reveal>

        {/* SECURITY CARDS */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
          {securityItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -7, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative h-full overflow-hidden rounded-[34px] border border-sky-100 bg-[#f8fbff] p-7 shadow-xl shadow-sky-100/50 sm:p-9"
              >
                <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-sky-200/35 blur-3xl transition group-hover:bg-sky-300/50" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-black text-sky-500 shadow-sm transition group-hover:bg-sky-500 group-hover:text-white">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* STRONG PRIVACY STATEMENT */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[44px] bg-slate-950 px-8 py-14 text-center text-white shadow-[0_35px_100px_rgba(15,23,42,0.28)] sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute left-[-80px] top-[-100px] h-72 w-72 rounded-full bg-sky-500/20 blur-[110px]" />

            <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-400">
                PRIVATE BY DESIGN
              </p>

              <h3 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Your private messages stay between you
                <span className="mt-2 block text-sky-400">
                  and the people you choose.
                </span>
              </h3>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Handil cannot read or decrypt the content of your end-to-end
                encrypted private messages.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CONTROL + STORAGE */}
        <div className="mt-28 grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-500">
                CONTROL WITHOUT COMPROMISE
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Your data. Your choice.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Privacy is more than encryption. Handil is designed to give you
                clearer control over how your conversations, media, and
                personal content are managed.
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

          {/* CONTROL CARDS */}
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

        {/* FINAL PRINCIPLE */}
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
                  Privacy without compromise.
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-50">
                  Your communication should remain private, useful, and under
                  your control without unnecessary access to your personal
                  conversations.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/20 bg-white/10 px-7 py-6 backdrop-blur-xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">
                  The promise
                </p>

                <p className="mt-3 text-2xl font-black">
                  Private by design.
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