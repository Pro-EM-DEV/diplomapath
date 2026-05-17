"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, Zap } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

const steps = [
  {
    question: "What is your current education level?",
    options: [
      { text: "10th Standard", emoji: "📚" },
      { text: "12th Standard", emoji: "🎒" },
      { text: "ITI Student", emoji: "🔧" },
      { text: "Current Diploma Student", emoji: "🎓" },
    ],
  },
  {
    question: "Which field excites you the most?",
    options: [
      { text: "Building Software & Apps", emoji: "💻" },
      { text: "Working with Machines", emoji: "⚙️" },
      { text: "Building Infrastructure", emoji: "🏗️" },
      { text: "Robotics & Electronics", emoji: "🤖" },
    ],
  },
  {
    question: "What is your primary career goal?",
    options: [
      { text: "Get a High-Paying Job", emoji: "💰" },
      { text: "Prepare for Govt. Jobs", emoji: "🏛️" },
      { text: "Pursue B.Tech (Lateral Entry)", emoji: "🎯" },
      { text: "Start My Own Business", emoji: "🚀" },
    ],
  },
  {
    question: "How do you prefer to learn?",
    options: [
      { text: "Online Courses & Videos", emoji: "📱" },
      { text: "Hands-on Projects", emoji: "🛠️" },
      { text: "Books & Study Material", emoji: "📖" },
      { text: "Mentorship & Guidance", emoji: "🧑‍🏫" },
    ],
  },
];

const results: Record<string, { title: string; branch: string; description: string; salary: string; topSkills: string[]; nextSteps: string[] }> = {
  "Building Software & Apps": {
    title: "Full-Stack Developer",
    branch: "Diploma in Computer Engineering",
    description: "You have a natural affinity for technology and problem-solving. A career in software development offers the highest growth potential with salaries reaching ₹12+ LPA within 3 years.",
    salary: "₹3 - 12 LPA",
    topSkills: ["React.js", "Node.js", "Python", "SQL", "Git"],
    nextSteps: ["Learn HTML/CSS/JS basics", "Master React or Angular", "Build 3 portfolio projects", "Apply for internships"],
  },
  "Working with Machines": {
    title: "Mechanical Design Engineer",
    branch: "Diploma in Mechanical Engineering",
    description: "Your passion for machines and manufacturing makes you ideal for design and production roles. Companies like Tata, L&T, and Godrej actively hire diploma mechanical engineers.",
    salary: "₹2.5 - 7 LPA",
    topSkills: ["AutoCAD", "SolidWorks", "CNC", "Six Sigma", "GD&T"],
    nextSteps: ["Master AutoCAD & SolidWorks", "Get Six Sigma certified", "Build a mechanical project", "Target manufacturing firms"],
  },
  "Building Infrastructure": {
    title: "Site / Civil Engineer",
    branch: "Diploma in Civil Engineering",
    description: "India's infrastructure boom means massive demand for civil engineers. From smart cities to highways, your skills will be in high demand across government and private sectors.",
    salary: "₹3 - 8 LPA",
    topSkills: ["AutoCAD Civil", "Estimation", "Surveying", "Revit", "Project Mgmt"],
    nextSteps: ["Learn AutoCAD Civil 3D", "Study estimation & costing", "Get site experience", "Prepare for govt. JE exams"],
  },
  "Robotics & Electronics": {
    title: "Automation Engineer",
    branch: "Diploma in E&TC / Instrumentation",
    description: "The Industry 4.0 revolution needs automation experts. With PLC, SCADA, and IoT skills, you can command premium salaries at companies like Bosch, ABB, and Siemens.",
    salary: "₹3.5 - 10 LPA",
    topSkills: ["PLC/SCADA", "IoT", "Python", "Robotics", "Embedded C"],
    nextSteps: ["Learn PLC programming (Siemens)", "Study IoT protocols", "Build an automation project", "Target Industry 4.0 firms"],
  },
};

export default function CareerQuiz() {
  const { setActiveTab } = useAppContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOption = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setShowResult(false);
    setAnswers([]);
  };

  const result = showResult ? results[answers[1]] || results["Building Software & Apps"] : null;

  return (
    <section id="quiz" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/8 border border-violet-500/15 text-violet-300 text-sm font-medium mb-6"
          >
            <Zap size={16} />
            <span>AI-Powered Recommendation</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Discover Your <span className="text-gradient">Ideal Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Take this 60-second quiz to get a personalized career recommendation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 md:p-12 rounded-[2rem] min-h-[420px] flex flex-col justify-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-600/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-600/5 blur-[80px] rounded-full" />

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full relative z-10"
              >
                {/* Progress */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-bold text-lg">0{currentStep + 1}</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-600 text-sm">0{steps.length}</span>
                  </div>
                  <div className="flex-grow progress-track">
                    <motion.div
                      initial={{ width: `${(currentStep / steps.length) * 100}%` }}
                      animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      className="progress-fill"
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 leading-tight">
                  {steps[currentStep].question}
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {steps[currentStep].options.map((option) => (
                    <motion.button
                      key={option.text}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOption(option.text)}
                      className="p-5 text-left rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all text-slate-300 font-medium group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{option.emoji}</span>
                        <span className="flex-grow">{option.text}</span>
                        <ArrowRight size={16} className="text-slate-700 group-hover:text-indigo-400 transition-colors" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center relative z-10"
              >
                {/* Result Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-2xl shadow-indigo-900/40"
                >
                  <Sparkles size={36} />
                </motion.div>

                <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2">Your Recommended Path</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{result?.title}</h3>
                <p className="text-sm text-violet-300 font-semibold mb-6">{result?.branch}</p>

                <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
                  {result?.description}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
                  <div className="glass-panel p-5 rounded-2xl text-center border-t border-t-indigo-500/30 shadow-[0_10px_30px_rgba(99,102,241,0.1)] hover:-translate-y-1 transition-transform">
                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mb-2">Expected Salary</p>
                    <p className="text-xl font-bold text-white tracking-tight">{result?.salary}</p>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl text-center border-t border-t-emerald-500/30 shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:-translate-y-1 transition-transform">
                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mb-2">Industry Demand</p>
                    <p className="text-xl font-bold text-emerald-400 tracking-tight">Very High</p>
                  </div>
                </div>

                {/* Top Skills */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Skills to Learn</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {result?.topSkills.map(skill => (
                      <span key={skill} className="tag-pill">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="text-left max-w-md mx-auto mb-8">
                  <p className="text-xs font-bold text-white uppercase tracking-widest mb-3 text-center">Your Next Steps</p>
                  <div className="space-y-2">
                    {result?.nextSteps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                  <button 
                    onClick={() => setActiveTab("roadmaps")}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-indigo-600 text-white flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:bg-indigo-500 hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-1"
                  >
                    View My Detailed Roadmap <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={reset}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold glass text-slate-300 flex items-center justify-center gap-2 hover:text-white border border-white/[0.08] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
                  >
                    <RotateCcw size={16} />
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
