import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "@styles/header.css";
import logo from "../../assets/ic.png";

const NavItem = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <NavLink
    to={to}
    className={({ isActive }) => "nav-link" + (isActive ? " nav-link--active" : "")}
    onClick={onClick}
  >
    {children}
  </NavLink>
);

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function onMove(e: React.MouseEvent) {
    const el = headerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  return (
    <header
      ref={headerRef}
      className={`mcg-header mcg-header--liquid ${menuOpen ? "menu-open" : ""}`}
      onMouseMove={onMove}
      role="banner"
    >
      <span aria-hidden className="mcg-liquid-blob" />

      <div className="mcg-container mcg-header__inner">
        {/* === LOGO === */}
        <div className="mcg-brand">
          <img
            className="mcg-brand__logo"
            src={logo}
            alt="Metropole Capital Group"
            width={160}
            height={40}
          />
        </div>

        {/* === NAVIGATION === */}
        <nav className={`mcg-nav ${menuOpen ? "mcg-nav--open" : ""}`} aria-label="Primary">
          <NavItem to="/" onClick={() => setMenuOpen(false)}>HOME</NavItem>
          <NavItem to="/services" onClick={() => setMenuOpen(false)}>SERVICES</NavItem>
          <NavItem to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</NavItem>
          <NavItem to="/methology" onClick={() => setMenuOpen(false)}>METHOLOGY</NavItem>
          <NavItem to="/events" onClick={() => setMenuOpen(false)}>EVENTS</NavItem>
          <NavItem to="/insights" onClick={() => setMenuOpen(false)}>INSIGHTS</NavItem>
          <NavItem to="/venture" onClick={() => setMenuOpen(false)}>VENTURE KINGS</NavItem>
          <NavItem to="/team" onClick={() => setMenuOpen(false)}>TEAM</NavItem>
          <NavItem to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavItem>
        </nav>

        {/* === SOCIAL ICONS === */}
        <div className="mcg-socials" aria-label="Social links">
          <a className="mcg-socials__btn" href="https://www.linkedin.com/in/victoriametropolecapital/" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07C13.62 8.9 15.48 8 17.7 8 22.4 8 24 10.9 24 15.4V24h-5v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6H8z"/>
            </svg>
          </a>
          <a className="mcg-socials__btn" href="https://x.com/fundingsummit/" target="_blank" aria-label="Twitter/X">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M20.9 2H16l-4 6.6L7.1 2H3l6.7 10.1L3.3 22H8l4.3-7 4.6 7h4.1l-7.2-10.8L20.9 2z"/>
            </svg>
          </a>
          <a className="mcg-socials__btn" href="https://www.facebook.com/WorldFundingSummit/" target="_blank" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.9.17 1.9.17v2.1h-1.1c-1.1 0-1.4.7-1.4 1.3V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
        </div>

        {/* === BURGER === */}
        <button
          className={`mcg-burger ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
