import Reveal from "./Reveal"

function WhyHandil() {
  const groups = [
    {
      title: "Connect intentionally",
      text: "Username and QR-based connections with Accept, Block, and Pending states.",
      items: ["Username Connect", "QR Connect", "No public discovery", "Metadata restrictions"],
    },
    {
      title: "Message smarter",
      text: "Messaging tools designed for how people actually communicate.",
      items: ["Notes Messaging", "Scheduled Messages", "Undo Send", "Message Preview"],
    },
    {
      title: "Organize what matters",
      text: "Important information should not disappear inside endless chat history.",
      items: ["Bookmarks", "Custom Titles", "Important Pads", "Chat Sorting"],
    },
    {
      title: "Own your data",
      text: "Choose whether your photos, videos, documents, and conversations live locally or in Handil Cloud.",
      items: ["Local Storage", "Handil Cloud", "Offline-first", "No nonsense data"],
    },
  ]

  return (
    <section id="why" className="bg-slate-950 px-6 py-28 text-white md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-400">
          WHY HANDIL
        </p>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Built for people who want more control from messaging.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300">
                Handil was designed around intentional communication, user
                ownership, smarter conversation experiences, and privacy-first
                choices without unnecessary complexity.
              </p>

              <p className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6 text-xl font-semibold leading-8 text-sky-100">
                Communication should adapt to people — not force people to adapt
                to software.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08}>
                <div className="rounded-[32px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold">{group.title}</h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {group.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyHandil