import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorSparkles = () => {
  const [sparkles, setSparkles] = useState([]);
  const lastSparkleTime = useRef(0);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      const now = Date.now();
      // Throttle sparkle creation to every 50ms for smooth effect
      if (now - lastSparkleTime.current < 50) return;
      lastSparkleTime.current = now;

      // Create multiple particles around cursor position - matching background theme
      const newSparkles = Array.from({ length: 2 }, (_, i) => ({
        id: now + Math.random() + i,
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY + (Math.random() - 0.5) * 40,
        size: Math.random() * 3 + 1.5,
        direction: Math.random() * Math.PI * 2,
        speed: Math.random() * 1.5 + 0.5,
      }));

      setSparkles((prev) => [...prev.slice(-30), ...newSparkles]); // Keep only last 30 sparkles
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-cleanup old sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => prev.filter(s => Date.now() - parseInt(s.id) < 1200));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full"
            style={{
              left: sparkle.x - sparkle.size / 2,
              top: sparkle.y - sparkle.size / 2,
              width: sparkle.size,
              height: sparkle.size,
              backgroundColor: "#38bdf8",
              boxShadow: `0 0 ${sparkle.size * 4}px rgba(56, 189, 248, 0.8)`,
            }}
            initial={{
              opacity: 0.8,
              scale: 0,
            }}
            animate={{
              opacity: 0,
              scale: [0, 1.2, 0],
              x: Math.cos(sparkle.direction) * 60 * sparkle.speed,
              y: Math.sin(sparkle.direction) * 60 * sparkle.speed,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              scale: { times: [0, 0.4, 1] }
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorSparkles;