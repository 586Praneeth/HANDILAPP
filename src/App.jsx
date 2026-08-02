import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";

import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import WorkingAtHandil from "./pages/WorkingAtHandil";

function HomePage() {
  return (
    <>
      <Loader />

      <Hero />

      <RethinkingMessaging />

      <WhatIsHandil />

      <HowItWorks />

      <CloudSection />

      <FAQ />

      <RewardsFeedback />
    </>
  );
}

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
    <div className="flex min-h-screen flex-col bg-white text-slate-950">
      <ScrollToTop />

      {/* SHOWN ON EVERY PAGE */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* CAREERS */}
          <Route path="/careers" element={<Careers />} />

          {/* WORKING AT HANDIL */}
          <Route
            path="/working-at-handil"
            element={<WorkingAtHandil />}
          />

          {/* JOB DETAILS */}
          <Route path="/careers/:slug" element={<JobDetails />} />

          {/* JOB APPLICATION */}
          <Route
            path="/careers/:slug/apply"
            element={<ApplyJob />}
          />

          {/* APPLICATION SUCCESS */}
          <Route
            path="/careers/:slug/success"
            element={<ApplicationSuccess />}
          />

          {/* LEGAL */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      {/* SHOWN ON EVERY PAGE */}
      <Footer onEarlyAccess={openEarlyAccess} />

      {/* GLOBAL EARLY ACCESS MODAL */}
      <EarlyAccessModal
        open={showEarlyAccess}
        onClose={closeEarlyAccess}
      />
    </div>
  );
}

export default App;