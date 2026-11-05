import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/content";

const iconLink =
  "rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400";

const Hero = () => (
  <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(113,113,122,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(113,113,122,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl"
    />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]"
    >
      <div>
      <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Software Engineer at AEGIS
      </p>

      <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-200 md:text-2xl">{profile.role}</p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.tagline} I build document-processing and AI platforms, business systems, and the servers they run on.
      </p>

      <p className="mt-5 flex items-center gap-1.5 text-sm text-zinc-500">
        <MapPin size={15} /> {profile.location}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-emerald-400"
        >
          <FileText size={16} /> View resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-400"
        >
          Get in touch
        </a>
        <span className="mx-1 hidden h-6 w-px bg-zinc-300 dark:bg-zinc-800 sm:block" />
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
          <FaGithub size={18} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
          <FaLinkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} className={iconLink} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
      </div>

      <div className="hidden rounded-2xl border border-zinc-200 bg-zinc-50/80 font-mono text-sm shadow-xl dark:border-zinc-800 dark:bg-zinc-900/70 lg:block">
        <div className="flex gap-1.5 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
        <div className="space-y-1.5 p-5 leading-relaxed">
          <p><span className="text-emerald-600 dark:text-emerald-400">$</span> whoami</p>
          <p className="text-zinc-500">full-stack software engineer</p>
          <p className="pt-2"><span className="text-emerald-600 dark:text-emerald-400">$</span> cat stack.txt</p>
          <p className="text-zinc-500">python · django · node.js · typescript</p>
          <p className="text-zinc-500">react · tailwind · postgresql + pgvector</p>
          <p className="text-zinc-500">llms · rag · docker · nginx · aws</p>
          <p className="pt-2"><span className="text-emerald-600 dark:text-emerald-400">$</span> uptime</p>
          <p className="text-zinc-500">shipping from first commit to prod</p>
          <p className="pt-2"><span className="text-emerald-600 dark:text-emerald-400">$</span> <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-500" /></p>
        </div>
      </div>
    </motion.div>

    <a
      href="#about"
      aria-label="Scroll to About"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 transition hover:text-emerald-500"
    >
      <ArrowDown size={20} className="animate-bounce" />
    </a>
  </section>
);

export default Hero;
