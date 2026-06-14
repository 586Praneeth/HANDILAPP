import { motion } from "framer-motion"
import logo from "../assets/logo/handil-logo.png"

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950 pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <img
          src={logo}
          alt="Handil"
          className="mx-auto h-24 w-24 object-contain"
        />

        <h1 className="mt-6 text-4xl font-black text-white">
          Handil
        </h1>

        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">
          Connect. Chat. Care.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Loader