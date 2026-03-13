import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDownload } from "react-icons/hi";
const profileImg = "/MY image.png";

export default function Home({ id, onNavClick }) {
  const [profileOk, setProfileOk] = useState(true);

  return (
    <section id={id} className="pt-8 sm:pt-12 md:pt-16">
      <div className="space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-[0.25em]">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight gradient-text">
                Venkata Ramachandra Surya Vignesh
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text">
                Data Engineer + Analytics Specialist
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
              Crafting scalable, data-driven solutions that transform raw data into actionable insights. Building robust pipelines, dashboards, and ML workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-5 sm:px-6 py-2.5 text-sm font-medium shadow-neon hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition-shadow"
                href="/Vignesh_CV.pdf"
                download="Venkata-Ramachandra-Surya-Vignesh-CV.pdf"
              >
                <HiOutlineDownload className="text-lg" />
                <span>Download CV</span>
              </a>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-accent-blue/70 px-5 sm:px-6 py-2.5 text-sm font-medium text-accent-blue hover:bg-accent-blue/10 transition-colors"
                onClick={() => onNavClick?.("contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <SocialIcon
                  href="https://www.linkedin.com"
                  ariaLabel="LinkedIn"
                  icon={<FaLinkedinIn />}
                />
                <SocialIcon
                  href="https://github.com"
                  ariaLabel="GitHub"
                  icon={<FaGithub />}
                />
                <SocialIcon
                  href="mailto:vigneshkulukuri@gmail.com"
                  ariaLabel="Email"
                  icon={<HiOutlineMail />}
                />
              </div>
              <div className="h-6 w-px bg-slate-700" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Data • Analytics • ML
              </p>
            </div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            className="relative h-96 sm:h-[450px] md:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-blue/40 to-accent-purple/40 blur-2xl opacity-70" />
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-accent-blue/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-80 h-80 rounded-full bg-accent-purple/20 blur-3xl" />
            
            <div className="relative w-full h-full border-2 border-slate-600/40 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-md shadow-[0_0_60px_rgba(56,189,248,0.2),0_0_120px_rgba(168,85,247,0.15)]">
              {profileOk ? (
                <img
                  src={profileImg}
                  alt="Venkata profile"
                  className="w-full h-full object-cover object-center"
                  onError={() => setProfileOk(false)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text">VR</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <StatCard label="Projects" value="10+" />
          <StatCard label="Skills" value="15+" />
          <StatCard label="Certifications" value="5+" />
          <StatCard label="Specialization" value="Data & ML" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, ariaLabel, icon }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-900/80 border border-slate-700/70 hover:border-accent-blue/70 hover:text-accent-blue transition-colors shadow-inner-glow"
    >
      {icon}
    </a>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="flex flex-col items-start gap-1 p-4 sm:p-5 rounded-xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm hover:border-accent-blue/50 transition-colors">
      <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-[0.15em]">{label}</p>
      <p className="text-lg sm:text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

