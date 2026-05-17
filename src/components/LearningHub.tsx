"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, FileText, ExternalLink, BookOpen, Search, Star, Clock, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "PLC & Automation", "Software", "Robotics", "Mechanical", "Soft Skills"];

const resources = [
  {
    title: "Mastering PLC Programming",
    type: "Course",
    format: "Video Series",
    duration: "12 Hours",
    source: "YouTube",
    tags: ["PLC & Automation"],
    icon: PlayCircle,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    rating: 4.8,
    students: "12.5K",
    description: "Complete PLC programming course covering Siemens TIA Portal, Allen-Bradley, and ladder logic fundamentals.",
    free: true,
    url: "https://www.youtube.com/results?search_query=plc+programming+full+course"
  },
  {
    title: "Python for Engineers",
    type: "Guide",
    format: "Interactive Tutorial",
    duration: "Self Paced",
    source: "W3Schools",
    tags: ["Software"],
    icon: FileText,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    rating: 4.9,
    students: "8.2K",
    description: "From zero to Python hero. Covers data analysis, automation scripts, and basic programming concepts.",
    free: true,
    url: "https://www.w3schools.com/python/"
  },
  {
    title: "Robotics & Smart Factory",
    type: "Webinar",
    format: "Video Lecture",
    duration: "2.5 Hours",
    source: "NPTEL",
    tags: ["Robotics"],
    icon: PlayCircle,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    rating: 4.7,
    students: "5.1K",
    description: "Industry 4.0 deep-dive covering industrial robotics, smart sensors, and digital twin technology.",
    free: true,
    url: "https://nptel.ac.in/courses/112101098"
  },
  {
    title: "AutoCAD Mastery",
    type: "Course",
    format: "Video Series",
    duration: "18 Hours",
    source: "YouTube",
    tags: ["Mechanical"],
    icon: PlayCircle,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    rating: 4.6,
    students: "15K",
    description: "Complete AutoCAD 2D and 3D course for mechanical and civil engineering professionals.",
    free: true,
    url: "https://www.youtube.com/results?search_query=autocad+full+course+in+hindi"
  },
  {
    title: "Communication Skills",
    type: "Course",
    format: "Read Online",
    duration: "15 Min Read",
    source: "Coursera",
    tags: ["Soft Skills"],
    icon: BookOpen,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    rating: 4.5,
    students: "20K",
    description: "Master interview communication, email writing, and presentation skills for engineering professionals.",
    free: true,
    url: "https://www.coursera.org/courses?query=communication%20skills"
  },
  {
    title: "IoT with Arduino & ESP32",
    type: "Course",
    format: "Hands-on Lab",
    duration: "8 Hours",
    source: "YouTube",
    tags: ["Robotics", "PLC & Automation"],
    icon: PlayCircle,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    rating: 4.8,
    students: "9.3K",
    description: "Build real IoT projects using Arduino and ESP32. Covers MQTT, sensor integration, and cloud dashboards.",
    free: true,
    url: "https://www.youtube.com/results?search_query=arduino+iot+projects"
  },
  {
    title: "SolidWorks for Beginners",
    type: "Guide",
    format: "Tutorials",
    duration: "10 Hours",
    source: "YouTube",
    tags: ["Mechanical"],
    icon: FileText,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    rating: 4.7,
    students: "11K",
    description: "Complete SolidWorks guide covering part modeling, assembly, simulation, and rendering techniques.",
    free: true,
    url: "https://www.youtube.com/results?search_query=solidworks+tutorial+for+beginners"
  },
  {
    title: "React.js Full Course",
    type: "Course",
    format: "Video Series",
    duration: "24 Hours",
    source: "freeCodeCamp",
    tags: ["Software"],
    icon: PlayCircle,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    rating: 4.9,
    students: "25K",
    description: "From fundamentals to advanced React patterns. Build production-ready apps with hooks, context, and Next.js.",
    free: true,
    url: "https://www.youtube.com/watch?v=bMknfKXIFA8"
  },
];

export default function LearningHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });

  const filtered = resources.filter(r => {
    const matchesCategory = activeCategory === "All" || r.tags.includes(activeCategory);
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleMembershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using formspree endpoint to send data to amitaxondelhi@gmail.com
      // The user needs to replace YOUR_FORMSPREE_ID with their actual formspree hash later
      const response = await fetch("https://formspree.io/f/xojrpkrw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "New Premium Membership Request",
          ...formData
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-300 text-sm font-medium mb-6"
          >
            <BookOpen size={16} />
            <span>Curated Learning Resources</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            The <span className="text-gradient">Learning Hub</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Industry-vetted open-source courses and materials to make you job-ready. Filtered by skill area.
          </motion.p>
        </div>

        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-10"
        >
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, tools, or skills..."
              className="w-full pl-11 pr-6 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm text-white placeholder:text-slate-600"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/30"
                    : "bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.1]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-premium p-6 rounded-[1.5rem] flex flex-col h-full group relative overflow-hidden shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className={cn("p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110", resource.bgColor, resource.color)}>
                  <resource.icon size={20} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">Open Source</span>
                </div>
              </div>

              <h3 className="text-base font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors">{resource.title}</h3>
              <p className="text-slate-400 text-xs mb-4 flex-grow leading-relaxed font-medium">{resource.description}</p>

              {/* Meta */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock size={12} /> {resource.duration}
                  </span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star size={12} className="fill-amber-400" /> {resource.rating}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <span>{resource.students} students</span>
                  <span>•</span>
                  <span>{resource.source}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {resource.tags.map(tag => (
                  <span key={tag} className="tag-pill text-[8px]">{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <a 
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-white/[0.06] text-xs font-bold hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-300"
              >
                <ExternalLink size={14} /> Access Now
              </a>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No resources found. Try a different search or category.</p>
          </div>
        )}

        {/* Premium Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 md:p-10 rounded-[2rem] border-indigo-500/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-600/5 blur-[100px] rounded-full" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-900/30">
                📚
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Premium Resource Library</h4>
                <p className="text-slate-400 text-sm">Join 5,000+ members accessing exclusive PDFs, mock tests, and career guides.</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-xl font-bold btn-gradient text-white whitespace-nowrap flex items-center gap-2 shadow-lg shadow-indigo-900/20"
            >
              Join Membership <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Membership Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => !isSuccess && setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md glass-card rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10"
            >
              {!isSuccess && (
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}

              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Join Premium</h3>
                    <p className="text-slate-400 text-sm">Fill your details to get early access to our premium materials.</p>
                  </div>

                  <form onSubmit={handleMembershipSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Mobile Number</label>
                      <input 
                        required
                        type="tel" 
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={e => setFormData({...formData, mobile: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all"
                        placeholder="9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-4 rounded-xl font-bold btn-gradient text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                  <p className="text-slate-400 text-sm mb-8">
                    Thank you {formData.name}. We have received your details and will contact you at {formData.mobile} soon.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setIsModalOpen(false);
                      setFormData({name: "", mobile: "", email: ""});
                    }}
                    className="px-8 py-3 rounded-xl font-bold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
