"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, GraduationCap, Building2, Briefcase, IndianRupee, ExternalLink, ShieldCheck } from "lucide-react";
import { allColleges, College } from "@/data/colleges";

export default function CollegesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  const filteredColleges = allColleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || 
                        (filterType === "govt" && college.type === "govt") ||
                        (filterType === "private" && (college.type === "private" || college.type === "trust"));
    return matchesSearch && matchesType;
  });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
          >
            <Building2 size={16} />
            <span>Top Institutions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            India's Best <span className="text-gradient">Diploma Colleges</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Explore our curated list of 50+ top polytechnic colleges with verified placement data, fee structures, and admission details.
          </motion.p>
        </div>

        {/* Search & Filters */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between glass p-4 rounded-2xl">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search colleges or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {["all", "govt", "private"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  filterType === type
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {type === "all" ? "All Colleges" : type === "govt" ? "Government" : "Private / Trust"}
              </button>
            ))}
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredColleges.map((college, index) => (
              <motion.div
                key={college.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Rank Badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-indigo-500 to-violet-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg">
                  Rank #{college.rank}
                </div>
                
                {/* Est Year Watermark */}
                <div className="absolute -bottom-4 -right-4 text-6xl font-black text-white/[0.03] select-none pointer-events-none">
                  {college.est}
                </div>

                <div className="flex items-start gap-4 mb-4 pr-16">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    {college.rank === 1 ? <ShieldCheck size={24} className="text-amber-400" /> : <GraduationCap size={24} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                      {college.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <MapPin size={14} className="text-indigo-500" />
                      <span>{college.location}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600 mx-1" />
                      <span className={college.type === "govt" ? "text-emerald-400" : "text-amber-400"}>
                        {college.typeName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <Briefcase size={14} /> Placement
                    </div>
                    <div className="font-semibold text-emerald-400">{college.placement}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <IndianRupee size={14} /> Avg Pkg
                    </div>
                    <div className="font-semibold text-indigo-400">{college.avg}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 col-span-2 sm:col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <GraduationCap size={14} /> Fees
                    </div>
                    <div className="font-semibold text-slate-200">{college.fees}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.slice(0, 4).map((course, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-400 border border-white/10">
                        +{college.courses.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-sm">
                    <span className="text-slate-400 block mb-0.5">Top Recruiters:</span>
                    <span className="text-slate-200 line-clamp-1">{college.recruiters}</span>
                  </div>
                  {college.website !== "#" && (
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No colleges found</h3>
            <p className="text-slate-400">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </section>
  );
}
