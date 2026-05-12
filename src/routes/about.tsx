import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Satyam Kumar" },
      { name: "description", content: "Cinematic video editor and B.Tech student at BIT Mesra. Storytelling rooted in documentary and luxury commercial craft." },
      { property: "og:title", content: "About — Satyam Kumar" },
      { property: "og:description", content: "Storytelling rooted in documentary and luxury commercial craft." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-40 pb-24 mx-auto max-w-7xl px-6 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Chapter 01 — Identity</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
          A quiet obsession with the <span className="italic text-primary">unsaid</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 pb-32">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={aboutImg} alt="Satyam Kumar portrait" loading="lazy" width={1280} height={1600} className="absolute inset-0 w-full h-full object-cover ken-burns" />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Satyam Kumar · b. India · BIT Mesra
          </p>
        </div>
        <div className="md:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm Satyam — a cinematic video editor and visual storyteller drawn to the discipline of restraint. My work lives at the intersection of documentary honesty and luxury commercial polish: long lenses, slow tempo, and frames that earn their place.
          </p>
          <p>
            As a B.Tech student at <span className="text-foreground">Birla Institute of Technology, Mesra</span>, I've spent the last five months editing inside real production environments — for <span className="text-foreground">Robolution, NSS Executive Body, IEEE, LEO Club</span>, and the <span className="text-foreground">BIT Mesra official YouTube channel</span>. Each cut is a study in what to leave out.
          </p>
          <p>
            My references shift between Apple commercials, Werner Herzog, A24 trailers, and the silent space inside a Wong Kar-wai frame. The goal is always the same: an image that lingers.
          </p>

          <div className="divider-line my-12" />

          <blockquote className="font-display text-3xl md:text-4xl text-foreground leading-tight not-italic">
            "Every frame should feel intentional, immersive, and visually timeless."
          </blockquote>
        </div>
      </section>

      {/* Meta grid */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid md:grid-cols-4 gap-10">
          {[
            ["05+", "Months in production"],
            ["04", "Campus organizations"],
            ["20+", "Films delivered"],
            ["∞", "Frames cut"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-6xl text-primary">{n}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools / craft */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">02 — Craft</p>
          <h2 className="font-display text-4xl mt-4">The tools I cut with.</h2>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 text-foreground">
          {[
            "Premiere Pro", "DaVinci Resolve", "After Effects",
            "Photoshop", "Color Theory", "Sound Design",
            "Motion Graphics", "Documentary", "Commercial",
          ].map((t) => (
            <p key={t} className="border-b border-border pb-3 text-sm uppercase tracking-[0.15em]">{t}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display text-4xl md:text-6xl text-balance max-w-2xl">
            Curious where the work lives?
          </h2>
          <Link to="/work" className="text-xs uppercase tracking-[0.25em] bg-primary text-primary-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-colors self-start">
            Enter the archive →
          </Link>
        </div>
      </section>
    </>
  );
}
