"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Colleges", id: "colleges" },
  { name: "Career Paths", id: "careers" },
  { name: "Roadmaps", id: "roadmaps" },
  { name: "Insights", id: "insights" },
  { name: "Resources", id: "resources" },
  { name: "Interview Prep", id: "interview" },
  { name: "NTTF College", id: "nttf" },
  { name: "About Expert", id: "about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeTab, setActiveTab } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-white/[0.05] shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            <img src="/logo.png" alt="DiplomaPath" className="w-20 h-20 rounded-xl object-contain group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-tight">Diploma<span className="text-gradient">Path</span></span>
              <span className="text-[11px] text-white/90 tracking-wide leading-tight" style={{ fontFamily: 'var(--font-handwritten)', fontStyle: 'italic' }}>Right direction, Sure success</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => setActiveTab(link.id as any)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap",
                      activeTab === link.id
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => setActiveTab("careers")}
              className="px-6 py-2.5 rounded-xl font-bold text-sm btn-gradient text-white shadow-lg shadow-indigo-900/20 hover:shadow-indigo-500/25 transition-all group flex items-center gap-2"
            >
              Start Free
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-4">
            <button 
              onClick={() => setActiveTab("careers")}
              className="px-4 py-2 rounded-xl font-bold text-xs btn-gradient text-white shadow-lg shadow-indigo-900/20"
            >
              Start Free
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/[0.03] text-slate-300 hover:text-white border border-white/[0.05] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.05]",
          isOpen ? "max-h-screen border-t border-white/[0.05]" : "max-h-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveTab(link.id as any);
                setIsOpen(false);
              }}
              className={cn(
                "block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                activeTab === link.id
                  ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
