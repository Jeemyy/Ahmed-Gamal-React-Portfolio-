import { motion } from "framer-motion";
import GithubIcon from "./icons/GithubIcon";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectApi from "@/assets/project-api.jpg";
import projectSignspeak from "@/assets/project-signspeak.png";
import projectSurfside from "@/assets/project-surfside.png";
import projectBizconsult from "@/assets/project-bizconsult.png";

const projects = [
  {
    image: projectEcommerce,
    title: "Fruitkha",
    description: "Fruitkha is a simple and fast e-commerce platform for buying food, tech products, and daily essentials.",
    techs: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/Jeemyy/Fruitkha",
  },
  {
    image: projectDashboard,
    title: "Krencel",
    description: "Krencel is a food delivery platform that allows users to order meals from restaurants quickly and conveniently.",
    techs: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/Jeemyy/Krencel",
  },
  {
    image: projectApi,
    title: "TimeZone",
    description: "Timezone is an e-commerce platform where users can browse and purchase watches, including luxury, sport, and classic styles.",
    techs: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/Jeemyy/TownTeam",
  },
  {
    image: projectSignspeak,
    title: "SignSpeak",
    description: "SignSpeak is a platform that translates spoken language into sign language using a 3D model, helping communication for the deaf and mute.",
    techs: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "React js"],
    github: "https://github.com/Jeemyy/SignSpeak_Finish",
  },
  {
    image: projectSurfside,
    title: "TownTeam",
    description: "TownTeam is an e-commerce platform for buying clothes, featuring an admin dashboard for managing products and orders.",
    techs: ["PHP", "Laravel", "MySQL", "Database Diagram", "JavaScript"],
    github: "https://github.com/jeemyy/TownTeam",
  },
  {
    image: projectBizconsult,
    title: "BizConsult",
    description: "A comprehensive Laravel-based business consulting platform designed to help consulting firms and agencies manage their business operations efficiently. The platform features a bilingual interface (Arabic/English), a modern admin dashboard, and a responsive front-end website.",
    techs: ["PHP", "Laravel", "MySQL", "Database Diagram", "JavaScript"],
    github: "https://github.com/jeemyy/BizConsult",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionHeading title="Projects" subtitle="A selection of my recent work" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="group rounded-xl overflow-hidden glass shadow-card hover:shadow-glow transition-shadow duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              width={800}
              height={512}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.techs.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-secondary text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
