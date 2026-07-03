import { CERTIFICATIONS } from "../data/portfolioData";
import { SectionHeader, RevealCard } from "./UI";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeader tag="// 05 — Credentials" title="Certifications" />

      <div className="content-wrap certs-grid">
        {CERTIFICATIONS.map(({ icon, name, org }) => (
          <RevealCard key={name} className="cert-card">
            <span className="cert-icon">{icon}</span>
            <div>
              <p className="cert-name">{name}</p>
              <p className="cert-org">{org}</p>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
