"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Globe, CheckCircle2, Building2, GraduationCap, Briefcase, Award } from "lucide-react";

export default function RecommendedCollege() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 text-sm font-medium mb-6"
          >
            <Award size={16} />
            <span>#1 Recommended Institute</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            NTTF <span className="text-gradient">Murbad</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg"
          >
            Premier industry-integrated training centre est. 2010 through CSR partnership between NTTF (founded 1963, Indo-Swiss cooperation) and Technocraft Industries. Recognized by NCVET, MSDE & NSDC. Certifications via NOCN (UK) & NCC Education (UK). Partners: Bosch, Festo, Fanuc, Intel, Tata Steel.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[2rem] border-indigo-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Select NTTF Blindly?</h3>
            <div className="space-y-6">
              {[
                { title: "Industry-Aligned Curriculum", desc: "Syllabus designed directly with top manufacturing and IT companies." },
                { title: "100% Practical Focus", desc: "Students spend more time in state-of-the-art labs than in traditional classrooms." },
                { title: "Assured Placements", desc: "Consistent 95%+ placement track record. Partners: Bosch, Festo, Fanuc, Intel." },
                { title: "Global Recognition", desc: "NCVET, MSDE & NSDC recognized. Certifications via NOCN (UK) & NCC Education (UK)." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 h-64 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-indigo-900/40 group-hover:bg-transparent transition-colors z-10" />
              <img src="/mntc.jpg" alt="NTTF Campus" className="w-full h-full object-cover" />
            </div>
            <div className="h-40 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-violet-900/40 group-hover:bg-transparent transition-colors z-10" />
              <img src="/mntc1.jpg" alt="NTTF Labs" className="w-full h-full object-cover" />
            </div>
            <div className="h-40 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-purple-900/40 group-hover:bg-transparent transition-colors z-10" />
              <img src="/mntc2.jpg" alt="NTTF Students" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl text-center"
          >
            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Top Courses</h3>
            <p className="text-slate-400 text-sm">Mechatronics, Tool Engineering, IT & Data Science, Electronics.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-3xl text-center border-indigo-500/30 glow-indigo"
          >
            <div className="w-16 h-16 mx-auto bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Stellar Placements</h3>
            <p className="text-slate-400 text-sm">Placed in companies like Tata Motors, Bosch, L&T, and Siemens.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl text-center"
          >
            <div className="w-16 h-16 mx-auto bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-400 mb-6">
              <Building2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Modern Infrastructure</h3>
            <p className="text-slate-400 text-sm">Advanced CNC machines, PLC automation labs, and smart classrooms.</p>
          </motion.div>
        </div>

        {/* Contact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to secure your future?</h3>
            <p className="text-slate-400">Reach out for admissions and detailed counseling.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="tel:9695274733" 
              className="px-6 py-3 rounded-xl font-bold bg-white/[0.05] border border-white/[0.1] text-white flex items-center justify-center gap-3 hover:bg-white/[0.1] transition-all"
            >
              <Phone size={18} className="text-indigo-400" />
              9695274733
            </a>
            <a 
              href="https://nttftrg.com/murbad-training-centre/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold btn-gradient text-white flex items-center justify-center gap-3 shadow-lg shadow-indigo-900/20"
            >
              <Globe size={18} />
              Visit Website
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
