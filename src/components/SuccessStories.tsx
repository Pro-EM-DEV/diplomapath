"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, ArrowRight, Briefcase, MapPin } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

const testimonials = [
  { name: "Praveen Pawar", role: "Mechatronics Trainee", company: "Bosch India", location: "Pune", text: "Amit Kumar Pathak sir guided me perfectly. DiplomaPath made it so easy to compare the best mechatronics colleges. Today, I'm working with a global leader!", rating: 5, before: "Confused 10th student", after: "Bosch Trainee, ₹4.8 LPA", color: "from-blue-500 to-cyan-500" },
  { name: "Pranali Shingole", role: "Software Associate", company: "TCS", location: "Mumbai", text: "DiplomaPath is the best resource for polytechnic students. The roadmaps gave me clarity to switch to tech and land a great job.", rating: 5, before: "Diploma in E&TC", after: "TCS Software Dev, ₹5.2 LPA", color: "from-indigo-500 to-violet-500" },
  { name: "Abhishek Bandal", role: "Tool Design Expert", company: "Tata Motors", location: "Pune", text: "Verified college data and expert advice – that's what makes DiplomaPath the #1 guide. The community support is amazing for students from small towns.", rating: 5, before: "Small town student", after: "Tata Motors, ₹6 LPA", color: "from-emerald-500 to-teal-500" },
  { name: "Sneha Kulkarni", role: "Automation Engineer", company: "ABB India", location: "Bangalore", text: "The PLC roadmap on DiplomaPath was a game-changer. I followed it step by step and within 8 months landed my dream automation role.", rating: 5, before: "Diploma in Instrumentation", after: "ABB Engineer, ₹5.5 LPA", color: "from-amber-500 to-orange-500" },
  { name: "Rohan Deshmukh", role: "Junior Engineer", company: "Indian Railways", location: "Nagpur", text: "DiplomaPath's exam preparation section helped me crack the Railway JE exam. The mock tests were very close to the actual paper.", rating: 5, before: "Diploma in Electrical", after: "Railway JE, ₹5.8 LPA", color: "from-pink-500 to-rose-500" },
  { name: "Anjali Patil", role: "Quality Analyst", company: "Godrej", location: "Mumbai", text: "I was unsure about my career after diploma. DiplomaPath's career quiz recommended manufacturing quality, and now I'm thriving at Godrej!", rating: 4, before: "Confused about career", after: "Godrej QA, ₹4.5 LPA", color: "from-violet-500 to-purple-500" },
];

export default function SuccessStories() {
  const { setActiveTab } = useAppContext();
  const [index, setIndex] = useState(0);
  const next = () => setIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 text-amber-300 text-sm font-medium mb-6">
            <Star size={16} className="fill-amber-400" /><span>Real Student Transformations</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Student <span className="text-gradient">Success Stories</span></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">Join 1,00,000+ students who have transformed their careers with our guidance.</motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden">
              <Quote className="absolute top-8 left-8 text-indigo-500/10 w-24 h-24" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/5 blur-[80px] rounded-full" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-slate-700"} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed mb-10 italic text-center relative z-10">&ldquo;{t.text}&rdquo;</p>

              {/* Before/After */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto relative z-10">
                <div className="glass p-4 rounded-xl text-center">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Before</p>
                  <p className="text-sm font-bold text-red-400">{t.before}</p>
                </div>
                <div className="glass p-4 rounded-xl text-center">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">After</p>
                  <p className="text-sm font-bold text-emerald-400">{t.after}</p>
                </div>
              </div>

              {/* Profile */}
              <div className="flex flex-col items-center relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xl font-bold mb-3 shadow-lg`}>
                  {t.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-white">{t.name}</h4>
                <p className="text-sm text-slate-400 flex items-center gap-1">
                  <Briefcase size={14} className="text-indigo-400" /> {t.role} at <span className="text-indigo-400 font-semibold">{t.company}</span>
                </p>
                <p className="text-xs text-slate-600 flex items-center gap-1 mt-1">
                  <MapPin size={12} /> {t.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all text-slate-400 hover:text-white">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-indigo-500 w-6" : "bg-slate-700 hover:bg-slate-600"}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all text-slate-400 hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <button onClick={() => { setActiveTab("roadmaps"); window.scrollTo(0,0); }} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold btn-gradient text-white text-base shadow-2xl shadow-indigo-900/20">
            Start Your Success Story <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
