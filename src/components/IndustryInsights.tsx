"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Activity, ArrowRight, IndianRupee } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

const salaryData = [
  { name: "Traditional", salary: 3.5, color: "#64748b" },
  { name: "Software", salary: 5.8, color: "#6366f1" },
  { name: "Automation", salary: 5.2, color: "#8b5cf6" },
  { name: "Robotics", salary: 6.4, color: "#f59e0b" },
  { name: "IT Infra", salary: 4.8, color: "#10b981" },
  { name: "Govt. JE", salary: 5.5, color: "#06b6d4" },
];

const trendData = [
  { year: "2020", software: 3.2, automation: 2.8, mechanical: 2.4 },
  { year: "2021", software: 3.8, automation: 3.2, mechanical: 2.6 },
  { year: "2022", software: 4.5, automation: 3.8, mechanical: 2.9 },
  { year: "2023", software: 5.2, automation: 4.5, mechanical: 3.2 },
  { year: "2024", software: 5.8, automation: 5.2, mechanical: 3.5 },
  { year: "2025", software: 6.5, automation: 6.0, mechanical: 3.8 },
];

const demandData = [
  { sector: "IT/Software", demand: 92, growth: "+32%", color: "#6366f1" },
  { sector: "Automation", demand: 85, growth: "+42%", color: "#8b5cf6" },
  { sector: "Govt Jobs", demand: 70, growth: "Stable", color: "#06b6d4" },
  { sector: "Core Engg", demand: 65, growth: "+12%", color: "#64748b" },
];

const stats = [
  { label: "Market Demand", value: "Very High", icon: Activity, color: "text-blue-400", bgColor: "bg-blue-500/10" },
  { label: "Industry Partners", value: "500+", icon: Users, color: "text-indigo-400", bgColor: "bg-indigo-500/10" },
  { label: "Job Growth", value: "24%", icon: TrendingUp, color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  { label: "AI Readiness", value: "High", icon: Target, color: "text-amber-400", bgColor: "bg-amber-500/10" },
];

export default function IndustryInsights() {
  return (
    <section id="insights" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 text-amber-300 text-sm font-medium mb-6"
          >
            <IndianRupee size={16} />
            <span>Real-time Market Intelligence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Salary & <span className="text-gradient">Industry Insights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Data-driven insights from thousands of job postings and industry reports to guide your career decisions.
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5 rounded-2xl group hover:border-indigo-500/20">
              <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center ${stat.color} mb-3 group-hover:scale-110 transition-transform`}>
                <stat.icon size={20} />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em]">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Bar Chart - Salary Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 rounded-[1.5rem]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Starting Salary Comparison</h3>
                <p className="text-xs text-slate-500 mt-1">Average LPA for diploma graduates (2025)</p>
              </div>
              <span className="tag-pill badge-live">Live Data</span>
            </div>

            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    tickFormatter={(v) => `₹${v}L`}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(99,102,241,0.04)" }}
                    contentStyle={{
                      backgroundColor: "rgba(2,6,23,0.95)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      fontSize: "12px",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                    formatter={(value: any) => [`₹${value} LPA`, "Avg. Salary"]}
                  />
                  <Bar dataKey="salary" radius={[8, 8, 0, 0]} barSize={36}>
                    {salaryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Area Chart - Salary Trends */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 rounded-[1.5rem]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Salary Growth Trends</h3>
                <p className="text-xs text-slate-500 mt-1">Year-over-year salary progression (LPA)</p>
              </div>
              <div className="flex gap-3">
                <span className="flex items-center gap-1.5 text-xs text-slate-400"><span className="w-2 h-2 rounded-full bg-indigo-500" /> Software</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400"><span className="w-2 h-2 rounded-full bg-violet-500" /> Automation</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400"><span className="w-2 h-2 rounded-full bg-slate-500" /> Mechanical</span>
              </div>
            </div>

            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="softwareGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="autoGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 11 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 11 }} tickFormatter={(v) => `₹${v}L`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(2,6,23,0.95)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      fontSize: "12px",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                  />
                  <Area type="monotone" dataKey="software" stroke="#6366f1" strokeWidth={2.5} fill="url(#softwareGrad)" />
                  <Area type="monotone" dataKey="automation" stroke="#8b5cf6" strokeWidth={2} fill="url(#autoGrad)" />
                  <Area type="monotone" dataKey="mechanical" stroke="#64748b" strokeWidth={1.5} fill="transparent" strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Demand Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 rounded-[1.5rem] mb-12"
        >
          <h3 className="text-lg font-bold text-white mb-6">Industry Demand Index</h3>
          <div className="space-y-5">
            {demandData.map((item) => (
              <div key={item.sector}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-300">{item.sector}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-emerald-400">{item.growth}</span>
                    <span className="text-sm font-bold text-white">{item.demand}%</span>
                  </div>
                </div>
                <div className="progress-track">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.demand}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="progress-fill"
                    style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer + CTA */}
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
          <p className="text-xs text-slate-600 italic max-w-lg">
            Data sourced from Naukri, LinkedIn, and industry reports (2024-25). Salaries represent top 20% placements and may vary by region, company, and experience.
          </p>
          <a href="#quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold btn-gradient text-white text-sm whitespace-nowrap">
            Compare Your Potential <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
