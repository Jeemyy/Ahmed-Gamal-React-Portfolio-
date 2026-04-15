import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Server, Layout, Wrench } from "lucide-react";

const categories = [
  {
    icon: Server,
    title: "Backend",
    skills: ["PHP", "Laravel", "C#", ".NET", "SQL", "MySQL", "RESTful API", "JWT"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js"],
  },
  {
    icon: Wrench,
    title: "Other Tools",
    skills: ["Git", "Linux", "Postman", "Docker"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionHeading title="Skills" subtitle="Technologies & tools I work with" />
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="rounded-xl p-6 glass shadow-card hover:shadow-glow transition-shadow duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-5">
            <cat.icon size={22} className="text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground border border-border"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
