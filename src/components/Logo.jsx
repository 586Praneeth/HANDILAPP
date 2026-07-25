import logo from "../assets/logo/handil-logo.png";

function Logo({ variant = "dark" }) {
  const isLight = variant === "light";

  return (
    <div className="flex items-center gap-4">
      <img
        src={logo}
        alt="Handil"
        className="h-14 w-14 object-contain"
      />

      <div>
        <p
          className={`text-3xl font-black tracking-tight ${
            isLight ? "text-white" : "text-slate-950"
          }`}
        >
          Handil
        </p>

        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
            isLight ? "text-sky-400" : "text-sky-500"
          }`}
        >
          CONNECT. CHAT. CARE.
        </p>
      </div>
    </div>
  );
}

export default Logo;