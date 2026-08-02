import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

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
            display_order,
            created_at
          `,
        )
        .eq("is_active", true)
        .order("display_order", { ascending: true });

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


  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <CareersHero
        jobsCount={jobs.length}
        onViewRoles={scrollToOpenRoles}
      />

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

      <WorkingAtHandilCTA />

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
  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 px-8 py-4 font-black text-white shadow-[0_18px_45px_rgba(14,165,233,0.35)] transition duration-500 hover:-translate-y-1 hover:scale-[1.04] hover:from-cyan-400 hover:via-blue-500 hover:to-violet-600 hover:shadow-[0_24px_65px_rgba(124,58,237,0.42)] active:translate-y-0 active:scale-[0.98]"
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  <span className="relative z-10">View Open Roles</span>

  <span className="relative z-10 transition duration-500 group-hover:translate-y-1">
    <ArrowDownIcon />
  </span>
</button>

            <Link
              to="/working-at-handil"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-black text-white backdrop-blur-lg transition duration-500 hover:-translate-y-1 hover:border-sky-300/50 hover:bg-gradient-to-r hover:from-sky-500/20 hover:via-cyan-500/20 hover:to-violet-500/20"
            >
              How We Work
              <ArrowUpRightIcon />
            </Link>
          </div>

        </div>

        <HeroVisual />
      </div>
    </section>
  );
}


function HeroVisual() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[520px]">
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-gradient-to-br from-sky-400/20 via-violet-500/10 to-transparent blur-sm" />



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
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-6 pb-28 pt-24 md:px-12 md:pt-28"
    >
      {/* BACKGROUND COLOR VARIATION */}
      <div className="absolute left-[-120px] top-[-80px] h-[360px] w-[360px] rounded-full bg-sky-300/25 blur-[120px]" />

      <div className="absolute right-[-120px] top-[80px] h-[360px] w-[360px] rounded-full bg-violet-300/25 blur-[130px]" />

      <div className="absolute bottom-[-140px] left-1/2 h-[320px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* GLASS TRANSITION PANEL */}
       <div className="-mt-16 mb-16 rounded-[36px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl md:p-7">
          <div className="grid gap-5 md:grid-cols-3">
            <GlassStat
              label="Open opportunities"
              value={loading ? "—" : totalJobs}
              gradient="from-sky-500/20 via-cyan-400/10 to-blue-500/20"
            />

            <GlassStat
              label="Work style"
              value="Remote"
              gradient="from-violet-500/20 via-fuchsia-400/10 to-indigo-500/20"
            />

            <GlassStat
              label="Employment"
              value="Full-time"
              gradient="from-cyan-500/20 via-sky-400/10 to-emerald-500/20"
            />
          </div>

          <div className="mt-5 rounded-[28px] border border-white/70 bg-gradient-to-r from-slate-950/95 via-blue-950/95 to-violet-950/95 px-6 py-6 text-white md:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-300">
                  Build with Handil
                </p>

                <p className="mt-2 max-w-3xl text-lg font-bold leading-7">
                  Find a role where your work influences the product,
                  architecture and the way Handil grows.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
                Applications open
              </div>
            </div>
          </div>
        </div>

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
                    totalJobs === 1 ? "opportunity" : "opportunities"
                  } currently open.`}
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            <label htmlFor="career-search" className="sr-only">
              Search open roles
            </label>

            <div className="flex items-center gap-3 rounded-full border border-white/80 bg-white/75 px-5 shadow-lg shadow-slate-200/60 backdrop-blur-xl transition focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
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
                  className={`rounded-full px-5 py-3 text-sm font-black transition duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 text-white shadow-lg shadow-sky-500/20"
                      : "border border-white/80 bg-white/70 text-slate-600 backdrop-blur-xl hover:-translate-y-0.5 hover:border-sky-300 hover:bg-gradient-to-r hover:from-sky-50 hover:via-cyan-50 hover:to-violet-50 hover:text-sky-700 hover:shadow-lg"
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
          <div className="mt-12 rounded-[36px] border border-white/80 bg-white/75 p-10 text-center shadow-xl backdrop-blur-xl">
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
          <div className="mt-12 space-y-5">
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

function GlassStat({ label, value, gradient }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-white/70 bg-gradient-to-br p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl ${gradient}`}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/40 blur-2xl transition duration-500 group-hover:scale-125" />

      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>

        <p className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">
          {value}
        </p>
      </div>
    </div>
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
        className="grid gap-8 rounded-[32px] p-3 transition duration-500 hover:bg-gradient-to-r hover:from-white hover:via-sky-50 hover:to-violet-50 hover:p-7 hover:shadow-xl md:grid-cols-[80px_1fr_auto] md:items-center"
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


function WorkingAtHandilCTA() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-28">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[48px] bg-slate-950 px-8 py-16 text-white md:px-14 md:py-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-sky-400">
              Working at Handil
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Understand how we work and what we expect from one another.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore our working principles, team structure and the beliefs
              that guide product and engineering decisions.
            </p>
          </div>

          <Link
            to="/working-at-handil"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-black text-slate-950 transition duration-500 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-sky-100 hover:via-cyan-100 hover:to-violet-100 hover:shadow-2xl hover:shadow-sky-500/20"
          >
            How We Work
            <span className="transition group-hover:translate-x-1">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
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