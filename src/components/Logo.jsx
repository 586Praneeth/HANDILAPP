import logo from "../assets/logo/handil-logo.png"

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img
        src={logo}
        alt="Handil"
        className="h-14 w-14 object-contain"
      />

      <div>
        <h1 className="text-3xl font-black tracking-tight text-slate-950">
          Handil
        </h1>

        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-500">
          CONNECT. CHAT. CARE.
        </p>
      </div>
    </div>
  )
}

export default Logo