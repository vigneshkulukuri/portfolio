import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMail, HiOutlineMenu, HiX } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext.jsx";

export default function TopNav({ sections, activeSection, onNavClick }) {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = useMemo(() => sections ?? [], [sections]);

  const handleClick = (id) => {
    onNavClick?.(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className="border-b border-border-primary bg-nav-bg backdrop-blur-2xl shadow-inner-glow"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => handleClick("home")}
            className="flex items-center gap-3 group"
            aria-label="Go to home"
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple neon-border flex items-center justify-center text-base font-semibold tracking-tight">
              VR
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-text-muted">
                Portfolio
              </p>
              <p className="text-sm font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                Venkata R. S. Vignesh
              </p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((s) => (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors border ${
                  activeSection === s.id
                    ? "bg-bg-secondary border-accent-blue/60 text-text-primary shadow-neon"
                    : "bg-transparent border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-secondary hover:border-border-primary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
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
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-2xl flex items-center justify-center bg-card-bg border border-border-primary hover:border-accent-blue transition-colors shadow-inner-glow"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </button>
            </div>

            <button
              className="md:hidden w-10 h-10 rounded-2xl flex items-center justify-center bg-card-bg border border-border-primary hover:border-accent-blue/70 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-b border-border-primary bg-nav-bg backdrop-blur-2xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleClick(s.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors border ${
                      activeSection === s.id
                        ? "bg-bg-secondary border-accent-blue/60 text-text-primary shadow-neon"
                        : "bg-card-bg border-border-primary text-text-secondary hover:border-accent-blue/60"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3">
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
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-2xl flex items-center justify-center bg-card-bg border border-border-primary hover:border-accent-blue transition-colors shadow-inner-glow"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SocialIcon({ href, ariaLabel, icon }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-2xl flex items-center justify-center bg-card-bg border border-border-primary hover:border-accent-blue hover:text-accent-blue transition-colors shadow-inner-glow"
    >
      {icon}
    </a>
  );
}

