import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";

const faqItems = [
  {
    question: "Does Handil store my chat history on its servers?",
    answer:
      "Handil is designed around local-first communication. Your conversations and messages remain available through your local app database, while the server supports account services, message delivery, and synchronization.",
  },
  {
    question: "Can I connect without sharing my phone number?",
    answer:
      "Handil is designed to support private identity options such as usernames and QR codes, allowing people to connect without making a phone number the center of every interaction.",
  },
  {
    question: "Can I use Handil when I am offline?",
    answer:
      "Yes. Existing conversations remain available from your device, and messages can appear immediately while offline. Pending messages can be synchronized when your internet connection returns.",
  },
  {
    question: "Where can my conversations and media be stored?",
    answer:
      "Handil is designed to support local device storage, cloud storage, or a combination of both, giving you control over how your conversations and media are managed.",
  },
  {
    question: "What is Handil Cloud?",
    answer:
      "Handil Cloud is an optional storage and synchronization experience for people who want access to supported content across devices while still having clear storage choices.",
  },
  {
    question: "Is Handil available for Android and iPhone?",
    answer:
      "Handil is being designed for modern mobile communication. Platform availability and launch details will be shared as the app becomes publicly available.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f8fbff] px-6 py-28 md:px-12"
    >
      <div className="absolute left-[-180px] top-20 h-[440px] w-[440px] rounded-full bg-sky-200/35 blur-[150px]" />

      <div className="absolute right-[-160px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[150px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-sky-500">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Clear answers. No hidden complexity.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Learn how Handil approaches identity, storage, privacy, offline
              communication, and everyday messaging.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-5">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <motion.article
                  layout
                  className={`overflow-hidden rounded-[30px] border bg-white shadow-lg transition ${
                    isOpen
                      ? "border-sky-200 shadow-sky-100/70"
                      : "border-slate-100 shadow-slate-100/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black transition ${
                          isOpen
                            ? "bg-sky-500 text-white"
                            : "bg-sky-50 text-sky-500"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <h3 className="text-lg font-black leading-7 text-slate-950 sm:text-xl">
                        {item.question}
                      </h3>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl transition ${
                        isOpen
                          ? "bg-sky-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-slate-100 px-6 pb-7 pt-6 sm:px-8">
                          <p className="max-w-4xl leading-8 text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 rounded-[34px] border border-sky-100 bg-white px-8 py-9 text-center shadow-xl shadow-sky-100/50">
            <p className="text-xl font-black text-slate-950">
              Still have questions?
            </p>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Join early access and stay informed as Handil moves closer to
              launch.
            </p>

            <a
              href="#feedback"
              className="mt-6 inline-flex rounded-full bg-sky-500 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-400"
            >
              Share Your Question
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;