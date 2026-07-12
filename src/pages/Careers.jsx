import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  

  useEffect(() => {
      fetch(`${API_BASE_URL}/api/careers/jobs`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
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

          {loading && <p className="mt-6 text-slate-500">Loading jobs...</p>}

          {error && <p className="mt-6 text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="mt-8 grid gap-5">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-black">{job.title}</h3>

                      <p className="mt-2 text-slate-600">
                        {job.department} • {job.location} • {job.employmentType}
                      </p>

                      <p className="mt-3 max-w-3xl text-slate-500">
                        {job.description}
                      </p>
                    </div>

                    <Link
                      to={`/careers/${job.slug}`}
                      className="rounded-full bg-sky-500 px-6 py-3 text-center font-bold text-white transition hover:bg-sky-600"
                    >
                      View Role
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Careers;
