import Reveal from "./Reveal"

function Features() {
  const features = [
    {
      title: "Username Connections",
      tag: "Private Identity",
      text: "Connect using usernames or QR codes without public discovery, casual searching, or unnecessary exposure.",
    },
    {
      title: "Notes Messaging",
      tag: "Structured Chat",
      text: "Send long-form thoughts, lists, updates, and structured content as a distinct message type inside chat.",
    },
    {
      title: "Smart Messaging",
      tag: "Control",
      text: "Schedule messages, undo sends, preview unread chats, and mark messages as important when timing matters.",
    },
    {
      title: "Bookmarks with Titles",
      tag: "Organization",
      text: "Save important messages with custom titles and find them later without scrolling through endless chats.",
    },
    {
      title: "Disappearing Messages",
      tag: "Privacy",
      text: "Send messages that disappear after a selected number of views, giving users more control over visibility.",
    },
    {
      title: "Locked Messages",
      tag: "High Signal",
      text: "Keep locked messages intentional with limits, making them useful without turning them into noise.",
    },
    {
      title: "Delete by Date Range",
      tag: "Clean Up",
      text: "Remove messages from a selected date range locally, with clear preview and confirmation before deletion.",
    },
    {
      title: "Birthday Layer",
      tag: "Human Touch",
      text: "Privacy-first birthday reminders, top indicators, and quick wishes without intrusive full-screen noise.",
    },
  ]

  return (
    <section id="features" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
              FEATURES
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Messaging reimagined — feature by feature.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Powerful conversation tools designed to make communication more
              intentional, organized, private, and user-controlled.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <div className="group h-full rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-5 inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-sky-500">
                  {feature.tag}
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.text}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-sky-400 transition group-hover:w-24" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features