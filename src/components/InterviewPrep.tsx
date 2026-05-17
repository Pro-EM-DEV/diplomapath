"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle, BrainCircuit, ArrowRight, BookOpen, Timer, Trophy, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import questionsData from "@/data/interviewQuestions.json";

// Map our generated JSON format to the component's format
const techQs = questionsData.technical.map(q => ({ q: q.question, a: q.answer }));
const hrQs = questionsData.hr.map(q => ({ q: q.question, a: q.answer }));

const mockTest = [
  { q: "Which programming language is typically used to program PLCs?", options: ["Python", "Ladder Logic", "C++", "Java"], correct: 1 },
  { q: "What does 'CAD' stand for?", options: ["Computer Aided Design", "Computer Applied Data", "Central Automated Device", "Code And Deploy"], correct: 0 },
  { q: "In a 4-stroke engine, which stroke produces power?", options: ["Intake", "Compression", "Combustion/Power", "Exhaust"], correct: 2 },
  { q: "What is the primary function of a diode?", options: ["Store charge", "Amplify signal", "Allow current in one direction", "Measure voltage"], correct: 2 },
  { q: "Which tool is used for version control in software?", options: ["Docker", "Git", "Jenkins", "Kubernetes"], correct: 1 }
];

export default function InterviewPrep() {
  const [activeTab, setActiveTab] = useState("tech");
  const [openQ, setOpenQ] = useState<number | null>(null);
  
  // Mock Test State
  const [testStarted, setTestStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(index);
    if (index === mockTest[currentQ].correct) setScore(s => s + 1);
    
    setTimeout(() => {
      if (currentQ < mockTest.length - 1) {
        setCurrentQ(c => c + 1);
        setSelectedOpt(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetTest = () => {
    setTestStarted(false);
    setCurrentQ(0);
    setScore(0);
    setSelectedOpt(null);
    setShowResult(false);
  };

  const questions = activeTab === "tech" ? techQs : hrQs;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6"
          >
            <BrainCircuit size={16} />
            <span>Master The Interview</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Ace Your <span className="text-gradient">Technical Rounds</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Practice with 100 actual questions asked by top recruiters and test your knowledge with our mock simulator.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "tech", label: "Technical Q&A", icon: BookOpen },
            { id: "hr", label: "HR & Behavioral", icon: HelpCircle },
            { id: "mock", label: "Mock Test", icon: Timer }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={cn(
                "px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300",
                activeTab === t.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/30"
                  : "bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              )}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="glass-card rounded-[2rem] p-6 sm:p-10 border-indigo-500/10 relative overflow-hidden min-h-[400px]">
          {activeTab !== "mock" ? (
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Top 50 {activeTab === "tech" ? "Technical" : "HR"} Questions</h3>
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                  Updated 2026
                </span>
              </div>
              
              {questions.map((q, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300",
                    openQ === i ? "bg-white/[0.05]" : "bg-white/[0.02] hover:bg-white/[0.04]"
                  )}
                >
                  <button
                    onClick={() => setOpenQ(openQ === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-slate-200 pr-4">{q.q}</span>
                    <ChevronDown size={18} className={cn("text-slate-500 transition-transform duration-300 shrink-0", openQ === i && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openQ === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/[0.04] pt-4"
                      >
                        {q.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="mock"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full min-h-[350px]"
            >
              {!testStarted ? (
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center mb-6 border border-indigo-500/20">
                    <BrainCircuit size={40} className="text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Quick Assessment</h3>
                  <p className="text-slate-400 mb-8 max-w-md mx-auto">Take a 5-question mock test to evaluate your fundamental engineering knowledge under pressure.</p>
                  <button
                    onClick={() => setTestStarted(true)}
                    className="px-8 py-4 rounded-xl font-bold btn-gradient text-white flex items-center justify-center gap-2 mx-auto"
                  >
                    Start Test Now <ArrowRight size={18} />
                  </button>
                </div>
              ) : !showResult ? (
                <div className="w-full max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-8 text-sm font-bold text-slate-400">
                    <span>Question {currentQ + 1} of {mockTest.length}</span>
                    <span className="text-indigo-400">Score: {score}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 leading-tight">
                    {mockTest[currentQ].q}
                  </h3>
                  
                  <div className="space-y-3">
                    {mockTest[currentQ].options.map((opt, i) => {
                      const isSelected = selectedOpt === i;
                      const isCorrect = i === mockTest[currentQ].correct;
                      const showCorrect = selectedOpt !== null && isCorrect;
                      const showWrong = isSelected && !isCorrect;

                      return (
                        <button
                          key={i}
                          onClick={() => handleOptionSelect(i)}
                          disabled={selectedOpt !== null}
                          className={cn(
                            "w-full text-left p-4 rounded-xl border text-sm font-medium transition-all duration-300",
                            selectedOpt === null 
                              ? "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] text-slate-300"
                              : showCorrect
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                                : showWrong
                                  ? "bg-red-500/20 border-red-500/50 text-red-300"
                                  : "bg-white/[0.01] border-transparent text-slate-600 opacity-50"
                          )}
                        >
                          <div className="flex justify-between items-center">
                            <span>{opt}</span>
                            {showCorrect && <CheckCircle size={18} className="text-emerald-400" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-indigo-900/30">
                    <Trophy size={48} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Test Complete!</h3>
                  <p className="text-slate-400 mb-8">You scored {score} out of {mockTest.length}. {score >= 4 ? "Excellent job!" : "Keep practicing!"}</p>
                  
                  <button
                    onClick={resetTest}
                    className="px-8 py-3 rounded-xl font-bold bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-all"
                  >
                    Retake Test
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
