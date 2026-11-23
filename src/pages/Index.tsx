import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ArchitectureImpact from "@/components/ArchitectureImpact";
import ArchitectureExpertise from "@/components/ArchitectureExpertise";
import CaseStudies from "@/components/CaseStudies";
import ArchitectureCredentials from "@/components/ArchitectureCredentials";
import AiInnovation from "@/components/AiInnovation";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <Navigation />
      <Hero />
      <About />
      <ArchitectureImpact />
      <ArchitectureExpertise />
      <CaseStudies />
      <ArchitectureCredentials />
      <AiInnovation />
      <ThoughtLeadership />
      <Contact />
    </div>
  );
};

export default Index;