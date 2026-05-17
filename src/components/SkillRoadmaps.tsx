"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronDown, Milestone, Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";

const tracks = [
  {
    name: "Software",
    color: "bg-indigo-600",
    steps: [
      { title: "Core Diploma", duration: "Years 1-3", description: "Master fundamentals — C/C++, Data Structures, Networking, and OS concepts during your diploma program.", icon: "🎓", status: "completed", details: ["Computer Science fundamentals", "C/C++ Programming", "Database Management", "Operating Systems"] },
      { title: "Specialized Skills", duration: "3-6 Months", description: "Learn industry-demand frameworks: React, Node.js, Python, Git, and cloud platforms (AWS/Azure).", icon: "⚡", status: "completed", details: ["React.js / Next.js", "Node.js & Express", "Python for Data", "Git & CI/CD"] },
      { title: "Projects & Portfolio", duration: "Ongoing", description: "Build 3-5 real-world projects. Contribute to open source. Create a professional GitHub portfolio.", icon: "📁", status: "current", details: ["Full-Stack Web App", "REST API Project", "Open Source Contributions", "Portfolio Website"] },
      { title: "Internship / Entry", duration: "6-12 Months", description: "Apply to internships at TCS, Infosys, Wipro. Focus on real business problem solving.", icon: "🏭", status: "upcoming", details: ["Apply via LinkedIn & Naukri", "Prepare DSA for interviews", "Build professional network", "Get 6-month hands-on experience"] },
      { title: "Dream Career", duration: "Year 2+", description: "Advance to Mid/Senior Developer roles. Consider B.Tech lateral entry for higher growth.", icon: "🚀", status: "upcoming", details: ["Full-Stack Developer", "DevOps Engineer", "Cloud Architect", "Tech Lead / Manager"] },
    ],
  },
  {
    name: "Mechanical",
    color: "bg-blue-600",
    steps: [
      { title: "Core Diploma", duration: "Years 1-3", description: "Excel at Thermodynamics, Fluid Mechanics, Manufacturing Processes, and Machine Design.", icon: "🎓", status: "completed", details: ["Thermodynamics & Heat Transfer", "Manufacturing Processes", "Strength of Materials", "Machine Drawing"] },
      { title: "Industry Tools", duration: "3-6 Months", description: "Master AutoCAD, SolidWorks, CATIA, and CNC programming for manufacturing roles.", icon: "⚡", status: "completed", details: ["AutoCAD 2D/3D", "SolidWorks Modeling", "CNC Programming (G-Code)", "GD&T Standards"] },
      { title: "Projects & Certs", duration: "Ongoing", description: "Build functional prototypes. Get certified in Six Sigma, Lean Manufacturing, or ISO 9001.", icon: "📁", status: "current", details: ["Mechanical Design Project", "Six Sigma Green Belt", "Lean Manufacturing", "ISO 9001 Awareness"] },
      { title: "Entry-Level Role", duration: "6-12 Months", description: "Join as Design Engineer, Quality Inspector, or Production Engineer at manufacturing firms.", icon: "🏭", status: "upcoming", details: ["Design Engineer", "Quality Analyst", "Production Supervisor", "Maintenance Technician"] },
      { title: "Expert Level", duration: "Year 3+", description: "Grow into Project Manager, Plant Head, or specialize in Robotics & Automation.", icon: "🚀", status: "upcoming", details: ["Project Manager", "Plant Engineer", "Automation Specialist", "Entrepreneurship"] },
    ],
  },
  {
    name: "Automation",
    color: "bg-amber-600",
    steps: [
      { title: "Core Diploma", duration: "Years 1-3", description: "Strong foundation in Electronics, Instrumentation, and Control Systems during diploma.", icon: "🎓", status: "completed", details: ["Electronics Fundamentals", "Instrumentation Basics", "Control Systems", "Industrial Safety"] },
      { title: "PLC & Robotics", duration: "3-6 Months", description: "Get hands-on with Siemens/Allen-Bradley PLC, SCADA systems, and Industrial Robotics.", icon: "⚡", status: "current", details: ["Siemens TIA Portal", "Allen-Bradley RSLogix", "SCADA Systems", "Industrial Robotics"] },
      { title: "IoT & AI/ML", duration: "3-6 Months", description: "Learn IoT protocols, edge computing, Python for ML, and predictive maintenance.", icon: "📁", status: "upcoming", details: ["IoT Protocols (MQTT, Modbus)", "Edge Computing", "Python for ML", "Predictive Maintenance"] },
      { title: "Industry Role", duration: "6-12 Months", description: "Start as Automation Engineer at Bosch, ABB, Siemens, or smart factories.", icon: "🏭", status: "upcoming", details: ["Automation Engineer", "PLC Programmer", "Robotics Technician", "IoT Solutions Engineer"] },
      { title: "Industry Expert", duration: "Year 3+", description: "Become an Automation Architect, Industry 4.0 Consultant, or start your own firm.", icon: "🚀", status: "upcoming", details: ["Automation Architect", "Industry 4.0 Consultant", "Smart Factory Lead", "Start Automation Firm"] },
    ],
  },
];

export default function SkillRoadmaps() {
  const { setActiveTab } = useAppContext();
  const [activeTrack, setActiveTrack] = useState(0);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section id="roadmaps" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/8 border border-indigo-500/15 text-indigo-300 text-sm font-medium mb-6"
            >
              <Milestone size={16} />
              <span>Step-by-Step Visual Guide</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Your <span className="text-gradient">Career Roadmap</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-base sm:text-lg"
            >
              Follow this proven pathway from diploma student to a high-paying engineering professional.
              Expand each step for actionable details.
            </motion.p>
          </div>

          {/* Track Switcher */}
          <div className="flex gap-2 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.06]">
            {tracks.map((track, i) => (
              <button
                key={track.name}
                onClick={() => { setActiveTrack(i); setExpandedStep(null); }}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                  activeTrack === i
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {track.name}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute top-0 bottom-0 left-8 lg:left-1/2 w-0.5 hidden md:block">
            <div className="timeline-line w-full h-full" />
          </div>

          <div className="space-y-8 md:space-y-12">
            {tracks[activeTrack].steps.map((step, index) => (
              <motion.div
                key={`${activeTrack}-${step.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Connector Dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                  <div className={cn(
                    "w-5 h-5 rounded-full border-[3px] timeline-dot",
                    step.status === "completed" ? "bg-indigo-600 border-indigo-600" :
                    step.status === "current" ? "bg-indigo-600 border-indigo-400" :
                    "bg-slate-800 border-slate-600"
                  )} />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-40px)]">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={cn(
                      "glass-card p-7 rounded-[1.5rem] relative overflow-hidden cursor-pointer group",
                      step.status === "current" && "border-indigo-500/20 glow-indigo"
                    )}
                    onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  >
                    {/* Status glow */}
                    {step.status === "current" && (
                      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/5 blur-3xl" />
                    )}

                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{step.icon}</span>
                        <div>
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.15em]">{step.duration}</span>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      {step.status === "completed" ? (
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={22} />
                      ) : step.status === "current" ? (
                        <div className="relative">
                          <div className="w-6 h-6 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                          </div>
                        </div>
                      ) : (
                        <Lock className="text-slate-600 shrink-0" size={18} />
                      )}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 relative z-10">{step.description}</p>

                    {/* Expand toggle */}
                    <button className="flex items-center gap-2 text-sm font-bold text-indigo-400 group-hover:gap-3 transition-all relative z-10">
                      {expandedStep === index ? "Hide Details" : "Show Details"}
                      <ChevronDown size={16} className={cn("transition-transform", expandedStep === index && "rotate-180")} />
                    </button>

                    {/* Expanded Content */}
                    {expandedStep === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-white/[0.06] relative z-10"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {step.details.map((detail, di) => (
                            <div key={di} className="flex items-center gap-2 text-sm text-slate-300 py-1.5">
                              <ChevronRight size={14} className="text-indigo-400 shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="hidden md:block w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 md:p-12 rounded-[2rem] max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want a personalized roadmap?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Take our quick career quiz and get a customized step-by-step plan tailored to your goals.</p>
            <button onClick={() => { setActiveTab("insights"); window.scrollTo(0,0); }} className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold btn-gradient text-white shadow-2xl shadow-indigo-900/20 text-base">
              Get My Personalized Path <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
