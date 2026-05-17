"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, GraduationCap } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setActiveTab } = useAppContext();
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xojrpkrw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        alert("Your email is subscribed!\n\nA notification has been sent to amitaxondelhi@gmail.com");
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("These pages are coming soon!");
  };

  const exploreLinks = [
    { name: "Career Paths", id: "careers" },
    { name: "Skill Roadmaps", id: "roadmaps" },
    { name: "Industry Insights", id: "insights" },
    { name: "Premium Resources", id: "resources" },
    { name: "Mock Interviews", id: "interview" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/[0.05] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="DiplomaPath" className="w-20 h-20 rounded-xl object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-tight">Diploma<span className="text-gradient">Path</span></span>
                <span className="text-[11px] text-white/90 tracking-wide leading-tight" style={{ fontFamily: 'var(--font-handwritten)', fontStyle: 'italic' }}>Right direction, Sure success</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's premium career guidance platform dedicated exclusively to diploma engineering students. Building careers, not just graduates.
            </p>
            <div className="flex items-center gap-3">
              {[
                { src: "/x.png", label: "Twitter" },
                { src: "/insta.jpg", label: "Instagram" },
                { src: "/fb.png", label: "Facebook" },
                { src: "/youtube.jpg", label: "Youtube" }
              ].map((social, i) => (
                <button 
                  key={i} 
                  onClick={handleSocialClick}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all overflow-hidden border border-white/[0.1]"
                  aria-label={social.label}
                >
                  <img src={social.src} alt={social.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {exploreLinks.map(link => (
                <li key={link.name}>
                  <button 
                    onClick={() => { setActiveTab(link.id as any); window.scrollTo(0,0); }} 
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-indigo-400" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <a href="mailto:info@diplomapath.com" className="hover:text-indigo-400 transition-colors">info@diplomapath.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Get weekly career tips and job alerts directly in your inbox.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500/50 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-all"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl btn-gradient text-white font-bold text-sm shadow-lg shadow-indigo-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DiplomaPath Premium. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <button onClick={() => { setActiveTab('privacy'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => { setActiveTab('terms'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
