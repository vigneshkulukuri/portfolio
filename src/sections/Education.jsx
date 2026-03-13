import { motion } from "framer-motion";

const educationItems = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    details: "CGPA: 7.13",
    period: "2023 – Present",
  },
  {
    institution: "Aditya Junior College",
    degree: "Intermediate",
    details: "Percentage: 85.5%",
    period: "Completed",
  },
  {
    institution: "Bhashyam Public School",
    degree: "Matriculation",
    details: "Percentage: 92%",
    period: "Completed",
  },
];

export default function Education({ id }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        className="glass-card p-5 sm:p-7 space-y-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
              Academic Journey
            </p>
            <h2 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 via-accent-purple to-accent-blue">
              Education
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">
            Foundations
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/60 via-slate-700/70 to-accent-purple/60" />
          <div className="space-y-4 sm:space-y-5">
            {educationItems.map((item, idx) => (
              <TimelineItem key={item.institution} item={item} index={idx} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  return (
    <motion.article
      className="relative pl-8 sm:pl-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <div className="absolute left-1.5 sm:left-2.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple shadow-neon" />
      <div className="rounded-xl border border-slate-700/70 bg-slate-950/70 px-3.5 py-3 sm:px-4 sm:py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className="text-xs sm:text-sm font-semibold text-slate-50">
            {item.institution}
          </h3>
          <p className="text-[0.65rem] text-slate-400">{item.period}</p>
        </div>
        <p className="text-[0.7rem] sm:text-xs text-slate-300">
          {item.degree}
        </p>
        <p className="text-[0.7rem] text-slate-400 mt-0.5">{item.details}</p>
      </div>
    </motion.article>
  );
}

