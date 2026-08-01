import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

function JobDetails() {
  const { slug } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchJobDetails = async () => {
      setLoading(true);
      setError("");

      const { data, error: supabaseError } = await supabase
        .from("careers_jobs")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (!isMounted) {
        return;
      }

      if (supabaseError) {
        console.error("Failed to fetch job details:", supabaseError);

        setError("Unable to load this job.");
        setJob(null);
        setLoading(false);
        return;
      }

      setJob(data);
      setLoading(false);
    };

    fetchJobDetails();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return <JobDetailsLoading />;
  }

  if (error || !job) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-28 text-slate-950 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[36px] border border-red-100 bg-white p-8 shadow-xl md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
              Position unavailable
            </p>

            <h1 className="mt-4 text-3xl font-black md:text-5xl">
              {error || "Job not found."}
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              This position may no longer be available, or the link may be
              incorrect.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                aria-label="Go to Handil home page"
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg">
                  <img
                    src="/handil-logo.png"
                    alt="Handil"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="text-left">
                  <p className="text-lg font-black leading-none">Handil</p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-sky-300">
                    Connect. Chat. Care.
                  </p>
                </div>
              </Link>

              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-sky-600"
              >
                <BackIcon />
                Back to Careers
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const applyPath = `/careers/${job.slug}/apply`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <JobHero job={job} applyPath={applyPath} />

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-8">
            {job.description && (
              <JobSection title="What We Do" eyebrow="Handil" icon="company">
                {job.description}
              </JobSection>
            )}

            {job.team_overview && (
              <JobSection
                title="Engineering at Handil"
                eyebrow="Our team"
                icon="team"
              >
                {job.team_overview}
              </JobSection>
            )}

            {job.role_overview && (
              <JobSection
                title="Role Overview"
                eyebrow="Your impact"
                icon="role"
                featured
              >
                {job.role_overview}
              </JobSection>
            )}

            {job.responsibilities_overview && (
              <JobSection
                title="Responsibilities and Qualifications"
                eyebrow="What success looks like"
                icon="success"
              >
                {job.responsibilities_overview}
              </JobSection>
            )}

            {job.responsibilities && (
              <JobSection
                title="Key Responsibilities"
                eyebrow="What you will do"
                icon="responsibilities"
                isList
              >
                {job.responsibilities}
              </JobSection>
            )}

            {job.requirements && (
              <JobSection
                title="Basic Qualifications"
                eyebrow="What you bring"
                icon="basic"
                isList
              >
                {job.requirements}
              </JobSection>
            )}

            {job.preferred_qualifications && (
              <JobSection
                title="Preferred Qualifications"
                eyebrow="Helpful experience"
                icon="preferred"
                isList
              >
                {job.preferred_qualifications}
              </JobSection>
            )}

            {job.what_we_offer && (
              <JobSection
                title="About Handil"
                eyebrow="Why Handil"
                icon="handil"
              >
                {job.what_we_offer}
              </JobSection>
            )}
          </div>

          <aside className="lg:relative">
            <div className="space-y-6 lg:sticky lg:top-28">
              <ApplyCard job={job} applyPath={applyPath} />

              <HiringValuesCard />
            </div>
          </aside>
        </div>
      </section>

      <BottomApplicationBanner job={job} applyPath={applyPath} />
    </main>
  );
}

function JobHero({ job, applyPath }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-36 text-white md:px-12 md:pb-32 md:pt-40">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <Link
        to="/"
        aria-label="Go to Handil home page"
        className="absolute left-6 top-6 z-20 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15 md:left-12 md:top-8"
      >
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg">
          <img
            src="/handil-logo.png"
            alt="Handil"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <p className="text-lg font-black leading-none">Handil</p>

          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-sky-300">
            Connect. Chat. Care.
          </p>
        </div>
      </Link>

      <div className="relative mx-auto max-w-[1400px]">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          <BackIcon />
          Back to Careers
        </Link>

        <div className="mt-16 grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            {job.department && (
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />

                <span className="text-sm font-black uppercase tracking-[0.2em] text-sky-300">
                  {job.department}
                </span>
              </div>
            )}

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.02] sm:text-6xl md:text-7xl lg:text-[82px]">
              {job.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Join Handil and help build thoughtful, reliable technology that
              places user trust, privacy and product quality at the center.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {job.location && (
                <JobMetaBadge
                  icon="location"
                  label="Location"
                  value={job.location}
                />
              )}

              {job.employment_type && (
                <JobMetaBadge
                  icon="employment"
                  label="Employment"
                  value={job.employment_type}
                />
              )}

              {job.experience && (
                <JobMetaBadge
                  icon="experience"
                  label="Experience"
                  value={job.experience}
                />
              )}
            </div>
          </div>

          <div className="rounded-[36px] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-300">
              Ready to contribute?
            </p>

            <h2 className="mt-4 text-2xl font-black">
              Build the next chapter of Handil.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Tell us about your experience and the impact you want to create.
            </p>

            <Link
              to={applyPath}
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-sky-500 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-sky-400"
            >
              Apply for this role
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobMetaBadge({ icon, label, value }) {
  return (
    <div className="flex min-w-[180px] items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-xl">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
        <MetaIcon type={icon} />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 font-black text-white">{value}</p>
      </div>
    </div>
  );
}

function ApplyCard({ job, applyPath }) {
  return (
    <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
      <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-7 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">
          Opportunity
        </p>

        <h2 className="mt-4 text-2xl font-black">{job.title}</h2>

        <p className="mt-3 leading-7 text-sky-50">
          Make an impact while helping shape Handil’s engineering culture and
          product foundations.
        </p>
      </div>

      <div className="space-y-5 p-7">
        <SidebarDetail label="Department" value={job.department} />

        <SidebarDetail label="Location" value={job.location} />

        <SidebarDetail label="Employment type" value={job.employment_type} />

        <SidebarDetail label="Experience" value={job.experience} />

        <Link
          to={applyPath}
          className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-sky-600"
        >
          Apply Now
          <ArrowUpRightIcon />
        </Link>

        <p className="text-center text-sm leading-6 text-slate-500">
          Your information will be used only for evaluating your application.
        </p>
      </div>
    </div>
  );
}

function SidebarDetail({ label, value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5 last:border-none">
      <p className="text-sm font-semibold text-slate-500">{label}</p>

      <p className="text-right font-black text-slate-950">{value}</p>
    </div>
  );
}

function HiringValuesCard() {
  return (
    <div className="rounded-[32px] bg-slate-950 p-7 text-white shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500">
        <SparkIcon />
      </div>

      <h3 className="mt-6 text-xl font-black">What we value</h3>

      <div className="mt-5 space-y-4">
        <SmallValue text="Clear thinking" />
        <SmallValue text="Meaningful ownership" />
        <SmallValue text="Strong collaboration" />
        <SmallValue text="Continuous learning" />
      </div>
    </div>
  );
}

function SmallValue({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-sky-400" />
      <p className="font-semibold text-slate-300">{text}</p>
    </div>
  );
}

function JobSection({
  title,
  eyebrow,
  children,
  isList = false,
  icon,
  featured = false,
}) {
  const sectionClasses = featured
    ? "border-sky-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 shadow-xl shadow-sky-100/60"
    : "border-slate-200 bg-white shadow-sm";

  return (
    <section className={`rounded-[36px] border p-7 md:p-10 ${sectionClasses}`}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
            featured ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-800"
          }`}
        >
          <SectionIcon type={icon} />
        </div>

        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-2 text-2xl font-black leading-tight md:text-3xl">
            {title}
          </h2>

          {isList ? (
            <JobBulletList title={title} content={children} />
          ) : (
            <JobParagraphs title={title} content={children} />
          )}
        </div>
      </div>
    </section>
  );
}

function JobBulletList({ title, content }) {
  const items = String(content)
    .split(/\r?\n/)
    .map((item) => item.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);

  return (
    <ul className="mt-7 grid gap-4">
      {items.map((item, index) => (
        <li
          key={`${title}-${index}`}
          className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
        >
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <CheckIcon />
          </span>

          <span className="leading-7 text-slate-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function JobParagraphs({ title, content }) {
  const paragraphs = String(content)
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
      {paragraphs.map((paragraph, index) => (
        <p key={`${title}-paragraph-${index}`}>{paragraph}</p>
      ))}
    </div>
  );
}

function BottomApplicationBanner({ job, applyPath }) {
  return (
    <section className="px-6 pb-24 md:px-12">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[48px] bg-slate-950 px-8 py-16 text-white md:px-14 md:py-20">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-black uppercase tracking-[0.22em] text-sky-400">
              Join Handil
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              Ready to apply for the {job.title} role?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Bring your experience, curiosity and perspective. Help us build
              technology people can trust.
            </p>
          </div>

          <Link
            to={applyPath}
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-100"
          >
            Start Application
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function JobDetailsLoading() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-slate-950 px-6 pb-24 pt-32 md:px-12">
        <div className="mx-auto max-w-[1400px] animate-pulse">
          <div className="h-12 w-40 rounded-full bg-white/10" />
          <div className="mt-16 h-5 w-56 rounded bg-white/10" />
          <div className="mt-8 h-20 max-w-4xl rounded bg-white/10" />
          <div className="mt-8 h-6 max-w-2xl rounded bg-white/10" />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-20 md:px-12 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-72 animate-pulse rounded-[36px] border border-slate-200 bg-white"
            />
          ))}
        </div>

        <div className="h-[460px] animate-pulse rounded-[36px] border border-slate-200 bg-white" />
      </div>
    </main>
  );
}

function MetaIcon({ type }) {
  if (type === "location") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "employment") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionIcon({ type }) {
  const commonClasses = "h-7 w-7";

  if (type === "team") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={commonClasses}
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 15c2.8 0 5 2.2 5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "role") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={commonClasses}
        aria-hidden="true"
      >
        <path
          d="M12 3 4 7v5c0 4.5 3.1 7.6 8 9 4.9-1.4 8-4.5 8-9V7l-8-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
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

  if (type === "responsibilities" || type === "basic" || type === "preferred") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={commonClasses}
        aria-hidden="true"
      >
        <rect
          x="5"
          y="3"
          width="14"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 8h6M9 12h6M9 16h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "success") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={commonClasses}
        aria-hidden="true"
      >
        <path
          d="M4 20V10M10 20V4M16 20v-7M22 20H2"
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
      className={commonClasses}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 12h8M12 8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="m7 12 3 3 7-7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
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

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
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

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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

export default JobDetails;