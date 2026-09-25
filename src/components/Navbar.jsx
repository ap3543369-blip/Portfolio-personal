import { useState } from "react";
import useActiveSection from "../hooks/useActiveSection";
import { NAV_ITEMS, SOCIALS } from "../data/siteData";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Ayush<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${active === item.id ? "active" : ""}`}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="social-icons">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}>
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
