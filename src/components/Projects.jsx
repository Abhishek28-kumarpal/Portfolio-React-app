import { PROJECTS } from "../data/portfolioData";
import { SectionHeader, RevealCard } from "./UI";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <SectionHeader tag="// 04 — Work Showcase" title="Featured Projects" />

      <div className="content-wrap projects-grid">
        {PROJECTS.map(({ num, name, desc, stack, link }) => (
          <RevealCard key={name} className="proj-card">
            <p className="proj-num">{num}</p>
            <h3 className="proj-name">{name}</h3>
            <p className="proj-desc">{desc}</p>
            <div className="proj-stack">
              {stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="proj-link">
              Live Demo →
            </a>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
