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
    return (
      <main className="min-h-screen bg-white px-6 py-32 text-slate-950 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-slate-500">Loading job...</p>
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

        <p className="mt-6 text-lg text-slate-600">
          {job.location}
          {job.employment_type && ` • ${job.employment_type}`}
          {job.experience && ` • ${job.experience}`}
        </p>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-black">About the role</h2>

            <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
              {job.description}
            </p>
          </div>

          {job.responsibilities && (
            <div>
              <h2 className="text-2xl font-black">Responsibilities</h2>

              <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
                {job.responsibilities}
              </p>
            </div>
          )}

          {job.requirements && (
            <div>
              <h2 className="text-2xl font-black">Requirements</h2>

              <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">
                {job.requirements}
              </p>
            </div>
          )}
        </section>

        <Link
          to={`/careers/${job.slug}/apply`}
          className="mt-12 inline-flex rounded-full bg-sky-500 px-8 py-4 font-bold text-white transition hover:bg-sky-600"
        >
          Apply Now
        </Link>
      </div>
    </main>
  );
}

export default JobDetails;