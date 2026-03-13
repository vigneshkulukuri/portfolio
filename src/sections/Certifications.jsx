import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
const powerBiImg = `${import.meta.env.BASE_URL}powerbi.png`;
const nptelImg = `${import.meta.env.BASE_URL}nptel.png`;
const responsiveImg = `${import.meta.env.BASE_URL}responsiveweb.png`;

const certifications = [
  {
    title: "Microsoft Power BI – Infosys Springboard",
    provider: "Infosys Springboard",
    image: powerBiImg,
  },
  {
    title: "Cloud Computing – NPTEL",
    provider: "NPTEL",
    image: nptelImg,
  },
  {
    title: "Responsive Web Design – FreeCodeCamp",
    provider: "FreeCodeCamp",
    image: responsiveImg,
  },
];

export default function Certifications({ id }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        className="glass-card p-5 sm:p-7 space-y-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">
              Credentials
            </p>
            <h2 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-slate-50 to-accent-blue">
              Certifications
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">
            Verified Learning
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className="relative rounded-2xl border border-slate-700/70 bg-slate-950/70 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent-blue via-accent-purple to-amber-400" />

              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-36 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent-blue/25 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-accent-purple/25 blur-3xl" />
                </div>
              </div>

              <div className="px-4 py-4 flex items-start gap-2.5">
                <span className="mt-0.5 rounded-full bg-accent-blue/15 text-accent-blue p-1.5 shadow-neon">
                  <HiBadgeCheck className="text-base" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-50 leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-[0.7rem] text-slate-400">{cert.provider}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

