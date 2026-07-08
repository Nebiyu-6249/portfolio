import { site } from "@/data/site";
import { Reveal } from "./motion";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-line bg-raised py-20 sm:py-28"
    >
      <div className="container-edge">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="kicker">Contact</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Have a system you need built and measured?
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
                I take on AI and full-stack work for clients in the UAE and abroad. The
                fastest way to reach me is email. I usually reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
                >
                  <MailIcon className="h-4 w-4" />
                  {site.email}
                </a>
                {site.resumePath ? (
                  <a
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
                  >
                    Download resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid gap-3">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-card border border-line bg-surface p-5 transition-colors hover:border-teal/50"
              >
                <span className="flex items-center gap-3">
                  <GitHubIcon className="h-5 w-5 text-ink" />
                  <span>
                    <span className="block text-sm font-medium text-ink">GitHub</span>
                    <span className="block font-mono text-xs text-faint">
                      github.com/Nebiyu-6249
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-teal" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-card border border-line bg-surface p-5 transition-colors hover:border-teal/50"
              >
                <span className="flex items-center gap-3">
                  <LinkedInIcon className="h-5 w-5 text-ink" />
                  <span>
                    <span className="block text-sm font-medium text-ink">LinkedIn</span>
                    <span className="block font-mono text-xs text-faint">
                      in/nebiyu-elias95
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-teal" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-edge flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          {site.name} · {site.role}
        </p>
        <p className="font-mono text-xs text-faint">
          Built with Next.js and Tailwind. Deployed on Netlify.
        </p>
      </div>
    </footer>
  );
}
