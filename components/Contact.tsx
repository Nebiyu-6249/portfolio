import { site } from "@/data/site";
import { Reveal } from "./motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: MailIcon, external: false, rot: "rot-a", rad: "rad-1" },
  { label: "GitHub", value: "github.com/Nebiyu-6249", href: site.links.github, Icon: GitHubIcon, external: true, rot: "rot-d", rad: "rad-2" },
  { label: "LinkedIn", value: "in/nebiyu-elias95", href: site.links.linkedin, Icon: LinkedInIcon, external: true, rot: "rot-c", rad: "rad-3" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 pb-32 sm:py-28 sm:pb-40">
      <div className="container-edge">
        <Reveal>
          <SectionHeader
            variant="box"
            kicker="Get in touch"
            title={
              <>
                Let&apos;s work <span className="mark-yellow">together</span>.
              </>
            }
            description="Available for AI and full-stack work with clients in the UAE and abroad."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <Reveal>
            <div className="space-y-5">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`sk-card sk-press ${c.rot} ${c.rad} flex items-center justify-between gap-4 p-5`}
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-yellow text-ink">
                      <c.Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-hand text-sm font-bold text-red">{c.label}</span>
                      <span className="mt-0.5 block text-base font-semibold text-ink">{c.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative flex h-full flex-col justify-between gap-8 sk-card rot-b rad-5 !bg-box p-7 text-box-ink">
              <div>
                <p className="font-hand text-base font-bold text-yellow">[ global reach ]</p>
                <p className="mt-4 font-display text-3xl leading-[1.05]">
                  Production work delivered across three countries.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["UAE", "United States", "Ethiopia"].map((r) => (
                    <li
                      key={r}
                      className="rounded-[14px_5px_14px_5px/5px_14px_5px_14px] border-2 border-box-muted/50 px-3 py-1 font-mono text-[0.7rem] text-box-muted"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="sk-btn sk-btn-primary rot-c">
                  <MailIcon className="h-4 w-4" />
                  Say hello
                </a>
                {site.resumePath ? (
                  <a href={site.resumePath} target="_blank" rel="noopener noreferrer" className="sk-btn sk-btn-ghost rot-a">
                    Download resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-ink py-8">
      <div className="container-edge flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="font-hand text-base font-bold text-ink">
          {site.name} · {site.role}
        </p>
        <p className="font-mono text-xs text-muted">Built with Next.js and Tailwind. Deployed on Netlify.</p>
      </div>
    </footer>
  );
}
