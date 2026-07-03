import { SKILLS } from "../data/portfolioData";
import { SectionHeader, RevealCard } from "./UI";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <SectionHeader tag="// 02 — Technical Arsenal" title="Skills & Technologies" />

      <div className="content-wrap skills-grid">
        {SKILLS.map(({ cat, tags }) => (
          <RevealCard key={cat} className="skill-card">
            <p className="skill-cat">{cat}</p>
            <div className="skill-tags">
              {tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
