import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { skillGroups } from "../../data/content";

const Skills = () => (
  <Section id="skills" index="04" title="Skills" lead="The tools I use day to day, across the whole stack.">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((g, i) => (
        <Reveal key={g.title} delay={(i % 4) * 0.05}>
          <div className="h-full rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{g.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {g.items.map((s) => (
                <li key={s} className="text-zinc-800 dark:text-zinc-200">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
