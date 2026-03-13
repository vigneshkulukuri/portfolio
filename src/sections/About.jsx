import { motion } from "framer-motion";

export default function About({ id }) {
  return (
    <section id={id} className="scroll-mt-20">
      <motion.div
        className="glass-card p-5 sm:p-7 space-y-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <SectionHeader
          label="About Me"
          badge="Profile"
          gradient="from-accent-blue to-accent-purple"
        />
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          I am a Computer Science student with a strong passion for{" "}
          <span className="text-accent-blue">
            Data Engineering, Data Analytics, and Machine Learning
          </span>
          . I enjoy designing and building data pipelines, transforming raw
          information into meaningful insights, and visualizing complex datasets
          through interactive dashboards.
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          With hands-on experience in{" "}
          <span className="font-medium text-slate-50">
            Python, SQL, Power BI, and various data analysis tools
          </span>
          , I focus on creating scalable solutions that are both technically
          sound and business-friendly. I love exploring new technologies,
          experimenting with models, and continuously refining my understanding
          of data systems and architecture.
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Beyond technical skills, I value{" "}
          <span className="text-accent-purple">
            structured thinking, collaboration, and clear communication
          </span>
          . My goal is to grow into a data professional who bridges the gap
          between raw data and impactful decisions.
        </p>
      </motion.div>
    </section>
  );
}

function SectionHeader({ label, badge, gradient }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
          {badge}
        </p>
        <h2 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400">
          {label}
        </h2>
      </div>
      <div
        className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-[0.65rem] uppercase tracking-[0.2em] text-slate-950 shadow-neon`}
      >
        About
      </div>
    </div>
  );
}

