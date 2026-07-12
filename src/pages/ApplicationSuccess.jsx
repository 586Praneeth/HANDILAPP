import { Link, useLocation } from "react-router-dom";

function ApplicationSuccess() {
  const location = useLocation();

  const jobTitle = location.state?.jobTitle || "the position";
  const applicantName = location.state?.applicantName || "there";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-28">
      <section className="w-full max-w-3xl rounded-[40px] bg-white p-10 text-center shadow-xl md:p-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
          ✓
        </div>

        <p className="mt-8 font-semibold uppercase tracking-[0.24em] text-sky-500">
          APPLICATION RECEIVED
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Thank you, {applicantName}.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Your application for <strong>{jobTitle}</strong> was submitted
          successfully. Our team will review your information and contact you
          if your experience matches the role.
        </p>

        <Link
          to="/careers"
          className="mt-10 inline-flex rounded-full bg-sky-500 px-8 py-4 font-bold text-white transition hover:bg-sky-600"
        >
          Back to Careers
        </Link>
      </section>
    </main>
  );
}

export default ApplicationSuccess;