import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        console.error("Failed to fetch careers:", supabaseError);
        setError("Unable to load open positions. Please try again.");
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

  return (
    <main className="min-h-screen bg-white px-6 py-28 text-slate-950 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
          CAREERS
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Build the future of private communication.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Join Handil and help build a smarter, privacy-first messaging
          platform.
        </p>

        <section className="mt-20">
          <h2 className="text-3xl font-black">Open Positions</h2>

          {loading && (
            <p className="mt-6 text-slate-500">Loading jobs...</p>
          )}

          {!loading && error && (
            <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-6">
              <p className="font-semibold text-red-600">{error}</p>
            </div>
          )}

          {!loading && !error && jobs.length === 0 && (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-black text-slate-950">
                No open positions right now
              </h3>

              <p className="mt-3 text-slate-600">
                Check back later for new opportunities at Handil.
              </p>
            </div>
          )}

          {!loading && !error && jobs.length > 0 && (
            <div className="mt-8 grid gap-5">
              {jobs.map((job) => (
                <article
                  key={job.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-black">{job.title}</h3>

                      <p className="mt-2 text-slate-600">
                        {job.department}
                        {job.location && ` • ${job.location}`}
                        {job.employment_type &&
                          ` • ${job.employment_type}`}
                      </p>

                      <p className="mt-3 max-w-3xl leading-7 text-slate-500">
                        {job.description}
                      </p>
                    </div>

                    <Link
                      to={`/careers/${job.slug}`}
                      className="shrink-0 rounded-full bg-sky-500 px-6 py-3 text-center font-bold text-white transition hover:bg-sky-600"
                    >
                      View Role
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Careers;