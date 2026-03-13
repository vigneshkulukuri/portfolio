import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import TopNav from "./components/TopNav.jsx";
import CursorSparkles from "./components/SparkleCursor.jsx";
import AnimatedParticles from "./components/AnimatedParticles.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Achievements from "./sections/Achievements.jsx";
import Certifications from "./sections/Certifications.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = useMemo(() => sections.map((s) => s.id), []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary relative">
      <AnimatedParticles />
      <TopNav
        sections={sections}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <CursorSparkles />

      <main className="relative z-10 px-4 sm:px-8 py-6 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-10 sm:space-y-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Home id="home" onNavClick={handleNavClick} />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Achievements id="achievements" />
            <Certifications id="certifications" />
            <Education id="education" />
            <Contact id="contact" />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;

