import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram, Linkedin, Github, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Satyam Kumar" },
      { name: "description", content: "Reach Satyam Kumar via email, WhatsApp, Instagram, LinkedIn, GitHub, or YouTube." },
      { property: "og:title", content: "Contact — Satyam Kumar" },
      { property: "og:description", content: "Open for cinematic ads and short-form collaborations." },
    ],
  }),
  component: Contact,
});

const channels = [
  { Icon: Mail, label: "Email", value: "satyam@example.com", href: "mailto:satyam@example.com" },
  { Icon: MessageCircle, label: "WhatsApp", value: "+91 00000 00000", href: "https://wa.me/910000000000" },
  { Icon: Instagram, label: "Instagram", value: "@satyam.edits", href: "https://instagram.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "in/satyam-kumar", href: "https://linkedin.com" },
  { Icon: Github, label: "GitHub", value: "@satyamk", href: "https://github.com" },
  { Icon: Youtube, label: "YouTube", value: "Satyam Kumar", href: "https://youtube.com" },
];

function Contact() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Closing credits</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-balance max-w-5xl">
          Let's start a <span className="italic text-primary">conversation</span>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          Currently open for cinematic ads, short-form collaborations, and brand films. Reach me through any channel below — I read everything.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-32">
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
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Based in</p>
          <p className="font-display text-4xl md:text-5xl">Mesra, Ranchi · India</p>
          <p className="mt-4 text-sm text-muted-foreground">Available worldwide — remote collaborations welcome.</p>
        </div>
      </section>
    </>
  );
}
