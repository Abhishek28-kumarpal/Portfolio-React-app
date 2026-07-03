import { useCursor } from "../hooks/usePortfolio";

export default function CursorGlow() {
  const ref = useCursor();
  return <div ref={ref} className="cursor-glow" />;
}
