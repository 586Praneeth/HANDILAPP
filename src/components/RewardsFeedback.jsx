import Reveal from "./Reveal"

function RewardsFeedback() {
  return (
    <section id="feedback" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
              FEEDBACK + REWARDS
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Help shape the future of Handil.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Handil grows with real user feedback. Tell us what to add,
              what to remove, and what would make messaging better for you.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-[40px] border border-slate-100 bg-white p-8 shadow-2xl">
              <h3 className="text-2xl font-black text-slate-950">
                Share your feedback
              </h3>

              <div className="mt-8 grid gap-5">
                <textarea
                  placeholder="What should we add to Handil?"
                  className="min-h-28 resize-none rounded-[24px] border border-slate-200 p-5 outline-none transition focus:border-sky-400"
                />

                <textarea
                  placeholder="What should we remove from Handil?"
                  className="min-h-28 resize-none rounded-[24px] border border-slate-200 p-5 outline-none transition focus:border-sky-400"
                />

                <textarea
                  placeholder="What problem do you face in current messaging apps?"
                  className="min-h-28 resize-none rounded-[24px] border border-slate-200 p-5 outline-none transition focus:border-sky-400"
                />

                <button className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1">
                  Submit Feedback
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-2xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
                Rewards System
              </p>

              <h3 className="text-4xl font-black leading-tight">
                Your feedback should matter.
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                Handil is designed with a reward-ready feedback system where users
                can help shape the product, suggest improvements, and unlock future
                perks as the platform grows.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Suggest what to add",
                  "Tell us what to remove",
                  "Earn future rewards",
                  "Help shape new features",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default RewardsFeedback