import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">Satyam Kumar</p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Cinematic Video Editor & Visual Storyteller — crafting intentional, immersive frames.
          </p>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] space-y-3">
          <p className="text-muted-foreground">Navigate</p>
          <ul className="space-y-2">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/work", "Work"],
              ["/services", "Services"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] space-y-3">
          <p className="text-muted-foreground">Elsewhere</p>
          <ul className="space-y-2">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">YouTube</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Satyam Kumar. All frames reserved.</p>
          <p className="font-mono">BIT Mesra · India</p>
        </div>
      </div>
    </footer>
  );
}
