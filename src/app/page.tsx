import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Foundation of{" "}
            <span className="gradient-text">Focus</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            In our world of constant digital stimulation, attention spans are under pressure like never before.
            Discover what attention really is, why it matters, and how to strengthen yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/test"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Take the Attention Test
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700 text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Explore Research
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-sm">
          <span>Scroll to learn more</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-slate-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "47s", label: "Average screen attention span in 2020", sub: "Down from 150s in 2004" },
            { value: "77×", label: "Times people check email per day", sub: "On average" },
            { value: "23 min", label: "To fully refocus after interruption", sub: "Research finding" },
            { value: "40%", label: "Productivity lost to task-switching", sub: "Due to switch costs" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-300 text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
              alt="Person focused on work at a desk"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent flex items-center">
              <div className="px-8 sm:px-12 max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Deep Focus is a Skill</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Like any skill, the ability to concentrate deeply can be trained, strengthened, and protected — starting with understanding how attention works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Attention Span */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What is Attention Span?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Attention span is the amount of time an individual can focus on a single task or activity without becoming distracted — a fundamental cognitive resource.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Focused Attention",
                desc: "Also known as sustained attention — the ability to concentrate on a specific task without distraction for a prolonged period. Essential for precision tasks like writing an essay or cooking.",
                color: "indigo",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                  </svg>
                ),
                title: "Selective Attention",
                desc: "The ability to filter out distractions and focus on one task in a busy environment — like concentrating on a conversation in a crowded room.",
                color: "violet",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "Divided Attention",
                desc: "Directing mental focus toward multiple tasks simultaneously — like listening to a podcast while cleaning, or taking notes during a presentation.",
                color: "sky",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-600/20 border border-${item.color}-500/30 flex items-center justify-center text-${item.color}-400 mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Attention Matters</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Attention span plays a critical role in learning, productivity, and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Learning & Memory",
                desc: "The ability to pay attention for long periods helps us learn and memorize information — essential for academic success, career growth, and picking up new skills like playing an instrument or baking.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                color: "indigo",
              },
              {
                title: "Productivity & Efficiency",
                desc: "When we aren't prone to constant distraction, we finish tasks faster and move on to others more quickly. This matters in school, career, and everyday tasks.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: "violet",
              },
              {
                title: "Mental Health",
                desc: "Sustaining attention may allow us to feel in control of ourselves and our activities, reducing stress and frustration while increasing confidence and satisfaction.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                color: "sky",
              },
              {
                title: "Relationships & Connection",
                desc: "Being present and attentive in conversations and interactions deepens relationships and allows us to connect more meaningfully with others.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: "emerald",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover flex gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-600/20 border border-${item.color}-500/30 flex items-center justify-center text-${item.color}-400 flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Affecting Attention */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Factors Affecting Attention Span</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Many factors impact how well and how long we can focus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Age",
                desc: "Attention spans develop in childhood and peak in young adulthood, with some natural decline after 60.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                color: "indigo",
              },
              {
                label: "Environment",
                desc: "Noisy, cluttered spaces make focus harder. Calm, organized environments extend attention span.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                color: "violet",
              },
              {
                label: "Cognitive Health",
                desc: "Brain injuries or strokes can affect attention. Cognitive rehabilitation can help address these challenges.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                color: "sky",
              },
              {
                label: "Mental Health",
                desc: "ADHD, anxiety, and depression affect attention, as do lifestyle factors like stress, sleep, and diet.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                color: "rose",
              },
              {
                label: "Digital Distractions",
                desc: "Notifications, social media, and frequent multitasking on digital devices can decrease attention span over time.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                color: "amber",
              },
              {
                label: "Sleep & Hydration",
                desc: "Sleep debt and mild dehydration both measurably impair attention span and cognitive performance.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ),
                color: "emerald",
              },
            ].map((item) => (
              <div key={item.label} className="card-hover bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-600/20 border border-${item.color}-500/30 flex items-center justify-center text-${item.color}-400 mb-3`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Quote Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80">
            <Image
              src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80"
              alt="Child reading a book"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Attention Develops Over Time</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Children&apos;s attention spans grow steadily with age. Childhood development experts generally say an average attention span is about 2–3 minutes per year of age — meaning a 6-year-old can focus for roughly 12–18 minutes.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Reading physical books, engaging in creative play, and limiting screen time during early childhood are among the most effective ways to build lasting attentional capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Age-based attention spans */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Attention Span by Age</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Childhood development experts generally say an average attention span is about 2–3 minutes per year of age.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-800/50 px-6 py-3 text-slate-400 text-sm font-medium">
              <span>Age</span>
              <span>Attention Span</span>
              <span>Visual</span>
            </div>
            {[
              { age: "2 years", span: "4–6 minutes", pct: 8 },
              { age: "4 years", span: "8–12 minutes", pct: 15 },
              { age: "6 years", span: "12–18 minutes", pct: 23 },
              { age: "8 years", span: "16–24 minutes", pct: 30 },
              { age: "10 years", span: "20–30 minutes", pct: 38 },
              { age: "12 years", span: "24–36 minutes", pct: 45 },
              { age: "14 years", span: "28–42 minutes", pct: 53 },
              { age: "16 years", span: "32–48 minutes", pct: 60 },
            ].map((row, i) => (
              <div
                key={row.age}
                className={`grid grid-cols-3 items-center px-6 py-4 ${i % 2 === 0 ? "bg-slate-900" : "bg-slate-900/50"} border-t border-slate-800`}
              >
                <span className="text-white font-medium">{row.age}</span>
                <span className="text-indigo-300">{row.span}</span>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-800 rounded-full h-2 max-w-[120px]">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">
            Source: Childhood development research. Individual results vary based on interest, environment, and health.
          </p>
        </div>
      </section>

      {/* Digital Age Image Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Digital Age Challenge</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Research by Dr. Gloria Mark of UC Irvine found that average screen attention spans dropped from 2.5 minutes in 2004 to just 47 seconds by 2020 — a 69% decline in 16 years.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Constant notifications, social media feeds, and the habit of multitasking fragment our focus throughout the day, making it harder to enter the deep concentration needed for meaningful work.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80">
            <Image
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
              alt="Person distracted by phone notifications"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-indigo-500/20 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Measure Your Focus?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Take the Digital Attention & Focus Assessment (DAFA) — a science-backed test designed specifically to measure how digital habits affect your attention span.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/test"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-lg"
              >
                Start the Test
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700 text-lg"
              >
                Read the Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span>FocusIQ — Understanding Attention Span</span>
          </div>
          <p>For educational purposes. Not a medical diagnostic tool.</p>
        </div>
      </footer>
    </main>
  );
}
