import { Award, GraduationCap } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { certifications, education } from "../../data/content";

const card = "flex h-full gap-4 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800";

const Credentials = () => (
  <Section id="credentials" index="05" title="Education & certifications">
    <div className="grid gap-4 md:grid-cols-3">
      <Reveal>
        <div className={card}>
          <GraduationCap size={22} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">{education.degree}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {education.school}, {education.location}
            </p>
            <p className="mt-2 font-mono text-xs text-zinc-500">{education.period}</p>
          </div>
        </div>
      </Reveal>
      {certifications.map((c, i) => (
        <Reveal key={c.code} delay={(i + 1) * 0.06}>
          <div className={card}>
            <Award size={22} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{c.name}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Microsoft · {c.code}</p>
              <p className="mt-2 font-mono text-xs text-zinc-500">{c.year}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Credentials;
