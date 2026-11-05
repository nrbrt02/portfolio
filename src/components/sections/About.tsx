import { Cpu, Rocket, Wrench } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { profile, strengths } from "../../data/content";

const icons = [Wrench, Cpu, Rocket];

const About = () => (
  <Section id="about" index="01" title="About me">
    <div className="grid gap-12 md:grid-cols-5">
      <Reveal className="space-y-4 text-lg leading-relaxed md:col-span-3">
        {profile.summary.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </Reveal>
      <div className="space-y-4 md:col-span-2">
        {strengths.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <Icon size={20} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.text}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </Section>
);

export default About;
