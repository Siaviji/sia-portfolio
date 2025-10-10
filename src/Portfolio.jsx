import React from "react";

// helper: build a safe URL to anything inside /public
const pub = (p) => `${import.meta.env.BASE_URL}${encodeURI(p)}`;

/* -----------------------------  HERO AVATAR (flip)  ----------------------------- */
/** Hover = flip (Photo → Memoji). Click = toggle "At a glance" overlay. */
function HeroAvatar() {
  const [hovered, setHovered] = React.useState(false);
  const [glance, setGlance] = React.useState(false);

  const flipStyle = {
    transform: hovered && !glance ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  return (
    <div
      className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-neutral-800 shadow-xl bg-neutral-900/40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 3D flip wrapper */}
      <div className="absolute inset-0 [perspective:1000px]" aria-hidden={glance}>
        <div
          className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
          style={flipStyle}
        >
          {/* FRONT: real photo (shown first) */}
          <img
            src={pub("images/headshot.JPEG")}  // use your exact file name/extension
            alt="Sia Viji Puthusseri"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl border border-neutral-800
                       [backface-visibility:hidden]"
            loading="lazy"
          />

          {/* BACK: memoji (visible after flip) */}
          <img
            src={pub("images/memoji.png")}
            alt="Memoji"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl border border-neutral-800
                       [transform:rotateY(180deg)] [backface-visibility:hidden]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Toggle overlay button */}
      <button
        type="button"
        onClick={() => setGlance((s) => !s)}
        className="absolute right-2 top-2 z-20 rounded-xl border border-neutral-700/80 bg-neutral-900/60 backdrop-blur px-2.5 py-1 text-xs text-neutral-200 hover:bg-neutral-800"
        aria-pressed={glance}
      >
        {glance ? "Close" : "At a glance"}
      </button>

      {/* At a glance overlay */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-300 ${
          glance ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm" />
        <div className="absolute inset-0 p-5 overflow-auto">
          <div className="h-full w-full rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
            <h3 className="text-sm text-neutral-400">At a glance</h3>

            <p className="mt-3 text-sm text-neutral-300">
              <span className="font-medium text-neutral-100">Focus:</span>{" "}
              AI-first product experiences, platform services, and data-driven delivery.
            </p>

            <div className="mt-3">
              <p className="text-sm font-medium text-neutral-100 mb-2">Superpowers</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Voice of Customer → PRDs",
                  "Roadmaps & Backlogs",
                  "UAT / Beta Programs",
                  "Program Governance",
                ].map((x, i) => (
                  <span
                    key={i}
                    className="text-[11px] rounded-full border border-neutral-700 px-2 py-1 text-neutral-300"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm font-medium text-neutral-100 mb-2">Delivery toolkit</p>
              <div className="flex flex-wrap gap-2">
                {["PRDs & ACs", "Release Readiness", "Go/No-Go Hubs", "A/B Testing"].map(
                  (x, i) => (
                    <span
                      key={i}
                      className="text-[11px] rounded-full border border-neutral-700 px-2 py-1 text-neutral-300"
                    >
                      {x}
                    </span>
                  )
                )}
              </div>
            </div>

            <p className="mt-3 text-sm text-neutral-300">
              <span className="font-medium text-neutral-100">Metrics I track:</span>{" "}
              release hit-rate, UAT cycle time, MTTR, adoption & engagement lift.
            </p>

            <p className="mt-3 text-sm text-neutral-300">
              <span className="font-medium text-neutral-100">Stack:</span>{" "}
              Python / SQL • Power BI / Tableau • Confluence / Jira • APIs / SDKs
            </p>

            <p className="mt-3 text-sm text-neutral-300">
              <span className="font-medium text-neutral-100">Quirk:</span>{" "}
              Will trade well-scoped PRDs for great tacos 🌮
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- DATA --------------------------------- */

const roles = [
  {
    title: "Project Manager Intern (Enterprise Data Platform)",
    company: "EXL Services (Client: AIG) — Hybrid, New York, NY",
    dates: "Jun 2025 – Present",
    bullets: [
      "Drove planning, execution, and delivery across 80+ Sources of Record; aligned milestones to data-modernization goals.",
      "Partnered with Eng/DS/QA to standardize data flows enabling downstream AI/ML analytics and automation.",
      "Stood up data quality & lineage guidelines used by cross-functional teams for operational governance.",
      "Coordinated offshore BDAs and QA to keep mapping, validation, and sign-offs on track under tight timelines.",
      "Proactively surfaced delivery risks, proposed mitigations, and reported progress via Confluence & sprint reviews.",
      "Built a Python automation to cut manual data checks ~30%, improving accuracy and predictability.",
    ],
  },
  {
    title: "Product Delivery & UX/UI Intern",
    company: "Svirtz (B2B SaaS) — Mumbai, India",
    dates: "Apr 2023 – Jan 2024",
    bullets: [
      "Led 0→1 efforts: translated customer insight into prototypes with product, design, and engineering.",
      "Scoped projects with timelines/risks; created delivery templates and documentation to reduce handoff friction.",
      "Supported data-driven decisions by instrumenting customer-journey metrics dashboards.",
    ],
  },
  {
    title: "Business Analyst Intern",
    company: "Just Dial — Mumbai, India",
    dates: "Dec 2022 – Jan 2023",
    bullets: [
      "Built an AWS Comprehend pipeline for intent classification; +15% process efficiency and −30% manual work.",
      "Documented value props and usage analytics to inform product decisions.",
    ],
  },
  {
    title: "Product / Program Intern",
    company: "Jio Platforms (Reliance Jio)",
    dates: "Jun 2022 – Aug 2022",
    bullets: [
      "Improved voice data accuracy by 30% through research on regional linguistic nuances and sophisticated audio editing using Audacity.",
      "Led data management and streamlined processes through cross-functional collaboration, enhancing data integrity and improving documentation and quality assurance.",
    ],
  },
];

// Thumbnails should live in: public/thumbnails/*.png
// PDFs live in: public/Projects & Casestudies/*.pdf
const projects = [
  {
    title: "Empower Ed — Inclusive E-learning",
    tags: ["EdTech", "Accessibility", "UX"],
    blurb:
      "Accessible e-learning platform for visually impaired students with screen-reader support, high-contrast UI, and Braille-friendly workflows.",
    link: pub("Projects & Casestudies/Empower Ed.pdf"),
    thumb: pub("thumbnails/Empower Ed.png"),
  },
  {
    title: "Endeavory AI — Journaling Chatbot (0→1)",
    tags: ["AI", "Privacy", "MVP"],
    blurb:
      "Defined problem, guardrails, and success metrics; modularized intent/tone, personalized prompts, and memory; delivered MVP in 12 weeks.",
    link: pub("Projects & Casestudies/Endeavory AI.pdf"),
    thumb: pub("thumbnails/Endeavory AI.png"),
  },
  {
    title: "Energy Tech — State of Connecticut (Grid-Scale)",
    tags: ["Energy", "GovTech", "Evaluation"],
    blurb:
      "Concept and evaluation of grid-scale energy technology with stakeholder analysis and feasibility study.",
    link: pub(
      "Projects & Casestudies/Grid scale Energy technology solution for state of connecticut.pdf"
    ),
    thumb: pub(
      "thumbnails/Grid scale Energy technology solution for state of connecticut.png"
    ),
  },
  {
    title: "PineTrack — Product Concept",
    tags: ["Product Discovery", "UX", "MVP"],
    blurb:
      "Problem framing and MVP definition with early signals and validation path.",
    link: pub("Projects & Casestudies/PineTrack.pdf"),
    thumb: pub("thumbnails/PineTrack.png"),
  },
  {
    title: "Prefit - Hackathon Project",
    tags: ["UX Research", "Experimentation"],
    blurb:
      "Improved conversion through structured research and experiment-driven backlog.",
    link: pub("Projects & Casestudies/Prefit.pdf"),
    thumb: pub("thumbnails/Prefit.png"),
  },
  {
    title: "TikTok Feed — Case Study",
    tags: ["Consumer", "Experimentation"],
    blurb:
      "Hypothesis-driven iteration on feed ranking and engagement levers.",
    link: pub("Projects & Casestudies/Tiktok Feed Case study.pdf"),
    thumb: pub("thumbnails/Tiktok Feed Case study.png"),
  },
  {
    title: "TikTok Parental Control — Case Study",
    tags: ["Safety", "Policy", "Consumer"],
    blurb:
      "Parental control feature set proposal with policy & abuse vectors considered.",
    link: pub("Projects & Casestudies/TikTok Parental Control Case Study.pdf"),
    thumb: pub("thumbnails/TikTok Parental Control Case Study.png"),
  },
  {
    title: "TikTok Social App — Case Study",
    tags: ["Growth", "Consumer"],
    blurb:
      "Onboarding and social graph experiments to increase early retention.",
    link: pub("Projects & Casestudies/TIKTOK Social app case study.pdf"),
    thumb: pub("thumbnails/TikTok Parental Control Case Study.png"),
  },
];

const skills = [
  "Product Strategy",
  "Roadmaps & Backlogs",
  "PRDs & Acceptance Criteria",
  "Program Governance",
  "UAT/Beta Programs",
  "A/B Testing",
  "UX Research",
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Confluence",
  "Jira",
  "APIs/SDKs",
  "DevX",
  "Data Standardization (SORs)",
];

/* ----------- Interests (interactive hover cards – recruiter friendly) ----------- */
const INTERESTS_SIMPLE = [
  {
  id: "baking",
  icon: "🧁",
  title: "Baking & Cooking",
  blurb: "Weekend experiments, from sourdough to new cuisines.",
  img: pub("interests/baking.png"),   // <-- jpg/png in /public/interests
},
  {
    id: "dogs",
    icon: "🐶",
    title: "Dogs",
    blurb: "Certified treat distributor and park enthusiast.",
    img: pub("interests/dogs.JPG"),
  },
  {
    id: "eating",
    icon: "🍜",
    title: "Eating",
    blurb: "Comfort food scout + underrated gems.",
    img: pub("interests/eating.JPG"),
  },
  {
    id: "swim",
    icon: "🏊‍♀️",
    title: "Swimming",
    blurb: "Lap therapy + a good playlist.",
    img: pub("interests/swimming.png"),
  },
  {
    id: "cafes",
    icon: "☕️",
    title: "Café Hopping",
    blurb: "Third-wave espresso and quiet corners.",
    img: pub("interests/cafes.JPG"),
  },
  {
  id: "travel",
  icon: "✈️",
  title: "Traveling",
  blurb: "Weekend road-trips & city walks; planning with spreadsheets and food maps.",
  img: pub("interests/travel.jpg"),   // put a JPG/PNG at: public/images/travel.jpg
},
];

function InteractiveInterests() {
  return (
    <section id="interests" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold">Beyond Work</h2>
      <p className="mt-2 text-neutral-300">A few things I love outside of product.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTERESTS_SIMPLE.map((it) => (
          <div
            key={it.id}
            tabIndex={0}
            className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-label={`${it.title}: ${it.blurb}`}
          >
            {/* Background image (reveals on hover/focus) */}
            {it.img && (
              <img
                src={it.img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 group-focus:opacity-60 transition-opacity duration-300"
                loading="lazy"
              />
            )}

            {/* Subtle gradient veil for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950/80 pointer-events-none" />

            {/* Content */}
            <div className="relative p-5">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-medium transition-transform duration-300 group-hover:-translate-y-0.5 group-focus:-translate-y-0.5">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-focus:-translate-y-0.5">
                {it.blurb}
              </p>

              {/* Bottom hint */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                <span className="opacity-80">Hover or tab to preview</span>
                <span className="rounded-md border border-neutral-700 px-2 py-0.5 group-hover:bg-neutral-800 group-focus:bg-neutral-800 transition">
                  ✨
                </span>
              </div>
            </div>

            {/* Lift + ring on hover/focus */}
            <div className="absolute inset-0 rounded-3xl ring-0 ring-indigo-500/10 group-hover:ring-2 group-focus:ring-2 transition-all duration-300" />
            <div className="absolute inset-0 scale-100 group-hover:scale-[1.01] group-focus:scale-[1.01] transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- PAGE --------------------------------- */

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur bg-neutral-950/70 z-50 border-b border-neutral-800">
        <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            Sia Viji Puthusseri
          </a>
          <div className="space-x-5 text-sm">
            <a href="#work" className="hover:opacity-80">Experience</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#interests" className="hover:opacity-80">Beyond Work</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-7xl px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* LEFT: intro */}
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Product Manager — AI-first experiences & data-driven delivery
            </h1>

            <p className="mt-5 text-neutral-300 max-w-2xl">
              Dartmouth MEM focused on platform services, technical roadmaps, and cross-functional
              execution. I translate customer insight into PRDs, acceptance criteria, and shipped value.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:sia.v.puthusseri.th@dartmouth.edu"
                className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/SiaPuthusseri"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Siaviji"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
              >
                GitHub
              </a>
              <a
                href={pub("resume.pdf")}
                download
                className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
              >
                Download Résumé
              </a>
            </div>
          </div>

          {/* RIGHT: avatar */}
          <div className="md:col-span-4 md:justify-self-end">
            <HeroAvatar />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <div className="mt-6 grid gap-6">
          {roles.map((r, idx) => (
            <div key={idx} className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg md:text-xl font-medium">{r.title}</h3>
                <span className="text-sm text-neutral-400">{r.dates}</span>
              </div>
              <p className="mt-1 text-neutral-300">{r.company}</p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-neutral-200">
                {r.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects and Case Studies</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 overflow-hidden hover:bg-neutral-900 transition">
              {p.thumb && (
                <a href={p.link} target="_blank" rel="noreferrer">
                  <img
                    src={p.thumb}
                    alt={`${p.title} thumbnail`}
                    className="w-full h-44 md:h-48 object-cover object-center border-b border-neutral-800"
                    loading="lazy"
                  />
                </a>
              )}
              <div className="p-6">
                <h3 className="font-medium text-lg">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span key={i} className="text-xs rounded-full border border-neutral-700 px-2 py-1 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-neutral-300">{p.blurb}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm underline underline-offset-4 hover:opacity-80"
                >
                  Case study
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s, idx) => (
            <span key={idx} className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Beyond Work (interactive) */}
      <InteractiveInterests />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-300">
          Open to Product Manager/APM, Program Manager, and Project Manager roles (0–2 YOE) — NYC/NJ or Remote.
        </p>
        <form className="mt-6 grid gap-3 max-w-xl" action="#" method="POST">
          <input name="name" placeholder="Your Name" className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
          <input name="email" placeholder="Your Email" type="email" className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
          <textarea name="message" placeholder="Message" rows={5} className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
          <button className="justify-self-start rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-xs text-neutral-500">
        © {new Date().getFullYear()} Sia Viji Puthusseri — Built with React & Tailwind
      </footer>
    </div>
  );
}
