"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  // Section 1: Digital Impulse Control
  { id: 1, section: "Digital Impulse Control", text: "I open social media automatically without thinking.", reverse: false },
  { id: 2, section: "Digital Impulse Control", text: "I check my phone even when I know I should not.", reverse: false },
  { id: 3, section: "Digital Impulse Control", text: "I feel a strong urge to check notifications immediately.", reverse: false },
  { id: 4, section: "Digital Impulse Control", text: "I switch apps frequently without finishing what I started.", reverse: false },
  { id: 5, section: "Digital Impulse Control", text: "I find it difficult to resist scrolling.", reverse: false },
  // Section 2: Focus Stability
  { id: 6, section: "Focus Stability", text: "I can stay focused on one task without needing stimulation.", reverse: true },
  { id: 7, section: "Focus Stability", text: "My mind jumps between thoughts when working.", reverse: false },
  { id: 8, section: "Focus Stability", text: "I lose focus quickly during quiet activities.", reverse: false },
  { id: 9, section: "Focus Stability", text: "I can maintain concentration without external stimulation.", reverse: true },
  { id: 10, section: "Focus Stability", text: "I feel uncomfortable when nothing is stimulating me.", reverse: false },
  // Section 3: Cognitive Endurance
  { id: 11, section: "Cognitive Endurance", text: "I can work on mentally difficult tasks for a long time.", reverse: true },
  { id: 12, section: "Cognitive Endurance", text: "I give up quickly when tasks require deep thinking.", reverse: false },
  { id: 13, section: "Cognitive Endurance", text: "I prefer quick and easy activities over challenging ones.", reverse: false },
  { id: 14, section: "Cognitive Endurance", text: "I can stay mentally engaged even when tasks are slow.", reverse: true },
  { id: 15, section: "Cognitive Endurance", text: "I avoid tasks that require long concentration.", reverse: false },
  // Section 4: Attention Recovery Ability
  { id: 16, section: "Attention Recovery", text: "I can regain focus quickly after distraction.", reverse: true },
  { id: 17, section: "Attention Recovery", text: "Once distracted, I struggle to return to the original task.", reverse: false },
  { id: 18, section: "Attention Recovery", text: "I can consciously control where my attention goes.", reverse: true },
  { id: 19, section: "Attention Recovery", text: "I feel mentally tired after short periods of focus.", reverse: false },
  { id: 20, section: "Attention Recovery", text: "I can force myself to focus when necessary.", reverse: true },
];

const sections = ["Digital Impulse Control", "Focus Stability", "Cognitive Endurance", "Attention Recovery"];

const ratingLabels = [
  { value: 0, label: "Not true at all" },
  { value: 1, label: "Slightly true" },
  { value: 2, label: "Sometimes true" },
  { value: 3, label: "Mostly true" },
  { value: 4, label: "Completely true" },
];

type Phase = "intro" | "test" | "results";

function getScore(answers: Record<number, number>): number {
  let total = 0;
  for (const q of questions) {
    const raw = answers[q.id] ?? 0;
    const score = q.reverse ? 4 - raw : raw;
    // For attention, higher score = WORSE attention (more digital impulse, less focus)
    // We want final score to represent attention STRENGTH, so we invert
    total += score;
  }
  // total is now 0-80 where higher = worse attention
  // Invert so higher = better attention
  return 80 - total;
}

function getLevel(score: number): {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  description: string;
  emoji: string;
} {
  if (score <= 20) return {
    label: "Severely Reduced Attention",
    color: "rose",
    bgColor: "bg-rose-600/20",
    borderColor: "border-rose-500/30",
    textColor: "text-rose-400",
    emoji: "⚠️",
    description: "Your digital habits are significantly impacting your ability to focus. You may find it very difficult to stay on task, resist distractions, or recover attention after interruptions. The good news: with intentional practice, attention span can be meaningfully improved.",
  };
  if (score <= 40) return {
    label: "Reduced Attention",
    color: "orange",
    bgColor: "bg-orange-600/20",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    emoji: "📉",
    description: "Your attention span is below average, likely influenced by digital habits and frequent task-switching. You may notice difficulty sustaining focus on demanding tasks or recovering quickly from distractions. Targeted strategies can make a real difference.",
  };
  if (score <= 60) return {
    label: "Moderate Attention",
    color: "yellow",
    bgColor: "bg-yellow-600/20",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
    emoji: "📊",
    description: "Your attention span is in the moderate range. You can focus reasonably well in some situations but may struggle with sustained concentration or resisting digital distractions. There's solid room for improvement with consistent practice.",
  };
  return {
    label: "Strong Attention",
    color: "emerald",
    bgColor: "bg-emerald-600/20",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    emoji: "🌟",
    description: "Your attention span is strong! You demonstrate good control over digital impulses, solid focus stability, cognitive endurance, and the ability to recover attention after distractions. Keep up the habits that got you here.",
  };
}

function getSectionScore(answers: Record<number, number>, sectionName: string): number {
  const sectionQs = questions.filter(q => q.section === sectionName);
  let total = 0;
  for (const q of sectionQs) {
    const raw = answers[q.id] ?? 0;
    const score = q.reverse ? 4 - raw : raw;
    total += score;
  }
  // Invert: higher = better
  return 20 - total;
}

export default function DAFATest() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const currentSectionName = sections[currentSection];
  const currentQuestions = questions.filter(q => q.section === currentSectionName);
  const answeredInSection = currentQuestions.filter(q => answers[q.id] !== undefined).length;
  const sectionComplete = answeredInSection === currentQuestions.length;
  const totalAnswered = Object.keys(answers).length;
  const allComplete = totalAnswered === questions.length;

  const score = getScore(answers);
  const level = getLevel(score);

  function handleAnswer(questionId: number, value: number) {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setPhase("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleRestart() {
    setAnswers({});
    setCurrentSection(0);
    setPhase("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (phase === "intro") {
    return (
      <div className="px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Digital Attention & Focus Assessment
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The <span className="gradient-text">DAFA</span> Test
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Measure how digital habits affect your sustained attention, cognitive control, and focus ability.
            </p>
          </div>

          {/* About the test */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-6">
            <h2 className="text-white font-semibold text-xl mb-4">About This Assessment</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The Digital Attention & Focus Assessment (DAFA) is an original cognitive assessment tool designed to measure how digital habits affect attention span in teenagers and young adults. It evaluates four key dimensions of attention:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { name: "Digital Impulse Control", desc: "How well you resist digital urges", icon: "📱" },
                { name: "Focus Stability", desc: "Your ability to maintain concentration", icon: "🎯" },
                { name: "Cognitive Endurance", desc: "How long you can sustain mental effort", icon: "💪" },
                { name: "Attention Recovery", desc: "How quickly you refocus after distraction", icon: "🔄" },
              ].map((s) => (
                <div key={s.name} className="flex items-start gap-3 bg-slate-800/50 rounded-xl p-4">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <div className="text-white text-sm font-medium">{s.name}</div>
                    <div className="text-slate-400 text-xs">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-4">
              <p className="text-indigo-300 text-sm">
                <strong>How to answer:</strong> Rate each statement from 0 to 4 based on how true it is for you. There are 20 questions across 4 sections. Be honest — there are no right or wrong answers.
              </p>
            </div>
          </div>

          {/* Scoring guide */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4">Rating Scale</h3>
            <div className="grid grid-cols-5 gap-2">
              {ratingLabels.map((r) => (
                <div key={r.value} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                    {r.value}
                  </div>
                  <div className="text-slate-400 text-xs leading-tight">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-8 text-slate-500 text-xs leading-relaxed">
            <strong className="text-slate-400">Disclaimer:</strong> This assessment is for educational and informational purposes only. It is not a diagnostic tool and is not intended to replace professional medical or psychological evaluation. Results are based on self-reported responses and should be interpreted as general guidance only.
          </div>

          <div className="text-center">
            <button
              onClick={() => setPhase("test")}
              className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all pulse-glow text-xl"
            >
              Start the Test
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-slate-500 text-sm mt-4">Takes about 3–5 minutes</p>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "test") {
    const progressPct = (totalAnswered / questions.length) * 100;

    return (
      <div className="px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-slate-400 text-sm">Section {currentSection + 1} of {sections.length}</span>
                <h2 className="text-white font-bold text-xl">{currentSectionName}</h2>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-sm">{totalAnswered} / {questions.length} answered</span>
              </div>
            </div>
            {/* Overall progress bar */}
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            {/* Section tabs */}
            <div className="flex gap-2 mt-4">
              {sections.map((s, i) => {
                const sQs = questions.filter(q => q.section === s);
                const sAnswered = sQs.filter(q => answers[q.id] !== undefined).length;
                const sDone = sAnswered === sQs.length;
                return (
                  <div
                    key={s}
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      i < currentSection || sDone
                        ? "bg-indigo-500"
                        : i === currentSection
                        ? "bg-indigo-500/50"
                        : "bg-slate-700"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6 mb-8">
            {currentQuestions.map((q, qi) => (
              <div
                key={q.id}
                className={`bg-slate-900 border rounded-2xl p-6 transition-all ${
                  answers[q.id] !== undefined
                    ? "border-indigo-500/40"
                    : "border-slate-800"
                }`}
              >
                <div className="flex items-start gap-3 mb-5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 text-sm font-medium">
                    {qi + 1}
                  </span>
                  <p className="text-white text-base leading-relaxed">{q.text}</p>
                </div>

                {/* Rating buttons */}
                <div className="grid grid-cols-5 gap-2">
                  {ratingLabels.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => handleAnswer(q.id, r.value)}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                        answers[q.id] === r.value
                          ? "bg-indigo-600 border-indigo-500 text-white"
                          : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-indigo-500/50 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-xl font-bold">{r.value}</span>
                      <span className="text-xs text-center leading-tight hidden sm:block">{r.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                if (currentSection > 0) {
                  setCurrentSection(prev => prev - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              disabled={currentSection === 0}
              className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Previous
            </button>

            <div className="text-slate-500 text-sm">
              {answeredInSection}/{currentQuestions.length} in this section
            </div>

            <button
              onClick={handleNext}
              disabled={!sectionComplete}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {currentSection === sections.length - 1 ? (
                <>
                  See Results
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </>
              ) : (
                <>
                  Next Section
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {!sectionComplete && (
            <p className="text-center text-slate-500 text-sm mt-4">
              Please answer all questions in this section to continue.
            </p>
          )}
        </div>
      </div>
    );
  }

  // Results phase
  const sectionScores = sections.map(s => ({
    name: s,
    score: getSectionScore(answers, s),
    pct: Math.round((getSectionScore(answers, s) / 20) * 100),
  }));

  const improvements = [
    {
      title: "Prioritize Sleep",
      detail: "Sleep debt directly shortens attention spans. Aim for 8+ hours consistently. Even one week of proper sleep can measurably improve focus.",
      icon: "💤",
      forLevels: [0, 1, 2, 3],
    },
    {
      title: "Single-Task Deliberately",
      detail: "Close extra browser tabs. Put your phone in another room. Work on one thing at a time. Each task switch costs you mental energy.",
      icon: "🎯",
      forLevels: [0, 1, 2],
    },
    {
      title: "Use the Pomodoro Technique",
      detail: "Work for 25 minutes, then take a 5-minute break. This trains your brain to sustain focus in structured intervals.",
      icon: "⏱️",
      forLevels: [0, 1, 2, 3],
    },
    {
      title: "Turn Off Non-Essential Notifications",
      detail: "Every notification is an attention interrupt. Disable social media notifications during study or work hours.",
      icon: "🔕",
      forLevels: [0, 1, 2],
    },
    {
      title: "Take Strategic Breaks",
      detail: "Stop at natural breakpoints (end of a paragraph, not mid-sentence). This reduces the mental effort needed to restart.",
      icon: "☕",
      forLevels: [0, 1, 2, 3],
    },
    {
      title: "Exercise Regularly",
      detail: "Even a 20-minute walk improves concentration and brain health. Physical activity replenishes your mental resources.",
      icon: "🏃",
      forLevels: [0, 1, 2, 3],
    },
    {
      title: "Practice Mindfulness",
      detail: "5–10 minutes of mindfulness daily trains your brain to notice when it wanders and return to the present moment.",
      icon: "🧘",
      forLevels: [0, 1, 2, 3],
    },
    {
      title: "Read Physical Books",
      detail: "Reading books — without notifications — is one of the best exercises for sustained attention. Start with 15 minutes a day.",
      icon: "📖",
      forLevels: [0, 1, 2],
    },
    {
      title: "Stay Hydrated",
      detail: "Mild dehydration measurably impairs attention. Keep water nearby and drink consistently throughout the day.",
      icon: "💧",
      forLevels: [0, 1, 2, 3],
    },
    {
      title: "Maintain Your Strong Habits",
      detail: "You're doing well! Continue the habits that got you here. Consider helping others around you improve their focus too.",
      icon: "🌟",
      forLevels: [3],
    },
  ];

  const levelIndex = score <= 20 ? 0 : score <= 40 ? 1 : score <= 60 ? 2 : 3;
  const relevantTips = improvements.filter(t => t.forLevels.includes(levelIndex));

  return (
    <div className="px-4">
      <div className="max-w-3xl mx-auto">
        {/* Results header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">{level.emoji}</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Your Results</h1>
          <p className="text-slate-400">Digital Attention & Focus Assessment (DAFA)</p>
        </div>

        {/* Score card */}
        <div className={`${level.bgColor} border ${level.borderColor} rounded-3xl p-8 mb-8 text-center`}>
          <div className={`text-7xl font-bold ${level.textColor} mb-2`}>{score}</div>
          <div className="text-slate-400 text-sm mb-4">out of 80</div>
          <div className={`inline-block px-6 py-2 rounded-full ${level.bgColor} border ${level.borderColor} ${level.textColor} font-semibold text-lg mb-4`}>
            {level.label}
          </div>
          <p className="text-slate-300 leading-relaxed max-w-xl mx-auto">{level.description}</p>

          {/* Score bar */}
          <div className="mt-6 max-w-sm mx-auto">
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div
                className={`h-3 rounded-full bg-gradient-to-r from-${level.color}-600 to-${level.color}-400 transition-all`}
                style={{ width: `${(score / 80) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-slate-500 text-xs mt-1">
              <span>0</span>
              <span>20</span>
              <span>40</span>
              <span>60</span>
              <span>80</span>
            </div>
            <div className="flex justify-between text-slate-600 text-xs">
              <span>Severely Reduced</span>
              <span className="text-right">Strong</span>
            </div>
          </div>
        </div>

        {/* Section breakdown */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-semibold text-lg mb-5">Section Breakdown</h2>
          <div className="space-y-4">
            {sectionScores.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-300 text-sm font-medium">{s.name}</span>
                  <span className="text-slate-400 text-sm">{s.score}/20</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score classification reference */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-semibold text-lg mb-4">Score Classification</h2>
          <div className="space-y-2">
            {[
              { range: "61–80", label: "Strong Attention", color: "emerald" },
              { range: "41–60", label: "Moderate Attention", color: "yellow" },
              { range: "21–40", label: "Reduced Attention", color: "orange" },
              { range: "0–20", label: "Severely Reduced Attention", color: "rose" },
            ].map((c) => (
              <div
                key={c.range}
                className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                  (c.range === "61–80" && score > 60) ||
                  (c.range === "41–60" && score > 40 && score <= 60) ||
                  (c.range === "21–40" && score > 20 && score <= 40) ||
                  (c.range === "0–20" && score <= 20)
                    ? `bg-${c.color}-600/20 border border-${c.color}-500/30`
                    : "bg-slate-800/30"
                }`}
              >
                <span className={`font-semibold text-${c.color}-400`}>{c.range}</span>
                <span className="text-slate-300 text-sm">{c.label}</span>
                {((c.range === "61–80" && score > 60) ||
                  (c.range === "41–60" && score > 40 && score <= 60) ||
                  (c.range === "21–40" && score > 20 && score <= 40) ||
                  (c.range === "0–20" && score <= 20)) && (
                  <span className="text-xs text-slate-400">← Your score</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Improvement tips */}
        <div className="mb-8">
          <h2 className="text-white font-semibold text-xl mb-5">
            Ways to Improve Your Focus
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relevantTips.map((tip) => (
              <div key={tip.title} className="card-hover bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-8 text-slate-500 text-xs leading-relaxed">
          <strong className="text-slate-400">Note:</strong> This assessment is for educational purposes only and is not a diagnostic tool. Results reflect self-reported digital habits and should not be used as a substitute for professional evaluation. If you have concerns about attention difficulties, please consult a qualified healthcare professional.
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleRestart}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Retake the Test
          </button>
          <Link
            href="/research"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Read the Research
          </Link>
        </div>
      </div>
    </div>
  );
}
