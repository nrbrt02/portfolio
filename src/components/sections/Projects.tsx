import { ArrowUpRight, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import { featuredProjects, otherProjects, profile, Project } from "../../data/content";

const Links = ({ links }: { links?: Project["links"] }) =>
  links ? (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
        >
          {l.label} <ArrowUpRight size={14} />
        </a>
      ))}
    </div>
  ) : null;

const Projects = () => (
  <Section id="projects" index="03" title="Projects" lead="The main platforms I build and run today, followed by earlier work.">
    <div className="grid gap-6 lg:grid-cols-2">
      {featuredProjects.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.08}>
          <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 transition hover:border-emerald-500/50 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">{p.context}</p>
            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">{p.name}</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">{p.description}</p>
            {p.highlights && (
              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <Links links={p.links} />
            </div>
          </article>
        </Reveal>
      ))}
    </div>

    <Reveal>
      <h3 className="mt-16 text-lg font-semibold text-zinc-900 dark:text-white">Other projects</h3>
    </Reveal>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {otherProjects.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.05}>
          <article className="flex h-full flex-col rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <p className="font-mono text-xs text-zinc-500">{p.context}</p>
            <h4 className="mt-1 font-semibold text-zinc-900 dark:text-white">{p.name}</h4>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <div className="mt-auto pt-4">
              <Links links={p.links} />
            </div>
          </article>
        </Reveal>
      ))}
    </div>

    <Reveal>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
      >
        <FaGithub size={16} /> More on GitHub <ArrowUpRight size={14} />
      </a>
    </Reveal>
  </Section>
);

export default Projects;
