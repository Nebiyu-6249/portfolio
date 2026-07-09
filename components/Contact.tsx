import { site } from "@/data/site";
import { Reveal } from "./motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/Nebiyu-6249",
    href: site.links.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "in/nebiyu-elias95",
    href: site.links.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            variant="box"
            kicker="Get in touch"
            title={
              <>
                Let&apos;s work <span className="accent-underline">together</span>.
              </>
            }
            description="Available for AI and full-stack work with clients in the UAE and abroad."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-5 grid border border-line lg:grid-cols-[1.4fr_1fr]">
            {/* contact channels */}
            <div className="divide-y divide-line">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-raised sm:px-8"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-line text-ink transition-colors group-hover:border-teal group-hover:text-teal">
                      <c.Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint">
                        {c.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-ink sm:text-base">
                        {c.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" />
                </a>
              ))}
            </div>

            {/* availability panel */}
            <div className="flex flex-col justify-between gap-8 border-t border-line bg-box p-8 text-box-ink lg:border-l lg:border-t-0">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-box-muted">
                  [ Global reach ]
                </p>
                <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight">
                  Production work delivered across three countries.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["UAE", "United States", "Ethiopia"].map((r) => (
                    <li
                      key={r}
                      className="border border-box-muted/30 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-wide text-box-muted"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 bg-box-ink px-5 py-2.5 text-sm font-semibold text-box transition-opacity hover:opacity-90"
                >
                  <MailIcon className="h-4 w-4" />
                  Say hello
                </a>
                {site.resumePath ? (
                  <a
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-box-muted/40 px-5 py-2.5 text-sm font-semibold text-box-ink transition-colors hover:border-box-ink"
                  >
                    Download resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
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
