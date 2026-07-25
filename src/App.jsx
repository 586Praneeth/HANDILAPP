import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RethinkingMessaging from "./components/RethinkingMessaging";
import WhatIsHandil from "./components/WhatIsHandil";
import HowItWorks from "./components/HowItWorks";
import CloudSection from "./components/CloudSection";
import FAQ from "./components/FAQ";
import RewardsFeedback from "./components/RewardsFeedback";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import EarlyAccessModal from "./components/EarlyAccessModal";

import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import ApplicationSuccess from "./pages/ApplicationSuccess";

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

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Loader />

              <Navbar />

              <Hero />

              <RethinkingMessaging />

              <WhatIsHandil />

              <HowItWorks />

              <CloudSection />

              <FAQ />

              <RewardsFeedback />

              <Footer onEarlyAccess={openEarlyAccess} />
            </>
          }
        />

        {/* CAREERS LIST */}
        <Route
          path="/careers"
          element={
            <>
              <Navbar />
              <Careers />
              <Footer onEarlyAccess={openEarlyAccess} />
            </>
          }
        />

        {/* JOB DETAILS */}
        <Route path="/careers/:slug" element={<JobDetails />} />

        {/* JOB APPLICATION */}
        <Route path="/careers/:slug/apply" element={<ApplyJob />} />

        {/* APPLICATION SUCCESS */}
        <Route
          path="/careers/:slug/success"
          element={<ApplicationSuccess />}
        />
      </Routes>

      <EarlyAccessModal
        open={showEarlyAccess}
        onClose={closeEarlyAccess}
      />
    </main>
  );
}

export default App;