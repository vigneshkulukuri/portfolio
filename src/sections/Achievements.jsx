import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const achievements = [
  {
    category: "Training & Skill Development",
    items: [
      {
        title: "Mastering Data Structures and Algorithms – LPU",
        period: "Jun 2025 – Jul 2025",
        githubUrl: "https://github.com/vigneshkulukuri",
        points: [
          "Completed a structured program focused on advanced Data Structures and Algorithms using C++.",
          "Strengthened problem-solving skills through systematic coding practice and real-world algorithmic challenges.",
          "Built strong foundations in arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching techniques.",
          "Developed a mini financial management project to track user debt collection and repayment status.",
          "Implemented efficient data organization and retrieval techniques to manage and analyze repayment records.",
        ],
      },
    ],
  },
  {
    category: "Hackathons & Competitions",
    items: [
      {
        title: "CODE OFF DUTY – AI-Powered Cancer Detection Web Platform",
        subtitle: "Hackathon • Top 3 Position",
        period: "Month Year – Month Year",
        githubUrl: "https://github.com/vigneshkulukuri",
        points: [
          "Developed an AI-enabled web application for early cancer risk screening and stage prediction.",
          "Built a machine learning model to analyze medical inputs and highlight potential cancer indicators.",
          "Designed a web platform that suggests likely stage, precautionary measures, and medication guidance.",
          "Integrated an AI-style consultation flow to provide users with preventive tips and health advice.",
        ],
      },
    ],
  },
  {
    category: "Workshops & Extra-Curricular",
    items: [
      {
        title: "Cyber Security vs Ethical Hacking Workshop",
        period: "Feb 2024 – Mar 2024",
        githubUrl: "https://github.com/vigneshkulukuri",
        points: [
          "Participated in a hands-on workshop conducted by Secuneus Technologies at Lovely Professional University.",
          "Explored core concepts of cyber security, ethical hacking, and modern security practices.",
          "Gained exposure to offensive and defensive security perspectives for safeguarding systems.",
        ],
      },
    ],
  },
];

export default function Achievements({ id }) {
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
              Milestones
            </p>
            <h2 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-slate-50 to-accent-purple">
              Achievements
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">
            Growth Journey
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {achievements.map((group, idx) => (
            <motion.div
              key={group.category}
              className="space-y-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-3.5 space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-50">
                          {item.title}
                        </p>
                        {item.subtitle && (
                          <p className="text-[0.65rem] text-accent-blue mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                      <p className="text-[0.65rem] text-slate-400 text-right">
                        {item.period}
                      </p>
                    </div>
                    <ul className="mt-1 space-y-1.5 text-[0.7rem] sm:text-xs text-slate-300">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex gap-1.5">
                          <span className="mt-[3px] h-1 w-1 rounded-full bg-accent-blue/80" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    {item.githubUrl && (
                      <div className="pt-2">
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-accent-blue hover:text-accent-purple transition-colors"
                        >
                          <FiGithub className="text-sm" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

