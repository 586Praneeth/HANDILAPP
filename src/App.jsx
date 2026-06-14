import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsHandil from "./components/WhatIsHandil";
import ProblemSection from "./components/ProblemSection";
import WhyHandil from "./components/WhyHandil";
import Features from "./components/Features";
import CloudSection from "./components/CloudSection";
import RewardsFeedback from "./components/RewardsFeedback";
import AppShowcase from "./components/AppShowCase";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import HowItWorks from "./components/HowItWorks"

function App() {
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
      <Navbar />
      <Hero />
      <WhatIsHandil />
      <HowItWorks />
      <ProblemSection />
      <WhyHandil />
      <Features />
      <CloudSection />
      <RewardsFeedback />
      <AppShowcase />
      <DownloadCTA />
      <Footer />
    </main>
  );
}

export default App;
