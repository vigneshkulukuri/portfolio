/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-secondary": "var(--bg-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
        "accent-blue": "var(--accent-blue)",
        "accent-purple": "var(--accent-purple)",
        "card-bg": "var(--card-bg)",
        "nav-bg": "var(--nav-bg)",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 30px var(--neon-shadow)",
        "inner-glow": "inset 0 0 20px var(--shadow-color)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, var(--gradient-1), transparent 60%), radial-gradient(circle at bottom, var(--gradient-2), transparent 60%)",
      },
    },
  },
  plugins: [],
};
