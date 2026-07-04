import { useState } from "react";
import { SectionHeader } from "./UI";

const CONTACT_ITEMS = [
  { href: "mailto:abhishekpaul28hg@gmail.com",          icon: "✉️", label: "Email",    value: "abhishekpaul28hg@gmail.com" },
  { href: "tel:+916388462392",                           icon: "📞", label: "Phone",    value: "+91 6388 462 392" },
  { href: "https://github.com/abhishek28-kumarpal",      icon: "💻", label: "GitHub",   value: "github.com/abhishek28-kumarpal" },
  { href: null,                                          icon: "📍", label: "Location", value: "Greater Noida, Uttar Pradesh" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSend() {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="section">
      <SectionHeader tag="// 07 — Let's Connect" title="Get In Touch" />

      <div className="content-wrap contact-grid">

        {/* ── Left: info ── */}
        <div>
          <p className="contact-intro">
            I'm currently open to new opportunities and collaborations.
            Whether you have a project in mind or just want to say hi —
            my inbox is always open.
          </p>

          <div className="contact-items">
            {CONTACT_ITEMS.map(({ href, icon, label, value }) => {
              const inner = (
                <>
                  <span className="contact-icon">{icon}</span>
                  <div>
                    <p className="contact-label">{label}</p>
                    <p className="contact-value">{value}</p>
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contact-item"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="contact-item" style={{ cursor: "default" }}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="contact-form-wrap">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Abhishek"
              value={form.name}
              onChange={update("name")}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="abhishek@example.com"
              value={form.email}
              onChange={update("email")}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Tell me about your project or opportunity…"
              value={form.message}
              onChange={update("message")}
              className="form-input form-textarea"
            />
          </div>
          <button
            onClick={handleSend}
            className="form-btn"
            style={{ background: sent ? "var(--accent2)" : "var(--accent)" }}
          >
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </button>
        </div>

      </div>
    </section>
  );
}
