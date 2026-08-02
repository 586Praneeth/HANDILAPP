import { Link } from "react-router-dom";

const EXPECTATIONS = [
  {
    number: "01",
    title: "Take ownership",
    description:
      "Understand the problem, make thoughtful decisions and remain responsible for the outcome after release.",
    gradient:
      "from-sky-50 via-white to-blue-100 hover:from-sky-100 hover:via-cyan-50 hover:to-blue-200",
  },
  {
    number: "02",
    title: "Protect product quality",
    description:
      "Consider reliability, usability, security and the consequences of implementation decisions.",
    gradient:
      "from-violet-50 via-white to-fuchsia-100 hover:from-violet-100 hover:via-purple-50 hover:to-fuchsia-200",
  },
  {
    number: "03",
    title: "Communicate clearly",
    description:
      "Raise uncertainty early, explain tradeoffs and make important decisions understandable to others.",
    gradient:
      "from-cyan-50 via-white to-sky-100 hover:from-cyan-100 hover:via-sky-50 hover:to-blue-200",
  },
  {
    number: "04",
    title: "Learn and adapt",
    description:
      "Use evidence, feedback and production behavior to improve the product and change direction when necessary.",
    gradient:
      "from-amber-50 via-white to-orange-100 hover:from-amber-100 hover:via-yellow-50 hover:to-orange-200",
  },
];

const TEAMS = [
  {
    title: "Mobile Engineering",
    description:
      "Create dependable Android and iOS experiences for Handil’s core mobile product.",
    gradient:
      "from-sky-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-sky-500 hover:to-blue-700",
    featured: true,
  },
  {
    title: "Backend Engineering",
    description:
      "Build secure services, APIs and data foundations that support the platform.",
    gradient:
      "from-white via-slate-50 to-sky-100 hover:from-sky-50 hover:via-cyan-50 hover:to-blue-200",
  },
  {
    title: "Product and Design",
    description:
      "Turn complex communication and privacy workflows into clear product experiences.",
    gradient:
      "from-white via-violet-50 to-fuchsia-100 hover:from-violet-50 hover:via-purple-100 hover:to-fuchsia-200",
  },
  {
    title: "Applied AI",
    description:
      "Develop useful and responsible intelligent capabilities grounded in measurable user value.",
    gradient:
      "from-white via-indigo-50 to-violet-100 hover:from-indigo-50 hover:via-blue-100 hover:to-violet-200",
  },
  {
    title: "Platform Engineering",
    description:
      "Build secure, observable and reliable infrastructure for development and production.",
    gradient:
      "from-white via-cyan-50 to-sky-100 hover:from-cyan-50 hover:via-blue-50 hover:to-sky-200",
  },
  {
    title: "Quality and Security",
    description:
      "Strengthen reliability, release confidence, privacy and application security.",
    gradient:
      "from-white via-emerald-50 to-cyan-100 hover:from-emerald-50 hover:via-teal-50 hover:to-cyan-200",
  },
];

const BELIEFS = [
  "Trust is a product decision.",
  "Privacy must be designed from the beginning.",
  "Ownership continues after release.",
  "Clear communication supports strong execution.",
  "Simple and dependable systems scale better.",
];

function WorkingAtHandil() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <WorkingHero />
      <HowWeWork />
      <WhatWeExpect />
      <TeamsAtHandil />
      <WhatWeBelieve />
      <OpenPositionsCTA />
    </main>
  );
}

function WorkingHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-16 text-white md:px-12 md:pb-24 md:pt-20">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          <BackIcon />
          Back to Careers
        </Link>

        <p className="mt-10 font-black uppercase tracking-[0.25em] text-sky-400">
          Working at Handil
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.05] md:text-7xl lg:text-[82px]">
          Thoughtful work.
          <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Clear responsibility.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          We want people who understand the problem, contribute to important
          decisions and remain accountable for the quality of what they build.
        </p>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Understand the problem",
      text: "Clarify the user need, intended outcome, constraints and risks before implementation begins.",
      styles:
        "from-sky-50 via-white to-blue-100 hover:from-sky-100 hover:via-cyan-50 hover:to-blue-200",
    },
    {
      number: "02",
      title: "Create thoughtfully",
      text: "Choose an approach that balances usefulness, simplicity, reliability, security and delivery.",
      styles:
        "from-violet-50 via-white to-indigo-100 hover:from-violet-100 hover:via-purple-50 hover:to-indigo-200",
    },
    {
      number: "03",
      title: "Improve continuously",
      text: "Measure outcomes, investigate failures and strengthen the product based on what happens in practice.",
      styles:
        "from-cyan-50 via-white to-emerald-100 hover:from-cyan-100 hover:via-teal-50 hover:to-emerald-200",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-black uppercase tracking-[0.24em] text-sky-500">
            How We Work
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Understand.
            <span className="block text-sky-500">Create.</span>
            Improve.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Work begins with understanding the user and the problem. Teams then
            create a practical solution, observe how it performs and improve it
            using evidence.
          </p>
        </div>

        <div className="grid gap-5">
          {steps.map((item) => (
            <div
              key={item.number}
              className={`group rounded-[30px] border border-slate-200 bg-gradient-to-br p-7 transition duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl ${item.styles}`}
            >
              <div className="flex gap-6">
                <span className="font-black text-sky-500">{item.number}</span>

                <div>
                  <h3 className="text-2xl font-black transition group-hover:text-sky-600">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeExpect() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-black uppercase tracking-[0.24em] text-sky-400">
          What We Expect
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Strong judgment. Clear communication. Dependable execution.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {EXPECTATIONS.map((item) => (
            <article
              key={item.number}
              className={`group rounded-[32px] border border-white/10 bg-gradient-to-br p-7 text-slate-950 transition duration-500 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/10 md:p-9 ${item.gradient}`}
            >
              <p className="text-sm font-black text-sky-600">{item.number}</p>

              <h3 className="mt-10 text-2xl font-black transition group-hover:text-sky-700 md:text-3xl">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamsAtHandil() {
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-black uppercase tracking-[0.24em] text-sky-500">
          Teams at Handil
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Find where your strengths can create impact.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAMS.map((team) => (
            <article
              key={team.title}
              className={`group min-h-[270px] rounded-[34px] border p-7 transition duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-8 ${
                team.featured
                  ? `border-transparent bg-gradient-to-br text-white shadow-xl ${team.gradient}`
                  : `border-slate-200 bg-gradient-to-br text-slate-950 ${team.gradient}`
              }`}
            >
              <div className="flex h-full flex-col justify-end">
                <h3 className="text-2xl font-black transition group-hover:translate-x-1">
                  {team.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    team.featured ? "text-sky-50" : "text-slate-600"
                  }`}
                >
                  {team.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeBelieve() {
  return (
    <section className="bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 px-6 py-20 text-white md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-black uppercase tracking-[0.24em] text-sky-100">
          What We Believe
        </p>

        <div className="mt-12 border-t border-white/20">
          {BELIEFS.map((belief, index) => (
            <div
              key={belief}
              className="group flex gap-6 border-b border-white/20 py-9 transition duration-300 hover:bg-white/10 hover:px-6 md:items-center"
            >
              <span className="mt-2 text-sm font-black text-sky-100 md:mt-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-2xl font-black leading-tight transition group-hover:translate-x-2 md:text-4xl">
                {belief}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenPositionsCTA() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px] rounded-[44px] bg-slate-950 px-8 py-14 text-center text-white md:px-14 md:py-20">
        <p className="font-black uppercase tracking-[0.24em] text-sky-400">
          Join Handil
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Find a role where your work can shape the product.
        </h2>

        <Link
          to="/careers#open-roles"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 font-black transition hover:-translate-y-1 hover:bg-sky-400 hover:shadow-2xl hover:shadow-sky-500/20"
        >
          View Open Positions
        </Link>
      </div>
    </section>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M19 12H5m0 0 6-6m-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WorkingAtHandil;