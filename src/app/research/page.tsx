import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20">
      {/* Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Research & Science
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Science of <span className="gradient-text">Attention</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore research findings, expert insights, and evidence-based facts about how attention works and why it&apos;s changing in the digital age.
          </p>
        </div>
      </section>

      {/* Key Research Findings */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-sm">📊</span>
            Key Research Findings
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                stat: "47 seconds",
                context: "Average attention span on a screen (2020)",
                detail: "Dr. Gloria Mark of UC Irvine tracked attention spans from 2004 to 2020. In 2004, the average was 2.5 minutes (150 seconds). By 2012 it fell to 75 seconds. By 2020, it averaged just 47 seconds — with a median of 40 seconds, meaning half of all measurements were 40 seconds or less.",
                source: "Gloria Mark, PhD — UC Irvine",
                color: "indigo",
              },
              {
                stat: "23 minutes",
                context: "Time to fully refocus after an interruption",
                detail: "Research shows it takes an average of 23 minutes and 15 seconds to fully return to a task after being interrupted. This 'switch cost' accumulates throughout the day, consuming significant mental resources beyond the actual work being done.",
                source: "Gloria Mark, PhD — Attention Span Research",
                color: "violet",
              },
              {
                stat: "77 times/day",
                context: "Average email checks per day",
                detail: "Studies tracking knowledge workers found they check email an average of 77 times per day. Each check represents an attention switch, contributing to fragmented focus and increased stress levels measured by heart rate monitors.",
                source: "UC Irvine Workplace Research",
                color: "sky",
              },
              {
                stat: "2–4 years old",
                context: "Age when screen habits begin forming",
                detail: "Children aged 2–4 already average 2.5 hours of screen time per day. By ages 5–8, this rises to about 3 hours. At these ages, the prefrontal cortex — responsible for executive function and self-control — is not yet fully developed.",
                source: "Gloria Mark, PhD — Speaking of Psychology Podcast",
                color: "emerald",
              },
            ].map((item) => (
              <div key={item.stat} className={`card-hover bg-slate-900 border border-slate-800 rounded-2xl p-6`}>
                <div className={`text-3xl font-bold text-${item.color}-400 mb-1`}>{item.stat}</div>
                <div className="text-white font-semibold mb-3">{item.context}</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.detail}</p>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {item.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Insights */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 text-sm">💬</span>
            Expert Insights
          </h2>

          <div className="space-y-6">
            {[
              {
                quote: "Everyone knows what attention is. It's the taking possession by the mind in clear and vivid form of one out of what seems several simultaneously possible objects or trains of thought.",
                author: "William James",
                role: "Father of Psychology, 19th Century",
                context: "The foundational definition of attention that still guides modern research.",
              },
              {
                quote: "The faster the attention switching occurs, stress goes up. We show that stress goes up using heart rate monitors. We know from decades of research in the laboratory that when people multitask, they experience stress, blood pressure rises.",
                author: "Gloria Mark, PhD",
                role: "Chancellor's Professor of Informatics, UC Irvine",
                context: "From her book 'Attention Span: A Groundbreaking Way to Restore Balance, Happiness, and Productivity'",
              },
              {
                quote: "When people accumulate sleep debt — the accumulation of loss of sleep — the greater the sleep debt, the shorter the attention spans. People tend to do more lightweight activities like social media. They just don't have the resources to be able to focus and do hard work.",
                author: "Gloria Mark, PhD",
                role: "Chancellor's Professor of Informatics, UC Irvine",
                context: "On the relationship between sleep and digital behavior",
              },
              {
                quote: "I find it problematic that we're putting children into a digital world before some very critical mental functions are fully developed. Children need self-control for learning, and executive function is not yet well developed.",
                author: "Gloria Mark, PhD",
                role: "Chancellor's Professor of Informatics, UC Irvine",
                context: "On children's screen time and cognitive development",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="text-indigo-400 text-4xl font-serif leading-none mt-1 flex-shrink-0">&ldquo;</div>
                  <div>
                    <p className="text-slate-200 text-lg leading-relaxed mb-4 italic">{item.quote}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-white font-semibold">{item.author}</span>
                      <span className="hidden sm:block text-slate-600">·</span>
                      <span className="text-slate-400 text-sm">{item.role}</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">{item.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Brain Processes Attention */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 text-sm">🧠</span>
            How the Brain Processes Attention
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">The Frontal Lobe</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Concentration and attention are part of the function of the brain&apos;s frontal lobe. Paying attention usually begins as an unintentional process when stimuli enter through the nervous system — visual, auditory, olfactory, and other sensory inputs all flow into the frontal lobe for processing.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">Executive Function</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Think of executive function as the &quot;governor of the mind.&quot; It manages decision-making, sets priorities for what we should pay attention to, and helps manage interference from peripheral stimuli. This system is not fully developed until early adulthood.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">Built-in Filters</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The brain has built-in limitations to prevent overwhelm. It&apos;s most likely to focus on stimuli at extremes of contrast — a fast-moving object or loud sound will catch attention more readily. Humans can also train their brains to respond to specific stimuli, like their own name.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">The Switch Cost</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every time you switch your attention, you must reorient to the new activity. If you&apos;re writing and switch to check email, then return, you must reconstruct: What was I writing? What was the topic? What words was I using? This takes time and uses precious mental resources on top of the actual work.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">Flow State</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Psychologist Mihaly Csikszentmihalyi identified &quot;flow&quot; as the optimal state of attention — when people are so immersed in something that time doesn&apos;t seem to matter. It requires a sweet spot: challenged enough to engage, but not so challenged that it becomes overwhelming.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">Mental Resources</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Attention operates like a tank of mental resources. When full, you can focus much better. When depleted from hard work and constant switching, it becomes very difficult to focus. Sleep, breaks, and exercise replenish this tank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Age Impact */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400 text-sm">📱</span>
            The Digital Age Impact
          </h2>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-800">
              <h3 className="text-white font-semibold text-lg">Attention Span Decline Over Time</h3>
              <p className="text-slate-400 text-sm mt-1">Average time people can stay focused on a screen (Dr. Gloria Mark, UC Irvine)</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { year: "2004", seconds: 150, label: "2 min 30 sec", pct: 100 },
                  { year: "2012", seconds: 75, label: "1 min 15 sec", pct: 50 },
                  { year: "2020", seconds: 47, label: "47 seconds", pct: 31 },
                ].map((row) => (
                  <div key={row.year} className="flex items-center gap-4">
                    <span className="text-slate-400 text-sm w-10 flex-shrink-0">{row.year}</span>
                    <div className="flex-1 bg-slate-800 rounded-full h-8 relative overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-end pr-3 transition-all"
                        style={{ width: `${row.pct}%` }}
                      >
                        <span className="text-white text-xs font-semibold whitespace-nowrap">{row.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">
                A 69% decrease in average screen attention span over 16 years.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Social Media & Short Content",
                desc: "Platforms like TikTok have normalized seconds-long videos that change constantly. TV shot lengths have also decreased to an average of 4 seconds, down from much longer in earlier decades.",
                icon: "📲",
              },
              {
                title: "Multitasking Myth",
                desc: "Multitasking doesn't actually work — the brain switches rapidly between tasks rather than doing them simultaneously. This switching causes errors, slows performance, and increases stress.",
                icon: "🔄",
              },
              {
                title: "Speed Consumption",
                desc: "Many people listen to podcasts at 1.5× or 2× speed to consume more content faster. The abundance of available content drives a desire to sample as much as possible.",
                icon: "⏩",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Improvement */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm">✅</span>
            Evidence-Based Tips to Improve Attention
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                tip: "Prioritize Sleep",
                detail: "Sleep debt directly shortens attention spans. Consistently getting less than your needed hours accumulates a deficit that impairs focus and drives you toward lightweight, low-effort activities.",
                badge: "High Impact",
                badgeColor: "emerald",
              },
              {
                tip: "Take Strategic Breaks",
                detail: "Take breaks at natural stopping points (end of a section, not mid-sentence). This reduces the mental effort needed to reconstruct your work when you return.",
                badge: "High Impact",
                badgeColor: "emerald",
              },
              {
                tip: "Limit Multitasking",
                detail: "Switch to single-tasking whenever possible. Each task switch incurs a cognitive cost. Finishing one thing before starting another preserves mental resources.",
                badge: "High Impact",
                badgeColor: "emerald",
              },
              {
                tip: "The Pomodoro Method",
                detail: "Work for 25 minutes, then take a 5-minute break. This builds attention span gradually. Adjust the intervals to match your personal energy levels.",
                badge: "Practical",
                badgeColor: "sky",
              },
              {
                tip: "Regular Exercise",
                detail: "Physical activity improves concentration and supports overall brain health, enhancing both short-term and sustained attention. Even a short walk can help.",
                badge: "Practical",
                badgeColor: "sky",
              },
              {
                tip: "Practice Mindfulness",
                detail: "Mindfulness trains the brain to stay present and aware. Regular practice can improve attentional control and reduce the tendency for the mind to wander.",
                badge: "Practical",
                badgeColor: "sky",
              },
              {
                tip: "Stay Hydrated",
                detail: "Mild dehydration measurably impairs attention span. Keeping well-hydrated is a simple but effective way to maintain cognitive performance throughout the day.",
                badge: "Simple",
                badgeColor: "violet",
              },
              {
                tip: "Manage Notifications",
                detail: "Turn off non-essential notifications during focused work. Organizations can create 'quiet windows' with no electronic communications to allow deep work.",
                badge: "Simple",
                badgeColor: "violet",
              },
              {
                tip: "Read Physical Books",
                detail: "Reading books — especially for children — is an excellent way to build sustained attention. It requires maintaining focus without the constant stimulation of digital media.",
                badge: "Simple",
                badgeColor: "violet",
              },
            ].map((item) => (
              <div key={item.tip} className="card-hover bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-white font-semibold">{item.tip}</h3>
                  <span className={`flex-shrink-0 text-xs px-2 py-1 rounded-full bg-${item.badgeColor}-600/20 text-${item.badgeColor}-300 border border-${item.badgeColor}-500/20`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-slate-400 text-sm">📚</span>
            Sources & References
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                "Mark, G. (2023). Attention Span: A Groundbreaking Way to Restore Balance, Happiness, and Productivity. Hanover Square Press.",
                "Mills, K. (Host). (2023). Why our attention spans are shrinking, with Gloria Mark, PhD [Podcast episode]. Speaking of Psychology. American Psychological Association.",
                "Ungvarsky, J. (2024). Attention span. Salem Press Encyclopedia.",
                "HappyNeuron Pro. (2024). Understanding the Foundation of Focus. happy-neuron.com",
                "Brain Balance. (2024). What is the Expected Average Span of Attention by Age? brainbalancecenters.com",
                "Bradbury, N. A. (2016). Attention span during lectures: 8 seconds, 10 minutes, or more? Advances in Physiology Education.",
                "Diagnostic and Statistical Manual of Mental Disorders, 5th edition (DSM-5). American Psychiatric Association.",
                "Adler, L. Adult ADHD Self-Report Scale (ASRS).",
                "Wolraich, M. Vanderbilt ADHD Diagnostic Rating Scale.",
              ].map((source, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-slate-600 flex-shrink-0">[{i + 1}]</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Put the Research to the Test</h2>
          <p className="text-slate-400 mb-8">
            Now that you understand the science, take the Digital Attention & Focus Assessment to see how your own attention compares.
          </p>
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-lg"
          >
            Take the DAFA Test
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
