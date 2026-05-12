import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 0;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", id === "home" ? " " : `#${id}`);
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, "home")} className="group flex items-center gap-2">
          <span className="font-display text-xl tracking-tight">Satyam Kumar</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border pl-2 ml-1">
            Editor
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => handleClick(e, l.id)}
                className={`transition-colors ${active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className="text-xs uppercase tracking-[0.2em] border border-border px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
