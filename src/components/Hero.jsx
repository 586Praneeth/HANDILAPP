import { motion } from "framer-motion";
import onboarding from "../assets/screens/onboarding.png";
import chat from "../assets/screens/chat.png";
function Hero({ onEarlyAccess }) {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-6 pb-24 pt-20 md:px-12">
      {/* PREMIUM FUTURISTIC GLOWS */}

      <div className="absolute left-[-140px] top-[-120px] h-[460px] w-[460px] rounded-full bg-sky-300/25 blur-[130px]" />

      <div className="absolute right-[-120px] top-[60px] h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="absolute bottom-[-180px] left-[35%] h-[460px] w-[460px] rounded-full bg-blue-200/25 blur-[160px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <p className="mb-5 font-semibold uppercase tracking-[0.28em] text-sky-500">
            NEXT-GEN COMMUNICATION
          </p>

          <h1 className="text-5xl font-black leading-tight text-slate-950 md:text-7xl">
            Built to change how the world connects.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Handil reimagines messaging with privacy-first communication,
            intelligent conversation tools, and the freedom to choose where your
            data lives.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Username-first", "Local or Cloud", "No nonsense data"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-100 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              onClick={onEarlyAccess}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white shadow-xl shadow-sky-200"
            >
              Get Early Access
            </motion.button>

            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-slate-200 bg-white/70 px-8 py-4 font-semibold text-slate-700 backdrop-blur"
            >
              See How It Works
            </motion.a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-sky-300/30 blur-[120px]" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative z-10 max-w-[280px] rounded-[44px] border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[34px] bg-slate-100">
                <img
                  src={chat}
                  alt="Handil chat screen"
                  className="h-[560px] w-full object-contain"
                />
              </div>
            </div>

            <div className="absolute -left-24 top-20 hidden max-w-[210px] rotate-[-8deg] rounded-[38px] border border-slate-200 bg-white p-3 shadow-2xl md:block">
              <div className="overflow-hidden rounded-[30px] bg-slate-100">
                <img
                  src={onboarding}
                  alt="Handil onboarding screen"
                  className="h-[430px] w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
