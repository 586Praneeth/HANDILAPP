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
        console.error(
          "Failed to fetch job details:",
          supabaseError,
        );

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
    return (
      <main className="min-h-screen bg-white px-6 py-32 text-slate-950 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-slate-500">
            Loading job...
          </p>
        </div>
      </main>
    );
  }

  if (error || !job) {
    return (
      <main className="min-h-screen bg-white px-6 py-32 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold text-red-500">
            {error || "Job not found."}
          </p>

          <Link
            to="/careers"
            className="mt-6 inline-flex rounded-full bg-sky-500 px-6 py-3 font-bold text-white transition hover:bg-sky-600"
          >
            Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-32 text-slate-950 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/careers"
          className="font-bold text-sky-500 transition hover:text-sky-600"
        >
          ← Back to Careers
        </Link>

        <p className="mt-10 font-semibold uppercase tracking-[0.25em] text-sky-500">
          {job.department}
        </p>

        <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
          {job.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-lg text-slate-600">
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

        <section className="mt-14 space-y-14">
          {job.description && (
            <JobSection title="What We Do">
              {job.description}
            </JobSection>
          )}

          {job.team_overview && (
            <JobSection title="Engineering at Handil">
              {job.team_overview}
            </JobSection>
          )}

          {job.role_overview && (
            <JobSection title="Role Overview">
              {job.role_overview}
            </JobSection>
          )}

          {job.responsibilities_overview && (
            <JobSection title="Responsibilities and Qualifications">
              {job.responsibilities_overview}
            </JobSection>
          )}

          {job.responsibilities && (
            <JobSection
              title="Key Responsibilities"
              isList
            >
              {job.responsibilities}
            </JobSection>
          )}

          {job.requirements && (
            <JobSection
              title="Basic Qualifications"
              isList
            >
              {job.requirements}
            </JobSection>
          )}

          {job.preferred_qualifications && (
            <JobSection
              title="Preferred Qualifications"
              isList
            >
              {job.preferred_qualifications}
            </JobSection>
          )}

          {job.what_we_offer && (
            <JobSection title="About Handil">
              {job.what_we_offer}
            </JobSection>
          )}
        </section>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <Link
            to={`/careers/${job.slug}/apply`}
            className="inline-flex rounded-full bg-sky-500 px-8 py-4 font-bold text-white transition hover:bg-sky-600"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </main>
  );
}

function JobSection({
  title,
  children,
  isList = false,
}) {
  if (isList) {
    const items = String(children)
      .split(/\r?\n/)
      .map((item) =>
        item
          .replace(/^[-•]\s*/, "")
          .trim(),
      )
      .filter(Boolean);

    return (
      <section>
        <h2 className="text-2xl font-black md:text-3xl">
          {title}
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-600 marker:text-sky-500">
          {items.map((item, index) => (
            <li key={`${title}-${index}`}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const paragraphs = String(children)
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section>
      <h2 className="text-2xl font-black md:text-3xl">
        {title}
      </h2>

      <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
        {paragraphs.map((paragraph, index) => (
          <p key={`${title}-paragraph-${index}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default JobDetails;