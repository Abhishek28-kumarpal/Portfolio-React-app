import { STATS } from "../data/portfolioData";
import { StatItem } from "./UI";

export default function Stats() {
  return (
    <div className="stats-strip">
      <div className="stats-inner">
        {STATS.map((s) => (
          <StatItem key={s.label} count={s.count} label={s.label} />
        ))}
      </div>
    </div>
  );
}
