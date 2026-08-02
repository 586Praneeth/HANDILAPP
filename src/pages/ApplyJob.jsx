import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

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

  useEffect(() => {
    let isMounted = true;

    const loadJob = async () => {
      setLoading(true);
      setPageError("");

      const { data, error } = await supabase
        .from("careers_jobs")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (!isMounted) {
        return;
      }

      if (error) {
        console.error("Failed to load job:", error);
        setPageError("Unable to load this position.");
        setJob(null);
        setLoading(false);
        return;
      }

      setJob(data);
      setLoading(false);
    };

    loadJob();

    return () => {
      isMounted = false;
    };
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

  const createSafeFileName = (fileName) => {
    const extension = fileName.includes(".")
      ? fileName.substring(fileName.lastIndexOf("."))
      : "";

    const baseName = fileName
      .replace(extension, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return `${baseName || "resume"}${extension.toLowerCase()}`;
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

    setSubmitting(true);

    try {
      const safeFileName = createSafeFileName(resume.name);
      const uniqueId = crypto.randomUUID();
      const uploadedResumePath = `${job.slug}/${uniqueId}-${safeFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(uploadedResumePath, resume, {
          cacheControl: "3600",
          contentType: resume.type || undefined,
          upsert: false,
        });

      if (uploadError) {
        console.error("Resume upload failed:", uploadError);
        throw new Error("Unable to upload your resume. Please try again.");
      }

      const applicationData = {
        job_id: job.id,
        full_name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        linkedin: formData.linkedin.trim() || null,
        github: formData.github.trim() || null,
        portfolio: formData.portfolio.trim() || null,
        years_experience: formData.yearsExperience.trim() || null,
        current_company: formData.currentCompany.trim() || null,
        current_job_title: formData.currentJobTitle.trim() || null,
        notice_period: formData.noticePeriod.trim() || null,
        cover_letter: formData.coverLetter.trim() || null,
        resume_file_name: resume.name,
        resume_storage_path: uploadedResumePath,
        status: "Applied",
      };

      const { error: insertError } = await supabase
        .from("career_applications")
        .insert(applicationData);

      if (insertError) {
        console.error("Application insert failed:", insertError);
        throw new Error("Application submission failed. Please try again.");
      }

      navigate(`/careers/${slug}/success`, {
        state: {
          jobTitle: job.title,
          applicantName: formData.fullName.trim(),
        },
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Application submission failed.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <ApplyJobLoading />;
  }

  if (pageError || !job) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-28 text-slate-950 md:px-12">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-red-100 bg-white p-8 shadow-xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-red-500">
            Position unavailable
          </p>

          <h1 className="mt-4 text-3xl font-black md:text-5xl">
            {pageError || "Position not found."}
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-slate-600">
            This role may no longer be available, or the link may be incorrect.
          </p>

          <Link
            to="/careers"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-sky-600"
          >
            Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <ApplyHero job={job} />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <form onSubmit={handleSubmit} className="space-y-7">
            <FormSection
              number="01"
              title="Personal information"
              description="Tell us how we can contact you."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </Field>

                <Field label="Email address" required>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </Field>

                <Field label="Phone number">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    className={inputClass}
                  />
                </Field>

                <Field label="Years of experience">
                  <input
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    placeholder="For example, 4 years"
                    className={inputClass}
                  />
                </Field>
              </div>
            </FormSection>

            <FormSection
              number="02"
              title="Professional profile"
              description="Share links that help us understand your work."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="LinkedIn URL">
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className={inputClass}
                  />
                </Field>

                <Field label="GitHub URL">
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/..."
                    className={inputClass}
                  />
                </Field>

                <Field label="Portfolio URL" className="md:col-span-2">
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://yourportfolio.com"
                    className={inputClass}
                  />
                </Field>
              </div>
            </FormSection>

            <FormSection
              number="03"
              title="Current experience"
              description="Tell us about your current professional situation."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Current company">
                  <input
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    placeholder="Company name"
                    className={inputClass}
                  />
                </Field>

                <Field label="Current job title">
                  <input
                    name="currentJobTitle"
                    value={formData.currentJobTitle}
                    onChange={handleChange}
                    placeholder="Current role"
                    className={inputClass}
                  />
                </Field>

                <Field label="Notice period" className="md:col-span-2">
                  <input
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleChange}
                    placeholder="For example, 2 weeks"
                    className={inputClass}
                  />
                </Field>
              </div>
            </FormSection>

            <FormSection
              number="04"
              title="Resume"
              description="Upload your latest resume."
            >
              <div className="rounded-[28px] border-2 border-dashed border-sky-200 bg-sky-50/70 p-8 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                />

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-500 shadow-sm">
                  <UploadIcon />
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Upload your resume
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  PDF, DOC or DOCX. Maximum 10 MB.
                </p>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-6 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  Choose Resume
                </button>

                {resume && (
                  <div className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-emerald-700">
                    <CheckIcon />
                    <span className="break-all font-semibold">{resume.name}</span>
                  </div>
                )}
              </div>
            </FormSection>

            <FormSection
              number="05"
              title="Cover letter"
              description="Tell us why you want to join Handil."
            >
              <Field label="Your message">
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Share your interest, relevant experience and what you hope to contribute."
                  className={`${inputClass} min-h-48 resize-y`}
                />
              </Field>
            </FormSection>

            {submitError && (
              <div className="rounded-2xl border border-red-100 bg-red-50 p-4 font-semibold text-red-600">
                {submitError}
              </div>
            )}

            <div className="rounded-[32px] bg-slate-950 p-6 text-white md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-black">Ready to submit?</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    Review your information before submitting. You can return to
                    the role page at any time.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-sky-500 px-8 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Submitting Application..."
                    : "Submit Application"}

                  {!submitting && <ArrowUpRightIcon />}
                </button>
              </div>
            </div>
          </form>

          <aside className="lg:relative">
            <div className="space-y-6 lg:sticky lg:top-28">
              <RoleSummaryCard job={job} />

              <PrivacyCard />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ApplyHero({ job }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-16 text-white md:px-12 md:pb-20 md:pt-20">
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <Link
          to={`/careers/${job.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          <BackIcon />
          Back to role
        </Link>

        <div className="mt-10 max-w-5xl">
          <p className="font-black uppercase tracking-[0.24em] text-sky-400">
            Apply to Handil
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            {job.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Tell us about your experience, the work you are proud of and the
            impact you want to create at Handil.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {job.location && <MetaPill>{job.location}</MetaPill>}
            {job.employment_type && (
              <MetaPill>{job.employment_type}</MetaPill>
            )}
            {job.experience && <MetaPill>{job.experience}</MetaPill>}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaPill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 font-bold text-slate-200 backdrop-blur-xl">
      {children}
    </span>
  );
}

function FormSection({ number, title, description, children }) {
  return (
    <section className="rounded-[36px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 font-black text-sky-600">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-black">{title}</h2>
          <p className="mt-2 text-slate-500">{description}</p>
          <div className="mt-7">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required = false, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label}
        {required && <span className="ml-1 text-sky-500">*</span>}
      </span>

      {children}
    </label>
  );
}

function RoleSummaryCard({ job }) {
  return (
    <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-7 text-white">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-100">
          Your application
        </p>

        <h2 className="mt-4 text-2xl font-black">{job.title}</h2>

        <p className="mt-3 leading-7 text-sky-50">
          Review the role details and submit your information when you are
          ready.
        </p>
      </div>

      <div className="space-y-5 p-7">
        <SummaryRow label="Department" value={job.department} />
        <SummaryRow label="Location" value={job.location} />
        <SummaryRow label="Employment" value={job.employment_type} />
        <SummaryRow label="Experience" value={job.experience} />

        <Link
          to={`/careers/${job.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-600"
        >
          <BackIcon />
          Review role
        </Link>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5 last:border-0">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="text-right font-black text-slate-950">{value}</p>
    </div>
  );
}

function PrivacyCard() {
  return (
    <div className="rounded-[32px] bg-slate-950 p-7 text-white shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500">
        <ShieldIcon />
      </div>

      <h3 className="mt-6 text-xl font-black">Your privacy matters</h3>

      <p className="mt-4 text-sm leading-7 text-slate-300">
        Your application information will be used only to evaluate your
        candidacy and manage the hiring process.
      </p>
    </div>
  );
}

function ApplyJobLoading() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-slate-950 px-6 pb-20 pt-32 md:px-12">
        <div className="mx-auto max-w-[1400px] animate-pulse">
          <div className="h-12 w-44 rounded-full bg-white/10" />
          <div className="mt-14 h-5 w-48 rounded bg-white/10" />
          <div className="mt-8 h-20 max-w-3xl rounded bg-white/10" />
          <div className="mt-8 h-6 max-w-2xl rounded bg-white/10" />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:px-12 lg:grid-cols-[1fr_360px]">
        <div className="space-y-7">
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

function UploadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M12 16V4m0 0-5 5m5-5 5 5M5 15v4h14v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
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

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
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

export default ApplyJob;