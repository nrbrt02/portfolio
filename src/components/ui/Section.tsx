import { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

const Section = ({ id, index, title, lead, children }: Props) => (
  <section id={id} className="border-t border-zinc-200 py-20 dark:border-zinc-800/80 md:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal>
        <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
          {index} <span className="text-zinc-400 dark:text-zinc-600">/</span> {id}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          {title}
        </h2>
        {lead && <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">{lead}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

export default Section;
