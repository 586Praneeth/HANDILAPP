import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsHandil from "./components/WhatIsHandil";
import CloudSection from "./components/CloudSection";
import RewardsFeedback from "./components/RewardsFeedback";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import HowItWorks from "./components/HowItWorks";
import EarlyAccessModal from "./components/EarlyAccessModal";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import ApplicationSuccess from "./pages/ApplicationSuccess";

function App() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

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

    return () => lenis.destroy();
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Loader />
              <Navbar onEarlyAccess={() => setShowEarlyAccess(true)} />
              <Hero onEarlyAccess={() => setShowEarlyAccess(true)} />
              <WhatIsHandil />
              <HowItWorks />
              <CloudSection />
              <RewardsFeedback />
              <Footer onEarlyAccess={() => setShowEarlyAccess(true)} />
            </>
          }
        />

        <Route path="/careers/:slug" element={<JobDetails />} />

        <Route path="/careers/:slug/apply" element={<ApplyJob />} />
        <Route path="/careers/:slug/success" element={<ApplicationSuccess />} />
        <Route path="/careers" element={<Careers />} />
        <Route
          path="/careers"
          element={
            <>
              <Navbar onEarlyAccess={() => setShowEarlyAccess(true)} />
              <Careers />
              <Footer onEarlyAccess={() => setShowEarlyAccess(true)} />
            </>
          }
        />
      </Routes>

      <EarlyAccessModal
        open={showEarlyAccess}
        onClose={() => setShowEarlyAccess(false)}
      />
    </main>
  );
}

export default App;
