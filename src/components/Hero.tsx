"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Cpu, Wrench, Shield, Users, Activity, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";

function FloatingBadge({ icon: Icon, text, delay, className }: { icon: any, text: string, delay: number, className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className={`absolute hidden md:flex items-center gap-2 glass px-4 py-2 rounded-2xl border border-white/[0.08] shadow-2xl backdrop-blur-md z-20 ${className}`}
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center border border-white/[0.05]">
        <Icon size={14} className="text-indigo-400" />
      </div>
      <span className="text-sm font-semibold text-slate-200">{text}</span>
    </motion.div>
  );
}

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

      {/* Floating Elements */}
      <FloatingBadge icon={Code} text="Software Dev" delay={0.2} className="top-1/4 left-[10%] rotate-[-6deg]" />
      <FloatingBadge icon={Cpu} text="Automation" delay={0.4} className="top-1/3 right-[10%] rotate-[6deg]" />
      <FloatingBadge icon={Wrench} text="Mechanical" delay={0.6} className="bottom-1/4 left-[15%] rotate-[4deg]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
          >
            <Sparkles size={16} className="text-indigo-400" />
            <span>India's Premium Career Guide for Diploma Students</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Transform Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 animate-gradient">
              Diploma into a Dream Career
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Don't settle for average. Get access to expert roadmaps, hidden job opportunities, and premium skills required by top MNCs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => setActiveTab("careers")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold btn-gradient text-white flex items-center justify-center gap-2 text-lg shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] transition-all"
            >
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setActiveTab("roadmaps")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold btn-outline-glow text-white flex items-center justify-center text-lg"
            >
              Explore Roadmaps
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
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-all group"
            >
              <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <GraduationCap size={16} />
              </span>
              Our Recommended No. 1 College to take admission
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
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
