import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="navbar-logo" aria-label="NextGen EdTech home">
        <span className="navbar-logo-mark" aria-hidden="true">N</span>
        <span>NextGen EdTech</span>
      </Link>

      <button
        className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="navbar-menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <ul id="navbar-menu" className={`navbar-menu ${menuOpen ? "is-open" : ""}`}>
        <li><Link to="/courses" className="navbar-link">Courses</Link></li>
        <li><Link to="/login" className="navbar-link">Login</Link></li>
        <li><Link to="/register" className="navbar-button">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;