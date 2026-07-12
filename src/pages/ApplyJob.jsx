import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  portfolio: "",
  yearsExperience: "",
  currentCompany: "",
  currentJobTitle: "",
  noticePeriod: "",
  coverLetter: "",
};

function ApplyJob() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [pageError, setPageError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    async function loadJob() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/careers/jobs/slug/${slug}`,
        );

        if (!response.ok) {
          throw new Error("Unable to load this position.");
        }

        const data = await response.json();
        setJob(data);
      } catch (error) {
        setPageError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadJob();
  }, [slug]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const validExtension = allowedExtensions.some((extension) =>
      file.name.toLowerCase().endsWith(extension),
    );

    if (!validExtension) {
      setSubmitError("Only PDF, DOC and DOCX files are allowed.");
      event.target.value = "";
      setResume(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setSubmitError("Resume must be smaller than 10 MB.");
      event.target.value = "";
      setResume(null);
      return;
    }

    setSubmitError("");
    setResume(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!job) {
      setSubmitError("Job information is unavailable.");
      return;
    }

    if (!resume) {
      setSubmitError("Please upload your resume.");
      return;
    }

    const requestData = new FormData();

    requestData.append("jobId", String(job.id));

    Object.entries(formData).forEach(([key, value]) => {
      requestData.append(key, value.trim());
    });

    requestData.append("resume", resume);

    try {
      setSubmitting(true);

     const response = await fetch(
  `${API_BASE_URL}/api/careers/apply`,
  {
    method: "POST",
    body: requestData,
  },
);

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);

        throw new Error(
          errorBody?.message || "Application submission failed.",
        );
      }

      navigate(`/careers/${slug}/success`, {
        state: {
          jobTitle: job.title,
          applicantName: formData.fullName,
        },
      });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-32">
        Loading position...
      </main>
    );
  }

  if (pageError || !job) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-32">
        <p className="text-red-600">
          {pageError || "Position not found."}
        </p>
      </main>
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-28 text-slate-950 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          to={`/careers/${slug}`}
          className="font-bold text-sky-500 hover:text-sky-600"
        >
          ← Back to role
        </Link>

        <section className="mt-10 rounded-[36px] bg-white p-7 shadow-xl md:p-12">
          <p className="font-semibold uppercase tracking-[0.24em] text-sky-500">
            APPLY TO HANDIL
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            {job.title}
          </h1>

          <p className="mt-4 text-slate-600">
            {job.location} • {job.employmentType} • {job.experience}
          </p>

          <form onSubmit={handleSubmit} className="mt-12 space-y-10">
            <FormSection
              title="Personal information"
              description="Tell us how we can contact you."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className={inputClass}
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className={inputClass}
                />

                <input
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  placeholder="Years of experience"
                  className={inputClass}
                />
              </div>
            </FormSection>

            <FormSection
              title="Professional profile"
              description="Share links that help us understand your work."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn URL"
                  className={inputClass}
                />

                <input
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="GitHub URL"
                  className={inputClass}
                />

                <input
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="Portfolio URL"
                  className={`${inputClass} md:col-span-2`}
                />
              </div>
            </FormSection>

            <FormSection
              title="Current experience"
              description="Tell us about your current professional situation."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  placeholder="Current company"
                  className={inputClass}
                />

                <input
                  name="currentJobTitle"
                  value={formData.currentJobTitle}
                  onChange={handleChange}
                  placeholder="Current job title"
                  className={inputClass}
                />

                <input
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  placeholder="Notice period"
                  className={inputClass}
                />
              </div>
            </FormSection>

            <FormSection
              title="Resume"
              description="Upload your latest resume."
            >
              <div className="rounded-[28px] border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-sky-600"
                >
                  Choose Resume
                </button>

                <p className="mt-4 text-sm text-slate-500">
                  PDF, DOC or DOCX. Maximum 10 MB.
                </p>

                {resume && (
                  <p className="mt-4 font-semibold text-sky-600">
                    Selected: {resume.name}
                  </p>
                )}
              </div>
            </FormSection>

            <FormSection
              title="Cover letter"
              description="Tell us why you want to join Handil."
            >
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Share your interest, relevant experience and what you hope to contribute."
                className={`${inputClass} min-h-44 resize-y`}
              />
            </FormSection>

            {submitError && (
              <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-red-600">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-sky-100 transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting Application..." : "Submit Application"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

function FormSection({ title, description, children }) {
  return (
    <section>
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-2 text-slate-500">{description}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default ApplyJob;