import { EDUCATION } from "../data/portfolioData";
import { SectionHeader, RevealCard } from "./UI";

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <SectionHeader tag="// 06 — Academic Journey" title="Education" />

      <div className="content-wrap edu-grid">
        {EDUCATION.map(({ degree, school, year }) => (
          <RevealCard key={degree} className="edu-card">
            <p className="edu-degree">{degree}</p>
            <p className="edu-school">{school}</p>
            <p className="edu-year">{year}</p>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
