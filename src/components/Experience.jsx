import { EXPERIENCE } from "../data/portfolioData";
import { SectionHeader, RevealCard } from "./UI";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader tag="// 03 — Work History" title="Experience" />

      <div className="content-wrap timeline">
        {/* Vertical line */}
        <div className="timeline-line" />

        {EXPERIENCE.map(({ icon, role, company, date, bullets }) => (
          <RevealCard key={role} className="tl-item">
            <div className="tl-dot">{icon}</div>
            <div className="tl-body">
              <p className="tl-role">{role}</p>
              <p className="tl-company">{company}</p>
              <p className="tl-date">{date}</p>
              <ul className="tl-list">
                {bullets.map((b, i) => (
                  <li key={i} className="tl-bullet">
                    <span className="tl-arrow">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
