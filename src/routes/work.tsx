import { createFileRoute } from "@tanstack/react-router";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Satyam Kumar" },
      { name: "description", content: "Selected films, ads, and reels edited by Satyam Kumar for BIT Mesra, Robolution, NSS, IEEE, and LEO Club." },
      { property: "og:title", content: "Work — Satyam Kumar" },
      { property: "og:description", content: "A film archive of cinematic edits and storytelling pieces." },
    ],
  }),
  component: Work,
});

const projects = [
  { img: w1, title: "Robolution — Beyond The Code", desc: "A high-energy promotional film capturing the pulse of campus robotics culture.", role: "Lead Editor / Color", year: "2024", category: "Club Film", img_w: 1280, img_h: 800 },
  { img: w2, title: "BIT Mesra · Campus Identity", desc: "An advertisement for the official BIT Mesra YouTube channel — quiet, monumental, institutional.", role: "Editor", year: "2024", category: "Advertisement" },
  { img: w3, title: "NSS — Voices of Service", desc: "Documentary-style cut weaving volunteer stories into a single emotional arc.", role: "Editor", year: "2025", category: "Documentary" },
  { img: w4, title: "IEEE — The Makers", desc: "Tactile close-ups and electronic score for a chapter recruitment film.", role: "Editor / Motion", year: "2025", category: "Recruitment" },
  { img: w5, title: "LEO Club — Candle Nights", desc: "Intimate event recap composed in warm low-light tones.", role: "Editor", year: "2024", category: "Event Film" },
  { img: w6, title: "Spotlight — Short Film", desc: "An experimental piece exploring presence, absence, and a single light source.", role: "Editor / Director", year: "2025", category: "Short Film" },
];

function Work() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">The Archive — 2024 / 2025</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
          Selected <span className="italic text-primary">frames</span>, <br/>arranged like film.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          A curated archive of advertisements, club films, and documentary cuts — each shaped to feel inevitable.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24 space-y-32">
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
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors" />
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
              <h2 className="font-display text-4xl md:text-5xl leading-tight">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              <p className="text-xs uppercase tracking-[0.2em] pt-3 border-t border-border inline-block">
                <span className="text-muted-foreground">Role —</span> <span className="ml-2">{p.role}</span>
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">End reel</p>
          <p className="font-display text-3xl md:text-4xl text-muted-foreground italic">— more in production —</p>
        </div>
      </section>
    </>
  );
}
