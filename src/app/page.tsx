"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <main className={`relative ${loaded ? "page-revealed" : "page-hidden"}`}>
        <Navbar />
        <Hero loaded={loaded} />
        <Services />
        <Workflow />
        <Features />
        <Stats />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
