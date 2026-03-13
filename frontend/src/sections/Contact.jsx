import { useState } from "react";
import { motion } from "framer-motion";


export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate a delay for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully!' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id={id} className="scroll-mt-24 pb-8 sm:pb-10">
      <motion.div
        className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-6 sm:gap-7"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass-card p-5 sm:p-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-text-muted mb-1">
                Let&apos;s Talk
              </p>
              <h2 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-text-primary to-accent-purple">
                Contact Me
              </h2>
            </div>
            <div className="px-3 py-1 rounded-full bg-card-bg border border-border-primary text-[0.65rem] uppercase tracking-[0.2em] text-text-secondary">
              Response within 24 hrs
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Name">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full rounded-xl bg-card-bg border border-border-primary px-3 py-2 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/60"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl bg-card-bg border border-border-primary px-3 py-2 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/60"
                />
              </Field>
            </div>
            <Field label="Subject (Optional)">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                className="w-full rounded-xl bg-card-bg border border-border-primary px-3 py-2 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/60"
              />
            </Field>
            <Field label="Message">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                required
                className="w-full rounded-xl bg-card-bg border border-border-primary px-3 py-2 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/60 resize-none"
              />
            </Field>

            {submitStatus && (
              <div className={`p-3 rounded-xl text-xs sm:text-sm ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                  : 'bg-red-500/10 border border-red-500/20 text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-5 py-2.5 text-xs sm:text-sm font-medium shadow-neon hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="glass-card p-5 sm:p-7 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted mb-1">
              Contact Details
            </p>
            <h3 className="text-sm sm:text-base font-semibold text-text-primary">
              Reach Out Directly
            </h3>
          </div>
          <div className="space-y-3 text-xs sm:text-sm">
            <InfoRow label="Email" value="vigneshkulukuri@gmail.com" />
            <InfoRow label="Phone" value="+91-8919372726" />
          </div>
          <div className="pt-1 space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-text-muted">
              Social Links
            </p>
            <div className="flex flex-wrap gap-2">
              <SocialPill
                label="LinkedIn"
                href="https://www.linkedin.com/in/vigneshkulukuri"
              />
              <SocialPill label="GitHub" href="https://github.com/vigneshkulukuri" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-1">
      <span className="text-[0.7rem] sm:text-xs text-slate-300">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[0.7rem] text-text-muted">{label}</span>
      <span className="text-xs sm:text-sm text-text-primary">{value}</span>
    </div>
  );
}

function SocialPill({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-border-primary bg-card-bg px-3 py-1 text-[0.7rem] text-text-secondary hover:border-accent-blue hover:text-accent-blue transition-colors"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
      <span>{label}</span>
    </a>
  );
}

