import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer",
    company: "Ezz Elarab",
    location: "UAE",
    period: "Feb 2025 – Nov 2025",
    type: "Full-time",
    points: [
      "Developed RESTful APIs using Laravel",
      "Built Admin Dashboard with role-based access",
      "Refactored legacy code for better maintainability",
    ],
  },
  {
    role: "Backend Developer",
    company: "Addicta",
    location: "",
    period: "Jun 2024 – Jul 2024",
    type: "Full-time",
    points: [
      "Built APIs for products, orders, and carts",
      "Implemented multi-vendor system architecture",
      "Performance optimization (caching, query tuning)",
      "JWT authentication & RBAC security",
    ],
  },
  {
    role: "Backend Developer",
    company: "Omal Misr",
    location: "",
    period: "Jul 2022 – Oct 2022",
    type: "Full-time",
    points: [
      "Database optimization & indexing",
      "Clean modular code architecture",
      "Debugged and fixed backend logic issues",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionHeading title="Experience" subtitle="My professional journey" />
    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative pl-16 md:pl-20"
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background" />

            <div className="rounded-xl p-6 glass shadow-card">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Briefcase size={16} className="text-primary" />
                <h3 className="font-semibold text-foreground">{exp.role}</h3>
              </div>
              <p className="text-sm text-primary font-medium mb-1">
                {exp.company}
                {exp.location && ` — ${exp.location}`}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                {exp.period} · {exp.type}
              </p>
              <ul className="space-y-1.5">
                {exp.points.map((p, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
