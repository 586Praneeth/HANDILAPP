import Reveal from "./Reveal"

function DownloadCTA() {
  return (
    <section id="download" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[48px] bg-slate-950 px-8 py-20 text-center text-white shadow-2xl md:px-16">
        <Reveal>
          <div>
            <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-300">
              DOWNLOAD HANDIL
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Experience messaging built for the next generation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Join early access and be among the first users to experience
              privacy-first messaging, smarter conversation tools, and Handil Cloud.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white shadow-xl shadow-sky-900/30 transition hover:-translate-y-1">
                Join Early Access
              </button>

              <button className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-sky-300">
                Get Launch Updates
              </button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span>App Store coming soon</span>
              <span>•</span>
              <span>Google Play coming soon</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default DownloadCTA