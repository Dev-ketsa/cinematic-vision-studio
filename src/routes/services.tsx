import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Satyam Kumar" },
      { name: "description", content: "Cinematic ad creation and short-form social reel editing by Satyam Kumar — premium, story-first craft." },
      { property: "og:title", content: "Services — Satyam Kumar" },
      { property: "og:description", content: "Cinematic ads and high-engagement short-form edits." },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    title: "Cinematic Ad Creation",
    sub: "Brand-focused storytelling",
    body: "Long-form and 60-second cuts engineered to hold attention. I work with founders, institutions, and creators to transform footage into a film that carries a brand's emotional weight — pacing, color, sound, and silence calibrated together.",
    bullets: ["Concept & narrative shaping", "Cinematic color grade", "Sound design & licensed score", "Final delivery in any spec"],
  },
  {
    n: "02",
    title: "Social Media Reels",
    sub: "Short-form, high-engagement",
    body: "Fast, hook-driven edits that earn the scroll. Built for Instagram, YouTube Shorts, and LinkedIn — preserving cinematic taste while obeying the algorithm. Designed to feel like a trailer, not an ad.",
    bullets: ["Hook design (first 1.5s)", "Motion text & subtitles", "Trend-aware pacing", "Series-ready templates"],
  },
];

function Services() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">02 — Offerings</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
          Crafted as <span className="italic text-primary">experiences</span>, <br/>not deliverables.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-32 space-y-px border-y border-border">
        {services.map((s) => (
          <article key={s.n} className="group grid md:grid-cols-12 gap-8 py-16 md:py-24 border-t border-border first:border-t-0 hover:bg-card/40 transition-colors px-2">
            <div className="md:col-span-2">
              <p className="font-display text-6xl text-primary">{s.n}</p>
            </div>
            <div className="md:col-span-5 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.sub}</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">{s.title}</h2>
            </div>
            <div className="md:col-span-5 space-y-6">
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 border-b border-border pb-2">
                    <span className="text-primary mt-1">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-32">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">03 — Process</p>
        <h2 className="font-display text-5xl md:text-6xl mb-16 text-balance">A film in four acts.</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            ["Listen", "Understand the story before touching the timeline."],
            ["Shape", "Rough cut, finding the emotional spine."],
            ["Refine", "Color, sound, motion — calibrated frame by frame."],
            ["Deliver", "Master files, formats, and assets, ready to ship."],
          ].map(([t, d], i) => (
            <div key={t} className="space-y-3 border-t border-border pt-6">
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-balance">Let's cut something <span className="italic text-primary">memorable</span>.</h2>
          <Link to="/contact" className="inline-flex mt-12 items-center gap-3 text-xs uppercase tracking-[0.25em] bg-primary text-primary-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-colors">
            Start a project →
          </Link>
        </div>
      </section>
    </>
  );
}
