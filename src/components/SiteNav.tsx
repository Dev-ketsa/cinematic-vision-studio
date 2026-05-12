import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-xl tracking-tight">Satyam Kumar</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border pl-2 ml-1">
            Editor
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="text-xs uppercase tracking-[0.2em] border border-border px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
