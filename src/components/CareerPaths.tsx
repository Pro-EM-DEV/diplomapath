"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Code, Building2, Cpu, Zap, Briefcase, ChevronRight, X, MapPin, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const paths = [
  {
    title: "Core Engineering",
    icon: Settings,
    description: "Traditional high-demand roles in Mechanical, Electrical, and Civil industries with stable career growth.",
    salary: "₹2.5 - 6 LPA",
    growth: "+18% YoY",
    skills: ["AutoCAD", "SolidWorks", "Design", "Project Mgmt"],
    companies: ["L&T", "Tata Projects", "Godrej", "Siemens"],
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/30",
    detailedPath: [
      "Complete Diploma in Mech/Civil/Electrical",
      "Learn industry tools (AutoCAD, SolidWorks)",
      "Apply for JE/Trainee roles",
      "Grow into Sr. Engineer / Project Lead",
    ],
  },
  {
    title: "IT & Software",
    icon: Code,
    description: "High-growth tech roles in full-stack development, DevOps, cloud infrastructure, and data engineering.",
    salary: "₹3 - 12 LPA",
    growth: "+32% YoY",
    skills: ["Python", "JavaScript", "React", "Cloud", "SQL"],
    companies: ["TCS", "Infosys", "Wipro", "HCL Tech"],
    color: "from-indigo-500 to-violet-500",
    bgGlow: "bg-indigo-500/10",
    borderColor: "hover:border-indigo-500/30",
    detailedPath: [
      "Complete Diploma in CS/IT/Electronics",
      "Master programming (Python, JS, SQL)",
      "Build portfolio & contribute to open source",
      "Land roles from Associate to Tech Lead",
    ],
  },
  {
    title: "Government Jobs",
    icon: Building2,
    description: "Stable and prestigious careers in Railways, PWD, ONGC, NTPC, and Public Sector Units.",
    salary: "₹4.5 - 8 LPA",
    growth: "Stable",
    skills: ["Aptitude", "Technical MCQ", "GK", "Reasoning"],
    companies: ["Indian Railways", "ONGC", "NTPC", "BHEL"],
    color: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/30",
    detailedPath: [
      "Complete Diploma (any branch)",
      "Prepare for SSC JE / Railway JE exams",
      "Clear written test + interview rounds",
      "Get posted as Junior Engineer (Govt.)",
    ],
  },
  {
    title: "Automation & AI",
    icon: Cpu,
    description: "Cutting-edge roles in Robotics, PLC programming, CNC, IoT, and Smart Manufacturing.",
    salary: "₹3.5 - 10 LPA",
    growth: "+42% YoY",
    skills: ["PLC/SCADA", "Robotics", "IoT", "Python", "AI/ML"],
    companies: ["Bosch", "ABB", "Fanuc", "Rockwell"],
    color: "from-orange-500 to-amber-500",
    bgGlow: "bg-orange-500/10",
    borderColor: "hover:border-orange-500/30",
    detailedPath: [
      "Complete Diploma in Mech/E&TC/Instrumentation",
      "Learn PLC, SCADA, and Industrial Robotics",
      "Get certified in Siemens/Allen-Bradley",
      "Join as Automation Engineer → Lead",
    ],
  },
  {
    title: "Degree After Diploma",
    icon: Zap,
    description: "Lateral entry into B.Tech/B.E. programs for diploma holders seeking higher education.",
    salary: "₹5 - 15 LPA",
    growth: "+25% YoY",
    skills: ["GATE", "MHT-CET", "Research", "Specialization"],
    companies: ["IITs", "NITs", "Top Private Unis", "BITS"],
    color: "from-pink-500 to-rose-500",
    bgGlow: "bg-pink-500/10",
    borderColor: "hover:border-pink-500/30",
    detailedPath: [
      "Complete Diploma with 60%+ aggregate",
      "Prepare for lateral entry exams (MHT-CET/GATE)",
      "Get admitted to B.Tech 2nd year directly",
      "Graduate and pursue top-tier placements",
    ],
  },
  {
    title: "Entrepreneurship",
    icon: Briefcase,
    description: "Start your own manufacturing, services, or tech startup with government schemes & support.",
    salary: "₹5 - 50+ LPA",
    growth: "Unlimited",
    skills: ["Business Plan", "Finance", "Marketing", "Tech"],
    companies: ["MSME Schemes", "Startup India", "MUDRA Loan", "Incubators"],
    color: "from-yellow-500 to-orange-500",
    bgGlow: "bg-yellow-500/10",
    borderColor: "hover:border-yellow-500/30",
    detailedPath: [
      "Identify a problem to solve in your domain",
      "Build MVP and validate with customers",
      "Apply for govt. schemes (MUDRA, Startup India)",
      "Scale operations and build your brand",
    ],
  },
];

export default function CareerPaths() {
  const [selectedPath, setSelectedPath] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", qualification: "", interest: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xojrpkrw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Personalized Career Path Request",
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
    <section id="careers" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/8 border border-indigo-500/15 text-indigo-300 text-sm font-medium mb-6"
          >
            <TrendingUp size={16} />
            <span>Opportunities After Diploma</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Choose Your <span className="text-gradient">Future Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Discover the most lucrative and rewarding career paths tailored for diploma engineers in India.
            Click any card to explore the detailed roadmap.
          </motion.p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelectedPath(index)}
              className="cursor-pointer group"
            >
              <div className={cn(
                "h-full glass-card p-7 rounded-[1.5rem] flex flex-col relative overflow-hidden",
                path.borderColor
              )}>
                {/* Hover glow */}
                <div className={cn(
                  "absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  path.bgGlow
                )} />

                {/* Icon + Growth */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110",
                    path.color
                  )}>
                    <path.icon size={26} />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    {path.growth}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 text-white relative z-10">{path.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed relative z-10">
                  {path.description}
                </p>

                {/* Salary */}
                <div className="flex items-center justify-between text-sm mb-4 relative z-10">
                  <span className="text-slate-500 font-medium">Expected Salary</span>
                  <span className="font-bold text-white">{path.salary}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
                  {path.skills.slice(0, 4).map(skill => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 rounded-xl border border-white/[0.08] text-sm font-semibold hover:bg-white/[0.03] transition-all flex items-center justify-center gap-2 group/btn relative z-10">
                  View Full Roadmap
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform text-indigo-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA After Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button onClick={() => setIsFormOpen(true)} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold btn-gradient text-white text-base shadow-2xl shadow-indigo-900/20">
            Get Personalized Career Path
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Modal / Detail Panel */}
      <AnimatePresence>
        {selectedPath !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedPath(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl glass-dark rounded-[2rem] border border-white/[0.08] p-8 md:p-10 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPath(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
              >
                <X size={18} />
              </button>

              {/* Background glow */}
              <div className={cn(
                "absolute top-0 right-0 w-60 h-60 rounded-full blur-[100px] opacity-20",
                paths[selectedPath].bgGlow
              )} />

              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-6 shadow-lg",
                paths[selectedPath].color
              )}>
                {(() => { const Icon = paths[selectedPath].icon; return <Icon size={30} />; })()}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{paths[selectedPath].title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">{paths[selectedPath].description}</p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass p-4 rounded-xl">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Salary Range</p>
                  <p className="text-lg font-bold text-white">{paths[selectedPath].salary}</p>
                </div>
                <div className="glass p-4 rounded-xl">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Growth Rate</p>
                  <p className="text-lg font-bold text-emerald-400">{paths[selectedPath].growth}</p>
                </div>
              </div>

              {/* Growth Path */}
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-indigo-400" /> Growth Path
              </h4>
              <div className="space-y-3 mb-8">
                {paths[selectedPath].detailedPath.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Companies Hiring */}
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-indigo-400" /> Companies Hiring
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {paths[selectedPath].companies.map(company => (
                  <span key={company} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 font-medium">
                    {company}
                  </span>
                ))}
              </div>

              {/* Required Skills */}
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <Users size={16} className="text-indigo-400" /> Required Skills
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {paths[selectedPath].skills.map(skill => (
                  <span key={skill} className="tag-pill">{skill}</span>
                ))}
              </div>

              {/* Action */}
              {paths[selectedPath].title !== "Government Jobs" && paths[selectedPath].title !== "Entrepreneurship" && (
                <button 
                  onClick={() => window.open('https://nttftrg.com/murbad-training-centre/', '_blank')}
                  className="w-full py-4 rounded-xl font-bold btn-gradient text-white flex items-center justify-center gap-2 shadow-xl shadow-indigo-900/20"
                >
                  Start This Career Path <ChevronRight size={18} />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => !isSuccess && setIsFormOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass-card rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto"
            >
              {!isSuccess && (
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}

              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Get Your Path</h3>
                    <p className="text-slate-400 text-sm">Fill your details to get a personalized career roadmap.</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
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
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Highest Qualification</label>
                      <input 
                        required
                        type="text" 
                        value={formData.qualification}
                        onChange={e => setFormData({...formData, qualification: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all"
                        placeholder="Diploma in Mechanical"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Area of Interest</label>
                      <input 
                        required
                        type="text" 
                        value={formData.interest}
                        onChange={e => setFormData({...formData, interest: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all"
                        placeholder="Robotics / Coding"
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
                      {isSubmitting ? "Submitting..." : "Submit Details"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Form Submitted!</h3>
                  <p className="text-slate-400 text-sm mb-8">
                    Thank you {formData.name}. Your details have been submitted and you will be contacted at {formData.email} or {formData.mobile} soon.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setIsFormOpen(false);
                      setFormData({name: "", mobile: "", qualification: "", interest: "", email: ""});
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
