import { useState } from "react";
import Reveal from "./Reveal";
import { supabase } from "../lib/supabaseClient";

function RewardsFeedback() {
  const [addText, setAddText] = useState("");
  const [removeText, setRemoveText] = useState("");
  const [problemText, setProblemText] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (addText.trim().length < 15) {
      setMessage(
        "Please enter at least 15 characters for what we should add.",
      );
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("website_feedback")
        .insert([
          {
            add_text: addText.trim(),
            remove_text: removeText.trim(),
            problem_text: problemText.trim(),
          },
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        setMessage("Something went wrong. Please try again.");
        return;
      }

      setAddText("");
      setRemoveText("");
      setProblemText("");
      setMessage(
        "Thank you! Your feedback was submitted successfully.",
      );
    } catch (error) {
      console.error("Feedback submission failed:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isSuccess = message.includes("Thank you");

  return (
    <section id="feedback" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
              FEEDBACK + REWARDS
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Help shape the future of Handil.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Handil grows with real user feedback. Tell us what to add,
              what to remove, and what would make messaging better for you.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-[40px] border border-slate-100 bg-white p-6 shadow-2xl sm:p-8"
            >
              <h3 className="text-2xl font-black text-slate-950">
                Share your feedback
              </h3>

              <div className="mt-8 grid gap-5">
                <textarea
                  value={addText}
                  onChange={(event) => {
                    setAddText(event.target.value);

                    if (message) {
                      setMessage("");
                    }
                  }}
                  placeholder="What should we add to Handil?"
                  aria-label="What should we add to Handil?"
                  disabled={loading}
                  className="min-h-28 resize-none rounded-[24px] border border-slate-200 p-5 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
                />

                <textarea
                  value={removeText}
                  onChange={(event) => {
                    setRemoveText(event.target.value);

                    if (message) {
                      setMessage("");
                    }
                  }}
                  placeholder="What should we remove from Handil?"
                  aria-label="What should we remove from Handil?"
                  disabled={loading}
                  className="min-h-28 resize-none rounded-[24px] border border-slate-200 p-5 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
                />

                <textarea
                  value={problemText}
                  onChange={(event) => {
                    setProblemText(event.target.value);

                    if (message) {
                      setMessage("");
                    }
                  }}
                  placeholder="What problem do you face in current messaging apps?"
                  aria-label="What problem do you face in current messaging apps?"
                  disabled={loading}
                  className="min-h-28 resize-none rounded-[24px] border border-slate-200 p-5 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
                />

                {message && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`rounded-2xl px-5 py-4 text-sm font-semibold ${
                      isSuccess
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-600 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Feedback"}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-2xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
                Rewards System
              </p>

              <h3 className="text-4xl font-black leading-tight">
                Your feedback should matter.
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                Handil is designed with a reward-ready feedback system
                where users can help shape the product, suggest
                improvements, and unlock future perks as the platform
                grows.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Suggest what to add",
                  "Tell us what to remove",
                  "Earn future rewards",
                  "Help shape new features",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default RewardsFeedback;