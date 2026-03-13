import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 88 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "Matplotlib", level: 82 },
      { name: "Seaborn", level: 80 },
      { name: "SciPy", level: 75 },
      { name: "Scikit-Learn", level: 82 },
      { name: "HTML", level: 80 },
      { name: "CSS", level: 78 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "VS Code", level: 85 },
      { name: "Power BI", level: 86 },
      { name: "Tableau", level: 70 },
      { name: "Microsoft Excel", level: 88 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Consistency", level: 88 },
      { name: "Interpersonal Skills", level: 84 },
    ],
  },
];

export default function Skills({ id }) {
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
              Capabilities
            </p>
            <h2 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-slate-50 to-accent-purple">
              Skills Overview
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {skillGroups.map((group, idx) => (
            <SkillGroupCard key={group.title} group={group} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillGroupCard({ group, index }) {
  return (
    <motion.div
      className="glass-card p-4 sm:p-5 space-y-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-3">
        <h3 className="text-sm sm:text-base font-semibold text-slate-50">
          {group.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, idx) => (
          <AnimatedSkillBar
            key={skill.name}
            skill={skill}
            delay={0.1 * idx + index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

function AnimatedSkillBar({ skill, delay }) {
  return (
    <motion.div
      className="px-3 py-2 rounded-lg bg-slate-900/40 border border-slate-700/50 hover:border-accent-blue/50 transition-colors"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      <span className="text-sm text-slate-200">{skill.name}</span>
    </motion.div>
  );
}

