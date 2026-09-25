import { LINKS, SOCIALS } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-logo">
            Ayush<span>.</span>
          </a>

          <p>Python Full-Stack Developer</p>

          <div className="footer-social">
            {/* Original order: GitHub, LinkedIn, LeetCode, Email */}
            {[SOCIALS[1], SOCIALS[0], SOCIALS[2]].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}>
                <i className={social.icon}></i>
              </a>
            ))}

            <a href={`mailto:${LINKS.email}`} aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <div className="footer-line"></div>

          <p className="copyright">
            © {new Date().getFullYear()} Ayush Pandey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
