import React from "react";

const roles = [
  {
    title: "Product Manager Intern (Platform Delivery)",
    company: "EXL Services (Client: AIG)",
    dates: "Jun 2025 – Present",
    bullets: [
      "PI-aligned delivery across ~14 capabilities; standardized 83 SORs toward 35 PI4 deliveries.",
      "Shifted UAT left by one sprint via readiness checklist, access gating, and pre-booked power users.",
      "Launched exec status hub (Confluence + Power BI) to accelerate go/no-go decisions.",
    ],
  },
  {
    title: "Product Delivery & UX/UI Intern",
    company: "Svirtz (B2B SaaS)",
    dates: "Apr 2023 – Jan 2024",
    bullets: [
      "+20% feature adoption and +22% engagement via onboarding experiments and backlog prioritization.",
      "Hardened acceptance criteria; reduced rework and improved release reliability.",
    ],
  },
  {
    title: "Business Analyst Intern",
    company: "Just Dial",
    dates: "Dec 2022 – Jan 2023",
    bullets: [
      "Shipped AWS Comprehend pipeline for intent classification; +15% process efficiency, −30% manual effort.",
    ],
  },
];

const projects = [
  {
    title: "Endeavory AI — Journaling Chatbot (0→1)",
    tags: ["AI", "Privacy", "MVP"],
    blurb:
      "Defined problem, guardrails, and success metrics; modularized intent/tone, personalized prompts, and memory; delivered MVP in 12 weeks.",
    link: "#",
  },
  {
    title: "Federated Learning — Security (Patent 202321056911)",
    tags: ["Federated Learning", "Security", "Flower"],
    blurb:
      "Horizontal FL reduced successful attacks ~30% vs baselines; authored evaluation protocol and documentation.",
    link: "#",
  },
  {
    title: "Phishing Detection using FL",
    tags: ["TensorFlow", "TFF", "Evaluation"],
    blurb:
      "95% accuracy with reproducible pipeline; defined metrics and validation checks.",
    link: "#",
  },
];

const skills = [
  "Product Strategy", "Roadmaps & Backlogs", "PRDs & Acceptance Criteria", "Program Governance",
  "UAT/Beta Programs", "A/B Testing", "UX Research", "Python", "SQL", "Power BI", "Tableau",
  "Confluence", "Jira", "APIs/SDKs", "DevX", "Data Standardization (SORs)",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 backdrop-blur bg-neutral-950/70 z-50 border-b border-neutral-800">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Sia Viji Puthusseri</a>
          <div className="space-x-5 text-sm">
            <a href="#work" className="hover:opacity-80">Experience</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Product Manager — AI-first experiences & data-driven delivery
            </h1>
            <p className="mt-4 text-neutral-300">
              Dartmouth MEM focused on platform services, technical roadmaps, and cross-functional execution.
              I translate customer insight into PRDs, acceptance criteria, and shipped value.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:sia.v.puthusseri.th@dartmouth.edu" className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800">Email</a>
              <a href="https://linkedin.com/in/SiaPuthusseri" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800">LinkedIn</a>
              <a href="https://github.com/Siaviji" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800">GitHub</a>
              <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download
  className="rounded-2xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
>
  Download Résumé
</a>

            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/40 shadow-xl">
              <p className="text-sm text-neutral-400">Snapshot</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Voice of Customer → AI-first experiences</li>
                <li>• Roadmaps, PRDs/ACs, UAT & governance</li>
                <li>• Metrics: release hit-rate, UAT cycle time, MTTR</li>
                <li>• Python/SQL • Power BI/Tableau • Confluence/Jira</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/40">
              <h3 className="font-medium text-lg">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t, i) => (
                  <span key={i} className="text-xs rounded-full border border-neutral-700 px-2 py-1 text-neutral-300">{t}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-300">{p.blurb}</p>
              <a href={p.link} className="mt-4 inline-block text-sm underline underline-offset-4 hover:opacity-80">Case study</a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s, idx) => (
            <span key={idx} className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">{s}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-300">Open to Product Manager/APM, Program Manager, and Project Manager roles (0–2 YOE) — NYC/NJ or Remote.</p>
        <form className="mt-6 grid gap-3 max-w-xl" action="#" method="POST">
          <input name="name" placeholder="Your Name" className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
          <input name="email" placeholder="Your Email" type="email" className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
          <textarea name="message" placeholder="Message" rows={5} className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
          <button className="justify-self-start rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800">Send</button>
        </form>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-xs text-neutral-500">
        © {new Date().getFullYear()} Sia Viji Puthusseri — Built with React & Tailwind
      </footer>
    </div>
  );
}
