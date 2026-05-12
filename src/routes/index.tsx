import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram, Linkedin, Github, Youtube } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

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

const projects = [
  { img: w1, title: "Robolution — Beyond The Code", desc: "A high-energy promotional film capturing the pulse of campus robotics culture.", role: "Lead Editor / Color", year: "2024", category: "Club Film" },
  { img: w2, title: "BIT Mesra · Campus Identity", desc: "An advertisement for the official BIT Mesra YouTube channel — quiet, monumental, institutional.", role: "Editor", year: "2024", category: "Advertisement" },
  { img: w3, title: "NSS — Voices of Service", desc: "Documentary-style cut weaving volunteer stories into a single emotional arc.", role: "Editor", year: "2025", category: "Documentary" },
  { img: w4, title: "IEEE — The Makers", desc: "Tactile close-ups and electronic score for a chapter recruitment film.", role: "Editor / Motion", year: "2025", category: "Recruitment" },
  { img: w5, title: "LEO Club — Candle Nights", desc: "Intimate event recap composed in warm low-light tones.", role: "Editor", year: "2024", category: "Event Film" },
  { img: w6, title: "Spotlight — Short Film", desc: "An experimental piece exploring presence, absence, and a single light source.", role: "Editor / Director", year: "2025", category: "Short Film" },
];

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

const channels = [
  { Icon: Mail, label: "Email", value: "satyam@example.com", href: "mailto:satyam@example.com" },
  { Icon: MessageCircle, label: "WhatsApp", value: "+91 00000 00000", href: "https://wa.me/910000000000" },
  { Icon: Instagram, label: "Instagram", value: "@satyam.edits", href: "https://instagram.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "in/satyam-kumar", href: "https://linkedin.com" },
  { Icon: Github, label: "GitHub", value: "@satyamk", href: "https://github.com" },
  { Icon: Youtube, label: "YouTube", value: "Satyam Kumar", href: "https://youtube.com" },
];

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
}

function Index() {
  return (
    <>
      {/* HOME / HERO */}
      <section id="home" className="relative min-h-screen flex items-end overflow-hidden vignette">
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
              <a href="#work" onClick={(e) => scrollToId(e, "work")} className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] bg-primary text-primary-foreground px-6 py-4 hover:bg-foreground hover:text-background transition-colors">
                View Reel
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="text-xs uppercase tracking-[0.25em] border border-border px-6 py-4 hover:border-primary hover:text-primary transition-colors">
                Start a project
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 z-10 flex justify-between items-center px-6 md:px-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>EST. BIT Mesra · 2024</span>
          <span className="hidden md:inline">Scroll ↓</span>
          <span>Reel 01 / 06</span>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-8 overflow-hidden bg-card/40">
        <div className="flex marquee whitespace-nowrap">
          {[...orgs, ...orgs, ...orgs].map((o, i) => (
            <span key={i} className="mx-12 font-display text-2xl md:text-3xl text-muted-foreground">
              {o} <span className="text-primary mx-6">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20">
        <div className="pt-32 pb-16 mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Chapter 01 — Identity</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
            A quiet obsession with the <span className="italic text-primary">unsaid</span>.
          </h2>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 pb-24">
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
        </div>

        <div className="border-y border-border bg-card/30">
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
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">02 — Craft</p>
            <h3 className="font-display text-4xl mt-4">The tools I cut with.</h3>
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
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-20 border-t border-border">
        <div className="pt-32 pb-16 mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">The Archive — 2024 / 2025</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
            Selected <span className="italic text-primary">frames</span>, <br/>arranged like film.
          </h2>
          <p className="mt-8 max-w-xl text-muted-foreground">
            A curated archive of advertisements, club films, and documentary cuts — each shaped to feel inevitable.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 space-y-32">
          {projects.map((p, i) => (
            <article key={p.title} className="group grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-card">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:col-span-5 space-y-5">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  <span className="text-primary">0{i + 1}</span>
                  <span>·</span>
                  <span>{p.category}</span>
                  <span>·</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl leading-tight">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                <p className="text-xs uppercase tracking-[0.2em] pt-3 border-t border-border inline-block">
                  <span className="text-muted-foreground">Role —</span> <span className="ml-2">{p.role}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 border-t border-border">
        <div className="pt-32 pb-16 mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">02 — Offerings</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
            Crafted as <span className="italic text-primary">experiences</span>, <br/>not deliverables.
          </h2>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 space-y-px border-y border-border">
          {services.map((s) => (
            <article key={s.n} className="group grid md:grid-cols-12 gap-8 py-16 md:py-24 border-t border-border first:border-t-0 hover:bg-card/40 transition-colors px-2">
              <div className="md:col-span-2">
                <p className="font-display text-6xl text-primary">{s.n}</p>
              </div>
              <div className="md:col-span-5 space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.sub}</p>
                <h3 className="font-display text-4xl md:text-5xl leading-tight">{s.title}</h3>
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
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">03 — Process</p>
          <h3 className="font-display text-5xl md:text-6xl mb-16 text-balance">A film in four acts.</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Listen", "Understand the story before touching the timeline."],
              ["Shape", "Rough cut, finding the emotional spine."],
              ["Refine", "Color, sound, motion — calibrated frame by frame."],
              ["Deliver", "Master files, formats, and assets, ready to ship."],
            ].map(([t, d], i) => (
              <div key={t} className="space-y-3 border-t border-border pt-6">
                <p className="font-mono text-xs text-primary">0{i + 1}</p>
                <h4 className="font-display text-2xl">{t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 border-t border-border">
        <div className="pt-32 pb-16 mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Closing credits</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
            Let's start a <span className="italic text-primary">conversation</span>.
          </h2>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Currently open for cinematic ads, short-form collaborations, and brand films. Reach me through any channel below — I read everything.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {channels.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group bg-background hover:bg-card p-10 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 transition-all" />
                <div className="relative">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.25} />
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
                  <p className="mt-2 font-display text-2xl">{value}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    Open <span className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Based in</p>
            <p className="font-display text-4xl md:text-5xl">Mesra, Ranchi · India</p>
            <p className="mt-4 text-sm text-muted-foreground">Available worldwide — remote collaborations welcome.</p>
          </div>
        </div>
      </section>
    </>
  );
}
