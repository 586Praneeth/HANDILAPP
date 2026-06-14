import Reveal from "./Reveal"

function CloudSection() {
  const storageModes = [
    {
      title: "Local Device",
      text: "Keep chats, media, and documents on your device with offline-first access and device-level control.",
    },
    {
      title: "Handil Cloud",
      text: "Back up and sync photos, videos, documents, and conversations securely through Handil Cloud.",
    },
    {
      title: "Hybrid Choice",
      text: "Use local storage, cloud storage, or both depending on what you want to save and where.",
    },
  ]

  return (
    <section id="cloud" className="relative overflow-hidden bg-slate-50 px-6 py-28 md:px-12">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-sky-200/50 blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
                HANDIL CLOUD
              </p>

              <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                Your data should live where you choose.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Photos, videos, documents, and conversations can be stored locally,
                in Handil Cloud, or both — because storage should be a user decision,
                not a hidden system decision.
              </p>

              <div className="mt-10 space-y-4">
                {storageModes.map((mode, index) => (
                  <Reveal key={mode.title} delay={index * 0.08}>
                    <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-950">
                        {mode.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {mode.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[42px] border border-slate-100 bg-white p-8 shadow-2xl">
              <div className="rounded-[32px] bg-slate-950 p-8 text-white">
                <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
                  Storage Control
                </p>

                <div className="grid gap-4">
                  {["Photos", "Videos", "Documents", "Chats"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-white/10 p-4"
                    >
                      <span className="font-semibold">{item}</span>
                      <span className="rounded-full bg-sky-400/20 px-4 py-2 text-sm text-sky-200">
                        Local ↔ Cloud
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] bg-sky-500 p-6">
                  <h3 className="text-2xl font-black">No nonsense data.</h3>
                  <p className="mt-3 leading-7 text-sky-50">
                    Handil is designed around storage choice, ownership, and clear
                    control over personal content.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default CloudSection