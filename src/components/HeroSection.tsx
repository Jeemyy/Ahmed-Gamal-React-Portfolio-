import { motion } from "framer-motion";
import { Download } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import profileImg from "@/assets/profile.jpg";

const techs = ["PHP", "Laravel", "MySQL"];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center pt-20 overflow-hidden"
  >
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-mono text-sm mb-3 tracking-wider">
          Hello, I'm
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
          Ahmed <span className="text-gradient">Gamal</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-lg">
          Backend Developer specializing in building robust, scalable APIs and
          server-side architectures. Passionate about clean code, performance
          optimization, and delivering high-quality software solutions.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {techs.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Jeemyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-glow"
          >
            <GithubIcon size={18} />
            View GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/14hVwxJzbwcXIqSzno97KqY8NMXjeXa4C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl scale-110" />
          <img
            src={profileImg}
            alt="Ahmed Gamal — Backend Developer"
            width={400}
            height={400}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-border shadow-card"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
