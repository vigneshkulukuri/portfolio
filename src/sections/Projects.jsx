import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
const predictionImg = "/predctionmodel.jpeg";
const retailImg = "/salesdashboard.png";
const studentImg = "/studentacademic.png";

const projects = [
  {
    title: "Financial Risk & Bankruptcy Prediction Model",
    description:
      "Built a machine learning model using financial ratios to predict company bankruptcy with over 90% accuracy.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    role: "Machine Learning & Feature Engineering",
    githubUrl: "https://github.com/vigneshkulukuri",
    image: predictionImg,
  },
  {
    title: "Retail Sales Dashboard",
    description:
      "Developed an Excel E-commerce dashboard analyzing 50,000+ sales records with dynamic KPIs, slicers, and trend analysis.",
    technologies: ["Excel", "Data Analysis"],
    role: "Business Analytics & Reporting",
    githubUrl: "https://github.com/vigneshkulukuri",
    image: retailImg,
  },
  {
    title: "Student Academic & Digital Behavior Analysis",
    description:
      "Designed interactive Power BI dashboards to analyze student learning behavior, performance trends, and digital engagement.",
    technologies: ["Power BI", "Data Modeling", "Power Query"],
    role: "Data Visualization & Modeling",
    githubUrl: "https://github.com/vigneshkulukuri",
    image: studentImg,
  },
];

export default function Projects({ id }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        className="space-y-5 sm:space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
              Portfolio Highlights
            </p>
            <h2 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 via-accent-blue to-accent-purple">
              Featured Projects
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">
            Data • Analytics • ML
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="relative group glass-card overflow-hidden cursor-pointer flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-accent-blue/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-14 w-40 h-40 rounded-full bg-accent-purple/30 blur-3xl" />
      </div>

      {project.image && (
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-32 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent-blue/25 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-accent-purple/25 blur-3xl" />
          </div>
        </div>
      )}

      <div className="relative flex flex-col h-full gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm sm:text-base font-semibold text-slate-50 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <span className="p-1.5 rounded-full border border-slate-700/70 bg-slate-900/80 text-[0.65rem] text-slate-300 group-hover:border-accent-blue/80 group-hover:text-accent-blue transition-colors">
            <FiArrowUpRight />
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>
        <p className="text-[0.7rem] text-slate-400">
          <span className="text-slate-300">Role:</span> {project.role}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-[0.65rem] text-slate-300 group-hover:border-accent-blue/60"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.githubUrl && (
          <div className="pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-accent-blue hover:text-accent-purple transition-colors"
            >
              <FiGithub className="text-sm" />
              <span>View on GitHub</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

