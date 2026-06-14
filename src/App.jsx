import { useEffect, useState } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsHandil from "./components/WhatIsHandil";
import ProblemSection from "./components/ProblemSection";
import CloudSection from "./components/CloudSection";
import RewardsFeedback from "./components/RewardsFeedback";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import HowItWorks from "./components/HowItWorks";
import EarlyAccessModal from "./components/EarlyAccessModal";

function App() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  const openEarlyAccess = () => {
    setShowEarlyAccess(true);
  };

  const closeEarlyAccess = () => {
    setShowEarlyAccess(false);
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Loader />

      <Navbar onEarlyAccess={openEarlyAccess} />
      <Hero onEarlyAccess={openEarlyAccess} />

      <WhatIsHandil />
      <ProblemSection />
      <HowItWorks />
      <CloudSection />
      <RewardsFeedback />
      <Footer onEarlyAccess={openEarlyAccess} />

      <EarlyAccessModal
        open={showEarlyAccess}
        onClose={closeEarlyAccess}
      />
    </main>
  );
}

export default App;