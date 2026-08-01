import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

const CULTURE_CARDS = [
  {
    number: "01",
    title: "Build with purpose",
    description:
      "Work on communication technology designed around trust, privacy and meaningful user control.",
    accent: "from-sky-400 to-blue-600",
  },
  {
    number: "02",
    title: "Own meaningful problems",
    description:
      "Contribute from early thinking and technical design through release, learning and improvement.",
    accent: "from-violet-400 to-indigo-600",
  },
  {
    number: "03",
    title: "Grow with the product",
    description:
      "Help establish the engineering, product and operating foundations of an ambitious company.",
    accent: "from-fuchsia-400 to-purple-600",
  },
  {
    number: "04",
    title: "Work across boundaries",
    description:
      "Collaborate closely across mobile, backend, AI, product, design and infrastructure.",
    accent: "from-cyan-400 to-sky-600",
  },
];

const TEAM_CARDS = [
  {
    title: "Mobile Engineering",
    department: "Mobile Engineering",
    description:
      "Create intuitive, dependable experiences for the core Handil mobile product.",
    icon: "mobile",
  },
  {
    title: "Backend Engineering",
    department: "Backend Engineering",
    description:
      "Build secure services, APIs and data foundations that support the platform.",
    icon: "backend",
  },
  {
    title: "Frontend Engineering",
    department: "Frontend Engineering",
    description:
      "Shape polished web experiences, internal tools and public-facing platforms.",
    icon: "frontend",
  },
  {
    title: "AI Engineering",
    department: "AI Engineering",
    description:
      "Develop responsible, measurable and privacy-conscious intelligent systems.",
    icon: "ai",
  },
  {
    title: "Platform Engineering",
    department: "Platform Engineering",
    description:
      "Create reliable infrastructure, delivery automation and operational systems.",
    icon: "platform",
  },
];

const VALUES = [
  "Trust is a product decision.",
  "Privacy must be designed from the beginning.",
  "Ownership continues after release.",
  "Clear communication is part of good engineering.",
  "Simple, dependable systems scale better.",
];

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

  useEffect(() => {
    let isMounted = true;

    const fetchJobs = async () => {
      setLoading(true);
      setError("");

      const { data, error: supabaseError } = await supabase
        .from("careers_jobs")
        .select(
          `
            id,
            title,
            slug,
            department,
            location,
            employment_type,
            experience,
            description,
            created_at
          `,
        )
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (!isMounted) {
        return;
      }

      if (supabaseError) {
        console.error(
          "Failed to fetch careers:",
          supabaseError,
        );

        setError(
          "Unable to load open positions. Please try again.",
        );
        setJobs([]);
        setLoading(false);
        return;
      }

      setJobs(data ?? []);
      setLoading(false);
    };

    fetchJobs();

    return () => {
      isMounted = false;
    };
  }, []);

  const departments = useMemo(() => {
    const availableDepartments = jobs
      .map((job) => job.department)
      .filter(Boolean);

    return [
      "All",
      ...Array.from(new Set(availableDepartments)),
    ];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    return jobs.filter((job) => {
      const matchesDepartment =
        selectedDepartment === "All" ||
        job.department === selectedDepartment;

      const searchableContent = [
        job.title,
        job.department,
        job.location,
        job.employment_type,
        job.experience,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        searchableContent.includes(normalizedSearch);

      return matchesDepartment && matchesSearch;
    });
  }, [jobs, searchTerm, selectedDepartment]);

  const scrollToOpenRoles = () => {
    document
      .getElementById("open-roles")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleTeamClick = (department) => {
    setSelectedDepartment(department);

    requestAnimationFrame(() => {
      document
        .getElementById("open-roles")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <CareersHero
        jobsCount={jobs.length}
        onViewRoles={scrollToOpenRoles}
      />

      <WhyHandilSection />

      <HowWeWorkSection />

      <TeamsSection onTeamClick={handleTeamClick} />

      <LifeAtHandilSection />

      <ValuesSection />

      <OpenRolesSection
        jobs={filteredJobs}
        totalJobs={jobs.length}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        selectedDepartment={selectedDepartment}
        departments={departments}
        onSearchChange={setSearchTerm}
        onDepartmentChange={setSelectedDepartment}
      />

      <ClosingSection />

      <style>{`
        @keyframes careersFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-14px) rotate(1deg);
          }
        }

        @keyframes careersFloatReverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(12px) rotate(-1deg);
          }
        }

        @keyframes careersDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(18px, -18px, 0) scale(1.06);
          }
        }

        .careers-float {
          animation: careersFloat 5.5s ease-in-out infinite;
        }

        .careers-float-reverse {
          animation: careersFloatReverse 6.5s ease-in-out infinite;
        }

        .careers-drift {
          animation: careersDrift 9s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

function CareersHero({ jobsCount, onViewRoles }) {
  return (
    <section className="relative min-h-[850px] overflow-hidden bg-slate-950 px-6 pb-24 pt-32 text-white md:px-12 lg:min-h-[900px]">
      <div className="careers-drift absolute -left-28 top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />

            <span className="text-sm font-bold tracking-wide text-slate-200">
              {jobsCount > 0
                ? `${jobsCount} open opportunities`
                : "Build with Handil"}
            </span>
          </div>

          <p className="mt-10 font-bold uppercase tracking-[0.28em] text-sky-400">
            Careers at Handil
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px]">
            Build communication
            <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              people can trust.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Join a team shaping a thoughtful,
            privacy-focused communication platform. Work
            on meaningful problems, own important
            decisions and help define what Handil becomes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onViewRoles}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-8 py-4 font-black text-white shadow-2xl shadow-sky-500/25 transition hover:-translate-y-1 hover:bg-sky-400"
            >
              View Open Roles
              <ArrowDownIcon />
            </button>

            <a
              href="#life-at-handil"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-black text-white backdrop-blur-lg transition hover:-translate-y-1 hover:bg-white/15"
            >
              Life at Handil
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-4">
            <HeroStat value="Remote" label="First" />
            <HeroStat value="Small" label="Teams" />
            <HeroStat value="Real" label="Ownership" />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroStat({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
      <p className="text-xl font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[620px]">
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-gradient-to-br from-sky-400/20 via-violet-500/10 to-transparent blur-sm" />

      <div className="careers-float absolute left-0 top-20 z-20 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600">
            <ShieldIcon />
          </div>

          <div>
            <p className="font-black">Privacy by design</p>
            <p className="text-sm text-slate-300">
              Built into every decision
            </p>
          </div>
        </div>
      </div>

      <div className="careers-float-reverse absolute right-0 top-8 z-20 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
        <p className="text-sm font-bold text-cyan-300">
          TEAM PRINCIPLE
        </p>
        <p className="mt-2 max-w-[190px] text-lg font-black">
          Understand the problem before writing the code.
        </p>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[310px] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-[52px] border-[10px] border-slate-800 bg-white p-3 shadow-[0_45px_120px_rgba(0,0,0,0.55)] sm:w-[340px]">
        <div className="overflow-hidden rounded-[38px] bg-slate-50">
          <div className="flex items-center justify-between bg-slate-950 px-5 py-5 text-white">
            <div>
              <p className="text-xs text-slate-400">
                Handil Team
              </p>
              <p className="font-black">Build together</p>
            </div>

            <div className="flex -space-x-2">
              <Avatar initials="M" />
              <Avatar initials="B" />
              <Avatar initials="A" />
            </div>
          </div>

          <div className="space-y-4 px-4 py-6">
            <MessageBubble
              align="left"
              title="Product"
              text="What is the simplest experience that solves the real problem?"
            />

            <MessageBubble
              align="right"
              title="Engineering"
              text="Let’s test the assumptions before choosing the architecture."
            />

            <MessageBubble
              align="left"
              title="Design"
              text="We can make trust visible through the interaction."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-black text-slate-950">
                  Today’s focus
                </p>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  In progress
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <ProgressRow label="Understand" value="100%" />
                <ProgressRow label="Build" value="72%" />
                <ProgressRow label="Improve" value="48%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="careers-float absolute bottom-10 left-4 z-20 w-56 rounded-3xl border border-white/15 bg-slate-900/75 p-5 shadow-2xl backdrop-blur-xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
          Ownership
        </p>

        <p className="mt-2 font-black">
          From idea to impact
        </p>

        <div className="mt-4 flex gap-2">
          <span className="h-2 flex-1 rounded-full bg-sky-400" />
          <span className="h-2 flex-1 rounded-full bg-violet-400" />
          <span className="h-2 flex-1 rounded-full bg-cyan-400" />
        </div>
      </div>

      <div className="careers-float-reverse absolute bottom-20 right-0 z-20 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500">
            <SparkIcon />
          </div>

          <div>
            <p className="font-black">Learn quickly</p>
            <p className="text-sm text-slate-300">
              Improve continuously
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ initials }) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-sky-500 text-xs font-black text-white">
      {initials}
    </div>
  );
}

function MessageBubble({ align, title, text }) {
  const isRight = align === "right";

  return (
    <div
      className={`flex ${
        isRight ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[88%] rounded-3xl px-4 py-3 ${
          isRight
            ? "rounded-br-lg bg-sky-500 text-white"
            : "rounded-bl-lg border border-slate-200 bg-white text-slate-700"
        }`}
      >
        <p
          className={`text-xs font-black uppercase tracking-wide ${
            isRight ? "text-sky-100" : "text-sky-500"
          }`}
        >
          {title}
        </p>

        <p className="mt-1 text-sm leading-6">
          {text}
        </p>
      </div>
    </div>
  );
}

function ProgressRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="font-semibold text-slate-600">
        {label}
      </span>

      <span className="font-black text-slate-950">
        {value}
      </span>
    </div>
  );
}

function WhyHandilSection() {
  return (
    <section className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionEyebrow>Why Handil</SectionEyebrow>

        <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Do the most meaningful work of your career.
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            We are building more than a product. We are
            establishing how a company thinks, creates and
            earns trust.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CULTURE_CARDS.map((card) => (
            <article
              key={card.number}
              className="group relative min-h-[330px] overflow-hidden rounded-[40px] border border-slate-200 bg-slate-50 p-8 transition duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl md:p-10"
            >
              <div
                className={`absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${card.accent} opacity-15 blur-2xl transition duration-500 group-hover:scale-125 group-hover:opacity-25`}
              />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black tracking-[0.2em] text-slate-400">
                    {card.number}
                  </span>

                  <div
                    className={`h-3 w-3 rounded-full bg-gradient-to-br ${card.accent}`}
                  />
                </div>

                <div className="mt-20">
                  <h3 className="text-3xl font-black md:text-4xl">
                    {card.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  const principles = [
    "Take ownership instead of waiting for perfect instructions.",
    "Care about the quality and consequences of decisions.",
    "Communicate clearly, especially when something is uncertain.",
    "Learn quickly and change direction when evidence demands it.",
    "Choose dependable solutions over unnecessary complexity.",
    "Protect user trust in product and engineering decisions.",
  ];

  return (
    <section className="bg-slate-950 px-6 py-28 text-white md:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionEyebrow dark>How we work</SectionEyebrow>

          <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            High ownership.
            <span className="block text-slate-500">
              Low ego.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            We want people who challenge ideas without
            attacking people, move with urgency without
            sacrificing judgment and understand that trust
            is earned through consistent decisions.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="group flex gap-6 py-7"
            >
              <span className="mt-1 text-sm font-black text-sky-400">
                0{index + 1}
              </span>

              <p className="text-xl font-bold leading-8 text-slate-200 transition group-hover:translate-x-2 group-hover:text-white md:text-2xl">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamsSection({ onTeamClick }) {
  return (
    <section className="bg-slate-50 px-6 py-28 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionEyebrow>Teams at Handil</SectionEyebrow>

        <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          Find where your strengths can create impact.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_CARDS.map((team, index) => (
            <button
              key={team.title}
              type="button"
              onClick={() =>
                onTeamClick(team.department)
              }
              className={`group min-h-[310px] rounded-[36px] border border-slate-200 p-7 text-left transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                index === 0
                  ? "bg-sky-500 text-white md:col-span-2"
                  : "bg-white text-slate-950"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    index === 0
                      ? "bg-white/15"
                      : "bg-slate-100"
                  }`}
                >
                  <TeamIcon
                    type={team.icon}
                    light={index === 0}
                  />
                </div>

                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition group-hover:rotate-45 ${
                    index === 0
                      ? "border-white/25"
                      : "border-slate-200"
                  }`}
                >
                  <ArrowUpRightIcon />
                </span>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-black md:text-3xl">
                  {team.title}
                </h3>

                <p
                  className={`mt-4 max-w-xl leading-7 ${
                    index === 0
                      ? "text-sky-50"
                      : "text-slate-600"
                  }`}
                >
                  {team.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function LifeAtHandilSection() {
  return (
    <section
      id="life-at-handil"
      className="px-6 py-28 md:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">
        <div className="relative min-h-[620px]">
          <div className="absolute left-0 top-0 h-[360px] w-[78%] overflow-hidden rounded-[44px] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[36px] border-white/10" />

            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-100">
              Small teams
            </p>

            <p className="mt-8 max-w-md text-4xl font-black leading-tight">
              Direct conversations. Faster decisions.
              Clearer ownership.
            </p>

            <div className="absolute bottom-8 left-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                <LargeAvatar initials="P" />
                <LargeAvatar initials="E" />
                <LargeAvatar initials="D" />
              </div>

              <p className="text-sm font-bold text-sky-100">
                Product + Engineering + Design
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[68%] rounded-[40px] border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="font-black text-slate-950">
                From idea to learning
              </p>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                Continuous
              </span>
            </div>

            <div className="mt-8 space-y-5">
              <TimelineItem
                number="1"
                title="Understand"
                description="Start with the user and the real problem."
              />

              <TimelineItem
                number="2"
                title="Create"
                description="Build thoughtfully and collaborate openly."
              />

              <TimelineItem
                number="3"
                title="Improve"
                description="Measure outcomes and learn from reality."
              />
            </div>
          </div>

          <div className="careers-float absolute right-4 top-24 rounded-3xl bg-slate-950 p-5 text-white shadow-2xl">
            <SparkIcon />
            <p className="mt-3 font-black">
              Ideas can come
              <br />
              from anyone.
            </p>
          </div>
        </div>

        <div>
          <SectionEyebrow>Life at Handil</SectionEyebrow>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Small teams.
            <span className="block text-sky-500">
              Meaningful ownership.
            </span>
            Direct impact.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            At Handil, people work closely from the
            beginning. You will understand why something is
            being built, contribute to how it should work
            and remain involved as it reaches real users.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We value builders who connect product thinking
            with execution, raise concerns early and care
            about the quality of the outcome—not only the
            completion of the task.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <MiniValue title="Remote-first" />
            <MiniValue title="Cross-functional" />
            <MiniValue title="High ownership" />
            <MiniValue title="Continuous learning" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LargeAvatar({ initials }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-sky-500 bg-white font-black text-sky-600">
      {initials}
    </div>
  );
}

function TimelineItem({
  number,
  title,
  description,
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 font-black text-white">
        {number}
      </div>

      <div>
        <p className="font-black text-slate-950">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function MiniValue({ title }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-bold text-slate-700">
      {title}
    </div>
  );
}

function ValuesSection() {
  return (
    <section className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 px-6 py-28 text-white md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-bold uppercase tracking-[0.25em] text-sky-100">
          What we believe
        </p>

        <div className="mt-12">
          {VALUES.map((value, index) => (
            <div
              key={value}
              className="group border-t border-white/20 py-8 last:border-b"
            >
              <div className="flex items-start gap-6">
                <span className="mt-2 text-sm font-black text-sky-200">
                  0{index + 1}
                </span>

                <p className="text-3xl font-black leading-tight transition duration-300 group-hover:translate-x-3 md:text-5xl">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenRolesSection({
  jobs,
  totalJobs,
  loading,
  error,
  searchTerm,
  selectedDepartment,
  departments,
  onSearchChange,
  onDepartmentChange,
}) {
  return (
    <section
      id="open-roles"
      className="scroll-mt-20 bg-slate-50 px-6 py-28 md:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionEyebrow>Open positions</SectionEyebrow>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-4xl font-black sm:text-5xl md:text-6xl">
              Find your place at Handil.
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              {loading
                ? "Loading opportunities..."
                : `${totalJobs} ${
                    totalJobs === 1
                      ? "opportunity"
                      : "opportunities"
                  } currently open.`}
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            <label
              htmlFor="career-search"
              className="sr-only"
            >
              Search open roles
            </label>

            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 shadow-sm focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
              <SearchIcon />

              <input
                id="career-search"
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  onSearchChange(event.target.value)
                }
                placeholder="Search roles, teams or locations"
                className="w-full bg-transparent py-4 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {!loading && !error && departments.length > 1 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {departments.map((department) => {
              const isSelected =
                selectedDepartment === department;

              return (
                <button
                  key={department}
                  type="button"
                  onClick={() =>
                    onDepartmentChange(department)
                  }
                  className={`rounded-full px-5 py-3 text-sm font-black transition ${
                    isSelected
                      ? "bg-slate-950 text-white shadow-lg"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600"
                  }`}
                >
                  {department}
                </button>
              );
            })}
          </div>
        )}

        {loading && <LoadingJobs />}

        {!loading && error && (
          <div className="mt-12 rounded-[32px] border border-red-100 bg-red-50 p-8">
            <p className="font-bold text-red-600">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && jobs.length === 0 && (
          <div className="mt-12 rounded-[36px] border border-slate-200 bg-white p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <SearchIcon large />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              No matching roles
            </h3>

            <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
              Try another search term or select a different
              team.
            </p>
          </div>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {jobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function LoadingJobs() {
  return (
    <div className="mt-12 space-y-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-[32px] border border-slate-200 bg-white p-8"
        >
          <div className="h-4 w-40 rounded bg-slate-200" />
          <div className="mt-5 h-8 w-72 max-w-full rounded bg-slate-200" />
          <div className="mt-5 h-4 w-full max-w-2xl rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

function JobCard({ job, index }) {
  const summary = createJobSummary(job.description);

  return (
    <article className="group py-8 md:py-10">
      <Link
        to={`/careers/${job.slug}`}
        className="grid gap-8 rounded-[32px] p-3 transition duration-300 hover:bg-white hover:p-7 hover:shadow-xl md:grid-cols-[80px_1fr_auto] md:items-center"
      >
        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-black text-slate-400 md:flex">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <p className="font-bold uppercase tracking-[0.18em] text-sky-500">
            {job.department}
          </p>

          <h3 className="mt-3 text-2xl font-black transition group-hover:text-sky-600 md:text-3xl">
            {job.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold text-slate-500">
            {job.location && <span>{job.location}</span>}

            {job.employment_type && (
              <>
                <span aria-hidden="true">•</span>
                <span>{job.employment_type}</span>
              </>
            )}

            {job.experience && (
              <>
                <span aria-hidden="true">•</span>
                <span>{job.experience}</span>
              </>
            )}
          </div>

          {summary && (
            <p className="mt-5 max-w-3xl leading-7 text-slate-600">
              {summary}
            </p>
          )}
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white transition duration-300 group-hover:rotate-45 group-hover:bg-sky-500">
          <ArrowUpRightIcon />
        </div>
      </Link>
    </article>
  );
}

function ClosingSection() {
  return (
    <section className="px-6 py-28 md:px-12">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[48px] bg-slate-950 px-8 py-20 text-center text-white md:px-16">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">
          <p className="font-bold uppercase tracking-[0.25em] text-sky-400">
            Stay connected
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Don’t see the right role today?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            New opportunities will continue to open as
            Handil grows. Check back soon and follow our
            journey.
          </p>

          <a
            href="#open-roles"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
          >
            Explore Current Roles
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children, dark = false }) {
  return (
    <p
      className={`font-bold uppercase tracking-[0.25em] ${
        dark ? "text-sky-400" : "text-sky-500"
      }`}
    >
      {children}
    </p>
  );
}

function createJobSummary(description) {
  if (!description) {
    return "";
  }

  const normalized = String(description)
    .replace(/\s+/g, " ")
    .trim();

  const firstParagraph =
    normalized.split(/\n\s*\n/)[0] || normalized;

  if (firstParagraph.length <= 220) {
    return firstParagraph;
  }

  return `${firstParagraph.slice(0, 217).trim()}...`;
}

function TeamIcon({ type, light = false }) {
  const className = light
    ? "h-7 w-7 text-white"
    : "h-7 w-7 text-slate-800";

  if (type === "mobile") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="7"
          y="2.5"
          width="10"
          height="19"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10 5h4M11 18.5h2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "backend") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="5"
          rx="7"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "frontend") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 8h18M7 6h.01M10 6h.01"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M12 3a4 4 0 0 0-4 4v1a4 4 0 0 0-2 7.46A4 4 0 0 0 10 21h2V3Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1 2 7.46A4 4 0 0 1 14 21h-2M8 10h2M14 8h2M14 15h3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 7h16M7 4v6M17 4v6M5 13h6v6H5zM14 13h5v6h-5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-white"
      aria-hidden="true"
    >
      <path
        d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-white"
      aria-hidden="true"
    >
      <path
        d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"
        fill="currentColor"
      />
      <path
        d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

function SearchIcon({ large = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={
        large
          ? "h-7 w-7 text-slate-500"
          : "h-5 w-5 shrink-0 text-slate-400"
      }
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m16.5 16.5 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 4v15m0 0-6-6m6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 20V5m0 0-6 6m6-6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Careers;