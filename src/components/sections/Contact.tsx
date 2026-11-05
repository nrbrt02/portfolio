import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/content";

const row =
  "flex items-center gap-3 rounded-xl border border-zinc-200 px-5 py-4 transition hover:border-emerald-500/60 dark:border-zinc-800";

const Contact = () => (
  <Section id="contact" index="06" title="Let's work together">
    <div className="grid gap-10 md:grid-cols-2">
      <Reveal>
        <p className="text-lg leading-relaxed">
          Have a product to build, a system to modernize, or a server that needs taming? I'm happy to talk about new
          roles, freelance work, or just an interesting idea.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
        >
          <Mail size={16} /> Say hello
        </a>
      </Reveal>
      <Reveal delay={0.08} className="space-y-3">
        <a href={`mailto:${profile.email}`} className={row}>
          <Mail size={18} className="text-emerald-600 dark:text-emerald-400" />
          <span className="break-all">{profile.email}</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={row}>
          <FaLinkedin size={18} className="text-emerald-600 dark:text-emerald-400" />
          linkedin.com/in/norbert-mwiseneza
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={row}>
          <FaGithub size={18} className="text-emerald-600 dark:text-emerald-400" />
          github.com/nrbrt02
        </a>
        <div className={`${row} hover:border-zinc-200 dark:hover:border-zinc-800`}>
          <MapPin size={18} className="text-emerald-600 dark:text-emerald-400" />
          {profile.location}
        </div>
      </Reveal>
    </div>
  </Section>
);

export default Contact;
