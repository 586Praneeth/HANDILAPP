import Reveal from "./Reveal"

function ProblemSection() {

  const problems = [
    {
      title: "Identity exposure",
      text: "Many messaging apps depend heavily on phone numbers, making communication less intentional and harder to control.",
    },
    {
      title: "Important information gets buried",
      text: "Notes, tasks, reminders, and important messages disappear inside endless chat timelines.",
    },
    {
      title: "Storage ownership is unclear",
      text: "Users rarely get a clear choice over where photos, videos, documents, and conversations actually live.",
    },
    {
      title: "Limited communication control",
      text: "Most apps lack permission-based states, metadata restrictions, and stronger control before accepting a conversation.",
    },
    {
      title: "Messaging is reactive",
      text: "Scheduling, structured notes, bookmarks, previews, and smarter organization are still treated like extras.",
    },
    {
      title: "Apps force one workflow",
      text: "Messaging should adapt to people instead of forcing everyone into the same communication pattern.",
    },
  ]

  return (
    <section className="px-6 py-28 md:px-12">

      <div className="mx-auto max-w-[1600px]">

        <Reveal>

          <div>

            <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
              THE PROBLEM
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Messaging today was not built around user control.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Most messaging platforms made communication fast —
              but not necessarily intentional, organized,
              private, or truly user-owned.
            </p>

          </div>

        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {problems.map((problem, index) => (

            <Reveal
              key={problem.title}
              delay={index * 0.08}
            >

              <div className="rounded-[32px] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-lg font-black text-sky-500">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {problem.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {problem.text}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}

export default ProblemSection