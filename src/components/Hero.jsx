import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { PROFESSIONS, RESUME_URL, SOCIALS } from "../data/siteData";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Profession text har 2.2s me fade hoke change hota hai
  useEffect(() => {
    let swapTimer;

    const interval = setInterval(() => {
      setVisible(false);

      swapTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % PROFESSIONS.length);
        setVisible(true);
      }, 250);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(swapTimer);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Content */}
          <div className="col-lg-6">
            <Reveal className="hero-text">
              <span className="hero-greeting">HELLO, I'M</span>

              <h1>Ayush Pandey</h1>

              <h2>
                <span
                  id="profession"
                  className="highlight"
                  style={{ opacity: visible ? 1 : 0 }}>
                  {PROFESSIONS[index]}
                </span>
              </h2>

              <p>
                I build responsive and user-friendly web applications using
                HTML, CSS, JavaScript, Bootstrap, React.js, Python, Django and
                modern database technologies. I enjoy turning ideas into
                practical and scalable digital solutions.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-custom">
                  View Projects
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <a href={RESUME_URL} className="btn btn-outline-custom" download>
                  <i className="fa-solid fa-download"></i>
                  Download Resume
                </a>
              </div>

              <div className="hero-social">
                <span>Connect with me:</span>

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
            </Reveal>
          </div>

          {/* Hero Image */}
          <div className="col-lg-6">
            <Reveal className="hero-img">
              <div className="image-glow"></div>

              <img
                src="/image/my.png"
                className="img-fluid"
                alt="Ayush Pandey - Full Stack Developer"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
