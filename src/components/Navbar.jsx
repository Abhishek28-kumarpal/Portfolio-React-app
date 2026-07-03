import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ scrollY, menuOpen, setMenuOpen }) {
  const navPad = scrollY > 40 ? ".7rem 5%" : "1.1rem 5%";

  return (
    <nav id="navbar" style={{ padding: navPad }}>
      {/* Logo */}
      <div className="nav-logo">
        &lt;<span>Abhishek.REACTApp</span> /&gt;
      </div>

      {/* Desktop links */}
      <ul className="nav-links desktop-nav">
        {NAV_LINKS.map((s) => (
          <li key={s}>
            <a href={`#${s}`} className="nav-link">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:abhishekpaul28hg@gmail.com" className="nav-cta desktop-nav">
        Hire Me
      </a>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a href="mailto:abhishekpaul28hg@gmail.com" className="nav-cta" style={{ alignSelf: "flex-start" }}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
