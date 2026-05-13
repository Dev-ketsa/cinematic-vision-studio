// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
// Default export is the Netlify TanStack Start plugin (build + dev emulation).
import netlifyAdapter from "@netlify/vite-plugin-tanstack-start";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // Netlify SSR: do not emit a Cloudflare Workers bundle on `vite build`.
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  // Netlify integration must run after the bundled `tanstackStart()` plugin (see Lovable source order).
  plugins: [netlifyAdapter()],
  vite: {
    environments: {
      client: { build: { outDir: ".output/public" } },
      ssr: { build: { outDir: ".output/server" } },
    },
  },
});
