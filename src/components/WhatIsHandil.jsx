import Reveal from "./Reveal";
function WhatIsHandil() {
  return (
    // WhatIsHandil.jsx
    <section id="about" className="bg-slate-50 px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-[1600px] items-center gap-20 lg:grid-cols-2">
        <Reveal>
          <div>
            {/* LEFT */}

            <div>
              <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
                WHAT IS HANDIL
              </p>

              <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                A messaging platform built around privacy, ownership and
                intentional communication.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Handil is a next-generation messaging platform designed around
                privacy, intelligent communication tools, and user ownership.
                Connect through usernames or QR. Control who communicates with
                you. Choose where your data lives — locally or securely inside
                Handil Cloud.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Username + QR Connect",
                  "Permission-Based Messaging",
                  "Smart Conversation Tools",
                  "Notes & Scheduling",
                  "Local + Cloud Storage",
                  "Privacy-First Controls",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                      ✓
                    </div>

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
              {/* RIGHT */}

        <div className="relative">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-[120px]" />

          <div className="relative grid gap-6">
            <div className="rounded-[34px] bg-white p-7 shadow-2xl">
              <div className="mb-4 text-sm font-bold text-sky-500">
                CONNECT INTENTIONALLY
              </div>

              <h3 className="text-2xl font-bold">Username Connections</h3>

              <p className="mt-4 text-slate-600">
                No public discovery. No suggestions. Intentional communication
                only.
              </p>
            </div>

            <div className="rounded-[34px] bg-white p-7 shadow-2xl">
              <div className="mb-4 text-sm font-bold text-sky-500">
                YOUR DATA. YOUR RULES.
              </div>

              <h3 className="text-2xl font-bold">Handil Cloud</h3>

              <p className="mt-4 text-slate-600">
                Store photos, videos, documents, and conversations locally, in
                Handil Cloud, or both.
              </p>
            </div>
          </div>
        </div>
            </div>
        </Reveal>
      
      </div>
    </section>
  );
}

export default WhatIsHandil;
