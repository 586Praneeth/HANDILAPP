import Reveal from "./Reveal"

import onboarding from "../assets/screens/onboarding.png"
import chat from "../assets/screens/chat.png"
import addbio from "../assets/screens/addbio.png"

function AppShowcase() {
  const screens = [
    { title: "Onboarding", image: onboarding },
    { title: "Chat", image: chat },
    { title: "Add Bio", image: addbio },
  ]

  return (
    <section className="bg-slate-50 px-6 py-28 md:px-12">
      <div className="mx-auto max-w-[1600px] text-center">
        <Reveal>
          <div>
            <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-sky-500">
              APP SHOWCASE
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Designed to feel simple from the first tap.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A clean mobile experience built with the same privacy-first,
              blue-and-white Handil design language.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {screens.map((screen, index) => (
            <Reveal key={screen.title} delay={index * 0.1}>
              <div className="group">
                <div className="mx-auto max-w-[300px] rounded-[44px] border border-slate-200 bg-white p-3 shadow-2xl transition duration-500 group-hover:-translate-y-3">
                  <div className="overflow-hidden rounded-[34px] bg-slate-100">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="h-[560px] w-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {screen.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppShowcase