import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function JobDetails() {

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/careers/jobs/slug/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        return response.json();
      })
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <main className="min-h-screen px-6 py-32">Loading job...</main>;
  }

  if (error) {
    return (
      <main className="min-h-screen px-6 py-32 text-red-500">{error}</main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-32 text-slate-950 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link to="/careers" className="font-bold text-sky-500">
          ← Back to Careers
        </Link>

        <p className="mt-10 font-semibold uppercase tracking-[0.25em] text-sky-500">
          {job.department}
        </p>

        <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
          {job.title}
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          {job.location} • {job.employmentType} • {job.experience}
        </p>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-black">About the role</h2>
            <p className="mt-4 leading-8 text-slate-600">{job.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-black">Responsibilities</h2>
            <p className="mt-4 leading-8 text-slate-600">
              {job.responsibilities}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">Requirements</h2>
            <p className="mt-4 leading-8 text-slate-600">{job.requirements}</p>
          </div>
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
