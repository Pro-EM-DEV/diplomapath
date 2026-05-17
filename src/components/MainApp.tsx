"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollegesList from "@/components/CollegesList";
import CareerPaths from "@/components/CareerPaths";
import SkillRoadmaps from "@/components/SkillRoadmaps";
import dynamic from 'next/dynamic';
const IndustryInsights = dynamic(() => import('@/components/IndustryInsights'), { ssr: false });
import LearningHub from "@/components/LearningHub";
import InterviewPrep from "@/components/InterviewPrep";
import SuccessStories from "@/components/SuccessStories";
import AboutExpert from "@/components/AboutExpert";
import CareerQuiz from "@/components/CareerQuiz";
import RecommendedCollege from "@/components/RecommendedCollege";
import Footer from "@/components/Footer";
import CareerGuru from "@/components/CareerGuru";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsOfService from "@/components/TermsOfService";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useMemo } from "react";

const backgroundMap: Record<string, string> = {
  home: "/bg.jpg",
  colleges: "/bg-colleges.jpg",
  careers: "/bg-careers.jpg",
  roadmaps: "/bg-roadmaps.jpg",
  insights: "/bg-insights.jpg",
  resources: "/bg-resources.jpg",
  interview: "/bg-interview.jpg",
  nttf: "/bg-nttf.jpg",
  about: "/bg-about.jpg",
  privacy: "/bg.jpg",
  terms: "/bg.jpg",
};

export default function MainApp() {
  const { activeTab } = useAppContext();

  const currentBg = useMemo(() => backgroundMap[activeTab] || "/bg.jpg", [activeTab]);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Disable right-click and copy
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();
    
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  // Preload all background images
  useEffect(() => {
    Object.values(backgroundMap).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      {/* Dynamic Background Image - changes per section */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none' }}>
        <img 
          key={currentBg}
          src={currentBg} 
          alt="" 
          style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
            transition: 'opacity 0.6s ease-in-out',
          }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(30, 0, 80, 0.75) 0%, rgba(10, 10, 60, 0.7) 30%, rgba(3, 7, 18, 0.85) 70%, rgba(3, 7, 18, 0.95) 100%)'
        }} />
      </div>

      <Navbar />

      <div className="pt-24 min-h-screen relative z-0">
        {activeTab === "home" && (
          <>
            <Hero />
            <SuccessStories />
          </>
        )}
        
        {activeTab === "colleges" && <CollegesList />}
        {activeTab === "careers" && <CareerPaths />}
        {activeTab === "roadmaps" && <SkillRoadmaps />}
        
        {activeTab === "insights" && (
          <>
            <CareerQuiz />
            <IndustryInsights />
          </>
        )}
        
        {activeTab === "resources" && <LearningHub />}
        {activeTab === "interview" && <InterviewPrep />}
        {activeTab === "nttf" && <RecommendedCollege />}
        {activeTab === "about" && <AboutExpert />}
        {activeTab === "privacy" && <PrivacyPolicy />}
        {activeTab === "terms" && <TermsOfService />}
      </div>

      <div className="h-20" />
      <Footer />
      <CareerGuru />
    </>
  );
}
