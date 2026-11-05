import { ExternalLink } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import { experience } from "../../data/content";

const Experience = () => (
  <Section id="experience" index="02" title="Experience">
    <ol className="relative space-y-12 border-l border-zinc-200 pl-6 dark:border-zinc-800 md:pl-10">
      {experience.map((job, i) => (
        <li key={job.company} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-500 bg-white dark:bg-zinc-950 md:-left-[47px]" />
          <Reveal delay={i * 0.05}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {job.role} <span className="text-emerald-600 dark:text-emerald-400">· {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-zinc-500">{job.period}</p>
            </div>
            {job.location && <p className="text-sm text-zinc-500">{job.location}</p>}
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">{job.intro}</p>
            <ul className="mt-4 space-y-2">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            {job.links && (
              <div className="mt-4 flex flex-wrap gap-4">
                {job.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    {l.label} <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
