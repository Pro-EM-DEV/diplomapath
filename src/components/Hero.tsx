"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Cpu, Wrench, Shield, Users, Activity, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";



function Counter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-4">
      <div className="text-3xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest font-bold text-indigo-300">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const { setActiveTab } = useAppContext();

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-radial-glow z-0" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="text-left relative z-10 pt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            >
              <Sparkles size={16} className="text-indigo-400" />
              <span>India's Premium Career Guide for Diploma Students</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Your Diploma Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 animate-gradient pb-2 block">
                Just The Beginning
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              Don't settle for average. Unlock exclusive career paths, intelligent skill roadmaps, and the hidden strategies needed to land premium roles at top MNCs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <button 
                onClick={() => setActiveTab("careers")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-indigo-600 text-white flex items-center justify-center gap-2 text-lg shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:bg-indigo-500 hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Careers <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setActiveTab("roadmaps")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold glass text-white border border-white/[0.1] hover:bg-white/[0.05] flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1"
              >
                Build Your Roadmap
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <button 
                onClick={() => setActiveTab("nttf")}
                className="inline-flex items-center gap-3 text-slate-300 hover:text-white font-semibold transition-all group"
              >
                <span className="w-10 h-10 rounded-full glass flex items-center justify-center border border-indigo-500/30 group-hover:bg-indigo-500/20 transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <GraduationCap size={18} className="text-indigo-400" />
                </span>
                Our Recommended No. 1 College for Diploma
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-indigo-400" />
              </button>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full mt-10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 rounded-full blur-[100px]" />
            
            {/* 3D-like floating cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[10%] right-[10%] w-72 glass-premium rounded-2xl p-6 shadow-2xl border border-white/[0.1] z-20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Activity size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Automation Engineer</h4>
                  <p className="text-indigo-300 text-sm">₹8.5 LPA Average</p>
                </div>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full w-[85%]" />
              </div>
              <p className="text-xs text-slate-400">High Demand • Industry 4.0</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[5%] w-80 glass-panel rounded-2xl p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/[0.05] z-30"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-300">Skill Roadmap</span>
                <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/20">Generated</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: "PLC Programming Basics", active: true },
                  { title: "SCADA Systems", active: true },
                  { title: "Industrial IoT", active: false }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.active ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-slate-800 border border-slate-700 text-slate-500'}`}>
                      {step.active ? <Code size={12} /> : <span className="text-[10px]">{i+1}</span>}
                    </div>
                    <span className={`text-sm ${step.active ? 'text-white' : 'text-slate-500'}`}>{step.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Glowing connecting lines */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.4))' }}>
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                d="M 120 400 Q 250 400 350 200" 
                fill="none" 
                stroke="url(#grad1)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-32 max-w-5xl mx-auto"
        >
          <div style={{ background: 'rgba(10, 10, 40, 0.85)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '1.5rem' }} className="p-2 grid grid-cols-2 md:grid-cols-4 gap-2 relative overflow-hidden shadow-2xl">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-violet-600/20 z-0" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500" />
            
            <div className="relative z-10 rounded-2xl border border-indigo-500/20" style={{ background: 'rgba(30, 20, 70, 0.6)' }}>
              <Counter end={100} suffix="K+" label="Active Students" />
            </div>
            <div className="relative z-10 rounded-2xl border border-indigo-500/20" style={{ background: 'rgba(30, 20, 70, 0.6)' }}>
              <Counter end={500} suffix="+" label="Partner Companies" />
            </div>
            <div className="relative z-10 rounded-2xl border border-indigo-500/20" style={{ background: 'rgba(30, 20, 70, 0.6)' }}>
              <Counter end={95} suffix="%" label="Placement Rate" />
            </div>
            <div className="relative z-10 rounded-2xl border border-indigo-500/20" style={{ background: 'rgba(30, 20, 70, 0.6)' }}>
              <Counter end={12} suffix="LPA" label="Highest Package" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-10" />
    </section>
  );
}
