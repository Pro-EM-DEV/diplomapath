"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Briefcase, GraduationCap, Globe, ExternalLink, Globe2, Target, Heart, Users, X, CheckCircle2 } from "lucide-react";

export default function AboutExpert() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
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
          _subject: "New Appointment Booking",
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Mission Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2rem] mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600" />
          <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-600/5 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Our Mission</h3>
            <p className="text-xl md:text-2xl font-bold text-white max-w-3xl mx-auto leading-relaxed mb-6">
              &ldquo;To empower every diploma engineering student in India with the knowledge, skills, and confidence to build a <span className="text-gradient">world-class career</span>.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { icon: Target, label: "Focused on Diploma Students", color: "text-indigo-400" },
                { icon: Heart, label: "100% Free Guidance", color: "text-rose-400" },
                { icon: Users, label: "Community of 1L+ Students", color: "text-emerald-400" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-slate-400">
                  <item.icon size={18} className={item.color} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Founder Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/3 blur-[120px]" />

          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-14">
            {/* Photo Side */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-[2.5rem] overflow-hidden border-4 border-slate-800/50 shadow-2xl relative z-10 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="w-full h-full flex items-center justify-center">
                  <img src="/founder.jpeg" alt="Amit K Pathak" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white p-5 rounded-2xl shadow-2xl z-20">
                <p className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Mentored</p>
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-xs font-semibold">Students</p>
              </motion.div>
            </motion.div>

            {/* Info Side */}
            <div>
              <h4 className="text-indigo-400 font-bold uppercase tracking-[0.15em] text-sm mb-3">Founder & Career Expert</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Amit K Pathak</h2>
              <p className="text-slate-400 text-base mb-8 leading-relaxed">
                With over a decade of industrial experience and a passion for student success,
                Amit has become India&apos;s leading voice for diploma career guidance. He combines
                technical expertise in PLC and Robotics with a deep understanding of the job market,
                helping thousands of students navigate their career paths.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Award, label: "Expert Mentorship", value: "5+ Years", color: "bg-indigo-500/10 text-indigo-400" },
                  { icon: Briefcase, label: "PLC & Robotics", value: "Industry Lead", color: "bg-violet-500/10 text-violet-400" },
                  { icon: GraduationCap, label: "Diploma Specialist", value: "Career Architect", color: "bg-emerald-500/10 text-emerald-400" },
                  { icon: Globe2, label: "LinkedIn & YouTube", value: "Active Creator", color: "bg-amber-500/10 text-amber-400" },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm">{item.value}</h5>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 rounded-xl font-bold btn-gradient text-white text-sm flex items-center gap-2">
                  <Globe size={16} /> Connect to Expert!
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Logos */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 text-center">
          <p className="text-xs text-slate-600 uppercase tracking-[0.2em] font-bold mb-6">Students Placed At</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Tata Motors", "Bosch", "TCS", "L&T", "ABB", "Infosys", "Siemens", "Godrej"].map(company => (
              <span key={company} className="text-slate-600 font-bold text-sm hover:text-slate-400 transition-colors cursor-default">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Appointment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
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
              className="relative w-full max-w-lg glass-card rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto"
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
                    <h3 className="text-2xl font-bold text-white mb-2">Book Appointment</h3>
                    <p className="text-slate-400 text-sm">Fill in your details to connect directly with Amit K Pathak.</p>
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
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-4 rounded-xl font-bold btn-gradient text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Book Now"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Booking Requested!</h3>
                  <p className="text-slate-400 text-sm mb-8">
                    Thank you {formData.name}. Your appointment request has been submitted to Amit K Pathak. We will contact you soon.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setIsModalOpen(false);
                      setFormData({name: "", email: "", mobile: ""});
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
