"use client";
import { useRef } from "react";
import Header from "@/components/ui/Header";
import HomeComponent from "@/components/ui/HeroProps";
import BuildSection from "@/components/ui/Buildsection";
import Projects from "@/components/ui/Projects";
import Why404Modal from "@/components/ui/Whynot-model";
import { useState } from "react";
import ConnectForm from "@/components/ui/Connect-prop";
import FAQprop from "@/components/ui/HomeFaqs";
import Footer from "@/components/ui/Footer";
export default function Hero() {
  const homeRef = useRef<HTMLDivElement>(null);
  const buildSectionRef = useRef<HTMLDivElement>(null);
  const buildProjectsRef = useRef<HTMLDivElement>(null);
  const connectFormRef = useRef<HTMLDivElement>(null);

  const handleHomeClick = () => {
    if (homeRef.current) {
      const y =
        homeRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleServicesClick = () => {
    if (buildSectionRef.current) {
      const y =
        buildSectionRef.current.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    if (buildProjectsRef.current) {
      const y =
        buildProjectsRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  const handleConnectClick = () => {
    if (connectFormRef.current) {
      const y =
        connectFormRef.current.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({ top: y, behavior: "smooth" }); // Changed to smooth
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <Header
        onHomeClick={handleHomeClick}
        onServicesClick={handleServicesClick}
        onProjectsClick={handleProjectClick}
        onWhy404Click={() => setIsModalOpen(true)}
        onConnectClick={handleConnectClick}
      />
      <div ref={homeRef}>
        <HomeComponent/> 
      </div>
      <div ref={buildSectionRef}>
        <BuildSection />
      </div>
      <div ref={buildProjectsRef}>
        <Projects />
      </div>
      <div ref={connectFormRef}>
        <ConnectForm />
      </div>
      <div>
        <FAQprop/>
      </div>
      <div>
        <Footer onConnectClick={handleConnectClick} />
      </div>
      <div>
      </div>
      <Why404Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
