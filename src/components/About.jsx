import Reveal from "./Reveal";
import { ABOUT_STATS, RESUME_URL } from "../data/siteData";

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-5">
            <Reveal className="about-image">
              <div className="about-image-box">
                <img src="/image/my.png" className="img-fluid" alt="Ayush Pandey" />
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="col-lg-7">
            <Reveal>
              <span className="section-subtitle">ABOUT ME</span>

              <h2 className="section-title">
                Turning Ideas Into <span>Modern Web Applications</span>
              </h2>

              <p className="about-text">
                Hello! I'm Ayush Pandey, a Computer Science student and Python
                Full-Stack Developer. I enjoy building responsive, user-friendly
                and visually appealing web applications using modern
                technologies.
              </p>

              <p className="about-text">
                I work with HTML, CSS, JavaScript, Bootstrap, React.js, Python
                and Django, along with databases and APIs. I enjoy working on
                both frontend interfaces and backend functionality to create
                complete database-driven applications.
              </p>

              {/* Info Cards */}
              <div className="row g-3 mt-4">
                {ABOUT_STATS.map((stat) => (
                  <div className="col-md-4" key={stat.label}>
                    <div className="info-card">
                      <i className={stat.icon}></i>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={RESUME_URL} className="btn btn-custom mt-4" download>
                Download Resume
                <i className="fa-solid fa-download"></i>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
