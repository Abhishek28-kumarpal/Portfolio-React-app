import { useTyping } from "../hooks/usePortfolio";
import { PHRASES } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, EmailIcon, PhoneIcon, } from "./Icons";

const SOCIAL_LINKS = [
  { href: "https://github.com/abhishek28-kumarpal",                   icon: <GithubIcon />,   title: "GitHub" },
  { href: "https://www.linkedin.com/in/abhishek-kumar-pal-3b8b5a252/",icon: <LinkedinIcon />, title: "LinkedIn" },
  { href: "mailto:abhishekpaul28hg@gmail.com",                        icon: <EmailIcon />,    title: "Email" },
  { href: "tel:+916388462392",                                         icon: <PhoneIcon />,    title: "Phone" },
];

export default function Hero() {
  const typed = useTyping(PHRASES);

  return (
    <section id="about" className="hero-section">
      <div className="hero-grid">

        {/* ── Left: text content ── */}
        <div className="hero-content">
          <p className="hero-eyebrow">Front-End Developer</p>

          <h1 className="hero-name">
            Abhishek<br />
            <span style={{ color: "var(--accent)" }}>Kumar Pal</span>
          </h1>

          <p className="hero-title">Building responsive, performant web experiences</p>

          <div className="typing-wrapper">
            <span>{typed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-desc">
            Front-End Developer with 1 Year of internship experience crafting
            responsive web applications. Pursuing MCA at NIET Greater Noida.
            Passionate about clean UI, performant code, and growing into
            full-stack development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact"  className="btn-ghost">Get in Touch</a>
          </div>

          <div className="hero-social">
            {SOCIAL_LINKS.map(({ href, icon, title }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                title={title}
                className="social-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: photo card ── */}
        <div className="photo-card">
          <div className="photo-dots" />
          <div className="photo-frame">
            <div className="photo-frame">
  <img
    src="/image/1.png"
    alt="Abhishek Kumar Pal"
    className="profile-image"
  />
</div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
