import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satyam Kumar — Cinematic Video Editor & Visual Storyteller" },
      { name: "description", content: "Minimal visuals. Cinematic emotion. Portfolio of editor Satyam Kumar." },
      { property: "og:title", content: "Satyam Kumar — Cinematic Editor" },
      { property: "og:description", content: "Minimal visuals. Cinematic emotion." },
    ],
  }),
  component: Index,
});

const orgs = ["Robolution", "NSS Executive Body", "IEEE", "LEO Club", "BIT Mesra YouTube", "Campus Media"];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden vignette">
        <img
          src={heroImg}
          alt="Satyam Kumar editing in a cinematic suite"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pb-24 pt-32 w-full">
          <div className="flex items-center gap-3 mb-8 reveal">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">A Visual Storyteller</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-balance max-w-5xl reveal reveal-delay-1">
            Minimal visuals.<br />
            <span className="italic text-primary">Cinematic</span> emotion.
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal reveal-delay-2">
            <p className="max-w-md text-base text-muted-foreground leading-relaxed">
              Satyam Kumar — editor & visual storyteller crafting intentional, emotionally driven films for brands, campuses, and creators.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/work" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] bg-primary text-primary-foreground px-6 py-4 hover:bg-foreground hover:text-background transition-colors">
                View Reel
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/contact" className="text-xs uppercase tracking-[0.25em] border border-border px-6 py-4 hover:border-primary hover:text-primary transition-colors">
                Start a project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom credits bar */}
        <div className="absolute bottom-6 inset-x-0 z-10 flex justify-between items-center px-6 md:px-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>EST. BIT Mesra · 2024</span>
          <span className="hidden md:inline">Scroll ↓</span>
          <span>Reel 01 / 06</span>
        </div>
      </section>

      {/* MARQUEE — Collaborators */}
      <section className="border-y border-border py-8 overflow-hidden bg-card/40">
        <div className="flex marquee whitespace-nowrap">
          {[...orgs, ...orgs, ...orgs].map((o, i) => (
            <span key={i} className="mx-12 font-display text-2xl md:text-3xl text-muted-foreground">
              {o} <span className="text-primary mx-6">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sticky top-32">
              01 — Philosophy
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.15] text-balance">
              Every frame should feel <span className="italic text-primary">intentional</span>, immersive, and visually <span className="italic">timeless</span>.
            </p>
            <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
              I'm a B.Tech student at Birla Institute of Technology, Mesra, and a core video editor for Robolution, NSS, IEEE, LEO Club, and the BIT Mesra official YouTube channel — five months and counting in real production environments, learning to translate movement into meaning.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 mt-10 text-xs uppercase tracking-[0.25em] border-b border-border pb-2 hover:text-primary hover:border-primary transition-colors">
              Read the full story
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">02 — Selected Work</p>
            <h2 className="font-display text-5xl md:text-6xl">Recent frames.</h2>
          </div>
          <Link to="/work" className="hidden md:inline-flex text-xs uppercase tracking-[0.25em] hover:text-primary transition-colors">
            All projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-12 gap-6">
          <FeaturedCard className="md:col-span-7 aspect-[16/10]" img={work1} title="Robolution Promo" role="Lead Editor" year="2024" />
          <FeaturedCard className="md:col-span-5 aspect-[16/10]" img={work2} title="BIT Mesra · Campus Film" role="Editor" year="2024" />
          <FeaturedCard className="md:col-span-5 aspect-[16/10]" img={work3} title="NSS — Voices Of Service" role="Editor / Color" year="2025" />
          <FeaturedCard className="md:col-span-7 aspect-[16/10]" img={work1} title="IEEE Tech Showcase" role="Editor" year="2025" />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-32 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Now booking · 2025</p>
          <h2 className="font-display text-5xl md:text-7xl text-balance">
            Have a story worth <span className="italic text-primary">cutting</span>?
          </h2>
          <Link to="/contact" className="inline-flex mt-12 items-center gap-3 text-xs uppercase tracking-[0.25em] bg-primary text-primary-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-colors">
            Begin a collaboration →
          </Link>
        </div>
      </section>
    </>
  );
}

function FeaturedCard({ img, title, role, year, className = "" }: { img: string; title: string; role: string; year: string; className?: string }) {
  return (
    <article className={`group relative overflow-hidden bg-card hover-lift ${className}`}>
      <img
        src={img}
        alt={title}
        loading="lazy"
        width={1280}
        height={800}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
          <span>{role}</span><span>·</span><span>{year}</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
      </div>
    </article>
  );
}
